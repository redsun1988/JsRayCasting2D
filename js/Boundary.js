class Point2D {
    constructor(x, y) {
        this.X = x;
        this.Y = y;
    }
}

class Boundary {
     constructor(start, end) {
         this.start = start;
         this.end = end;
     }
     draw = (ctx) => {
         ctx.beginPath();
         ctx.moveTo(this.start.X, this.start.Y);
         ctx.lineTo(this.end.X, this.end.Y);
         ctx.stroke();
     };
}