class Ground{
    constructor(x,y,w,h){
  
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x,y,w,h,options)
      this.width = w
      this.height = h
      World.add(world,this.body)
    }
    display(){
      var p = this.body.position
      push()
      rectMode(CENTER)
      stroke(255)
      fill("red")
      rect(p.x,p.y,this.width,this.height)
      pop()
    }
  }