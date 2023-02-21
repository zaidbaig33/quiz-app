const firebaseConfig = {
    apiKey: "AIzaSyDBX7G86XG5bUD4MKi4PcGqnj6j7-Auo-o",
    authDomain: "quiz-app-ad2ec.firebaseapp.com",
    projectId: "quiz-app-ad2ec",
    storageBucket: "quiz-app-ad2ec.appspot.com",
    messagingSenderId: "9203354682",
    appId: "1:9203354682:web:bdbf0acb2d79cd76267903",
    measurementId: "G-T48W3W4BHS"
  };
  
  // Initialize Firebase
  let app = firebase.initializeApp(firebaseConfig);
  console.log(app)
//   const analytics = getAnalytics(app);
var quizData = [
    {
        question: "what is JawaScript?",
        a: "client side",
        b: "server lang",
        c: "html",
        d: "machine language",
        correct: "a",
    },
    {
        question: "what is the full meaning of CSS?",
        a: "Cascading Style Server",
        b: "Cascade Styling Surface",
        c: "Cascading Surface Sheet",
        d: "Cascading Style Sheets",
        correct: "d",
    },
    {
        question: "What is the most popular programming language in 2022?",
        a: "Java",
        b: "PHP",
        c: "html",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Which company developed JavaScript??",
        a: "Netscape .",
        b: "goolge",
        c: "mete company",
        d: "spice X",
        correct: "a",
      },
      {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Stylesheet",
        c: "JavaScript Object Notation",
        d: "Hyper Markup Language",
        correct: "a",
      },
      {
        question: "What year was JavaScript launched?",
        a: "1998",
        b: "1993",
        c: "1995",
        d: "2000",
        correct: "c",
      },
      {
        question: "All these are Server Side Language except?",
        a: "HTML",
        b: "PHP",
        c: "Node.js",
        d: "Ruby on rails",
        correct: "a",
      },
      {
        question: "All these are JavaScript Framework except?",
        a: "Laravel",
        b: "React.js",
        c: "Node.js",
        d: "Vue.js",
        correct: "a",
      }
]


var currInd = 0;
var score = 0;
var eleQues = document.getElementById("ques");
var eleOptA = document.getElementById("optA");
var eleOptB = document.getElementById("optB");
var eleOptC = document.getElementById("optC");
var eleOptD = document.getElementById("optD");
var radioEles = document.getElementsByTagName("input");

function getDataToRender() {
    var obj = quizData[currInd];

    eleQues.innerHTML = obj.question;
    eleOptA.innerHTML = obj.a
    eleOptB.innerHTML = obj.b
    eleOptC.innerHTML = obj.c
    eleOptD.innerHTML = obj.d
}

function selectedOption() {
    var res = ""
    for (var i = 0; i < radioEles.length; i++) {
        if (radioEles[i].checked) {
            res = radioEles[i].id
        }
    }
    return res;
}

function next() {
    var selectedOpt = selectedOption();
    if (selectedOpt == quizData[currInd].correct) {
        score++;
    }
    currInd++
    if (currInd < quizData.length) {
        getDataToRender();
    }

    else{
       
        var div = document.getElementById("mainDiv");
        div.innerHTML = `<h2>Your answered ${score} out of ${quizData.length} correctly. </h2>
        <button onclick = "location.reload()">Retake Quiz</button>`
    
    }
}
  
        

