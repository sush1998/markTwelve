const angle_1=document.querySelector("#angle1")
const angle_2=document.querySelector("#angle2")
const angle_3=document.querySelector("#angle3")
const out=document.querySelector("#out")
const output_div=document.querySelector(".output")
const result=document.querySelector("#result")
const check_btn=document.querySelector("#btn_check_angle")
const backToHome=document.querySelector("#back_to_home")

function check_angles([...angles])
{
    console.log("calci")
    let angleSum=angles.reduce((total,curr)=>curr+total,0)
    return angleSum;
    
}

check_btn.addEventListener('click',(event)=>
{
    event.preventDefault()
    console.log("clicked")
    let angle1=parseInt(angle_1.value)
    let angle2=parseInt(angle_2.value)
    let angle3=parseInt(angle_3.value)
    let sum=check_angles([angle1,angle2,angle3])
    output_div.style.display="block"
    if(sum!=180)
    {
        out.innerHTML=sum;
        result.textContent="Oops! these angles cannot make a triangle"
    }
    else{
        out.innerHTML=sum
        result.textContent="Yeah! these angles can make a triangle"
    }
})



backToHome.addEventListener("click",()=>
{
    window.location.href="index.html"
})