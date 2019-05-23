class Ray {

    constructor(start) {
        this.start = start;
        this.direction = new Point2D(start.X, start.Y + 1);
        this.scalingRasio = 30;
    }

    lookAt = (x, y) => {
        var local_x = x - this.start.X;
        var local_y = y - this.start.Y;

        var lenght = Math.sqrt(Math.pow(local_x,2) + Math.pow(local_y,2)); 
        this.direction = new Point2D(local_x / lenght * this.scalingRasio + this.start.X, local_y / lenght  * this.scalingRasio + this.start.Y);
    }

    cast = (wall) => {
        var x1 = wall.start.X;
        var y1 = wall.start.Y;
        var x2 = wall.end.X;
        var y2 = wall.end.Y;
        
        var x3 = this.start.X;
        var y3 = this.start.Y;
        var x4 = this.start.X + this.direction.X;
        var y4 = this.start.Y + this.direction.Y;

        d = (x1-x2)*(y3-y4) - (y1-y2)*(x3-x4);
        if (d == 0) {
            return false;
        }
        var t = ((x1 - x3)*(y3-y4) - (y1-y3)*(x3-x4)) / d;
        var u = -((x1 - x2)*(y1-y3) - (y1-y2)*(x1-x3)) / d;
        }

    draw = (ctx) => {
        ctx.beginPath();
        ctx.ellipse(this.start.X, this.start.Y, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.start.X, this.start.Y);
        ctx.lineTo(this.direction.X, this.direction.Y);
        ctx.stroke();
    }
}