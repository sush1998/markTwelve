const backToHome=document.querySelector("#back_to_home")
const base=document.querySelector("#base1")
const height=document.querySelector("#height1")
const out=document.querySelector("#out")
const output=document.querySelector(".output")
const btn_calculate_area_baseHeight=document.querySelector("#btn_calculate_area_baseHeight")

const options=document.querySelectorAll(".option_type")
const options_main=document.querySelectorAll(".input")
const herons_input=document.querySelectorAll(".herons_input")
const btn_calculate_area_herons=document.querySelector("#btn_calculate_area_herons")

const side_eqi=document.querySelector("#side_eqi")
const btn_calculate_area_equilateral=document.querySelector("#btn_calculate_area_equilateral")


function calculateArea_baseHeight(base_length,height_length)
{
    console.log("calci area")
    let area=base_length*height_length
    console.log(area)
    out.innerHTML=area
    output.style.display="block"
}

function calculate_area_herons(s,sides)
{
    console.log("herons area calculating")
    let area=Math.sqrt(s*(s-sides[0])*(s-sides[1])*(s-sides[2]))
    console.log(area)
    out.textContent=area;
    output.style.display="block"
}

function calculate_area_equilateral(side)
{
    let area=Math.sqrt(3)/4 * (side*side);
    console.log(area)
}

btn_calculate_area_baseHeight.addEventListener("click",(event)=>
{
    event.preventDefault()
    console.log("clicked")
    let base_length=parseInt(base.value);
    let height_length=parseInt(height.value);
    calculateArea_baseHeight(base_length,height_length)
   
})

btn_calculate_area_herons.addEventListener("click",()=>
{
    let s=0
    let sides=[]
    for(let i=0;i<herons_input.length;i++)
    {
        s+=parseInt(herons_input[i].value)
        sides.push(parseInt(herons_input[i].value))
    }
    s=s/2
    calculate_area_herons(s,sides)
    
})


btn_calculate_area_equilateral.addEventListener("click",()=>
{
    let side=parseInt(side_eqi.value)
    calculate_area_equilateral(side)
})


//click Handlers
for(let i=0;i<options.length;i++)
{
   options[i].addEventListener("click",()=>
   {
       console.log(options_main[i].id)
       options_main.forEach(elem=>elem.style.display='none') //hides all
       options_main[i].style.display="block" //show clicked
       output.style.display="none"
   })
}

backToHome.addEventListener("click",()=>
{
    window.location.href="index.html"
})