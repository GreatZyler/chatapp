import"./bootstrap-KU_g-quu.js";const h=document.querySelector("#form"),v=document.querySelector(".chat-container");let n=JSON.parse(document.querySelector(".usert").getAttribute("ig"));n.last_seen;let c=!1,o=document.querySelector(".id_r").value,m=document.querySelector(".owner_id").value,_=document.querySelector(".reciever_id").value,g=Echo.join("presence.user."+o),u=Echo.private("private.playground."+o);function d(e){let t=document.querySelectorAll(".ownerChat"),l=t.length-1,s=t[l];s!==void 0&&(s.parentElement.parentElement.querySelector(".lp")!=null&&s.parentElement.parentElement.querySelector(".lp").remove(),s.parentElement.parentElement.querySelector(".tickbg")!=null&&s.parentElement.parentElement.querySelector(".tickbg").remove())}g.here(e=>{e.length==2&&(c=!0)}).joining(e=>{d(),console.log(e.first_name+"joined"),c=!0,n.last_seen="now";let t=document.querySelectorAll(".ownerChat");if(t.length!==0){let l=t.length-1,s=t[l],i=`
<div class="lp"><span>${n.first_name[0]+n.second_name[0]}</span></div>
`;document.querySelector(".chat-container").lastElementChild.id===s.id&&s.parentElement.insertAdjacentHTML("afterend",i)}}).leaving(e=>{console.log(e.first_name+"left"),c=!1,n.last_seen=new Date});u.subscribed(()=>{console.log(o+u)}).listen(".playground",e=>{console.log(e),d(),f(e.message,"justify-content-start",!1,"otherChat")});h.addEventListener("submit",function(e){const t=document.querySelector("#input-message");if(e.preventDefault(),t.value!==0){d();const l=t.value;f(l,"justify-content-end",!0,"ownerChat"),E(n,l),t.value="",axios.post("/chat-message",{owner_id:m,reciever_id:_,chat_id:o,message:l,check:c})}});let p=Echo.channel("public.sendMessage"+m);p.subscribed(()=>{console.log(p)}).listen(".sendMessage",e=>{y(e)});function y(e){let t="";n.last_seen=="now"&&(t=`<span class="online_icon op" id="f${+n.id}"></span>`,console.log("iy"));let s=`	<li class="hup divide">
    <a href="${"http://127.0.0.1:8000/chat/"+e.user[0].id}" style="text-decoration:none;" class="d-flex bd-highlight">
        
            <div class="img_cont2">
            <div class="pp"><span>${n.first_name[0]+n.second_name[0]}</span></div>
                ${t}
            </div>
            <div class="user_info">
            
                <span>${e.user[0].first_name}</span>
              
                <p>${e.chat.message}</p>

                <span class="user_id" id="${e.user[0].id}"></span>
            </div>

        </a> 
     
    </li>`;document.querySelectorAll(".user_id").forEach(a=>{a.id==e.user[0].id&&a.parentElement.parentElement.parentElement.remove()}),document.querySelector(".contacts").insertAdjacentHTML("afterbegin",s)}function f(e,t,l,s){let i="";l&&(c?i=` <div class="lp"><span>${n.first_name[0]+n.second_name[0]}</span></div>`:i=' <div class="tickbg tun"> <div class="tick"> </div> </div>');let a=`
    <div class="d-flex mb-4 ${t}">
								
    <div class="msg_cotainer">
<span class="${s}">${e}</span>

    </div>
${i}
</div> `;v.innerHTML+=a;let r=document.querySelector(".chat-container");r.scrollTop=r.scrollHeight}function E(e,t){let l="";document.querySelector(".tell").innerHTML=="Online"&&(l=`<span class="online_icon op" id="f${+n.id}"></span>`,console.log("pi"));let i=`<li class="hup divide">
    <a href="${"http://127.0.0.1:8000/chat/"+e.id}" style="text-decoration:none;" class="d-flex bd-highlight">
        
            <div class="img_cont2">
            <div class="pp"><span>${n.first_name[0]+n.second_name[0]}</span></div>
               ${l}
            </div>
            <div class="user_info">
            
                <span>${e.first_name}</span>
                <p>${t}</p>

                <span class="user_id" id="${e.id}"></span>
            </div>

        </a> 
     
    </li>`;document.querySelectorAll(".user_id").forEach(r=>{r.id==e.id&&r.parentElement.parentElement.parentElement.remove()}),document.querySelector(".contacts").insertAdjacentHTML("afterbegin",i)}
