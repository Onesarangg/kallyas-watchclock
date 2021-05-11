var canvas = document.querySelector('#bong');
        var ctx = canvas.getContext("2d");
        var x = canvas.width/2;
        var y = canvas.height-30;
        var r =30;
        var dx = 2;
        var dy = -2;
            /*tao ball*/
        function creatBall() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI*2);
            ctx.fillStyle = "#8f6e43";
            ctx.fill();
            ctx.closePath();
            if(x + dx > canvas.width-r || x + dx < r) {
        dx = -dx;
        }
            if(y + dy > canvas.height-r || y + dy < r) {
        dy = -dy;
        }
            x += dx;
            y += dy;
        }
        setInterval(creatBall,10)