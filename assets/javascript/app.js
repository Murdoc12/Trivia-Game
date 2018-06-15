
 var myQuestions = [
    {
        question: "What is Pikachu evolved form?",
        answers: {
            a: 'Raycha',
            b: 'Raichu',
            c: 'Raikou'
        },
        correctAnswer: 'b'
    },
    {
        question: "Where is the Eiffel Tower?",
        answers: {
            a: 'Las Vegas, Nevada',
            b: 'Scarton, PA',
            c: 'Paris, France'
        },
        correctAnswer: 'c'
    },
    
    
{       question: "What is the capital of Virgina?",
          answers: {
           a: 'Centerville',
           b: 'Jamestown',
           c:' Richmond'
          },

          correctAnswer: "c"

},

{       question: "Which one is NOT a member of the Beatles?",
          answers: {
           a: 'Ragu',
           b: 'Paul',
           c:' George'
          },

          correctAnswer: "a"

},
    
    
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // store the output and the answer choices
        var output = [];
        var answers;

       
        for(var i=0; i<questions.length; i++){
            
            
        answers = [];

           
            for(letter in questions[i].answers){

                
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'green';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}