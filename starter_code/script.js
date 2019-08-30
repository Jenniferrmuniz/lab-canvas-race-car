window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };


  function startGame() {
    
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.onload = function() { 
     ctx.drawImage(img, car.x, car.y, 50, 50); 
    }
    img.src = "./images/car.png";




   function drawBoardGame(){
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, 50, 650);
      ctx.fillRect(450, 0, 50, 650);

      ctx.fillStyle = 'gray';
      ctx.fillRect(50, 0, 15, 650);
       ctx.fillRect(435, 0, 15, 650);
      ctx.fillRect(80, 0, 340, 650);

      for(let i=0; i<650; i+=30){
        ctx.fillStyle = 'white';
        ctx.fillRect(245, i, 10, 20);
      }
    }




    function draw(car) {
     ctx.drawImage(img, car.x, car.y, 50, 50); 
    }




    function updateCanvas(){
      ctx.clearRect(0, 0, 500, 650);
      drawBoardGame();
      draw(car);


      for(let i=0; i<5; i++){
      //   console.log(obstacle[i])
      //   obstacle[i].drawObstacle();

      
      setTimeout(obstacle[i].drawObstacle(), 3000)
      }

      window.requestAnimationFrame(updateCanvas);
    }

    window.requestAnimationFrame(updateCanvas);



    
    var car = {
      x: 240,
      y: 500,
      moveLeft:  function() { car.x -= 25 },
      moveRight: function() { car.x += 25 },
    }






    class Obstacle  {
      constructor() {
        this.x = 0;
        this.y = 0;
      }

      createObstacle() {
        let minX = Math.ceil(80);
        let maxX= Math.floor(300);
        this.x = Math.floor(Math.random() * (maxX - minX) + minX);
        let minObstacleLength = Math.ceil(80);
        let maxObstacleLength = Math.floor(420-this.x);
        this.obstacleLength = Math.floor(Math.random() * (maxObstacleLength - minObstacleLength) + minObstacleLength);
  
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.obstacleLength, 15);
      }

      drawObstacle(){
        console.log('draw')
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.obstacleLength, 15);
        this.y += 1;

      }
    }

    drawBoardGame();
    draw(car);
    


    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: car.moveLeft();   break;
        case 39: car.moveRight();  break;
      }

    }
    
   

    let obstacle = [];


    for(let i=0; i<5; i++) {
      obstacle.push(new Obstacle());
      obstacle[i].createObstacle();
    }
  }
}