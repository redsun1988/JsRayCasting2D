var context;
var canvas;

var walls = [];
var rays = [];
var ray1;

setup = () => 
{
    canvas = document.getElementById("canvas");
    context = document.getElementById("canvas").getContext("2d");
    context.lineWidth = 3;
    context.strokeStyle = "white";


    var i;
    for (i = 0; i < 5; i++) {
        
        walls.push(new Boundary(new Point2D(660 * Math.random() + 30, 660 * Math.random() + 30), new Point2D(660 * Math.random() + 30, 660 * Math.random() + 30)));
    }
    //Borderds
    walls.push(new Boundary(new Point2D(30, 10), new Point2D(670, 10)));
    walls.push(new Boundary(new Point2D(10, 30), new Point2D(10, 670)));
    walls.push(new Boundary(new Point2D(30, 690), new Point2D(670, 690)));
    walls.push(new Boundary(new Point2D(690, 30), new Point2D(690, 670)));

    ray1 = new Ray(new Point2D(350, 350));
    rays.push(ray1);
};
draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    walls.forEach((wall) => {
        wall.draw(context);
    });
    rays.forEach((ray) => {
        ray.draw(context);
        var i;
        for(i = 0; i < walls.length; i++) {
            var wall = walls[i];
            var point = ray.cast(wall);

            if (point) {
                context.beginPath();
                context.ellipse(point.X, point.Y, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
                context.stroke();

                context.beginPath();
                context.moveTo(ray.start.X, ray.start.Y);
                context.lineTo(point.X, point.Y);
                context.stroke();
       
                break;
            }
        }
    });
};

mousemove = (event) => {
    ray1.lookAt(event.clientX, event.clientY);
    draw();
}

setup();
draw();