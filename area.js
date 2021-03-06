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

const error_msg_equi=document.querySelector("#error_msg_equi")
const error_msg_herons=document.querySelector("#error_msg_herons")
const error_msg_base=document.querySelector("#error_msg_base")

const first_time_text=document.querySelector(".first_time_text")

function calculateArea_baseHeight(base_length,height_length)
{
    console.log("calci area")
    let area=base_length*height_length/2
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
    out.textContent=area;
    output.style.display="block"
}

btn_calculate_area_baseHeight.addEventListener("click",(event)=>
{
    
    event.preventDefault()
    first_time_text.style.display="none"
    console.log("clicked")
    if(base.value===""||height.value==="")
    {
        error_msg_base.textContent="Please enter valid inputs."
        output.style.display="none"
        return
    }
    error_msg_base.style.display="none"
    let base_length=parseInt(base.value);
    let height_length=parseInt(height.value);
    calculateArea_baseHeight(base_length,height_length)
   
})

btn_calculate_area_herons.addEventListener("click",(event)=>
{
    event.preventDefault()
    let s=0
    let sides=[]
    for(let i=0;i<herons_input.length;i++)
    {
        if(herons_input[i].value==="")
        {
            error_msg_herons.textContent="Please enter valid inputs."
            output.style.display="none"
            return
        }
        else
        {   
            
            s+=parseInt(herons_input[i].value)
            sides.push(parseInt(herons_input[i].value))
        }
        
    }
    error_msg_herons.style.display="none"
    s=s/2
    calculate_area_herons(s,sides)
    
})


btn_calculate_area_equilateral.addEventListener("click",(event)=>
{
    
    event.preventDefault()
    if(side_eqi.value==="")
    {   
        error_msg_equi.textContent="Please enter valid inputs."
        output.style.display="none"
        return
    }
    else{
        error_msg_equi.style.display="none"
        let side=parseInt(side_eqi.value)
        calculate_area_equilateral(side)
    }
    
})


//click Handlers
for(let i=0;i<options.length;i++)
{
   options[i].addEventListener("click",()=>
   {
       first_time_text.style.display="none"
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