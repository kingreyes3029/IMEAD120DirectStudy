var textpst = [ 0, 40, 100, 120, 140 , 260];
var sentecespst = ['Harrisburg University','I am an interactive media student learning how to design video games.', 'I know how to use game engines like Unreal and Unity.', 'I am learning how to use JavaScript. '];
function setup() {
  createCanvas(800, 800); 
}

function draw() {
  background(100); 
  textStyle(BOLDITALIC);
  textSize(32);
   text(sentecespst[0], textpst [ 5], textpst [ 1]);
  
  textSize(14);
  text( sentecespst[1],textpst [ 0], textpst [ 2]);
  text(sentecespst[2], textpst [ 0] ,textpst [ 3]);
  text( sentecespst[3],textpst [ 0] , textpst [ 4]);
  
  
  
}
