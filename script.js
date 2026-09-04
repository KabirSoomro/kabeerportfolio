// ==================== THEME MANAGEMENT ====================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const profileImage = document.getElementById('profileImage') || document.querySelector('.image-wrapper img');

function updateThemeImage(theme) {
    if (profileImage) {
        profileImage.style.opacity = '0';
        setTimeout(() => {
            profileImage.src = theme === 'dark' ? 'img1.jpeg' : 'img2.jpeg';
            profileImage.style.opacity = '1';
        }, 150);
    }
}

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
updateThemeImage(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeImage(newTheme);
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

// ==================== SKILLS LOGIC ====================
let skillsData = [
    { name: 'HTML/CSS', icon: 'fab fa-html5', color: '#e34f26', level: 90, category: 'Frontend', status: 'excellent' },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e', level: 75, category: 'Frontend', status: 'good' },
    { name: 'React', icon: 'fab fa-react', color: '#61dafb', level: 60, category: 'Frontend', status: 'intermediate' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776ab', level: 85, category: 'Language', status: 'excellent' },
    { name: 'Java', icon: 'fab fa-java', color: '#b07219', level: 70, category: 'Language', status: 'good' },
    { name: 'C/C++', icon: 'fas fa-code', color: '#00599c', level: 75, category: 'Language', status: 'good' },
    { name: 'SQL (DBMS)', icon: 'fas fa-database', color: '#00758f', level: 80, category: 'Database', status: 'good' },
    { name: 'DSA', icon: 'fas fa-sitemap', color: '#10b981', level: 70, category: 'Core', status: 'good' },
    { name: 'Computer Networking', icon: 'fas fa-network-wired', color: '#8b5cf6', level: 65, category: 'Core', status: 'intermediate' },
    { name: 'Flutter (Dart)', icon: 'fas fa-mobile-alt', color: '#42A5F5', level: 70, category: 'Frontend', status: 'good' },
    { name: 'Backend (Beginner)', icon: 'fas fa-server', color: '#64748b', level: 40, category: 'Backend', status: 'beginner' }
];

function getStatusColor(status) {
    switch(status) {
        case 'excellent': return '#10b981';
        case 'good': return '#3b82f6';
        case 'intermediate': return '#f59e0b';
        case 'beginner': return '#ef4444';
        default: return '#64748b';
    }
}

function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';
    
    // Sort by status (excellent first)
    skillsData.sort((a, b) => {
        const statusOrder = { 'excellent': 4, 'good': 3, 'intermediate': 2, 'beginner': 1 };
        return statusOrder[b.status] - statusOrder[a.status];
    });
    
    skillsData.forEach((skill, index) => {
        const filledDots = Math.ceil(skill.level / 20); // 5 dots system
        
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card animate-scale';
        skillCard.style.animationDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <div class="skill-header">
                <i class="${skill.icon}" style="color: ${skill.color}"></i>
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

// Render skills directly
renderSkills();

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const queryType = document.getElementById('queryType').value;
        const message = document.getElementById('message').value;

        // Send email using EmailJS
        const serviceID = 'service_g90h5pw';
        const templateID = 'template_fzteumn';

        const createExtraFieldHTML = (label, value) => {
            if (!value) return "";
            return `
            <tr>
              <td class="info-card" style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0; border-left: 4px solid transparent;">
                <span style="color: #94a3b8; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">${label}</span><br>
                <span style="color: #0f172a; font-size: 16px; font-weight: 500; display: inline-block; margin-top: 4px;">${value}</span>
              </td>
            </tr>`;
        };

        let myExtraFields = "";
        myExtraFields += createExtraFieldHTML("Query Type", queryType);

        const templateParams = {
            from_name: name,
            from_email: email,
            reply_to: email,
            extra_details: myExtraFields,
            message: message,
            to_email: 'gkabeersoomro@gmail.com',
            website_name: 'My Portfolio'
        };

        const submitBtn = document.querySelector('#contactForm button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        
        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                Swal.fire({
                    title: 'Sent Successfully!',
                    text: 'Thank you for reaching out. I will get back to you soon.',
                    icon: 'success',
                    confirmButtonColor: '#4f46e5',
                    confirmButtonText: 'Great!'
                });
                e.target.reset();
            }, (err) => {
                Swal.fire({
                    title: 'Oops!',
                    text: 'Something went wrong while sending the message.',
                    icon: 'error',
                    confirmButtonColor: '#ef4444'
                });
            })
            .finally(() => {
                submitBtn.innerText = originalBtnText;
            });
    });
}

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
const footerYearElement = document.querySelector('footer p:first-child');
if (footerYearElement) {
    footerYearElement.innerHTML = `© ${new Date().getFullYear()} Kabeer Soomro. All rights reserved.`;
}

// ==================== HEADER SCROLL EFFECT ====================
const header = document.querySelector('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ==================== CUSTOM CURSOR ====================
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

// Only run on non-touch devices
if (window.matchMedia("(pointer: fine)").matches && cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .project-card, .skill-card, .theme-toggle');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hovering');
        });
    });
}

// ==================== SCROLL PROGRESS BAR ====================
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
});

// ==================== MAGNETIC BUTTONS ====================
const magneticButtons = document.querySelectorAll('.btn');
magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
    });
    
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'translate(0px, 0px)';
    });
});

// ==================== CURSOR CLICK EFFECT ====================
window.addEventListener('mousedown', () => {
    const outline = document.querySelector('.cursor-outline');
    if(outline) outline.style.transform = 'translate(-50%, -50%) scale(0.7)';
});
window.addEventListener('mouseup', () => {
    const outline = document.querySelector('.cursor-outline');
    if(outline) outline.style.transform = 'translate(-50%, -50%) scale(1)';
});


