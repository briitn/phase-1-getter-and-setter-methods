// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius=radius
    }
    get diameter(){
        return this.radius*2
    }
    get circumference(){
        return Math.PI*this.diameter
    }
    get area(){
        return Math.PI*(this.radius*this.radius)
    }

    set diameter(diameter){
        console.log('hi')
        return this.radius=diameter/2
    }
    set circumference(circumference){
        
        return this.radius=circumference/Math.PI/2
    }
    set area(area){
        
       return this.radius=Math.sqrt(area)/2
    }
}

let circle1=new Circle(3)