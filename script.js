const Phoenix=document.getElementById('Phoenix');
const Flame=document.getElementById('Flame');
const Wind=document.getElementById('Wind');
const Ice=document.getElementById('Ice');
const Thunder=document.getElementById('Thunder');
const userScoreElement = document.getElementById('user-score');
const compScoreElement = document.getElementById('comp-score');
const msgElement = document.getElementById('msg');
const choiceElement = document.getElementsByClassName('choice');


let userscore = 0;
let compscore = 0;

//Triggering event-listners
Phoenix.addEventListener('click',function()
{
    controlgame('Phoenix');
});


Flame.addEventListener('click',function()
{
    controlgame('Flame');
});


Wind.addEventListener('click',function()
{
    controlgame('Wind');
});

Ice.addEventListener('click',function()
{
    controlgame('Ice');
});

Thunder.addEventListener('click',function()
{
    controlgame('Thunder');
});

//Logic implementation
function controlgame(userchoice) 
{

    let computerchoice = getcomputerChoice(); 
    let Result = getResult(userchoice, computerchoice);

    msgElement.innerHTML = `You choose ${userchoice} and computer chooses ${computerchoice}`;
    msgElement.style.color = "white";

    if (Result === "winner") 
    {
        userscore++;
        userScoreElement.innerHTML = userscore;
        msgElement.innerHTML += "!!!You win";
        msgElement.style.color="red";
    }

    else if (Result === "loser") 
    {
        compscore++;
        compScoreElement.innerHTML = compscore;
        msgElement.innerHTML += ",You lose";
    } 
    else 
    {
        msgElement.innerHTML += "<br>,It is a draw";
    }

    if (userscore >= 25 || compscore >= 25)
    {
        endGame();
    }

}

function endGame()
{
    if (userscore > compscore)
    {
        msgElement.innerHTML = "Congratulations! You are the ultimate champion!";
        msgElement.style.fontSize="40px";
        msgElement.style.fontWeight="900";
        msgElement.style.color="green";
        msgElement.style.fontStyle="italic";
        msgElement.style.fontFamily = "'Pacifico', cursive";
        
    } 
    else if (compscore > userscore) 
    {
        msgElement.innerHTML = "Sorry, you lost. Better luck next time!";
        msgElement.style.color="red";
        msgElement.style.fontSize="40px";
        msgElement.style.fontStyle="italic";
        msgElement.style.fontFamily = "'Pacifico', cursive";
    } 

    
    
}



//getting the choice of computer
function getcomputerChoice()
{
const choices = ['Phoenix','Flame','Wind','Ice','Thunder'];
const randomIndex =  Math.floor(Math.random() *5);
return choices[randomIndex];    
}
  
//fetching the final result
function getResult(user, computer) 
{
    if (user === computer) 
    {
        return 'draw';
    }
     else if (
        (user === 'Flame' && computer === 'Wind') ||
        (user === 'Flame' && computer === 'Ice') ||

        (user === 'Phoenix' && computer === 'Flame') ||
        (user === 'Phoenix' && computer === 'Wind') ||

        (user === 'Wind' && computer === 'Ice') ||
        (user === 'Wind' && computer === 'Flame') ||

        (user === 'Ice' && computer === 'Flame') ||
        (user === 'Ice' && computer === 'Phoenix') ||

        (user === 'Thunder' && computer === 'Phoenix') ||
        (user === 'Thunder' && computer === 'Flame')
    ) 
    {
        return 'winner';
    } 
    else
    {
        return 'loser';
    }
}


