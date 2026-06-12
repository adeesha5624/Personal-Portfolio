# Human-Computer Interaction (HCI) Portfolio Report

## Introduction
This report outlines the Human-Computer Interaction (HCI) techniques and rules applied in the development of my personal React portfolio. The goal of this portfolio is not only to showcase my work but also to demonstrate a deep understanding of user-centered design, cognitive psychology principles, and accessible web development.

## 1. Fitts's Law
**Principle:** The time required to rapidly move to a target area is a function of the ratio between the distance to the target and the width of the target. Larger, closer targets are easier to click.

**Application in Portfolio:**
- **Navigation Links:** The primary navigation links in the header (`Navbar.jsx`) have ample padding and a large clickable area, making them easy to select on both desktop and mobile devices.
- **Call-to-Action (CTA) Buttons:** The "Check out my work" button in the Hero section and "Say Hello" button in the Contact section use large padding (`padding: 0.875rem 2rem;`) to increase the target size. This reduces the precision required for the user to click them, facilitating a seamless user journey.

## 2. Hick's Law
**Principle:** The time it takes for a person to make a decision increases logarithmically with the number and complexity of choices.

**Application in Portfolio:**
- **Minimalist Navigation:** The top navigation provides exactly four distinct choices (Home, About, Projects, Contact). By limiting the options, cognitive load is reduced, allowing users to find what they're looking for immediately.
- **Uncluttered Interface:** By utilizing ample whitespace (using padding and margins) and a clear grid layout, the user isn't overwhelmed by too many elements at once. The "About" and "Projects" sections present information cleanly without distracting extraneous details.

## 3. Gestalt Principles
**Principle:** Principles of human perception that describe how humans group similar elements, recognize patterns, and simplify complex images when we perceive objects.

**Application in Portfolio:**
- **Law of Proximity:** In the `Projects.jsx` component, the title, description, tech stack, and links for each individual project are grouped closely together within a 'card' layout (`.project-card`). This visually signals that they belong to the same project.
- **Law of Similarity:** All project cards look identical in structure and behavior (hover effects, typography). The technologies are styled identically as a list. This allows the user to quickly learn the interface pattern and understand how to consume the information.

## 4. Visual Hierarchy and Contrast
**Principle:** Organizing elements in a way that implies importance, guiding the user's eye from the most important information to the least important.

**Application in Portfolio:**
- **Typography Sizes:** The `Hero.jsx` component uses a large `h1` tag (`clamp(3rem, 6vw, 5rem)`) for the name, followed by a slightly smaller, muted `h2` for the subtitle. This establishes a clear reading order.
- **Color Contrast:** A dark background (`#030014`) is paired with light text (`#f8fafc`) to ensure high readability. The primary accent color (Violet/Blue gradient) is used sparingly for interactive elements and section overlines to draw attention precisely where needed.

## 5. Feedback and Affordance
**Principle:** The system should always keep users informed about what is going on through appropriate feedback. Affordance refers to the properties of an object that show users the actions they can take.

**Application in Portfolio:**
- **Hover States:** Buttons and links feature smooth hover animations (e.g., `transform: translateY(-2px)` and box-shadow glows). This visual feedback confirms to the user that the element is interactive.
- **Micro-animations:** The use of `react-scroll` ensures that when a user clicks a navigation link, they are smoothly scrolled to the relevant section rather than jumping instantly. This provides spatial context and orientation feedback.

## 6. Accessibility (A11y)
**Principle:** Designing systems so they are usable by people with various disabilities.

**Application in Portfolio:**
- **Semantic HTML:** The portfolio uses correct semantic tags such as `<nav>`, `<main>`, `<section>`, `<footer>`, `<header>`, allowing screen readers to interpret the page structure correctly.
- **ARIA Labels:** Interactive elements that only contain icons (like GitHub and External Link icons in the Projects section) are given descriptive `aria-label` attributes (`aria-label="GitHub Link"`).
- **Keyboard Navigation:** The application ensures that all interactive elements are reachable via the `Tab` key, with a customized `:focus-visible` outline to assist users relying on keyboard navigation.

## Conclusion
By actively applying these HCI principles, the portfolio provides a frictionless, intuitive, and accessible user experience. The design choices prioritize the user's cognitive limits, ensure high legibility, and provide a satisfying interactive experience.

---

**Live Portfolio URL:** https://my-hci-portfolio-react.vercel.app/ 
*(Note: Please deploy the site and replace this placeholder URL with your actual live deployment link before submission).*
