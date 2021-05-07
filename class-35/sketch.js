var ball;
var database;
var position;

function setup(){
createCanvas(500,500)
database=firebase.database();
var locofchild = database.ref("ball/position");
locofchild.on("value",readop,showerr)
ball = createSprite(250,250,20,20)
ball.shapeColor="orange"
}

function draw(){
background("white")
if(keyDown(LEFT_ARROW)){
    writePosition(-3,0)
}
 else if(keyDown(RIGHT_ARROW)){
writePosition(+3,0)
 }
 else if(keyDown(UP_ARROW)){
    writePosition(0,-3)
     }
     else if(keyDown(DOWN_ARROW)){
        writePosition(0,+3)
         }
 
drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
    x:ball.x+x,
    y:ball.y+y
})
}

function readop(data){
    position=data.val()
    ball.x=position.x;
    ball.y=position.y;
}

function showerr(){
    console.log("ERROR")
}