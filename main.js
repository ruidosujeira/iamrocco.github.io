/**
 * ruidosujeira - Advanced Portfolio
 * Focus: Performance, Clean Code, Minimalist Aesthetics
 */

// Canvas Setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for no transparency on base

let width, height;
let particles = [];
const mouse = { x: -1000, y: -1000 };

// Configuration
const CONFIG = {
    particleCount: window.innerWidth < 768 ? 50 : 100,
    connectionDistance: 120,
    mouseDistance: 200,
    baseSpeed: 0.5,
    color: '#333333'
};

// Resize Handler
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();
}

// Particle Class
class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * CONFIG.baseSpeed;
        this.vy = (Math.random() - 0.5) * CONFIG.baseSpeed;
        this.size = Math.random() * 1.5 + 0.5;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction (Repulsion/Noise)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CONFIG.mouseDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (CONFIG.mouseDistance - distance) / CONFIG.mouseDistance;

            // "Ruido" effect: Jitter when close to mouse
            const jitter = (Math.random() - 0.5) * 2;

            this.vx -= forceDirectionX * force * 0.5 + jitter * 0.05;
            this.vy -= forceDirectionY * force * 0.5 + jitter * 0.05;
        }
    }

    draw() {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const count = Math.floor((width * height) / 15000); // Density based
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    // Clear with trail effect
    ctx.fillStyle = 'rgba(5, 5, 5, 0.2)'; // Low opacity for trails
    ctx.fillRect(0, 0, width, height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // Draw connections
    ctx.strokeStyle = CONFIG.color;
    ctx.lineWidth = 0.5;

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONFIG.connectionDistance) {
                const opacity = 1 - (distance / CONFIG.connectionDistance);
                ctx.strokeStyle = `rgba(60, 60, 60, ${opacity})`;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

function updateCursor(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // Direct update for dot
    cursor.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`;

    // Smooth update for follower is handled by CSS transition, just set position
    // But for better performance we use requestAnimationFrame for the follower lag
    // However, CSS transition is cleaner for "clean code" unless we want complex physics.
    // Let's stick to the CSS transition defined in style.css for the follower, 
    // but we need to update its position JS side if we want it to follow exactly or use CSS variables.
    // Actually, updating style.top/left in JS is better for the follower to avoid layout thrashing if done right,
    // but transform is best.

    follower.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`;
}

// Glitch Effect on Title Hover
const title = document.querySelector('.glitch');
let glitchInterval;

title.addEventListener('mouseenter', () => {
    const originalText = title.getAttribute('data-text');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let iterations = 0;

    clearInterval(glitchInterval);
    glitchInterval = setInterval(() => {
        title.innerText = originalText
            .split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');

        if (iterations >= originalText.length) {
            clearInterval(glitchInterval);
        }

        iterations += 1 / 3;
    }, 30);
});

// Event Listeners
window.addEventListener('resize', resize);
window.addEventListener('mousemove', updateCursor);

// Init
resize();
animate();

console.log(
    "%c ruidosujeira %c Tooling Engineer ",
    "background: #050505; color: #fff; padding: 5px; border-radius: 3px 0 0 3px; font-weight: bold;",
    "background: #ff3e00; color: #fff; padding: 5px; border-radius: 0 3px 3px 0;"
);

// Command Palette Logic
const cmdOverlay = document.getElementById('cmd-palette');
const cmdInput = document.getElementById('cmd-input');
const cmdList = document.getElementById('cmd-list');

const commands = [
    {
        id: 'github',
        label: 'GitHub',
        icon: '↗',
        shortcut: 'G',
        action: () => window.open('https://github.com/ruidosujeira', '_blank')
    },
    {
        id: 'email',
        label: 'Email',
        icon: '@',
        shortcut: 'E',
        action: () => window.location.href = 'mailto:hello@ruidosujeira.com' // Placeholder
    },
    {
        id: 'copy-url',
        label: 'Copy URL',
        icon: '🔗',
        shortcut: 'C',
        action: () => {
            navigator.clipboard.writeText(window.location.href);
            // Could add toast here
        }
    },
    {
        id: 'theme',
        label: 'Toggle Theme',
        icon: '◑',
        shortcut: 'T',
        action: () => {
            // Simple invert for now, or could toggle class
            const current = document.documentElement.style.getPropertyValue('--bg');
            if (!current || current === '#050505') {
                document.documentElement.style.setProperty('--bg', '#e0e0e0');
                document.documentElement.style.setProperty('--text', '#050505');
                document.documentElement.style.setProperty('--text-dim', '#666');
                CONFIG.color = '#cccccc'; // Particles
            } else {
                document.documentElement.style.setProperty('--bg', '#050505');
                document.documentElement.style.setProperty('--text', '#e0e0e0');
                document.documentElement.style.setProperty('--text-dim', '#666');
                CONFIG.color = '#333333';
            }
        }
    }
];

let isOpen = false;
let selectedIndex = 0;
let filteredCommands = [...commands];

function togglePalette() {
    isOpen = !isOpen;
    if (isOpen) {
        cmdOverlay.classList.add('visible');
        cmdInput.value = '';
        cmdInput.focus();
        filterCommands('');
    } else {
        cmdOverlay.classList.remove('visible');
    }
}

function renderCommands() {
    cmdList.innerHTML = '';
    filteredCommands.forEach((cmd, index) => {
        const li = document.createElement('li');
        li.className = `cmd-item ${index === selectedIndex ? 'selected' : ''}`;
        li.innerHTML = `
            <div style="display:flex; align-items:center;">
                <span class="cmd-item-icon">${cmd.icon}</span>
                <span>${cmd.label}</span>
            </div>
            ${cmd.shortcut ? `<span class="cmd-item-shortcut">${cmd.shortcut}</span>` : ''}
        `;
        li.onclick = () => {
            cmd.action();
            togglePalette();
        };
        cmdList.appendChild(li);
    });
}

function filterCommands(query) {
    filteredCommands = commands.filter(cmd =>
        cmd.label.toLowerCase().includes(query.toLowerCase())
    );
    selectedIndex = 0;
    renderCommands();
}

// Keyboard Events
document.addEventListener('keydown', (e) => {
    // Toggle Cmd+K
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        togglePalette();
    }

    if (!isOpen) return;

    if (e.key === 'Escape') {
        togglePalette();
    }

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % filteredCommands.length;
        renderCommands();
    }

    if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + filteredCommands.length) % filteredCommands.length;
        renderCommands();
    }

    if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
            togglePalette();
        }
    }
});

cmdInput.addEventListener('input', (e) => {
    filterCommands(e.target.value);
});

// Close on click outside
cmdOverlay.addEventListener('click', (e) => {
    if (e.target === cmdOverlay) {
        togglePalette();
    }
});
