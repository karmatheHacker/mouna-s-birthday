// Pop-up message on load
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        alert('Happy Birthday, Mouna! Have a magical day! 🎂🎉');
    }, 500);

    // Typewriter effect for 'Rabin loves you ❤️'
    const text = 'Rabin loves you ❤️';
    const typewriter = document.getElementById('typewriter');
    let i = 0;
    function type() {
        if (i <= text.length) {
            typewriter.textContent = text.slice(0, i);
            i++;
            setTimeout(type, 90);
        }
    }
    type();
});

// Animated confetti (canvas)
(function confettiEffect() {
    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    window.addEventListener('resize', function() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
    });
    // Confetti colors
    const colors = ['#f7971e', '#ffd200', '#43cea2', '#7f53ac', '#f76d6d', '#ffe082', '#e0c3fc'];
    // Confetti particles
    const confetti = [];
    for (let i = 0; i < 120; i++) {
        confetti.push({
            x: Math.random() * W,
            y: Math.random() * H - H,
            r: Math.random() * 8 + 4,
            d: Math.random() * 80 + 20,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngle: 0,
            tiltAngleIncremental: (Math.random() * 0.07) + 0.05
        });
    }
    function drawConfetti() {
        ctx.clearRect(0, 0, W, H);
        confetti.forEach(function(c) {
            ctx.beginPath();
            ctx.lineWidth = c.r;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x + c.tilt + (c.r / 3), c.y);
            ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.d / 5);
            ctx.stroke();
        });
        updateConfetti();
    }
    function updateConfetti() {
        confetti.forEach(function(c) {
            c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
            c.x += Math.sin(0.5);
            c.tiltAngle += c.tiltAngleIncremental;
            c.tilt = Math.sin(c.tiltAngle) * 15;
            if (c.y > H) {
                c.x = Math.random() * W;
                c.y = -10;
            }
        });
    }
    function animateConfetti() {
        drawConfetti();
        requestAnimationFrame(animateConfetti);
    }
    animateConfetti();
})(); 