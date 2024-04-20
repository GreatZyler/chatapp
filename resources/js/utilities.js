//adding reply shit
let other_info=JSON.parse(document.querySelector(".usert").getAttribute("ig"));

let rets=document.querySelectorAll(".ret");
rets.forEach(ele=>{
    ele.addEventListener("drag",()=>{
       let span=ele.querySelector("span");
       let text=span.innerHTML;
       let id=ele.id;
       console.log(id);
       document.querySelector("#input-message").focus();
       document.querySelector(".parent_id").id=Number(id);
       let rt=`	<div><h1>repling to <span class="hy">${other_info.first_name+other_info.second_name}</span> ...</h1>
       <p class="replit">${text}</p></div>
       <p class="close">X</p>`;
       document.querySelector(".het").innerHTML=rt;


       //closing reply;
       document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".het").innerHTML='';
        document.querySelector(".parent_id").id=0
       })
    })
})

show_mess();
function show_mess(){
    let allmess=document.querySelectorAll(".dft");
    allmess.forEach(ele => {
        let look=Number(ele.getAttribute("p_id"));
        if (look===0) {
            
        }else{
            let inh=document.querySelector(".c"+look);
            let rt=`<p class="reps" for="${look}">${inh.innerHTML}</p>`
            ele.parentElement.parentElement.insertAdjacentHTML("afterbegin",rt)
           
        }
    });
    rep()
}

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