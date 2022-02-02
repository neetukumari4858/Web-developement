let item2=document.querySelector(".item2");
let item3=document.querySelector(".item3");
let btn=document.getElementById("btn");
let stu_list=["Neetu","Archana","Annu","Anusha","Ayushi","Sheetal"]
let stu_list1=["kusum","Rekha","Swapna","Jully","Priya","Akriti"]

function Name(){
    let randomquote=stu_list[Math.floor(Math.random()*stu_list.length)];
    item2.innerHTML=randomquote
    console.log(randomquote)
    let randomquote1=stu_list1[Math.floor(Math.random()*stu_list1.length)];
    item3.innerHTML=randomquote1
}
btn.addEventListener("click",Name);