# Kabeer Soomro - Personal Portfolio 🚀

A modern, responsive, and beautifully designed personal portfolio website built with HTML, CSS, and vanilla JavaScript. This project showcases my skills as a BSCS undergraduate and Front-End Developer, including my projects and a contact form.

## ✨ Features

- **Modern UI/UX:** Clean, elegant design with smooth scrolling, aurora backgrounds, and animations.
- **Dark/Light Mode:** Full support for both themes using CSS variables.
- **Fully Responsive:** Adapts seamlessly to all devices (Mobile, Tablet, Desktop).
- **Working Contact Form:** Integrated with **EmailJS**, allowing visitors to send emails directly to my inbox without needing a backend server.
- **Beautiful Popups:** Uses **SweetAlert2** for elegant success and error notifications.
- **Interactive Skills Section:** Dynamic progress bars visualizing proficiency levels.
- **Admin Panel (Static):** A simplified admin panel interface (backend removed for simplicity).

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Custom styling, Flexbox, Grid, CSS Variables, Animations, Glassmorphism
- **JavaScript (ES6+)** - Interactivity, DOM manipulation, form handling
- **EmailJS SDK** - Client-side email sending
- **SweetAlert2** - Toast notifications and modals
- **FontAwesome 6** - Icons
- **Vanilla Tilt JS** - 3D tilt effects on cards

## 💼 Featured Projects

- **Digital-library**
- **GadgetHub**
- **Syntexhub Landing Page**
- **Syntexhub TodoApp**
- **Syntexhub QuizApp**
- **Medical Imaging Assistant (Python/ML)**
- **Syntexhub WeatherApp**

## 🏢 Experience

- **Full Stack Development Intern** - *CodeAlpha* (Aug 2026 - Sep 2026)
- **Web Development Intern** - *SYNTECXHUB* (Aug 2026 - Sep 2026)

## 🚀 Getting Started

### Prerequisites

You don't need any special server to run this project. A modern web browser is enough!

### Running Locally

1. Clone or download this repository.
2. Open the project folder.
3. You can double-click `index.html` to open it in your browser.
   - *Alternative:* Use a local development server like VS Code's "Live Server" or run `python -m http.server 5050` in the terminal to avoid CORS issues.

### 📧 EmailJS Setup (Contact Form)

To make the contact form work for your own email address:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add your Email Service (e.g., Gmail) in the EmailJS dashboard and copy the **Service ID**.
3. Create an Email Template with the necessary variables (e.g., `{{name}}`, `{{email}}`, `{{message}}`).
4. Set the **To Email** field in the template settings to your personal email address.
5. Copy your **Template ID** and **Public Key**.
6. Open `index.html` and replace the public key in the EmailJS init script near the bottom of the file.
7. Open `script.js` and update the IDs in the contact form handler.

## 📂 File Structure

```text
/
├── index.html       # Main HTML document
├── admin.html       # Admin Panel UI
├── style.css        # All styling and themes
├── script.js        # Logic for animations, form, and EmailJS
├── admin.js         # Admin panel logic
└── images/          # Profile and project images (img1.jpeg, GadgetHub.jpeg, etc.)
```

## 📫 Contact Info

- **Email**: gkabeersoomro@email.com
- **Phone**: +92 316 8465697

## 📝 License

This project is open-source and available for personal use and modification.
