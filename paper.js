class Paper
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.paperWidth=10;
		this.papeeHeight=20;		
		this.image=loadImage("paper.png")
		
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
		}
				

	}
	display()
	{

			
			

			push()
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

	
			
	}

}