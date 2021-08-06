const side_a=document.querySelector("#side_a")
const side_b=document.querySelector("#side_b")
const btn_calculate=document.querySelector("#calculate")
const backToHome=document.querySelector("#back_to_home")
const out=document.querySelector("#out")
const output_div=document.querySelector(".output")
const err_msg_side=document.querySelector("#err_msg_side")

function calculateHypo(a,b)
{
    console.log("calculating")
    console.log(a+' '+b)
    let hypo=Math.sqrt((a*a)+(b*b));
    console.log("hypo :"+hypo)
    out.textContent=hypo
    output_div.style.display="block"
}


btn_calculate.addEventListener('click',(event)=>
{
    event.preventDefault();
    console.log("clicked");
    if((side_a.valuea===""||side_a.value<=0)||(side_b.valuea===""||side_b.value<=0))
    {
        err_msg_side.style.display="block"
        output_div.style.display="none"
        err_msg_side.textContent="Please enter valid inputs"
        return;
    }
    err_msg_side.style.display="none"
    let a=parseInt(side_a.value);
    let b=parseInt(side_b.value)
    calculateHypo(a,b)
})

backToHome.addEventListener("click",()=>
{
    window.location.href="index.html"
})