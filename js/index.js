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

    ray1 = new Ray(new Point2D(350, 350));
    walls.push(new Boundary(new Point2D(30, 10), new Point2D(670, 10)));
    rays.push(ray1);
};
draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    walls.forEach((wall) => {
        wall.draw(context);
    });
    rays.forEach((ray) => {
        ray.draw(context);
        walls.forEach((wall) => {
            var point = ray.cast(wall);

            if (point) {
                context.beginPath();
                context.ellipse(point.X, point.Y, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
                context.stroke();

            }
        });
    });
};

mousemove = (event) => {
    ray1.lookAt(event.clientX, event.clientY);
    draw();
}

setup();
draw();