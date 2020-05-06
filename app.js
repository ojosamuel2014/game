
 const btnStart = document.getElementById('quiz-start');
 const footer = document.querySelector('.footer');
 const nextButton = document.querySelector('#next');
 const quizWrapper = document.querySelector('.quiz_wrapper'); 
 const quizBox = document.querySelector('.quiz_box'); 
 const quizQuestion = document.querySelector('.quiz_heading');
 const quizList = document.querySelector('.quiz_options'); 
 const quiz = document.querySelector('.quiz');
 const quizEnd = document.querySelector('#quiz_end');
 const score = document.querySelector('.quiz_score');
 let counter = document.querySelector('.quiz_counter');
 console.log(counter); 
 let points = 0,  
 currentQuestion = 1; 

let sortQuestions,
    currentIndex; 
  
function startQuiz () {
    quizWrapper.classList.add('hide'); 
     
    setTimeout(() => {
        footer.classList.remove('footer-fix'); 
        quizBox.classList.remove('hide');   
    }, 500);  
    
    currentIndex = 0; 
    points = 0; 
    sortQuestions = questions.sort( () => {
        return Math.random() - .5;  
    });
    nextQuesiton();  

    
}

const resetState = () => {
    nextButton.classList.add('hide');
    if (quizList.firstChild) {
        quizList.innerHTML = "";  
    }
     
}

const nextQuesiton = () => {
    resetState();
    showQuestions(sortQuestions[currentIndex]);   
}



const showQuestions = (question  => {
    quizQuestion.textContent = question.question; 
    question.answers.forEach(answer => {
        const button = document.createElement('button'); 
        button.innerHTML = answer.option; 
        button.classList.add('quiz_options-list');
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', checkAnswer); 

        quizList.appendChild(button);  
        
    });

    counter.innerText = `Q: ${(currentIndex + 1)} / ${sortQuestions.length}`
}); 



const checkAnswer = (event) => {
    selectedOption = event.target;
    correct = selectedOption.dataset.correct;
    if (correct) {
        
        points += 10; 
        score.textContent = `Score: ${points}`;
        
        console.log(score); 
    } 


    Array.from(quizList.children).forEach(button => {
        setStatus(button, button.dataset.correct); 
    }); 

    

    if (sortQuestions.length > currentIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showResults(); 
    }



}

const setStatus = (element, correct) => {
    clearStatus(element); 
    if (correct) { 
        element.classList.add('correct'); 
    } else {
        element.classList.add('wrong');  
    }


}

const clearStatus = (element) => {
    element.classList.remove('correct');
    element.classList.remove('wrong'); 
}

const showResults = () => {

    quiz.innerHTML = "";
    footer.classList.add('footer-fix');
    document.body.classList.add('body-flex');
    const markup = `
    <div class="quiz_end quiz-margin">
        <h1 class="end_heading-1">Game Over!</h1>
        <h2 class="end_heading-2">
        Your score is: 
        </h2>
        <p class="score">${points}</p>
        <button id="btn_reload" class="btn_reload next">
            Return to homepage
        </button>
    </div>
    `;

    quiz.insertAdjacentHTML('afterbegin', markup);
    
    document.getElementById('btn_reload').addEventListener('click', () => {
        window.location.reload(); 
    }); 
   
}

 // Questions, answers and options
  

 const questions = [
    
    {
        question: "Web pages are written using?",
        answers: [
            {option: 'FTP', correct: false},
            {option: 'HTTP', correct:false},
            {option: 'URL', correct: false},
            {option: 'HTML',  correct: true}
        ]  
    }, 
    
    {   
        question: `What is the correct syntax for referring to an external script called "app.js"?`,
        answers:  [
            {option: '&lt;script name="app.js"&gt;', correct: false},
            {option: '&lt;script href="app.js"&gt;', correct: false},
            {option: '&lt;script src="app.js"&gt;', correct: true},
            {option: '&lt;script url="app.js"&gt;', correct: false} 
        ]
        
    },
    
    { 
        question:"How do you write 'Hello World' in an alert box?",

        answers: [  
            {option: "alert('Hello World');", correct: true},
            {option: "msg('Hello World');", correct: false},
            {option: "alertBox('Hello World');", correct: false},
            {option: "prompt('Hello World');",  correct: false}
        ]  


    },
     
    
    { 
        question: "What does 'ALU' stands for?", 

        answers: [  
            {option: "Arithmetic Long Unit", correct: false},
            {option: "Arithmetic and Logical Units", correct: true},
            {option: "All Longer Units", correct: false},
            {option: "Around Logical Units",  correct: false}
        ]  

    },
    
    { 
        question: "Which of the following is not a database management software?",

        answers: [  
            {option: "MySQL", correct: false},
            {option: "Oracle", correct: false},
            {option: "Sybase", correct: false},
            {option: "COBOL",  correct: true}
        ]  
    }

]

 

btnStart.addEventListener('click', startQuiz); 
nextButton.addEventListener('click', () => {
    currentIndex++;
    nextQuesiton();  
});


const date = new Date().getFullYear();
document.querySelector('#year').innerHTML = date;  