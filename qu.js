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
let check=false;
const ques=document.getElementById("question");
const opt1=document.getElementById("option_1");
const opt2=document.getElementById("option_2");
const opt3=document.getElementById("option_3");
const opt4=document.getElementById("option_4");
function showQuestion()
{
    check=false;
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
    if(check==false)
        check=true;
    else
        return;
   
    let selected;
    let correct;
    if(opt==0)
        selected=opt1;
    if(opt==1)
        selected=opt2;
    if(opt==2)
        selected=opt3;
    if(opt==3)
        selected=opt4;
    if(opt1.innerText==quizqa[CurrentQuestion].answer)
        correct=opt1;
    if(opt2.innerText==quizqa[CurrentQuestion].answer)
        correct=opt2;
    if(opt3.innerText==quizqa[CurrentQuestion].answer)
        correct=opt3;
    if(opt4.innerText==quizqa[CurrentQuestion].answer)
        correct=opt4;
    if(quizqa[CurrentQuestion].options[opt]==quizqa[CurrentQuestion].answer)
        {
            selected.style.borderColor="darkgreen";
            score+=1;
        }
    else
        {
            selected.style.borderColor="red";
            correct.style.borderColor="green";
        }
}
function nextQuestion()
{
    CurrentQuestion++;
        if (CurrentQuestion < quizqa.length) {
            showQuestion();
        } else {
            let percent=score/5*100;
            ques.style.display="none";
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
            document.getElementById("next").style.display="none";
            document.getElementById("container").style.display="flex";
            let circularProgress = document.querySelector(".circular-progress"),
            progressValue = document.querySelector(".progress-value");
            let progressStartValue = 0,    
            progressEndValue = percent,    
            speed =50 ;
            
            let progress = setInterval(() => {
                progressStartValue++;
                if(percent==0)
                    --progressStartValue;
                progressValue.textContent = `${progressStartValue}%`
                if(percent==0)
                    circularProgress.style.background = `conic-gradient(#7d2ae8 ${3.6}deg,rgb(135, 249, 251) 0deg)`
                else
                    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg,rgb(135, 249, 251) 0deg)`
                if(progressStartValue >= progressEndValue){
                    clearInterval(progress);
                }    
            }, speed);
            document.getElementById("score").innerHTML="Score : "+ score+"/"+5;
        }
}
function resetQuiz()
{
    CurrentQuestion=0;
    score=0;
    document.getElementById("container").style.display = "none";
    ques.style.display="block";
    opt1.style.display="flex";
    opt2.style.display="flex";
    opt3.style.display="flex";
    opt4.style.display="flex";
    document.getElementById("next").style.display="block";
    showQuestion();
}
showQuestion();

    

