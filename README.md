# Kabeer Soomro - Personal Portfolio 🚀

A modern, responsive, and beautifully designed personal portfolio website built with HTML, CSS, and vanilla JavaScript. This project showcases my skills, projects, and provides a direct contact form to reach me.

## ✨ Features

- **Modern UI/UX:** Clean, elegant design with smooth scrolling and animations.
- **Dark/Light Mode:** Full support for both themes using CSS variables.
- **Fully Responsive:** Adapts seamlessly to all devices (Mobile, Tablet, Desktop).
- **Working Contact Form:** Integrated with **EmailJS**, allowing visitors to send emails directly to my inbox without needing a backend server.
- **Beautiful Popups:** Uses **SweetAlert2** for elegant success and error notifications.
- **Floating WhatsApp Button:** A quick call-to-action button for instant messaging (currently available in code, easily toggleable).
- **Interactive Skills Section:** Dynamic progress bars visualizing proficiency levels.

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Custom styling, Flexbox, Grid, CSS Variables, Animations
- **JavaScript (ES6+)** - Interactivity, DOM manipulation, form handling
- **EmailJS SDK** - Client-side email sending
- **SweetAlert2** - Toast notifications and modals
- **FontAwesome** - Icons

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
3. Create an Email Template with the following variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{query_type}}`
   - `{{message}}`
4. Set the **To Email** field in the template settings to your personal email address.
5. Copy your **Template ID** and **Public Key**.
6. Open `index.html` and replace the public key in the EmailJS init script:
   ```html
   emailjs.init("YOUR_PUBLIC_KEY");
   ```
7. Open `script.js` and update the IDs:
   ```javascript
   const serviceID = 'YOUR_SERVICE_ID';
   const templateID = 'YOUR_TEMPLATE_ID';
   ```

## 📂 File Structure

```text
/
├── index.html       # Main HTML document
├── style.css        # All styling and themes
├── script.js        # Logic for animations, form, and EmailJS
└── images/          # Profile and project images (GadgetHub.jpeg, img1.jpeg, etc.)
```

## 📝 License

This project is open-source and available for personal use and modification.
