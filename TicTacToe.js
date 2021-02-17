var pic = document.querySelectorAll("img");
var board = ["", "", "", "", "", "", "", "", "", ""];

for(let i=0;i<pic.length;i++)
    pic[i].addEventListener("click", play);

function play()
{
    this.src="https://cdn3.iconfinder.com/data/icons/greek-latin-symbols-solid-1/24/capital-x-512.png";
    this.className = "x";
    board[this.id] = this.className;
    this.removeEventListener("click", play);
    win();
    if(end())
        document.getElementById("result").innerHTML = "Draw";
    else
    {
        do{var rand = Math.floor(Math.random() * 9);
        }while(pic[rand].className !== "empty");
        pic[rand].src = "https://i.dlpng.com/static/png/1421945-open-o-png-2000_2000_preview.png";
        pic[rand].className = "o";
        board[pic[rand].id] = pic[rand].className;
        pic[rand].removeEventListener('click', play);
        win();
        
    }
}

function end()
{
    var check = document.querySelectorAll("img");
    for(let i=0;i<check.length;i++){
        if(check[i].classList.contains("empty"))
            return false;
    }
    return true;
}

function remove()
{
    for(let i=0;i<pic.length;i++)
        pic[i].removeEventListener('click', play);
}

function win()
{
    if(board[0] === "x" && board[1] === "x" && board[2] === "x")
    {
        document.getElementById("result").innerHTML = "Player X win !!!";
        remove();
    }
    else if(board[0] === "o" && board[1] === "o" && board[2] === "o")
    {
        document.getElementById("result").innerHTML = "Player O win !!!";
        remove();
    }
    else if(board[3] === "x" && board[4] === "x" && board[5] === "x")
    {
        document.getElementById("result").innerHTML = "Player X win !!!";
        remove();
    }
    else if(board[3] === "o" && board[4] === "o" && board[5] === "o")
    {
        document.getElementById("result").innerHTML = "Player O win !!!";
        remove();
    }
    else if(board[6] === "x" && board[7] === "x" && board[8] === "x")
    {
        document.getElementById("result").innerHTML = "Player X win !!!";
        remove();
    }
    else if(board[6] === "o" && board[7] === "o" && board[8] === "o")
    {
        document.getElementById("result").innerHTML = "Player O win !!!";
        remove();
    }
    else if(board[0] === "x" && board[3] === "x" && board[6] === "x")
    {
        document.getElementById("result").innerHTML = "Player X win !!!";
        remove();
    }
    else if(board[0] === "o" && board[3] === "o" && board[6] === "o")
    {
        document.getElementById("result").innerHTML = "Player O win !!!";
        remove();
    }
    else if(board[1] === "x" && board[4] === "x" && board[7] === "x")
    {
        document.getElementById("result").innerHTML = "Player X win !!!";
        remove();
    }
    else if(board[1] === "o" && board[4] === "o" && board[7] === "o")
    {
        document.getElementById("result").innerHTML = "Player O win !!!";
        remove();
    }
    else if(board[2] === "x" && board[5] === "x" && board[8] === "x")
    {
        document.getElementById("result").innerHTML = "Player X win !!!";
        remove();
    }
    else if(board[2] === "o" && board[5] === "o" && board[8] === "o")
    {
        document.getElementById("result").innerHTML = "Player O win !!!";
        remove();
    }
    else if(board[0] === "x" && board[4] === "x" && board[8] === "x")
    {
        document.getElementById("result").innerHTML = "Player X win !!!";
        remove();
    }
    else if(board[0] === "o" && board[4] === "o" && board[8] === "o")
    {
        document.getElementById("result").innerHTML = "Player O win !!!";
        remove();
    }
    else if(board[2] === "x" && board[4] === "x" && board[6] === "x")
    {
        document.getElementById("result").innerHTML = "Player X win !!!";
        remove();
    }
    else if(board[2] === "o" && board[4] === "o" && board[6] === "o")
    {
        document.getElementById("result").innerHTML = "Player O win !!!";
        remove();
    }
}