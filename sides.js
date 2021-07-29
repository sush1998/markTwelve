const side_a=document.querySelector("#side_a")
const side_b=document.querySelector("#side_b")
const btn_calculate=document.querySelector("#calculate")
const backToHome=document.querySelector("#back_to_home")
const out=document.querySelector("#out")


function calculateHypo(a,b)
{
    console.log("calculating")
    console.log(a+' '+b)
    let hypo=Math.sqrt((a*a)+(b*b));
    console.log("hypo :"+hypo)
    out.textContent=hypo
}


btn_calculate.addEventListener('click',(event)=>
{
    event.preventDefault();
    console.log("clicked");
    let a=parseInt(side_a.value);
    let b=parseInt(side_b.value)
    calculateHypo(a,b)
})

backToHome.addEventListener("click",()=>
{
    window.location.href="index.html"
})