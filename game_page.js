var player1=localStorage.getItem("player1_name");
var player2=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
document.getElementById("player_1").innerHTML=player1+" : ";
document.getElementById("player_2").innerHTML=player2+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn - "+player1;
document.getElementById("player_ans").innerHTML="Answer turn - "+player2;
function send(){
    var get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);
    charAt1=word.charAt(1);
    console.log(charAt1);

    length_divide_2=Math.floor(word.length/2);
    console.log(length_divide_2);

    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);
    question_word="<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box="<br>Ans. <input type='text' id='input_check_box' placeholder='Guess the word!'>";
    check_button="<br><br><button id='btn_check' class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if(answer==word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
        if(question_turn=="player1"){
            question_turn="player2";
            document.getElementById("player_question").innerHTML="Question turn - "+player2;
            console.log("question_turn"+player2);
        }
        else{
            question_turn="player1";
            document.getElementById("player_question").innerHTML="Question turn - "+player1;
            console.log("question_turn"+player1);
        }
        if(answer_turn=="player1"){
            answer_turn="player2";
            document.getElementById("player_ans").innerHTML="Answer turn - "+player2;
            console.log("answer_turn"+player2);
        }
        else{
            answer_turn="player1";
            document.getElementById("player_ans").innerHTML="Answer turn - "+player1;
            console.log("answer_turn"+player1);
        }
    document.getElemenntById("output").innerHTML="";
}