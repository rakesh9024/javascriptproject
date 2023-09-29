const questions=[
    {
        'que':'Which of the following hyper text markup language',
        'a':'css',
        'b':'Javascript',
        'c':'Html',
        'd':'Python',
        'correct':'c',
        

    },
    {
        'que':'Which  language your fav.',
        'a':'css',
        'b':'Javascript',
        'c':'java',
        'd':'Python',
        'correct':'b',
        

    },
    {
        'que':'Which language most use in the real world',
        'a':'html',
        'b':'Javascript',
        'c':'react',
        'd':'Python',
        'correct':'d',
        

    }

]
let index=0;
let total=questions.length;
let right=0,wrong=0;

const quesbox=document.getElementById("quesbox")
const optionInput=document.querySelectorAll(".options")
const loadQuestions=()=>{
    if(index===total){
     return endQuiz()  
    }
    reset();
    const data=questions[index]
    quesbox.innerText= `${index+1}${data.que}`;
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;

}
const submitQuiz=()=>{
    const data=questions[index]
    const ans=getAnswer()
    if(ans===data.correct){
right++
    }
    else{
        wrong++;
    }
    index++
    loadQuestions();
    return;
}
const getAnswer=()=>{
    let answer;
    optionInput.forEach(
        (input)=>{
            if(input.checked)
           answer=input.value;
        }
    )
    return answer;
}


const reset=()=>{
    optionInput.forEach(
        (input)=>{
         input.checked=false   
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`<h3> Thank you </h3>
    <h2>${right}/${total} are correct</h2> `
}


loadQuestions();
