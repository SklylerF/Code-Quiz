var btnEl = document.getElementById("Btn")
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("timer")
var containerEl = document.querySelector(".qts")


var secondsLeft = 5;
var subTime = -60;
btnEl.addEventListener('click', setTime)

function setTime() {
   
    btnEl.style.display = 'none';
     // question
    let questionEl1 = document.createElement('h1')
    let questionNode1 = document.createTextNode('what is more specific?')
    questionEl1.appendChild(questionNode1)
    document.body.appendChild(questionEl1);
    // answeres
    let AQuestion1 = document.createElement('button')
    let questionNode2 = document.createTextNode('A) class')
    AQuestion1.appendChild(questionNode2)
    document.body.appendChild(AQuestion1)
    // answer2
    let BQuestion1 = document.createElement('button')
    let questionNode3 = document.createTextNode('B) id')
    BQuestion1.appendChild(questionNode3)
    document.body.appendChild(BQuestion1)
    // if fuction for clicking answeres
    BQuestion1.addEventListener('click', correct)
    AQuestion1.addEventListener('click', wrong)

    function correct() {
        questionEl1.style.display = 'none';
        AQuestion1.style.display = 'none';
        BQuestion1.style.display = 'none';

        let correctEl = document.createElement('p')
        let correctNode = document.createTextNode('correct anser!')
        correctEl.appendChild(correctNode)
        document.body.appendChild(correctEl)

        let nextBtn = document.createElement('button')
        let nextNode = document.createTextNode('next question')
        nextBtn.appendChild(nextNode)
        document.body.appendChild(nextBtn)

        nextBtn.addEventListener('click', nextQuestion)
    }
    function wrong() {

        questionEl1.style.display = 'none';
        AQuestion1.style.display = 'none';
        BQuestion1.style.display = 'none';


        let wrongEl = document.createElement('p')
        let wrongNode = document.createTextNode('incorrect answer')
        wrongEl.appendChild(wrongNode)
        document.body.appendChild(wrongEl)

        let nextBtn = document.createElement('button')
        let nextNode = document.createTextNode('next question')
        nextBtn.appendChild(nextNode)
        document.body.appendChild(nextBtn)

        nextBtn.addEventListener('click', nextQuestion)
    }
    // question 2
    function nextQuestion() {
        btnEl.style.display = 'none';
        questionEl1.style.display = 'none';
        AQuestion1.style.display = 'none';
        BQuestion1.style.display = 'none';
        // question
        let questionEl2 = document.createElement('h1')
        let question2Node1 = document.createTextNode('where do you link your sript?')
        questionEl2.appendChild(question2Node1)
        document.body.appendChild(questionEl2);
        // answer 1
        let AQuestion2 = document.createElement('button')
        let question2Node2 = document.createTextNode('A) in the head')
        AQuestion2.appendChild(question2Node2)
        document.body.appendChild(AQuestion2)
        // answer2
        let BQuestion2 = document.createElement('button')
        let question2Node3 = document.createTextNode('B) in the body')
        BQuestion2.appendChild(question2Node3)
        document.body.appendChild(BQuestion2)

        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft + "Timer";
    
    
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
            
                document.body.removeChild(questionEl2)
                document.body.removeChild(AQuestion2)
                document.body.removeChild(BQuestion2);
                sendMessage();
            }
        }, 1000)
        function sendMessage() {
            timeEl.textContent = "Times up!";
        }
    }
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "Timer";


        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            document.body.removeChild(questionEl1)
            document.body.removeChild(BQuestion1)
            document.body.removeChild(AQuestion1)

          
            sendMessage();
        }
    }, 1000)
}
function sendMessage() {
    timeEl.textContent = "Times up!";
}


