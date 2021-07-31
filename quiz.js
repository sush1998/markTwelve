const answers=["isosceles","one","35mm","55","false"]

const quizForm=document.querySelector("#quizForm")
const questions=document.querySelectorAll(".question_container")
const btn_quiz_submit=document.querySelector("#btn_quiz_submit")

const selected_options=document.q


btn_quiz_submit.addEventListener('click',(event)=>
{
    event.preventDefault()
    console.group("clicked")
    let pos=0
    let data=new FormData(quizForm)
    for(let entry of data)
    {
        console.log(entry[1]==answers[pos])
        pos+=1
    }
})
