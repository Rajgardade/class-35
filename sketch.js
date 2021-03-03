var ball;
var database;
var position;
var ballpos

function setup(){
    createCanvas(500,500);

    database = firebase.database();

    ballpos = database.ref("ball/position")
    ballpos.on("value",reading)

    ball = createSprite(200,300,10,10);
    ball.shapeColor = "red";

}

function draw(){
    background("white");

    if(position !== undefined){
    
    if(keyDown(LEFT_ARROW)){
        writing(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writing(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writing(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writing(0,+1);
    }
    drawSprites();
}
}

function writing(x,y){
   database.ref("ball/position").set({

    'x' : position.x +x,
    'y' : position.y +y


                                                    })   
}

function reading(data){

    position = data.val()
    ball.x = position.x
    ball.y = position.y

}