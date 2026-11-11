/* 旧版整型表盘的交互与字段；只计算整数数学值，不执行输入代码。 */
(()=>{'use strict';
  const $=id=>document.getElementById(id);
  let exact=0n;
  let previousBits='';

  function calculate(input){
    const source=input.replace(/−/g,'-');
    if(!source.trim()||source.length>120)throw new Error('请输入不超过 120 个字符的整数表达式。');
    let pos=0;
    const skip=()=>{while(pos<source.length&&/\s/.test(source[pos]))pos++};
    function atom(){
      skip();let sign=1n;
      while(source[pos]==='+'||source[pos]==='-'){
        if(source[pos]==='-')sign=-sign;
        pos++;skip();
      }
      let value;
      if(source[pos]==='('){
        pos++;value=sum();skip();
        if(source[pos]!==')')throw new Error('括号没有配对。');
        pos++;
      }else{
        const start=pos;
        while(pos<source.length&&/[0-9]/.test(source[pos]))pos++;
        if(start===pos)throw new Error('表达式中需要整数。');
        if(pos-start>25)throw new Error('单个整数不得超过 25 位。');
        value=BigInt(source.slice(start,pos));
      }
      return sign*value;
    }
    function product(){
      let value=atom();
      while(true){
        skip();const operator=source[pos];
        if(operator!=='*'&&operator!=='/')break;
        pos++;const right=atom();
        if(operator==='*')value*=right;
        else{
          if(right===0n)throw new Error('除数不能为 0。');
          value/=right; // 与 C++ 整数除法一样，向零截断。
        }
      }
      return value;
    }
    function sum(){
      let value=product();
      while(true){
        skip();const operator=source[pos];
        if(operator!=='+'&&operator!=='-')break;
        pos++;const right=product();
        value=operator==='+'?value+right:value-right;
      }
      return value;
    }
    const value=sum();skip();
    if(pos!==source.length)throw new Error('表达式包含不支持的符号。');
    return value;
  }

  function draw(){
    const width=Number($('visualBits').value);
    const signed=$('visualKind').value==='signed';
    const n=BigInt(width),mod=1n<<n;
    const low=BigInt.asUintN(width,exact);
    const value=signed?BigInt.asIntN(width,exact):low;
    const min=signed?-(1n<<(n-1n)):0n;
    const max=signed?(1n<<(n-1n))-1n:mod-1n;
    const binary=low.toString(2).padStart(width,'0');
    const outside=exact<min||exact>max;
    const signFlipped=signed&&outside&&previousBits.length===binary.length&&previousBits[0]==='0'&&binary[0]==='1';

    $('visualRange').textContent='当前范围：['+min+'，'+max+'] · '+width+' 位'+(signed?'有符号':'无符号')+'读法';
    $('visualValue').textContent=value.toString();
    $('visualValue').className='overflow-value'+(value<0n?' negative':'');
    $('visualExact').textContent=exact.toString();
    $('visualWarning').textContent=outside?(signFlipped?'符号位从 0 变为 1。':'')+'数学累计值已越过所选范围；下方是低 '+width+' 位的读数，不可直接当作 C++ 有符号溢出的运行结果。':'';
    $('visualWarning').className='overflow-warning'+(signFlipped?' flash':'');
    $('visualMeter').style.width=Number(low*100n/(mod-1n))+'%';
    $('visualMeter').classList.toggle('warning',outside||(signed&&value<0n));

    $('visualCells').replaceChildren();
    for(let i=0;i<width;i+=8){
      const group=document.createElement('div');group.className='overflow-byte';
      for(let j=i;j<i+8;j++){
        const box=document.createElement('div');box.className='overflow-bit';
        const digit=document.createElement('span');
        digit.className='overflow-digit'+(j===0&&signed?' sign':'')+(j===0&&signed&&binary[j]==='1'?' negative':'')+(previousBits.length===binary.length&&previousBits[j]!==binary[j]?' changed':'');
        digit.textContent=binary[j];digit.title='第 '+(width-1-j)+' 位';
        const index=document.createElement('small');index.className='overflow-index';
        index.textContent=j===0&&signed?'符号':String(width-1-j);
        box.append(digit,index);group.append(box);
      }
      $('visualCells').append(group);
    }
    $('visualRead').textContent='低 '+width+' 位：'+binary+'\n按'+(signed?'补码':'无符号')+'读法解释：'+value+'。';
    $('visualCxxNote').textContent=signed?
      (width===32?'以常见 32 位 int 为前提：若表达式中发生有符号溢出，标准 C++ 行为未定义；上方读数只是固定位图的解释。':'此处展示 '+width+' 位补码读法；signed char / short 的表达式通常先整数提升，不能把位图读数当作 C++ 运算结果。'):
      (width===32?'以 32 位无符号类型为前提，转换到该类型时按模 2^32 取值；仍需核对原表达式参与运算的类型。':'若把数学值转换到 '+width+' 位无符号目标类型，会得到低位读数；不表示原表达式直接以 '+width+' 位运算。');
    const summary=$('cxxRuleSummary'),trace=$('cxxRuleTrace');
    if(summary&&trace){
      summary.textContent='当前表盘：'+width+' 位'+(signed?'有符号补码':'无符号')+'读法；数学值 '+exact+'；低位读数 '+value+'。';
      trace.textContent=signed?
        (width===32?(outside?'若该表达式按 32 位 int 运算并在运算中越界，标准 C++ 行为未定义。位图读数 '+value+' 仅用于观察表示方式。':'若操作数与每一步中间运算都在 32 位 int 范围内，最终数学结果为 '+exact+'。'):'signed char / short 参与表达式通常先提升为 int；这里的 '+width+' 位结果只用于补码表示观察，赋值转换需另行核对。'):
        ('若将数学值转换到 '+width+' 位无符号目标类型，结果为 '+low+'（按模 '+mod+' 归一）。原表达式是否先以 int 运算，应查看操作数类型。');
    }
    previousBits=binary;
  }

  function apply(){
    try{
      exact=calculate($('visualStart').value);
      previousBits='';draw();
    }catch(error){$('visualWarning').textContent='表达式错误：'+error.message}
  }
  $('visualApply').onclick=apply;
  $('visualStart').onkeydown=event=>{if(event.key==='Enter')apply()};
  document.querySelectorAll('[data-add]').forEach(button=>button.onclick=()=>{exact+=BigInt(button.dataset.add);draw()});
  $('visualBits').onchange=()=>{previousBits='';draw()};
  $('visualKind').onchange=draw;
  $('visualReset').onclick=()=>{
    $('visualBits').value='32';$('visualKind').value='signed';
    $('visualStart').value='56789 * 56789';apply();
  };
  apply();
})();
