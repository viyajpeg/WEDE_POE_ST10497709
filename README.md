# WEDE_POE_ST10497709

Project Overview 🍽️
Desify ZA is a fully responsive, multi-page website for an authentic Durban-Indian catering service based in Cape Town. The site is built using a modern, utility-first approach with Tailwind CSS to ensure a clean, vibrant, and flexible design across all devices.

The project was refactored from a single-page layout into five distinct, linked HTML pages to improve site organization and performance.

Key Features
Six Dedicated Pages: Home, Menus, Classes, Gallery, Testimony, and Contact.
Authentic Design: Uses a strong color palette (Red: #C62828, Gold: #FFD700) and custom typography (Marhey, Lexend).
Full Responsiveness: Layouts adapt seamlessly from mobile to desktop using Tailwind breakpoints (md: and lg:).
Functional Mobile Menu: Implements a JavaScript-driven hamburger menu for optimal usability on small screens.
🛠️ Technology Stack
Technology	Role
HTML5	Semantic structure for all five pages.
Tailwind CSS (CDN)	Utility-first framework for rapid styling, responsive layouts, and pseudo-classes (hover:).
Custom CSS (style.css)	External file for base styles, CSS reset, and custom font definitions.
JavaScript	Used for the single function: toggling the mobile navigation menu.
Google Fonts	Marhey (Headings) and Lexend (Body Text).


📜 Changelog (Record of Development)
October 2, 2025
Refactor: CSS Separation:

Removed all inline CSS and the <style> block from the HTML.

All styling is now managed by a mandatory external stylesheet (style.css), linked across all pages.

Layout Restructure:

The original single page was split into six dedicated, navigation-linked HTML files: index.html, menus.html, classes.html, Gallery.html, clients.html, and contact.html.

All internal navigation links were updated to reflect this new structure.

Responsive Navigation Fix (Hamburger Menu):

Implemented a JavaScript function combined with Tailwind classes (hidden, lg:flex) to create a functional, mobile-friendly hamburger menu system.

Styling Polish:

Comprehensive use of Tailwind utility classes was verified for all layout, typography, and decoration.

Pseudo-classes (like hover:, transition:) were consistently applied to enhance user interaction.

October 3, 2025 (Latest Updates)
Form Functionality & UX Enhancement (classes.html):

Implemented a structure for external form submission (e.g., Formspree/Netlify) on the "Book Your Spot" form, replacing the placeholder action.

Enhanced User Experience (UX) by adding a dedicated Message field, required attributes for necessary inputs, and clear placeholder text for guidance.

Advanced Contact Form Logic (contact.html):

Implemented advanced JavaScript functionality for the main inquiry form, including:

Simulated server-side processing with a visual "Sending..." status on the submit button.

A success message that dynamically replaces the form upon a simulated successful submission.

A resetForm() function to clear inputs and restore the form state after submission.

Component Refinement:

Updated input fields across all forms with improved focus styles (focus:ring-2) and standardized padding for better visual clarity.

_____________________________________________________________________________________________________________________________________

Reference List

Desifyza (n.d.). Profile. [Instagram]. Available at: https://www.instagram.com/desifyza/ [Accessed: 19 November 2025].

GeminiAI (n.d.). GeminiAI. [Unpublished computer program].

Google Fonts (n.d.). Google Fonts. Available at: https://fonts.google.com/ [Accessed: 19 November 2025].

Tailwind CSS (n.d.). Tailwind CSS. Available at: https://tailwindcss.com/ [Accessed: 19 November 2025].
