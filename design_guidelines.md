# DesiSpot Indian Restaurant - Design Guidelines

## Design Approach
**Reference-Based Design:** Following the Restics Temptics modern restaurant template aesthetic - vibrant, scroll-driven sections with smooth transitions, playful vector elements, and food-focused imagery adapted for authentic Indian cuisine.

## Core Design Elements

### Typography
- **Primary Font:** Poppins (Google Fonts)
  - Hero headlines: 700 weight, 56-72px
  - Section headings: 600 weight, 36-48px
  - Subheadings: 500 weight, 24-28px
  - Body text: 400 weight, 16-18px
- **Secondary Font:** Inter for menu items and pricing
  - Menu titles: 600 weight, 20px
  - Descriptions: 400 weight, 14-16px

### Layout System
**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 (desktop), py-12 (mobile)
- Card spacing: p-6 to p-8
- Element gaps: gap-6 to gap-8
- Container max-width: max-w-7xl with px-4 to px-8

### Component Library

**Navigation Header**
- Sticky header with logo (left), navigation links (center), "Order Online" CTA button (right)
- Logo: DesiSpot logo from attached file
- Links: Home, About, Menu, Specials, Reservations, Contact
- Header height: h-20, semi-transparent backdrop with blur effect on scroll

**Hero Section (Full-width, 85vh)**
- Large hero image showing Indian food spread or restaurant interior
- Logo overlay (centered, larger version)
- Main tagline: "Experience Authentic Indian Flavors in Ashburn"
- Subtitle: "Where Every Dish Tells a Story of Tradition"
- Primary CTA: "View Menu" + Secondary: "Reserve Table" (both with blurred backgrounds)
- Decorative vector elements (Indian-inspired patterns) floating at corners

**About Section**
- Two-column layout (60/40 split)
- Left: Two staggered images of restaurant interior/chef cooking
- Right: "About DesiSpot" heading, story paragraph, two highlight cards:
  - "Authentic Recipes" with icon
  - "Expert Chefs" with icon
- Decorative vector spice/herb illustrations

**Popular Dishes Showcase**
- Section heading: "Signature Favorites"
- 3-column grid (2 on tablet, 1 on mobile)
- 6 featured dishes with images
- Each card: Circular food image, dish name, brief description, price
- Dishes: Chicken Biryani, Butter Chicken, Paneer Tikka, Lamb Rogan Josh, Samosas, Dosa
- Subtle hover lift effect

**Special Menu Section**
- Tabbed interface: Appetizers, Curries, Tandoor, Breads, Desserts, Drinks
- 4-column grid per tab (2 on tablet, 1 on mobile)
- Menu item cards: Square food image, name, short description, price
- 8-10 items per category

**Reservation Form**
- Two-column split (40/60)
- Left: "Book Your Table" heading, decorative Indian pattern background
- Right: Form fields - Date, Time, Party Size, Name, Phone, Special Requests
- Large "Reserve Now" button
- Decorative food vectors around edges

**Testimonials**
- Large central image showing happy customers/dining scene
- 3 testimonial cards overlaying (carousel or static)
- Each card: Customer photo, quote, name, rating stars
- Decorative vector elements

**Contact & Location**
- Three-column layout
- Column 1: Address (Ashburn, VA details), phone, email
- Column 2: Hours of operation (formatted table)
- Column 3: Embedded Google Maps
- "Get Directions" CTA button

**Footer**
- Four-column layout
- Col 1: Logo, tagline, social media icons
- Col 2: Quick Links (About, Menu, Catering)
- Col 3: Hours & Contact
- Col 4: Newsletter signup form
- Bottom bar: Copyright, designed by credit

### Images

**Required Images (High-Quality Food Photography):**
1. **Hero:** Wide shot of vibrant Indian thali or multiple dishes on rustic table (1920x1080px minimum)
2. **About Section:** Restaurant interior with warm lighting, Chef preparing naan in tandoor
3. **Popular Dishes:** Professional food photos for 6 signature dishes (square, 800x800px)
4. **Menu Items:** 40+ dish images across all categories (600x600px)
5. **Testimonials:** 3 customer photos + 1 dining scene background
6. **Contact:** Storefront exterior photo

**Decorative SVG Elements:**
- Indian-inspired vector patterns (paisley, mandala motifs)
- Floating spice illustrations (chilies, cardamom, saffron strands)
- Abstract curry steam wisps

### Visual Treatments

**Cards & Containers**
- Rounded corners: rounded-2xl
- Subtle shadows: shadow-lg on hover, shadow-md default
- Borders: 2px accent borders on active menu tabs

**Buttons**
- Primary: Large, rounded-full, py-4 px-8
- Hero buttons: Blurred background (backdrop-blur-md, bg-white/20)
- Standard buttons: Solid fills with subtle hover scale (scale-105)

**Interactions**
- Smooth scroll behavior between sections
- Menu item hover: Subtle scale (1.05) and shadow increase
- Tab switching: Smooth fade transitions
- Minimal animations - focus on polish over motion

**Accessibility**
- Minimum contrast ratio 4.5:1 for all text
- Clear focus states on all interactive elements
- Alt text for all food images
- Form labels properly associated

### Multi-Column Strategy
- Hero: Single column, centered content
- About: 2 columns (image + text)
- Popular Dishes: 3 columns (responsive)
- Menu: 4 columns (responsive to 2, then 1)
- Testimonials: 3 overlapping cards
- Contact: 3 columns (responsive to 1)
- Footer: 4 columns (responsive to 2, then 1)

**Critical Design Notes:**
- Match Restics' playful vector aesthetic with Indian cultural elements
- Ensure food photography is hero element throughout
- Maintain generous whitespace between sections (py-20)
- Use consistent vertical rhythm
- Every section should feel complete and purposeful with 3-5 meaningful elements