// ==================== THEME MANAGEMENT ====================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ==================== MOBILE NAVIGATION ====================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ==================== TYPED TEXT EFFECT ====================
const typedTextElement = document.getElementById('typedText');
const phrases = [
    'Front-End Developer',
    'Python Enthusiast',
    'Problem Solver',
    'BSCS Student'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Start typing effect
setTimeout(typeEffect, 1000);

// ==================== SKILLS DATA (SIRF AAP EDIT KARO) ====================
const skillsData = [
    {
        name: 'HTML/CSS',
        icon: 'fab fa-html5',
        level: 90,
        category: 'Frontend',
        status: 'excellent'
    },
    {
        name: 'JavaScript',
        icon: 'fab fa-js',
        level: 75,
        category: 'Frontend',
        status: 'good'
    },
    {
        name: 'React',
        icon: 'fab fa-react',
        level: 60,
        category: 'Frontend',
        status: 'intermediate'
    },
    {
        name: 'Python',
        icon: 'fab fa-python',
        level: 85,
        category: 'Language',
        status: 'excellent'
    },
    {
        name: 'Java',
        icon: 'fab fa-java',
        level: 70,
        category: 'Language',
        status: 'good'
    },
    {
        name: 'C/C++',
        icon: 'fas fa-code',
        level: 75,
        category: 'Language',
        status: 'good'
    },
    {
        name: 'SQL (DBMS)',
        icon: 'fas fa-database',
        level: 80,
        category: 'Database',
        status: 'good'
    },
    {
        name: 'DSA',
        icon: 'fas fa-sitemap',
        level: 70,
        category: 'Core',
        status: 'good'
    },
    {
        name: 'Computer Networking',
        icon: 'fas fa-network-wired',
        level: 65,
        category: 'Core',
        status: 'intermediate'
    },
    {
        name: 'Backend (Beginner)',
        icon: 'fas fa-server',
        level: 40,
        category: 'Backend',
        status: 'beginner'
    }
];

// Function to get status color
function getStatusColor(status) {
    switch(status) {
        case 'excellent': return '#10b981';
        case 'good': return '#3b82f6';
        case 'intermediate': return '#f59e0b';
        case 'beginner': return '#ef4444';
        default: return '#64748b';
    }
}

// Function to render skills
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = '';
    
    // Sort by status (excellent first)
    skillsData.sort((a, b) => {
        const statusOrder = { 'excellent': 4, 'good': 3, 'intermediate': 2, 'beginner': 1 };
        return statusOrder[b.status] - statusOrder[a.status];
    });
    
    skillsData.forEach((skill, index) => {
        const filledDots = Math.ceil(skill.level / 20); // 5 dots system (each dot = 20%)
        
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card animate-scale';
        skillCard.style.animationDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <div class="skill-header">
                <i class="${skill.icon}"></i>
                <div class="skill-info">
                    <h3>${skill.name}</h3>
                    <span class="skill-tag" style="background: ${getStatusColor(skill.status)}">${skill.status}</span>
                </div>
            </div>
            <div class="skill-level">
                ${Array(5).fill().map((_, i) => `
                    <div class="level-dot ${i < filledDots ? 'filled' : ''}"></div>
                `).join('')}
            </div>
            <div class="skill-progress-text">${skill.level}% Mastery</div>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
}

// Initialize skills (no localStorage, direct from array)
renderSkills();

// ==================== CONTACT FORM ====================
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const queryType = document.getElementById('queryType').value;
    const message = document.getElementById('message').value;
    
    /* 
    --- OLD WHATSAPP CODE (Commented out for future use) ---
    // Create WhatsApp message
    const whatsappMessage = `*New Inquiry from Portfolio*%0a%0a` +
        `*Name:* ${name}%0a` +
        `*Email:* ${email}%0a` +
        `*Query Type:* ${queryType}%0a` +
        `*Message:* ${message}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/923168465697?text=${whatsappMessage}`, '_blank');
    
    // Show success message
    alert('Message prepared! You will be redirected to WhatsApp.');
    --------------------------------------------------------
    */

    // Send email using EmailJS
    const serviceID = 'service_g90h5pw';
    const templateID = 'template_fzteumn';

    const templateParams = {
        from_name: name,
        from_email: email,
        query_type: queryType,
        message: message,
        to_email: 'gkabeersoomro@gmail.com'
    };

    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = 'Sending...';
    
    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            alert('Your message has been sent successfully to gkabeersoomro@gmail.com!');
            e.target.reset(); // Reset form
        }, (err) => {
            alert('Failed to send the message. Error: ' + JSON.stringify(err));
        })
        .finally(() => {
            submitBtn.innerText = originalBtnText;
        });
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== SCROLL REVEAL ANIMATION ====================
const animatedElements = document.querySelectorAll('[class*="animate-"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

animatedElements.forEach(el => observer.observe(el));

// ==================== ACTIVE NAV LINK ON SCROLL ====================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// ==================== UPDATE COPYRIGHT YEAR ====================
document.querySelector('footer p:first-child').innerHTML = 
    `© ${new Date().getFullYear()} Kabeer Soomro. All rights reserved.`;





// Theme Toggle ke saath animation trigger
// themeToggle.addEventListener('click', () => {
//     const currentTheme = body.getAttribute('data-theme');
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
//     body.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
    
//     // Image animation trigger
//     const profileImage = document.getElementById('profileImage');
//     profileImage.style.animation = 'none';
//     profileImage.offsetHeight; // Reflow trigger
//     profileImage.style.animation = 'spinIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
// });
