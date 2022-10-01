// document.getElementById("count-el").innerText=a;
let a=0;
let b=0;
let str1="",str2="";//,str3="<tr><td>No of batch</td><td>No of entry</td></tr>";
function increment(){
    a++;
    document.getElementById("count-el").innerText=a;
} 
function decrement(){
    a--;
    document.getElementById("count-el").innerText=a;
}
function reset(){
    a=0;
    document.getElementById("count-el").innerText=a;
}
function save(){
    b++;
    str2+="<tr><td>"+b+"</td><td>"+a+"</td></tr>";
    str1=str2;
    document.getElementById("save1").innerHTML=str1;
}
function clear1(){
    str2="";
    b=0;
    document.getElementById("save").innerHTML="";
}