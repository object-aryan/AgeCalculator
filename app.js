
let body=document.querySelector(".main");
let btn=document.querySelector("button");
let reset=document.getElementById("reset");
let para=document.createElement("P");

var increment=0;
btn.addEventListener("click",()=>{
   let dob= new Date(document.querySelector("#age").value);
   increment=increment+1;
   let month;
   let currentDate=new Date();
   let age=currentDate.getFullYear()-dob.getFullYear();
   if(currentDate.getMonth() > dob.getMonth()){
    month=currentDate.getMonth()-dob.getMonth();
   }
   else{
      month=dob.getMonth()-currentDate.getMonth();

   }
   let days=currentDate.getDate()-dob.getDate();

   para.style.color="white";
   body.appendChild(para);
   if(dob.getFullYear() < currentDate.getFullYear())
   {
   // alert( );
    para.innerText=`Your are ${age} year and ${month} month old`;
     alert("Work Done");
   }
   //  body.append(paraa)
   else if(month)
   {
      para.innerText=`You are only ${month} month and ${days} days old`;

   }
   else{
      para.innerText=`You are only ${days} days old`;

   }
})

reset.addEventListener(("click"),()=>{
para.innerText=" ";
})



