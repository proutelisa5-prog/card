// Envelope opening
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

envelope.addEventListener('click', function() {
    if (!this.classList.contains('opened')) {
        this.classList.add('opened');
    }
});

// No button runs away (stays within mobile-friendly bounds)
function runAway(event) {
    const btn = event.target;
    
    // Get button dimensions
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;
    
    // Use mobile-friendly max width (420px) centered on screen
    const containerWidth = Math.min(420, window.innerWidth);
    const containerLeft = (window.innerWidth - containerWidth) / 2;
    
    // Calculate safe boundaries within the mobile container
    const maxX = containerLeft + containerWidth - btnWidth - 20;
    const maxY = window.innerHeight - btnHeight - 20;
    const minX = containerLeft + 20;
    const minY = 20;
    
    // Generate random position within safe boundaries
    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;
    
    btn.style.position = 'fixed';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
    btn.style.transition = 'all 0.3s ease';
}

// Yes button
function sayYes() {
    const questionCard = document.getElementById('questionCard');
    const successMessage = document.getElementById('successMessage');
    
    questionCard.classList.remove('active');
    successMessage.classList.add('active');
    
    // Create confetti
    createConfetti();
}

function createConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ff6b9d', '#ffb3d9'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px'; // Start from top of screen
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 30);
    }
}