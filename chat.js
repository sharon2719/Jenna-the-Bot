// The chatbot asking qusetions to user
var chat_questions=[
    "Hello, I am Jenna the Bot.What's your name?",

    "Where are you from?",

    "How old are you now?",

    "It was lovely talking to you :). I gotta go now.Bye,and remember to keep safe COVID is still around.I don't want to loose you",

];
var num=0
var output=document.querySelector('#result');
output.innerHTML=chat_questions[0]
var input_box=document.querySelector('#response');
var chat_box=document.querySelector('#botbox');

// Setting conditions on what should happen if the message is or not displayed
function displayResponse(){
    var inputResponse = input_box.value;
    if(input_box.value===""){
        alert("please type a message")
    }
    // nested if...else statements
    else{
        if(num===0){
            output.innerHTML=`<p>Hello ${inputResponse} nice meeting you</p>`
            input_box.value=""
            input_box.setAttribute("placeholder","Jenna typing");
            num ++
            setTimeout(changeQuestion,4500)

        }
        else if(num===1){
            output.innerHTML=`<p>${inputResponse} is an amazing place.</p>`
            input_box.value=""
            input_box.setAttribute("placeholder","Jenna typing");
            num++
            setTimeout(changeQuestion,4500)

        }
        else if(num===2){
            output.innerHTML=`<p>So,it means you are born in ${2021-inputResponse}</p>`
            input_box.value=""
            input_box.setAttribute("placeholder","Jenna typing");
            num++
            setTimeout(changeQuestion,4500)

        }
        

    }
}
function changeQuestion(){
    input_box.setAttribute("placeholder","Enter your message");
    output.innerHTML=chat_questions[num];
    if(num===3){
        output.innerHTML= ` It was lovely talking to you :). I gotta go now.Bye,and remember to keep safe COVID is still around.I don't want to loose you `;
        input_box.value="";
        document.querySelector(".input").getElementsByClassName.display="none"

    }


}
// when the reply button is clicked it sends the reply and the results are displayed 
function submitMessage(){
    displayResponse();
}