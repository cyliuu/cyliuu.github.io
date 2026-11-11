(() => {
  const data=classroomData;
  const root=document.querySelector('#classroom-preview');
  function stage(item){
    const section=element('section','classroom-stage');section.id=item.id;
    const heading=element('div','classroom-stage-heading');
    const title=element('h3');
    title.append(element('span','classroom-stage-prefix',item.number?'实操阶段 '+item.number+' · ':'课堂记录 · '),element('span','classroom-stage-name',item.title));
    heading.append(title);
    const body=element('div','classroom-stage-body');
    body.innerHTML=(item.leads||[]).map(lead=>'<div class="classroom-stage-context">'+lead.html+'</div>').join('')+item.html;
    section.append(heading,body);
    for(const anchor of body.querySelectorAll('a[href]')){
      const material=(data.materials||[]).find(m=>m.url===anchor.getAttribute('href'));
      if(!material)continue;
      anchor.dataset.classroomMaterial=material.key;
      if(material.archive){
        anchor.href=material.archive;anchor.download=material.archive.split('/').at(-1);
      }
      else if(location.protocol==='file:'){anchor.target='_blank';anchor.rel='noopener';}
      else if(material.directory){anchor.href=material.key+'/';anchor.target='_blank';anchor.rel='noopener';}
      else{anchor.href=material.key;anchor.download=material.source.split('/').at(-1);}
    }
    let sectionRole;
    for(const block of body.querySelectorAll('h5,h6,pre')){
      if(block.matches('h5,h6')){
        sectionRole=/运行效果|输出格式示例|运行的文本效果/.test(block.textContent)?'output':'material';
        continue;
      }
      const pre=block;
      const code=pre.querySelector('code');const language=(code.className.match(/language-(\w+)/)||[])[1]||'text';
      const isOutput=sectionRole==='output'||(!sectionRole&&language==='text');
      const previous=pre.previousElementSibling;
      const caption=previous?.matches('h5,h6')?previous.textContent.replace(/^本阶段(?:骨架)?代码[：:]?\s*/,''):isOutput?'目标运行效果':language==='cmake'?'配置片段':'操作代码';
      if(previous?.matches('h5,h6'))previous.remove();
      const panel=element('figure','code-panel');const label=element('figcaption');label.append(element('span','',caption));panel.append(label);
      pre.before(panel);panel.append(pre);
      if(!isOutput){panel.dataset.codeLanguage=['cpp','bash','cmake'].includes(language)?language:'text';formatCodePanel(panel);}
      else panel.classList.add('classroom-output-panel');
    }
    let groupIndex=0;
    for(const panel of [...body.querySelectorAll('.code-panel[data-code-language]')]){
      if(panel.closest('.case-code-files'))continue;
      const files=[panel];let next=panel.nextElementSibling;
      while(next?.matches('.code-panel[data-code-language]')){files.push(next);next=next.nextElementSibling;}
      if(files.length>1){const group=element('div','case-code-files');panel.before(group);files.forEach(file=>group.append(file));addCodeTabs(item.id+'-source-'+groupIndex++,files);}
    }
    for(const image of [...body.querySelectorAll('img')]){
      const media=data.media.find(m=>m.url===image.getAttribute('src'));
      if(media&&location.protocol!=='file:')image.src=media.key;
      image.loading='lazy';image.dataset.classroomOriginal='true';
      const figure=element('figure','task-effect-media classroom-effect-media');
      const parent=image.parentElement;
      const source=media?.source||'';
      const materialClass=source.endsWith('/car_sprites.png')?'classroom-reference-image'
        :/_代码截图\./.test(source)?'classroom-code-image'
        :/_标注图\./.test(source)?'classroom-annotation-image':null;
      if(materialClass){
        figure.classList.add(materialClass);parent.before(figure);
      }else{
        const details=element('details','task-output classroom-output');details.append(element('summary','','查看效果示意'),figure);parent.before(details);
      }
      figure.append(image);if(!parent.textContent.trim())parent.remove();
    }
    return section;
  }
  function card(item,group,project){
    const article=element('article','case-article classroom-card');article.id=item.id;
    const intro=element('header','case-intro');const overview=element('div','case-overview');
    const title=element('div','case-title');title.append(element('p','eyebrow',item.label),element('h2','',item.title));
    const background=element('div','case-background');background.append(element('h3','case-subhead','实操情境'));
    for(const context of item.background){const text=element('div');text.innerHTML=context.html;background.append(text);}
    overview.append(title,background);
    const information=element('section','case-information');information.append(element('h3','case-subhead','实操安排'));
    information.append(element('p','frame-note',item.plan));
    const list=element('ul','classroom-knowledge');for(const lecture of item.lectures)list.append(inlineText(element('li'),lecture.title));information.append(list);
    const visual=element('figure','case-visual case-flow');const caption=element('figcaption');
    const [captionTitle,captionTopic]=item.cardCaption || ['课堂安排',group.kind];
    caption.append(element('span','',captionTitle),element('span',item.cardCaption?'classroom-card-context case-card-topic':'classroom-card-context','项目 '+project.number+' · '+captionTopic));
    const fields=element('dl','case-fields classroom-fields');for(const [label,value] of [['实操',item.stages.length+' 个阶段'],['任务形式',item.forms.join('、')]]){const field=element('div');field.append(element('dt','',label),element('dd','',value));fields.append(field);}visual.append(caption,fields);information.append(visual);
    intro.append(overview,information);const body=element('div','case-body classroom-stages');item.stages.forEach(s=>body.append(stage(s)));article.append(intro,body);return article;
  }
  const tabGroups=[];
  for(const projectData of data.projects){
   const project=element('section','catalogue-project');project.id=projectData.id;
   for(const group of projectData.groups){
    const section=element('section','catalogue-task');section.id=group.id;
    const heading=element('header','section-heading catalogue-task-heading');const copy=element('div');copy.append(element('p','eyebrow','项目 '+projectData.number+' · '+projectData.title+' · '+group.kind),element('h2','task-sample-title',group.title));heading.append(copy,element('span','badge','课堂页'));
    const toolbar=element('div','case-jump-row');const tabs=element('nav','items catalogue-case-tags');tabs.setAttribute('aria-label',group.title+'课堂案例');for(const item of group.cards)tabs.append(link(item.label,'#'+item.id,'item'));
    const stageJump=element('div','classroom-stage-jump');stageJump.append(element('span','','实操阶段'));
    const stageLinks=element('nav','classroom-stage-links');stageLinks.setAttribute('aria-label','当前案例实操阶段');stageJump.append(stageLinks);
    const actions=element('div','catalogue-task-actions');actions.append(responsiveAction('前往任务 ↗','任务 ↗','index.html#'+(group.id===sampleTaskId?'task':group.id)));const reference=responsiveAction('阅读案例 ↗','案例 ↗','reading.html#'+group.cards[0].caseId);actions.append(reference);toolbar.append(tabs,stageJump,actions);section.append(heading,toolbar);
    for(const item of group.cards){const wrapper=element('div','reader-case-group');wrapper.append(card(item,group,projectData));section.append(wrapper);}
    project.append(section);tabGroups.push({section,tabs,stageLinks,reference,cards:group.cards});
   }
   root.append(project);
  }
  for(const {tabs} of tabGroups){
    const minimum=Math.ceil(Math.max(...[...tabs.children].map(a=>a.getBoundingClientRect().width)))+4;
    tabs.style.setProperty('--case-label-min-width',minimum+'px');
  }
  const classroomProjects=data.projects.map(p=>({...p,tasks:p.groups.map(g=>({id:g.id,title:g.title,kind:g.kind}))}));
  courseNavigation.attachDirectory({directory:document.querySelector('#classroom-directory'),projectRail:document.querySelector('#classroom-projects'),taskRail:document.querySelector('#classroom-tasks'),projects:classroomProjects,taskId:t=>t.id,projectOpensFirstTask:true});
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){
    const text=walker.currentNode;if(text.parentElement.closest('pre,code'))continue;
    text.textContent=text.textContent.replace(/第[\d、，一二三四五六七八九十]+课时/g,'前一阶段').replace(/上一课时|上次课|上一课/g,'前一阶段').replace(/本次课/g,'本阶段').replace(/下次课|下一课/g,'后续阶段').replace(/本课/g,'本阶段');
  }
  courseNavigation.watch(targetId=>{
    const target=targetId&&document.getElementById(targetId);const boundary=courseNavigation.readingBoundary()+35;
    for(const group of tabGroups){
      let active=target&&group.cards.find(c=>document.getElementById(c.id).contains(target));
      if(!active){active=group.cards[0];for(const c of group.cards){if(document.getElementById(c.id).getBoundingClientRect().top<=boundary)active=c;else break;}}
      for(const a of group.tabs.children){
        if(a.hash==='#'+active.id){
          if(!a.hasAttribute('aria-current')){
            a.setAttribute('aria-current','location');
            const box=group.tabs.getBoundingClientRect(),item=a.getBoundingClientRect();
            if(item.left<box.left||item.right>box.right)group.tabs.scrollLeft+=item.left-box.left;
          }
        }else a.removeAttribute('aria-current');
      }
      group.reference.href='reading.html#'+active.caseId;
      if(group.stageCase!==active.id){
        group.stageLinks.replaceChildren(...active.stages.map(item=>{
          const anchor=link(String(item.number),'#'+item.id,'classroom-stage-chip');
          anchor.title='实操阶段 '+item.number+' · '+item.title;
          anchor.setAttribute('aria-label',anchor.title);return anchor;
        }));
        group.stageLinks.setAttribute('aria-label',active.label+'实操阶段');
        group.stageLinks.scrollLeft=0;
        group.stageCase=active.id;
      }
      let activeStage=target&&active.stages.find(item=>document.getElementById(item.id).contains(target));
      if(!activeStage){
        for(const item of active.stages){
          const heading=document.getElementById(item.id).querySelector('.classroom-stage-heading');
          if(heading.getBoundingClientRect().top<=boundary)activeStage=item;else break;
        }
      }
      activeStage ||= active.stages[0];
      for(const anchor of group.stageLinks.children){
        if(activeStage&&anchor.hash==='#'+activeStage.id){
          if(!anchor.hasAttribute('aria-current')){
            anchor.setAttribute('aria-current','location');
            const rail=group.stageLinks.getBoundingClientRect(),item=anchor.getBoundingClientRect();
            if(item.left<rail.left)group.stageLinks.scrollLeft+=item.left-rail.left;
            else if(item.right>rail.right)group.stageLinks.scrollLeft+=item.right-rail.right;
          }
        }
        else anchor.removeAttribute('aria-current');
      }
    }
  });
})();
