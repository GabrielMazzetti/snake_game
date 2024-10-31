window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    //variables
    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tail = 3;

    //function call every 100 milliseconds
    setInterval(jogo, 100);
}

function jogo(){

    //display configuration
    ctx.fillStyle = "#298089";
    //distancia borda horizontal, distancia borda vertical, largura, altura
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //snake position
    snake.push({x: positionX, y: positionY});

    //config snake
    ctx.fillStyle = "#00f102";
    for(let i = 0; i < snake.length; i++){
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1);
    }
}