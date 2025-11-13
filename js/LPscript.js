// SoundWave - Enhanced JavaScript Functionality

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Loading screen removed for better user experience

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .hero-content, .section-title');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add particle effect for hero section
    createParticleEffect();
});

// Particle effect function
function createParticleEffect() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1;
    `;

    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        particleContainer.appendChild(particle);
    }

    heroSection.appendChild(particleContainer);
}

// Music Player Mock Functions
function playMusic() {
    const playBtn = document.querySelector('.fa-play');
    if (playBtn) {
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
        
        // Add playing animation
        const albumArt = document.querySelector('.album-art');
        if (albumArt) {
            albumArt.style.animation = 'spin 3s linear infinite';
        }
    }
}

function pauseMusic() {
    const pauseBtn = document.querySelector('.fa-pause');
    if (pauseBtn) {
        pauseBtn.classList.remove('fa-pause');
        pauseBtn.classList.add('fa-play');
        
        // Remove playing animation
        const albumArt = document.querySelector('.album-art');
        if (albumArt) {
            albumArt.style.animation = 'none';
        }
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    
    .particle {
        animation: float 3s ease-in-out infinite !important;
    }
    
    .loading-content {
        text-align: center;
        color: white;
    }
`;
document.head.appendChild(style);

// Enhanced form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// Theme switcher (for future implementation)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Initialize theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Space to play/pause (when not in input field)
    if (e.code === 'Space' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        e.preventDefault();
        const playBtn = document.querySelector('.fa-play');
        const pauseBtn = document.querySelector('.fa-pause');
        
        if (playBtn) {
            playMusic();
        } else if (pauseBtn) {
            pauseMusic();
        }
    }
    
    // Escape to close modals
    if (e.code === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) bsModal.hide();
        });
    }
});

// Add click handlers for player controls
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('fa-play')) {
        playMusic();
    } else if (e.target.classList.contains('fa-pause')) {
        pauseMusic();
    }
});

// Console welcome message
console.log(`
🎵 Welcome to MusicMate! 🎵
Built with ❤️ using modern web technologies
Version: 1.0.0
`);

// Export functions for global use
window.MusicMate = {
    playMusic,
    pauseMusic,
    toggleTheme,
    validateEmail,
    validatePassword
};
