class Dustbin{
constructor(x,y){
    var options={
        isStatic:true			
        }
    this.x=x
    this.y=y
    this.left = Bodies.rectangle(this.x,this.y,20,100,options)
    this.base = Bodies.rectangle(this.x+100,this.y+40,200,20,options)
    this.right = Bodies.rectangle(this.x+200,this.y,20,100,options)
    this.image = loadImage("dustbingreen.png");
    World.add(world,this.left)
World.add(world,this.base)
World.add(world,this.right)

}
display(){
    var lpos=this.left.position
    var bpos=this.base.position
    var rpos=this.right.position
push();
imageMode(CENTER);
image(this.image,bpos.x,bpos.y-80,200,200)
fill('white');
rect(lpos.x,lpos.y,20,100)
rect(bpos.x,bpos.y,200,20)
rect(rpos.x,rpos.y,20,100)
 
pop();
}
}