// 通信数据解析：教材思考练习。答案和提示随本地样稿加载。
{
  const groups = [
    {title: '单选题', questions: [
      {prompt: '计算机硬件系统主要由哪五大部分组成？', options: [
        '输入设备、输出设备、存储器、显示器、键盘',
        '运算器、控制器、存储器、输入设备、输出设备',
        'CPU、内存、硬盘、主板、显卡',
        '软件系统、应用软件、操作系统、硬件系统、数据库',
      ], answer: [1], hint: '从运算、控制、存储、输入和输出五项功能想一想。'},
      {prompt: '在计算机中，CPU主要由哪两部分组成？', options: [
        '内存和外存', '运算器和控制器', '输入设备和输出设备', '主机和外设',
      ], answer: [1], hint: '区分负责处理指令的部件和负责存储、输入输出的部件。'},
      {prompt: '冯·诺依曼计算机工作原理的核心思想是？', options: [
        '图形用户界面', '分布式计算', '存储程序控制', '面向对象编程',
      ], answer: [2], hint: '想一想指令存在哪里，计算机怎样取出指令。'},
      {prompt: '计算机能直接执行的指令是由什么组成的？', options: [
        '自然语言', '助记符', '二进制编码', '十六进制编码',
      ], answer: [2], hint: '区分处理器实际读取的位模式与方便人阅读的写法。'},
      {prompt: '计算机内存按什么单位进行编址？', options: [
        '位 (bit)', '字 (Word)', '字节 (Byte)', '千字节 (KB)',
      ], answer: [2], hint: '想一想相邻两个内存地址相差几个位。'},
    ]},
    {title: '多选题', multiple: true, questions: [
      {prompt: '计算机硬件系统的组成部分包括哪些？', options: [
        '运算器', '控制器', '存储器', '操作系统', '输入输出设备',
      ], answer: [0, 1, 2, 4], hint: '先区分硬件和软件，再检查是否漏掉输入或输出。'},
      {prompt: '以下关于信息存储单位的描述，正确的有？', options: [
        '比特 (bit) 是信息的最小单位。',
        '字节 (Byte) 是信息的最基本单位，通常 1 Byte=8 bits。',
        '字长 (Word length) 是指每个字所包含的十进制位数。',
        '1 KB=1000 Bytes。',
        '内存按字节编址。',
      ], answer: [0, 1, 4], hint: '按本节采用的存储容量换算口径，复核字长、字节和 KB 的定义。'},
      {prompt: '数值 0×12345678 (十六进制) 存储时，哪些说法是正确的？', options: [
        '0×12 是高位字节。', '0×78 是低位字节。',
        '在小端模式下，地址较低处存放的是 0×78。',
        '在大端模式下，地址较低处存放的是 0×78。',
        'char类型数据存储需要考虑大小端问题。',
      ], answer: [0, 1, 2], hint: '先分出高、低位字节，再画出两种端序各自的地址排列。'},
    ]},
    {title: '判断题', questions: [
      {prompt: '计算机的控制器负责执行算术运算和逻辑运算。', options: ['对', '错'],
        answer: [1], hint: '回想运算器和控制器各自的职责。'},
      {prompt: '应用软件是为完成某一特定任务而编写的程序集合，例如Office套件。', options: ['对', '错'],
        answer: [0], hint: '想一想 Office 套件是为用户完成具体工作，还是负责管理计算机资源。'},
    ]},
  ];

  renderExercises(document.querySelector('#exercise-questions'), groups, sampleTaskId);
}

function renderExercises(container, groups, taskId) {
  groups.forEach((group, groupIndex) => {
    const section = element('details', 'exercise-group');
    const summary = element('summary', '', group.title);
    summary.append(element('span', 'exercise-count', `${group.questions.length} 道`));
    section.append(summary);

    group.questions.forEach((question, questionIndex) => {
      const card = element('div', 'exercise-question');
      const fieldset = element('fieldset');
      fieldset.append(inlineText(element('legend'), `${questionIndex + 1}. ${question.prompt}`));
      question.options.forEach((option, optionIndex) => {
        const label = element('label', 'exercise-option');
        const input = element('input');
        input.type = group.multiple ? 'checkbox' : 'radio';
        input.name = `exercise-${taskId}-${groupIndex}-${questionIndex}`;
        input.value = optionIndex;
        const prefix = group.title === '判断题' ? '' : `${String.fromCharCode(65 + optionIndex)}. `;
        label.append(input, inlineText(element('span'), prefix + option));
        fieldset.append(label);
      });
      const feedback = element('p', 'exercise-feedback');
      feedback.setAttribute('role', 'status');
      card.append(fieldset, feedback);
      fieldset.addEventListener('change', () => {
        const selected = Array.from(fieldset.querySelectorAll('input:checked'), (input) => Number(input.value));
        if (!selected.length) {
          feedback.textContent = '';
          delete feedback.dataset.result;
          return;
        }
        const correct = selected.length === question.answer.length &&
          selected.every((option, index) => option === question.answer[index]);
        if (correct) {
          feedback.dataset.result = 'correct';
          feedback.textContent = '回答正确。';
        } else if (group.multiple) {
          delete feedback.dataset.result;
          feedback.textContent = `已选 ${selected.length} 项。${question.hint || '请继续核对选项。'}`;
        } else {
          feedback.dataset.result = 'retry';
          feedback.textContent = `再试一次。${question.hint || ''}`;
        }
      });
      section.append(card);
    });
    container.append(section);
  });
}
