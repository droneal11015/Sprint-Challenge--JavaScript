// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(properties){
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height;
    } 
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}


//stretch task
class CubeMaker extends CuboidMaker {
    constructor(properties) {
        super(properties);
        this.edge = properties.edge //volume for cube is edge^3, surface area is 6*edge^2
   } 
    cubeVolume(){
        return Math.pow(this.edge, 3);
    }
    cubeSurfaceArea(){
        return 6 * Math.pow(this.edge, 2);
    }
}

 const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });

 const cube = new CubeMaker({
    edge: 4
  });


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());