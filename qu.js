const quizqa=[
    {
        question:"Which country has the largest population in the world?",
        options:["Russia","USA","China","Canada"],
        answer:"China"
    },
    {
        question:"Which desert is the largest in the world?",
        options:["Thar Desert","Sahara Desert","Namib Desert","Atacama Desert"],
        answer:"Sahara Desert"
    },
    {
        question:"Which planet of the solar system is known for its ring?",
        options:["Saturn","Uranus","Jupiter","Neptune"],
        answer:"Saturn"
    },
    {
        question:"What process provides energy to the Sun?",
        options:["Condensation","Nuclear synthesis","Diffusion","Ignition"],
        answer:"Nuclear synthesis"
    },
    {
        question:"Which city is the capital of Japan?",
        options:["Beijing","Tokyo","New Delhi","Seoul"],
        answer:"Tokyo"
    }
];
let CurrentQuestion=0;
let score=0;
const ques=document.getElementById("question");
const opt1=document.getElementById("option_1");
const opt2=document.getElementById("option_2");
const opt3=document.getElementById("option_3");
const opt4=document.getElementById("option_4");
function showQuestion()
{
    const q=quizqa[CurrentQuestion];
    ques.innerText=q.question;
    opt1.innerText=q.options[0];
    opt2.innerText=q.options[1];
    opt3.innerText=q.options[2];
    opt4.innerText=q.options[3];
    opt1.style.borderColor="";
    opt2.style.borderColor="";
    opt3.style.borderColor="";
    opt4.style.borderColor="";    
}
function checkAnswer(opt)
{
    if(opt==0)
        selected=opt1;
    if(opt==1)
        selected=opt2;
    if(opt==2)
        selected=opt3;
    if(opt==3)
        selected=opt4;

    if(quizqa[CurrentQuestion].options[opt]==quizqa[CurrentQuestion].answer)
        {
            selected.style.borderColor="green";
            score+=1;
        }
    else
        selected.style.borderColor="red";
        /*setTimeout(()=>{
        CurrentQuestion++;
        if (CurrentQuestion < quizqa.length) {
            showQuestion();
        } else {
            alert("Quiz Over! Your score is: " + score);
        }
    },400);*/
}
function nextQuestion()
{
    CurrentQuestion++;
        if (CurrentQuestion < quizqa.length) {
            showQuestion();
        } else {
            alert("Quiz Over! Your score is: " + score);
        }
}
showQuestion();
        
    

