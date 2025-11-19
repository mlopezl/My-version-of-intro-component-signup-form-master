# Frontend Mentor – Intro Component With Sign Up Form Solution

This is my solution to the **Intro Component With Sign Up Form** challenge on [Frontend Mentor](https://www.frontendmentor.io/).  
The challenge helped me improve my **HTML, CSS and JavaScript skills** by building a responsive signup form with real-time validation and visual error feedback.

---

## 📌 Table of Contents
- [Overview](#overview)
- [The Challenge](#the-challenge)
- [Design](#design)
- [Links](#links)
- [My Process](#my-process)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)

---

## Overview
This project is a responsive signup form component with validation and interactive error feedback.  
Users can enter their personal information and submit the form. If any field is incorrect or empty, the user receives visual error messages and icon alerts.

### The interface features:
- A modern and responsive layout  
- Validation for all inputs (first name, last name, email, password)  
- Dynamic error messages and icons  
- Real-time UI feedback when the form is submitted  
- Full reset of the form on successful submission

---

## The Challenge
Users should be able to:
- Complete the form and submit it
- See error messages and icons when:
  - A field is left empty
  - The email format is invalid
- View active, hover and error states for all interactive elements
- Experience a clean and optimized layout on both desktop and mobile devices

---

## Design
### Desktop Design
![Desktop Design](./design/desktop-design.jpg)

### Active States
![Desktop Design](./design/active-states.jpg)

### Mobile Design
<img src="./design/mobile-design.jpg" width="200px" alt="Mobile design layout">

---

## Links
- **Solution URL:** [GitHub Repository](https://github.com/mlopezl/My-version-of-intro-component-signup-form-master)  
- **Live Site URL:** [Live Demo](https://mlopezl.github.io/My-version-of-intro-component-signup-form-master/)

## My Process
- Structured the layout using **semantic and organized HTML**, based on the **BEM naming convention**
- Styled the component with **CSS**, using **custom properties (variables)** for scalable color management
- Used **Flexbox** to align elements and support a fluid responsive layout
- Implemented a responsive design using media queries
- Added **JavaScript client-side validation** to check input values on form submission
- Displayed **custom error messages and icons dynamically** through DOM manipulation
- Reset the form after successful validation and displayed a confirmation message

---

## Built With
- **HTML5**
- **CSS3**
- **Flexbox**
- **Media Queries / Responsive Design**
- **JavaScript (DOM & Form Validation)**

---

## What I Learned
- How to build form validation logic using `JavaScript` and `preventDefault()` to stop native submission
- How to manipulate the DOM to **add and remove classes dynamically** based on input state
- How to **show and hide custom error messages and icons** using `nextElementSibling`, `parentElement`, and class toggling
- How to use **CSS Custom Properties (variables)** to maintain scalable theming
- How to combine **Flexbox + Media Queries** to create a clean responsive layout

---
