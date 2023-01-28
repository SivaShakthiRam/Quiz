var pos=0,board,status,qus,choices,A,B,C,cor=0;
var questions=[
    ["How much hits did Manirathnam gave?","7","12","2","B"],
    ["Why Manirathnam is called as the gem of Indian cinema?","Action","thriller","Minimalism","C"],
    ["Manirathnams cult classic?","Iruvar","Raavanan","Kadal","A"],
    ["Guru is the story of","Ambani","Tata","Mahidra","A"]
];

function DisplayQuestion(){
    board=document.getElementById("board");
    if(pos>=questions.length){
        board.innerHTML="<h2>You got "+cor+"of"+questions.length+"<h2>";
        document.getElementById("status").innerHTML="Quiz Completed";
        pos=0;
        cor=0;
        return false;
    }
    document.getElementById("status").innerHTML="Question "+(pos+1)+" of "+questions.length;
    qus=questions[pos][0];
    A=questions[pos][1];
    B=questions[pos][2];
    C=questions[pos][3];
    board.innerHTML="<h3>"+qus+"</h3>";
    board.innerHTML+="<label><input type='radio' name='choices' value='A' >"+A+"</input></label>"
    board.innerHTML+="<label><input type='radio' name='choices' value='B' >"+B+"</input></label>"
    board.innerHTML+="<label><input type='radio' name='choices' value='C' >"+C+"</input></label>"
    board.innerHTML+="<button onclick='checkAnswer()'>Submit Answer</button>"

}

function checkAnswer(){
    choices=document.getElementsByName("choices");
    for(var i=0;i<choices.length;i++){
        if(choices[i].checked){
            choice=choices[i].value;
        }
    }
    if(choice==questions[pos][4]){
        cor++;
    }
    pos++;
    DisplayQuestion();

}