const answers=["isosceles","one","35mm","55","false"]
const backToHome=document.querySelector("#back_to_home")
const quizForm = document.forms[0];
const questions=document.querySelectorAll(".question_container")
const btn_quiz_submit=document.querySelector("#btn_quiz_submit")


quizForm.addEventListener('submit',function(event)
{
    event.preventDefault()
    console.log("submited")
    let options_selected=new FormData(quizForm)
    let pos=0
    let score=0
    for(let elem of options_selected)
    {
        if(elem[1]==answers[pos])
        {
            console.log(elem[1]+"  "+answers[pos])
            questions[pos].style.backgroundColor="green"
            score++
        }
        else{
            questions[pos].style.backgroundColor="red"
        }
        pos++
    }
    console.log("score :"+score)
})


backToHome.addEventListener("click",()=>
{
    window.location.href="index.html"
})