let words=
[
    {
        jumbled:"erov",
        correct:"over"
    },
    {
        jumbled:"erwint",
        correct:"winter"
    },
    {
        jumbled:"dewi",
        correct:"wide"
    },
    {
        jumbled:"remo",
        correct:"more"
    },
    {
        jumbled:"roint",
        correct:"intro"
    },
    {
        jumbled:"etqui",
        correct:"quiet"
    },
    {
        jumbled:"rumesum",
        correct:"summer"
    },
    {
        jumbled:"sytro",
        correct:"story"
    },
    {
        jumbled:"nured",
        correct:"under"
    },
    {
        jumbled:"rigspn",
        correct:"spring"
    },
]

let currentWord=0;
let score=0;

function displayWord()
{
    document.querySelector("#j-word").innerText = 
    words[currentWord].jumbled;

    document.querySelector("#score").innerText="Score:"+ ""+ score;
}

displayWord();


function checkAnswer()
{
    let answer=document.querySelector("#inp").value;

        if(answer.toLowerCase()===words[currentWord].correct.toLowerCase()){

             score = score+10;

             document.querySelector("#correction").innerText="correct answer"
            
            }
            else{
                document.querySelector("#correction").innerText="wrong answer"
            }

        if(currentWord==words.length-1){

            let msg="";

                if(score===100){
                    msg="Amazing game "+score;
                    }
                    else if(score===80){
                        msg="Good Game "+score
                    }
                    else if(score<60){
                    msg="Good Try "+score
                    }

                alert(msg);

                location.reload();
        }
            else{
                currentWord++;
                displayWord();
                document.querySelector("#inp").value="";
            }
          

    
}















