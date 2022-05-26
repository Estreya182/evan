
var background, backgroundImage;
var Menubackground, MenubackgroundImage;
var gameState = "inicio"; 
var button, buttonImage;
var button2, button2Image;
var button3, button3Image;
var game = "menu"



function preload(){
backgroundImage = loadImage("Images/forest.jpg");
MenubackgroundImage = loadImage("Images/Menu.jpg");
buttonImage = loadImage("Images/starts.png");
button3Image = loadImage("Images/opciones-removebg-preview.png")
}

function setup(){
createCanvas (windowWidth, windowHeight);
textFont("Viner Hand ITC");
fill("black");
textSize(30);
strokeWeight (2.5); 
stroke("white");

button = createSprite(displayWidth/2 , displayHeight/2 - 10);
button.addImage(buttonImage);
button.scale = 0.3;
button.visible = true;

button2 = createSprite(displayWidth/2-200 , displayHeight/2 - 10);
button2.addImage(buttonImage);
button2.scale = 0.3;
button2.visible = false;

button3 = createSprite(displayWidth/2+50 , displayHeight/2 - 10);
button3.addImage(button3Image);
button3.scale = 0.3;
button3.visible = false;




}

function draw(){
background (backgroundImage);

if(gameState == "inicio"){
    background(MenubackgroundImage)
    
    text("Iniciar juego", displayWidth/2 - 100, displayHeight/2 - 80);
    
    textFont("Viner Hand ITC");
    fill("black");
    textSize(100);
    strokeWeight (2.5); 
    stroke("white");
    text("Dark Vessels", displayWidth/2 - 300, displayHeight/2 - 250);
     
}

  if(gameState === "menu"){
    background(MenubackgroundImage)
    text("Menú", displayWidth/2 - 300, displayHeight/2 - 250);
    button.destroy();  
    
    }
            
    menu ();
drawSprites();
}

function menu(){
    if(mousePressedOver(button)) {
        background(MenubackgroundImage)
        gameState = "menu";
       
      }
}
