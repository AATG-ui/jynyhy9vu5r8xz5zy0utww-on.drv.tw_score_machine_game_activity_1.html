score = 0;

function scoreUpdate()
{
    score = score + 1;
    document.getElementById("score").innerHTML = "Score :" + score;
}

function scoreSave()
{
    localStorage.setItem("score",score);
}

function nextPage()
{
    window.Location = "activity_2.html";
}