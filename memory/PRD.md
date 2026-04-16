# Portfolio Website - Sandeep Dash

## Original Problem Statement
Create a portfolio website based on https://sandeep-dash.lovable.app/ for Sandeep Dash, Senior Software Engineer.

## User Choices
- **Content**: Same as reference (Sandeep Dash, Senior Software Engineer details)
- **Design**: Light theme with colorful section backgrounds (user requested)
- **Features**: Hero, About, Skills, Projects, Contact form
- **Contact Form**: Simple form with submission message (no email backend)
- **Profile Image**: User's uploaded image
- **Headline**: "Crafting Scalable Software Solutions"
- **Projects**: Added MetLife SBR project with detailed description

## Architecture
- **Frontend**: React 19 with Tailwind CSS, Framer Motion animations
- **Backend**: FastAPI with MongoDB for contact form storage
- **Design System**: Swiss Brutalist with Cabinet Grotesk, IBM Plex Sans, JetBrains Mono fonts

## Core Requirements (Static)
1. Hero section with name, title, CTA buttons
2. About section with profile image and bio
3. Skills section with 4 categories (Languages, Frameworks, Databases, Tools)
4. Projects section with 3 featured projects
5. Contact section with form and direct contact info
6. Responsive design with mobile navigation

## What's Been Implemented (Jan 2026)
- [x] Header with glass-morphism navigation and custom SD logo
- [x] Hero section with animated entrance, headline "Crafting Scalable Software Solutions"
- [x] About section with user's profile image (uploaded, zoomed for professional look)
- [x] Skills bento grid - 12 categories with complete skills list
- [x] Certifications section - Generative AI Bootcamp & Claude 101 with certificate images + lightbox
- [x] Projects cards - 4 projects including MetLife SBR and Reconciliation Systems (Federal Bank)
- [x] Contact section with direct contact info (no form)
- [x] Footer with GitHub and LinkedIn social links (correct URLs)
- [x] Backend /api/contact endpoint for form submissions
- [x] Light theme with colorful gradient sections (blue hero, purple skills, sky certs, green projects, yellow contact)

## Testing Status
- Backend: 100% (5/5 endpoints working)
- Frontend: 100% (all components working)
- Integration: 100% (contact form working)

## Prioritized Backlog
### P0 (Done)
- All core sections implemented

### P1 (Future)
- Add downloadable resume/CV
- Add project case study pages
- Add blog/articles section

### P2 (Nice to have)
- Add dark/light theme toggle
- Add testimonials section
- Add interactive skills chart

## Next Tasks
1. User can customize content (name, bio, skills, projects)
2. Add resume download functionality
3. Add project detail pages
