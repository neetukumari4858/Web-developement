// getnumber
function number(num){
    var result=document.getElementById("inp");
    result.value+=num;
}

// getresult

function result(){
    var result=document.getElementById("inp")
    result.value=eval(result.value)
}

// clearResult

function clearResult(){
    var result=document.getElementById("inp")
    result.value=" "
}