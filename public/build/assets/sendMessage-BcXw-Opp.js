import"./bootstrap-KU_g-quu.js";function h(e){document.querySelectorAll(".reps").forEach(l=>{l.addEventListener("click",()=>{let t=l.getAttribute("for");document.querySelector(".c"+t).focus()})})}const y=document.querySelector("#form"),S=document.querySelector(".chat-container");let s=JSON.parse(document.querySelector(".usert").getAttribute("ig"));s.last_seen;let c=!1,o=document.querySelector(".id_r").value,_=document.querySelector(".owner_id").value,q=document.querySelector(".reciever_id").value,E=Echo.join("presence.user."+o),m=Echo.private("private.playground."+o);function d(e){let n=document.querySelectorAll(".ownerChat"),l=n.length-1,t=n[l];t!==void 0&&(t.parentElement.parentElement.querySelector(".lp")!=null&&t.parentElement.parentElement.querySelector(".lp").remove(),t.parentElement.parentElement.querySelector(".tickbg")!=null&&t.parentElement.parentElement.querySelector(".tickbg").remove())}E.here(e=>{e.length==2&&(c=!0)}).joining(e=>{d(),console.log(e.first_name+"joined"),c=!0,s.last_seen="now";let n=document.querySelectorAll(".ownerChat");if(n.length!==0){let l=n.length-1,t=n[l],r=`
<div class="lp"><span>${s.first_name[0]+s.second_name[0]}</span></div>
`;document.querySelector(".chat-container").lastElementChild.id===t.id&&t.parentElement.insertAdjacentHTML("afterend",r)}}).leaving(e=>{console.log(e.first_name+"left"),c=!1,s.last_seen=new Date});m.subscribed(()=>{console.log(o+m)}).listen(".playground",e=>{console.log(e),d(),v(e.message,"justify-content-start",!1,"otherChat",e.chat.parent_id),console.log(e.chat),h()});y.addEventListener("submit",function(e){const n=document.querySelector("#input-message"),l=document.querySelector(".parent_id");if(e.preventDefault(),n.value!==0){d();const t=n.value;v(t,"justify-content-end",!0,"ownerChat",l.id),h(),b(s,t),n.value="",document.querySelector(".het").innerHTML="",axios.post("/chat-message",{owner_id:_,reciever_id:q,chat_id:o,message:t,check:c,parent_id:Number(l.id)})}});let f=Echo.channel("public.sendMessage"+_);f.subscribed(()=>{console.log(f)}).listen(".sendMessage",e=>{$(e)});function $(e){let n="";s.last_seen=="now"&&(n=`<span class="online_icon op" id="f${+s.id}"></span>`,console.log("iy"));let t=`	<li class="hup divide">
    <a href="${"http://127.0.0.1:8000/chat/"+e.user[0].id}" style="text-decoration:none;" class="d-flex bd-highlight">
        
            <div class="img_cont2">
            <div class="pp"><span>${s.first_name[0]+s.second_name[0]}</span></div>
                ${n}
            </div>
            <div class="user_info">
            
                <span>${e.user[0].first_name}</span>
              
                <p>${e.chat.message}</p>

                <span class="user_id" id="${e.user[0].id}"></span>
            </div>

        </a> 
     
    </li>`;document.querySelectorAll(".user_id").forEach(i=>{i.id==e.user[0].id&&i.parentElement.parentElement.parentElement.remove()}),document.querySelector(".contacts").insertAdjacentHTML("afterbegin",t)}function v(e,n,l,t,r){let i="";if(Number(r)!==0){console.log(r);let g=document.querySelector(".c"+r);i=`<p class="reps" for="${r}">${g.innerHTML}</p>`}let a="";l&&(c?a=` <div class="lp"><span>${s.first_name[0]+s.second_name[0]}</span></div>`:a=' <div class="tickbg tun"> <div class="tick"> </div> </div>');let u=`
    <div class="d-flex mb-4 ${n}">
								${i}
    <div class="msg_cotainer">
<span class="${t}">${e}</span>

    </div>
${a}
</div> `;S.innerHTML+=u;let p=document.querySelector(".chat-container");p.scrollTop=p.scrollHeight}function b(e,n){let l="";document.querySelector(".tell").innerHTML=="Online"&&(l=`<span class="online_icon op" id="f${+s.id}"></span>`,console.log("pi"));let r=`<li class="hup divide">
    <a href="${"http://127.0.0.1:8000/chat/"+e.id}" style="text-decoration:none;" class="d-flex bd-highlight">
        
            <div class="img_cont2">
            <div class="pp"><span>${s.first_name[0]+s.second_name[0]}</span></div>
               ${l}
            </div>
            <div class="user_info">
            
                <span>${e.first_name}</span>
                <p>${n}</p>

                <span class="user_id" id="${e.id}"></span>
            </div>

        </a> 
     
    </li>`;document.querySelectorAll(".user_id").forEach(a=>{a.id==e.id&&a.parentElement.parentElement.parentElement.remove()}),document.querySelector(".contacts").insertAdjacentHTML("afterbegin",r)}
