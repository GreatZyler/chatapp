import './bootstrap';

  let channel3 =Echo.join("self.user."+1);

  let cs=document.querySelector(".cs");
  let csrf=cs.querySelector("input")

  channel3.here((user)=>{
   
})
.joining((user)=>{
console.log(user.first_name+"joined")
let rt="#f"+user.id;
fetch(`/change`,{
  method:"POST",
   headers:{ 
    'Content-Type':"application/json",
    'X-CSRF-TOKEN':csrf.value,
  },
  body:JSON.stringify({id:user.id,sort:"in"})
   })
if (document.querySelector(rt) != null) {
  document.querySelector(rt).classList.add("op") 
}
if (document.querySelector(".tell") !=null) {
  document.querySelector(".tell").innerHTML="Online"
}

})
.leaving((user)=>{
    console.log(user.first_name+"left")

    fetch(`/change`,{
   method:"POST",
    headers:{ 
     'Content-Type':"application/json",
     'X-CSRF-TOKEN':csrf.value,
   },
   body:JSON.stringify({id:user.id,sort:"out"})
    })
    let rt="#f"+user.id;
    if (document.querySelector(rt) != null) {
      document.querySelector(rt).classList.remove("op") 
    }
    if (document.querySelector(".tell") !=null) {
   document.querySelector(".tell").innerHTML=""
    }
   
  
})


