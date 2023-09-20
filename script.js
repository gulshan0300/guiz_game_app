// const questionObj = 
//     {
//       category: 'Food & Drink',
//       id: 'qa-1',
//       correctAnswer: 'Three',
//       answers: ['Two', 'Three', 'Four', 'Five'],
//       question:
//         "How many pieces of bun are in a Mcdonald's Big Mac?",
//     };
    const quesJSON = [
    {
      correctAnswer: 'Three ',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      correctAnswer: 'L. Frank Baum',
      options: [
        'Suzanne Collins',
        'James Fenimore Cooper',
        'L. Frank Baum',
        'Donna Leon',
      ],
      question:
        "Which author wrote 'The Wonderful Wizard of Oz'?",
    },
    {
      correctAnswer: 'Atlanta United',
      options: [
        'Atlanta United',
        'Atlanta Impact',
        'Atlanta Bulls',
        'Atlanta Stars',
      ],
      question:
        'Which of these is a soccer team based in Atlanta?',
    },
    {
      correctAnswer: 'A Nanny',
      options: [
        'A Sow',
        'A Lioness',
        'A Hen',
        'A Nanny',
      ],
      question: 'A female goat is known as what?',
    },
    {
      correctAnswer: 'P. L. Travers',
      options: [
        'J. R. R. Tolkien',
        'P. L. Travers',
        'Lewis Carroll',
        'Enid Blyton',
      ],
      question:
        "Which author wrote 'Mary Poppins'?",
    },
                     ];

    let currentQuestion=0;
    let count=0;
    const TotalMarks=quesJSON.length;
    //accessing all element

    const questionDiv=document.getElementById("question");
    const answersEl=document.getElementById("answers");
    const scoreEl=document.getElementById("score");
    const nextEl=document.getElementById("next");
    const buttonEl=document.getElementById("btn");

    // const btnDiv=document.createElement("div");
    //  btnDiv.id="btn";
    //  answersEl.appendChild(btnDiv);

   // const options=shuffle(answers);

    nextEl.addEventListener('click',()=>{
        scoreEl.textContent=`Score: ${count}/${TotalMarks}`;
        nextQuestion();
    });
    

   function showQuestion(){
    //destructuring question one by one
    const {correctAnswer,options,question}=quesJSON[currentQuestion];
    questionDiv.textContent=question;
    //shuffling each question
    shuffle(options).forEach((key)=>{
        const btn=document.createElement("button");
        btn.textContent=key;
        answersEl.appendChild(btn);
        btn.addEventListener("click", ()=>{
            if(key===correctAnswer){
                count+=1;

            }
            else{
                count-=0.25;
            }
            console.log(key,correctAnswer,count);
            scoreEl.textContent=`Score: ${count}`;
            nextQuestion();
            

        });
    });
    //currentQuestion++;

   }
   showQuestion();
    
    //function for nextQuestion

    function nextQuestion(){
        currentQuestion++;
        answersEl.textContent="";
        if(currentQuestion>=quesJSON.length){
            questionDiv.textContent="Quiz Completed."
            buttonEl.remove();
        }
        else{
            showQuestion();
        }
    }

    //shuffle the options
    function shuffle(arr){
        for(let i=arr.length-1;i>=0;i--){
            const j=Math.floor(Math.random()*i);
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
        return arr;
    }

