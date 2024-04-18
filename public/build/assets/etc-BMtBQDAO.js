window.onload=function(o){let e=document.querySelector(".chat-container");e.scrollTop=e.scrollHeight};let i=JSON.parse(document.querySelector(".usert").getAttribute("ig")),r=document.querySelectorAll(".ownerChat");if(r.length!==0){let o=r.length-1,e=r[o],n="";e.getAttribute("check")=="unread"?n=`
<div class="tickbg tun">
   <div class="tick">
   </div>
</div>`:n=`
<div class="lp"><span>${i.first_name[0]+i.second_name[0]}</span></div>
`;let l=document.querySelector(".chat-container").lastElementChild;l.id===e.id&&e.parentElement.insertAdjacentHTML("afterend",n),console.log(l.id),s()}function s(o){let n=document.querySelector(".cs").querySelector("input"),l=document.querySelectorAll(".otherChat"),c=[];l.forEach(t=>{t.getAttribute("check")=="unread"&&c.unshift(Number(t.id))});let a={text:c};fetch("/read",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":n.value},body:JSON.stringify(a)}).then(t=>t.json()).then(t=>{console.log(t)})}
