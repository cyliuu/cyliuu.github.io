/* 八个 AIGC 案例共用的离线步骤与判断；不调用外部 AI 或执行 C++。 */
(()=>{'use strict';
const data=window.aiCaseData;if(!data)return;
const $=id=>document.getElementById(id);let index=0;
function render(){
  const step=data.steps[index];
  $('aiStepTitle').textContent=step.title;
  $('aiStepText').textContent=step.text;
  $('aiStepEvidence').textContent=step.evidence;
  $('aiStepCount').textContent='第 '+(index+1)+' / '+data.steps.length+' 步';
  $('aiPrev').disabled=index===0;$('aiNext').disabled=index===data.steps.length-1;
}
$('aiPrev').onclick=()=>{if(index>0){index--;render()}};
$('aiNext').onclick=()=>{if(index<data.steps.length-1){index++;render()}};
$('aiReset').onclick=()=>{index=0;$('aiFeedback').textContent='';$('aiFeedback').className='ai-result';render()};
document.querySelectorAll('[data-ai-choice]').forEach(button=>button.onclick=()=>{
  const correct=Number(button.dataset.aiChoice)===data.quiz.correct;
  $('aiFeedback').className='ai-result '+(correct?'good':'bad');
  $('aiFeedback').textContent=correct?data.quiz.right:data.quiz.wrong;
});
render();
})();
