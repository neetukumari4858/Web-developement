let output1=document.getElementById("output");
let btn=document.getElementById("btn");
let container=document.getElementById("container");
let body=document.getElementById("body1");
let quotes = [
	
		'"Be the change you wish to see."-Mahatma Gandhi',
		'"Social progress can be measured by the social position of the female sex."-Karl Marx',
		'"I like the religion that teaches liberty, equality and fraternity."-B. R. Ambedkar',
		'"If you tremble with indignation at every injustice then you are a comrade of mine."-Ernesto Che Guevara',
		'"Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me."-Abdul Kalam',
	];

let bgColors1 = ["red", "pink", "yellow", "green", "gray", "darkcyan", "silver", "BlanchedAlmond", "chocolate", "darkorchid"];
let bodyColor=["sky-blue","green","purple","darkorchid"]
function show (){
    let randomquote=quotes[Math.floor(Math.random()*quotes.length)];
    output1.innerHTML=randomquote
	let randomquote1=bgColors1[Math.floor(Math.random()*bgColors1.length)];
	container.style.backgroundColor=randomquote1
	let randomquote2=bodyColor[Math.floor(Math.random()*bodyColor.length)];
	body.style.backgroundColor=randomquote2
};
btn.addEventListener("click" ,show)
