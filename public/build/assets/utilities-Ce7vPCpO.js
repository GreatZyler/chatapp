let l=JSON.parse(document.querySelector(".usert").getAttribute("ig")),o=document.querySelectorAll(".ret");o.forEach(r=>{r.addEventListener("drag",()=>{let e=r.querySelector("span").innerHTML,t=r.id;console.log(t),document.querySelector("#input-message").focus(),document.querySelector(".parent_id").id=Number(t);let c=`	<div><h1>repling to <span class="hy">${l.first_name+l.second_name}</span> ...</h1>
       <p class="replit">${e}</p></div>
       <p class="close">X</p>`;document.querySelector(".het").innerHTML=c,document.querySelector(".close").addEventListener("click",()=>{document.querySelector(".het").innerHTML="",document.querySelector(".parent_id").id=0})})});s();function s(){document.querySelectorAll(".dft").forEach(n=>{let e=Number(n.getAttribute("p_id"));if(e!==0){let t=document.querySelector(".c"+e),c=`<p class="reps" for="${e}">${t.innerHTML}</p>`;n.parentElement.parentElement.insertAdjacentHTML("afterbegin",c)}}),u()}function u(r){document.querySelectorAll(".reps").forEach(e=>{e.addEventListener("click",()=>{let t=e.getAttribute("for");document.querySelector(".c"+t).focus()})})}