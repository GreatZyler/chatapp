import './bootstrap';

//for clicking of replies don't touch
function rep(params) {
    let reps=document.querySelectorAll(".reps");

    reps.forEach(elp=>{
        elp.addEventListener("click",()=>{

                let fot=elp.getAttribute("for");
               
                document.querySelector(".c"+fot).focus()
        })
    })
}

//end don't touch except u are God


const form =document.querySelector("#form");
const listMessage=document.querySelector(".chat-container");

let other_info=JSON.parse(document.querySelector(".usert").getAttribute("ig"));
let otherOnline=other_info.last_seen;

let connect=false;

let id_r=document.querySelector(".id_r").value;
let owner_id=document.querySelector(".owner_id").value;
let reciever_id=document.querySelector(".reciever_id").value;


let channel3 =Echo.join("presence.user."+id_r);

let channel =Echo.private("private.playground."+id_r);

//let channel2=Echo.channel("public.sendMessage"+owner_id);

//removing marking tick
function re_tick(params) {

    let ownerChats=document.querySelectorAll(".ownerChat")
  let nim=ownerChats.length-1;

let lastChat=ownerChats[nim];
if (lastChat !== undefined) {
if (lastChat.parentElement.parentElement.querySelector(".lp") != null) {
    lastChat.parentElement.parentElement.querySelector(".lp").remove()
}
if(lastChat.parentElement.parentElement.querySelector(".tickbg") != null){
    lastChat.parentElement.parentElement.querySelector(".tickbg").remove()
}

}
}









channel3.here((user)=>{
 
    if (user.length == 2) {
        connect=true
    }
})
.joining((user)=>{
    re_tick()
console.log(user.first_name+"joined")
connect=true
other_info.last_seen="now";


let ownerChats=document.querySelectorAll(".ownerChat")
if(ownerChats.length ===0){}else{
  let nim=ownerChats.length-1;

let lastChat=ownerChats[nim];


let tun=`
<div class="lp"><span>${other_info.first_name[0]+other_info.second_name[0]}</span></div>
`;

let chat_container=document.querySelector(".chat-container").lastElementChild;

if (chat_container.id === lastChat.id) {
  
lastChat.parentElement.insertAdjacentHTML('afterend',tun)
}

}

})
.leaving((user)=>{
    console.log(user.first_name+"left")
    connect=false
    other_info.last_seen=new Date()
})




channel.subscribed(()=>{
    console.log(id_r+channel)
}).listen(".playground",e=>{
    console.log(e)
    re_tick()
    gret(e.message,"justify-content-start",false,"otherChat",e.chat.parent_id);
    console.log(e.chat)
    rep()
})


form.addEventListener("submit",function (event) {
    const inputMessage=document.querySelector("#input-message");
    const parent_id=document.querySelector(".parent_id");
    event.preventDefault() 
    if (inputMessage.value===0) {
        
    }else{

      //mark as read if the two users are connected
      re_tick()
  const userInput=inputMessage.value;
      gret(userInput,"justify-content-end",true,"ownerChat",parent_id.id)
    
rep()
        mess2(other_info,userInput)
   

   
    inputMessage.value="";
   
    document.querySelector(".het").innerHTML='';
    axios.post("/chat-message",{
        owner_id:owner_id,
        reciever_id:reciever_id,
        chat_id:id_r,
        message:userInput,
        check:connect,
        parent_id:Number(parent_id.id)
    })
   
}
})

//updating message list


let channel2=Echo.channel("public.sendMessage"+owner_id);

channel2.subscribed(()=>{

    console.log(channel2)
})
.listen('.sendMessage',(e)=>{
    
mess(e)

})

function mess(e) {
    let rt='';
    if (other_info.last_seen=="now") {
        rt=`<span class="online_icon op" id="f${+other_info.id}"></span>`
        console.log("iy")

    }
        
    let urel="http://127.0.0.1:8000/chat/" + e.user[0].id;

    let real=  `	<li class="hup divide">
    <a href="${urel}" style="text-decoration:none;" class="d-flex bd-highlight">
        
            <div class="img_cont2">
            <div class="pp"><span>${other_info.first_name[0] + other_info.second_name[0]}</span></div>
                ${rt}
            </div>
            <div class="user_info">
            
                <span>${e.user[0].first_name}</span>
              
                <p>${e.chat.message}</p>

                <span class="user_id" id="${e.user[0].id}"></span>
            </div>

        </a> 
     
    </li>`


    let users_id=document.querySelectorAll(".user_id");
  
   
    users_id.forEach(ele => {
        let id=ele.id;
        if (id == e.user[0].id) {
            ele.parentElement.parentElement.parentElement.remove()
        }
    });

    document.querySelector(".contacts").insertAdjacentHTML('afterbegin',real)
}

function gret(e,cl,ft,th,pd) {
    let rt=``;
    if (Number(pd)!==0) {
        console.log(pd)
        let inh=document.querySelector(".c"+pd);
        rt=`<p class="reps" for="${pd}">${inh.innerHTML}</p>`
    }
    let add=``
   if (ft) {
        if (connect) {
            add=` <div class="lp"><span>${other_info.first_name[0]+other_info.second_name[0]}</span></div>`  
    }else{
        add=` <div class="tickbg tun"> <div class="tick"> </div> </div>`;
    }
    }
  
    let gy=`
    <div class="d-flex mb-4 ${cl}">
								${rt}
    <div class="msg_cotainer">
<span class="${th}">${e}</span>

    </div>
${add}
</div> `;
listMessage.innerHTML +=gy
let div = document.querySelector('.chat-container');
  div.scrollTop = div.scrollHeight;
}


function mess2(user,chat) {
    let rt='';
    if (document.querySelector(".tell").innerHTML== "Online") {
        rt=`<span class="online_icon op" id="f${+other_info.id}"></span>`
        console.log("pi")

    }
    let urel="http://127.0.0.1:8000/chat/" + user.id;

    let real=  `<li class="hup divide">
    <a href="${urel}" style="text-decoration:none;" class="d-flex bd-highlight">
        
            <div class="img_cont2">
            <div class="pp"><span>${other_info.first_name[0] + other_info.second_name[0]}</span></div>
               ${rt}
            </div>
            <div class="user_info">
            
                <span>${user.first_name}</span>
                <p>${chat}</p>

                <span class="user_id" id="${user.id}"></span>
            </div>

        </a> 
     
    </li>`


    let users_id=document.querySelectorAll(".user_id");
  
   
    users_id.forEach(ele => {
        let id=ele.id;
        if (id == user.id) {
            ele.parentElement.parentElement.parentElement.remove()
        }
    });

    document.querySelector(".contacts").insertAdjacentHTML('afterbegin',real)   
}

