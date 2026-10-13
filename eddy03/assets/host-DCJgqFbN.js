import{O as x,t as v,g as S,a as C,B as L,s as $,b as F}from"./index-DhGJmYyg.js";const A="No questions yet: the question bank is empty.",M="#000",N=[["1920x1080","Full HD"],["1366x768","Laptop"],["1024x768","Chromebook"],["800x600","Small"],["640x640","Narrow panel"],["390x844","Phone, portrait"]];function u(s,t,e){const n=document.createElement(s);return t&&(n.className=t),e&&(n.textContent=e),n}function R(s){const t=u("label",s.type==="checkbox"?"host-check":void 0);if(s.type==="checkbox"){const e=u("input");e.type="checkbox",e.name=s.key,t.append(e,` ${s.label}`)}else if(s.type==="number"){const e=u("input");e.type="number",e.name=s.key,s.min!==void 0&&(e.min=String(s.min)),s.max!==void 0&&(e.max=String(s.max)),t.append(`${s.label} `,e)}else{const e=u("select");e.name=s.key;for(const[n,o]of s.options)e.append(new Option(o,n));t.append(`${s.label} `,e)}return t}function U(s){const t=s.fields.map(R);let e=t;if(s.columns===2){e=[];for(let o=0;o<t.length;o+=2){const r=u("div","host-row");r.append(...t.slice(o,o+2)),e.push(r)}}const n=[];if(s.legend){const o=u("fieldset");o.append(u("legend",void 0,s.legend),...e),n.push(o)}else n.push(...e);return s.hint&&n.push(u("p","host-hint",s.hint)),n}class D{constructor(t,e,n){this.form=t,this.fields=e,t.prepend(u("h2",void 0,"Placement"),...n.flatMap(U));for(const o of e)o.type!=="checkbox"||!o.controls||this.input(o.key).addEventListener("change",r=>{const c=r.target.checked;for(const d of o.controls)this.input(d).checked=c})}form;fields;input(t){return this.form.elements.namedItem(t)}write(t){for(const e of this.fields){const n=t[e.key];e.type==="checkbox"?this.input(e.key).checked=n===!0:this.input(e.key).value=String(n)}}read(){const t=new FormData(this.form),e={};for(const n of this.fields)if(n.type==="checkbox")e[n.key]=t.get(n.key)==="on";else if(n.type==="number"){const o=Number(t.get(n.key));e[n.key]=Number.isFinite(o)&&o>=0?o:n.default}else e[n.key]=String(t.get(n.key)??n.default);return e}}const O=new Map(Object.entries(v).map(([s,t])=>[t,s])),P=200;function g(s){return s instanceof Uint8Array?`<${s.length} bytes>`:Array.isArray(s)?s.map(g):s&&typeof s=="object"?Object.fromEntries(Object.entries(s).map(([t,e])=>[t,g(e)])):s}function T(s){return!s||typeof s!="object"||Array.isArray(s)||s instanceof Uint8Array?null:S(s)}class _{constructor(t,e){this.list=t,this.onFeedback=e}list;onFeedback;clear(){this.list.replaceChildren()}sniff(t){return{send:e=>{this.add("out",e),t.send(e)},subscribe:e=>t.subscribe(n=>{this.add("in",n),e(n)})}}add(t,e){let n="unknown",o=null;try{const h=x(e);if(n=O.get(h.message)??`#${h.message}`,o=g(h.body),h.message===v.acknowledgement){const y=T(h.body);y&&this.onFeedback(y)}}catch(h){o=String(h)}const r=document.createElement("li");r.className=`host-log-${t}`;const c=document.createElement("details"),d=document.createElement("summary");d.textContent=`${t==="out"?"game → server":"server → game"}  ${n.toUpperCase()}`;const i=document.createElement("pre");for(i.textContent=JSON.stringify(o,null,2),c.append(d,i),r.append(c),this.list.prepend(r);this.list.children.length>P;)this.list.lastElementChild.remove()}}class q{constructor(t,e,n,o){this.body=e,this.score=n,this.columns=o;for(const r of["#","Question",...o,"Result","Marks"]){const c=document.createElement("th");c.textContent=r,t.append(c)}}body;score;columns;questions=[];rows=new Map;reset(t){this.questions=t,this.rows.clear(),this.score.textContent="",this.render()}recordFeedback(t){const e=t.isCorrect?"correct":t.earnedMarks>0?"partial":"incorrect";this.setResult(t.questionId,e,`${t.earnedMarks}/${t.maxMarks}`)}setResult(t,e,n){const o=n??this.rows.get(t)?.marks??"—";this.rows.set(t,{result:e,marks:o}),this.render()}setScore(t){this.score.textContent=t}render(){this.body.replaceChildren(),this.questions.forEach((t,e)=>{const n=this.rows.get(t.id),o=n?.result??"—",r=document.createElement("tr");r.className=`host-result-${o}`;const c=this.columns.map((d,i)=>t.cells?.[i]??"");for(const d of[String(e+1),t.id,...c,o,n?.marks??"—"]){const i=document.createElement("td");i.textContent=d,r.append(i)}r.children[2+c.length].className="host-cell-result",this.body.append(r)})}}const z=`<div class="host">
  <header class="host-bar host-chrome">
    <strong data-host="title"></strong>
    <span class="host-tag">Dev host · simulated EDClass backend</span>
  </header>

  <main class="host-main">
    <section class="host-stage">
      <div class="host-frame-controls host-chrome">
        <label>Lesson panel size
          <select data-host="frame-size">
          </select>
        </label>
      </div>
      <div class="host-frame-wrap">
        <div data-host="frame" class="host-frame"></div>
      </div>
    </section>

    <aside class="host-panel host-chrome">
      <form data-host="form" class="host-card">
        <div class="host-actions">
          <button type="submit" class="host-primary">Launch run</button>
          <button type="button" data-host="unmount">Unmount</button>
          <button type="button" data-host="present" title="Open these settings with only the game on screen">Present ↗</button>
        </div>
        <p class="host-hint">Settings are mirrored to the URL so a launch can be linked.</p>
      </form>

      <div data-host="game-panels" class="host-game-panels"></div>
      <section class="host-card" data-host="report">
        <h2>Report <span data-host="score" class="host-score"></span></h2>
        <table class="host-results">
          <thead><tr data-host="report-head"></tr></thead>
          <tbody data-host="report-body"></tbody>
        </table>
      </section>

      <section class="host-card">
        <h2>Protocol log <button type="button" data-host="clear-log" class="host-small">Clear</button></h2>
        <ol data-host="log" class="host-log"></ol>
      </section>
    </aside>
  </main>
</div>
`;function H(s,t=document.querySelector("#app")){t.innerHTML=z,document.title=`${s.title} · Dev Host`;const e=a=>t.querySelector(`[data-host="${a}"]`);e("title").textContent=s.title;const n=e("frame"),o=C(s.sections),r=new D(e("form"),o,[...s.sections,...L]),c=new q(e("report-head"),e("report-body"),e("score"),s.reportColumns??[]),d=new _(e("log"),a=>c.recordFeedback(a));s.hideReport&&(e("report").hidden=!0);const i=e("game-panels"),h=a=>{const l=document.createElement("section");l.className="host-card";const m=document.createElement("h2");m.textContent=a;const p=document.createElement("div");return p.className="host-game-panel",l.append(m,p),i.append(l),p},y=new URLSearchParams(location.search).get("present")==="1";y&&(t.querySelector(".host").classList.add("host--present"),document.body.style.background=s.background??M);const k=(a,l)=>{const m=F(a);return l&&m.set("present","1"),`${location.pathname}?${m}`},b=e("frame-size");b.append(new Option("Fill","fill"));for(const[a,l]of s.frameSizes??N)b.append(new Option(`${a.replace("x"," × ")} (${l})`,a));const E=()=>{const a=b.value;if(a==="fill")n.style.width="",n.style.height="",n.classList.add("host-frame--fill");else{const[l,m]=a.split("x");n.classList.remove("host-frame--fill"),n.style.width=`${l}px`,n.style.height=`${m}px`}};b.addEventListener("change",E);let f=null;const w=()=>{const a=r.read();history.replaceState(null,"",k(a,y)),f?.dispose(),f=null,n.replaceChildren(),i.replaceChildren();const l=s.createRun(a);if(c.reset(l.questions),l.questions.length===0||!l.transport){const p=document.createElement("p");p.className="host-empty host-chrome",p.textContent=s.emptyMessage??A,n.append(p);return}const m=d.sniff(l.transport);f=s.mount(n,{transport:m,settings:a,report:c,panel:h}),f.ready.catch(p=>console.error("[host] game failed to start",p))};e("form").addEventListener("submit",a=>{a.preventDefault(),w()}),e("unmount").addEventListener("click",()=>{f?.dispose(),f=null,i.replaceChildren()}),e("clear-log").addEventListener("click",()=>d.clear()),e("present").addEventListener("click",()=>window.open(k(r.read(),!0),"_blank")),r.write($(o,new URLSearchParams(location.search))),E(),w()}export{H as createDevHost};
