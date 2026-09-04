const SUPABASE_URL = 'https://mzwrqohsinlaukmjyise.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_1Go9oKS_KssYipfY6qvY_w_c87dHXVa';

let supabase;
let loginSection, dashboard, loginForm, logoutBtn, loginError, addSkillForm, skillMsg;

try {
    // Initialize Supabase
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // DOM Elements
    loginSection = document.getElementById('loginSection');
    dashboard = document.getElementById('dashboard');
    loginForm = document.getElementById('loginForm');
    logoutBtn = document.getElementById('logoutBtn');
    loginError = document.getElementById('loginError');

    addSkillForm = document.getElementById('addSkillForm');
    skillMsg = document.getElementById('skillMsg');
} catch (err) {
    alert("Script Initialization Error: " + err.message);
}

if (supabase) {
    // Check session on load
    async function checkSession() {
        // BYPASS LOGIN: Hamesha dashboard show karega
        showDashboard();
    }

// Auth State Change Listener
// supabase.auth.onAuthStateChange((event, session) => {
//     if (event === 'SIGNED_IN') {
//         showDashboard();
//     } else if (event === 'SIGNED_OUT') {
//         showLogin();
//     }
// });

function showDashboard() {
    loginSection.style.display = 'none';
    dashboard.style.display = 'block';
}

function showLogin() {
    loginSection.style.display = 'block';
    dashboard.style.display = 'none';
}

// Login Handler
window.handleLogin = async function() {
    try {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }
        
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        
        // Reset previous errors
        loginError.style.display = 'none';
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        emailInput.style.borderColor = 'var(--border-color)';
        passwordInput.style.borderColor = 'var(--border-color)';
        
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        
        if (error) {
            const msg = error.message.toLowerCase();
            
            if (msg.includes('user not found') || msg.includes('not found')) {
                emailError.textContent = 'Account not found. Email check karein.';
                emailError.style.display = 'block';
                emailInput.style.borderColor = 'var(--danger)';
            } else if (msg.includes('password')) {
                passwordError.textContent = 'Password ghalat hai.';
                passwordError.style.display = 'block';
                passwordInput.style.borderColor = 'var(--danger)';
            } else if (msg.includes('invalid login credentials')) {
                // Supabase usually returns this for BOTH wrong email or wrong password due to security.
                emailError.textContent = 'Account not found ya Password ghalat hai';
                emailError.style.display = 'block';
                passwordError.textContent = 'Account not found ya Password ghalat hai';
                passwordError.style.display = 'block';
                emailInput.style.borderColor = 'var(--danger)';
                passwordInput.style.borderColor = 'var(--danger)';
            } else if (msg.includes('email')) {
                emailError.textContent = error.message;
                emailError.style.display = 'block';
                emailInput.style.borderColor = 'var(--danger)';
            } else if (msg.includes('password')) {
                passwordError.textContent = error.message;
                passwordError.style.display = 'block';
                passwordInput.style.borderColor = 'var(--danger)';
            } else {
                loginError.textContent = error.message;
                loginError.style.display = 'block';
            }
        }
    } catch (e) {
        alert("System Error (Network/CORS): " + e.message + "\nCheck console for details.");
        console.error(e);
    }
};

// Logout Handler
logoutBtn.addEventListener('click', async () => {
    await supabase.auth.signOut();
});

// Add Skill Handler
addSkillForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const skillData = {
        name: document.getElementById('skillName').value,
        icon: document.getElementById('skillIcon').value,
        color: document.getElementById('skillColor').value,
        level: parseInt(document.getElementById('skillLevel').value),
        category: document.getElementById('skillCategory').value,
        status: document.getElementById('skillStatus').value
    };
    
    const { data, error } = await supabase.from('skills').insert([skillData]);
    
    if (error) {
        skillMsg.textContent = 'Error: ' + error.message;
        skillMsg.style.color = 'var(--danger)';
    } else {
        skillMsg.textContent = 'Skill added successfully!';
        skillMsg.style.color = 'var(--success)';
        addSkillForm.reset();
        setTimeout(() => { skillMsg.textContent = ''; }, 3000);
    }
});

// Initialize
    checkSession();
}
