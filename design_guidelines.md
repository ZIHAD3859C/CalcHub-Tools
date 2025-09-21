# CalcHub Tools Design Guidelines

## Design Approach
**Reference-Based Approach** inspired by modern productivity tools like Notion and Linear, combined with calculator-specific sites. Focus on clean, professional aesthetics that build trust for financial and health calculations while maintaining excellent usability.

## Core Design Elements

### Color Palette
**Light Mode:**
- Primary: 239 84% 67% (Modern blue for trust and professionalism)
- Secondary: 220 13% 18% (Dark charcoal for text)
- Background: 0 0% 100% (Pure white)
- Surface: 220 14% 96% (Light gray for cards)

**Dark Mode:**
- Primary: 239 84% 67% (Same blue, works well on dark)
- Secondary: 220 9% 46% (Medium gray for text)
- Background: 222 84% 5% (Very dark blue-gray)
- Surface: 220 13% 9% (Slightly lighter dark surface)

### Typography
- **Headings**: Inter (600-700 weight) for calculator titles and main headings
- **Body**: Inter (400-500 weight) for descriptions and content
- **UI Elements**: Inter (500-600 weight) for buttons and labels

### Layout System
Consistent spacing using Tailwind units: **4, 6, 8, 12, 16** for padding, margins, and gaps. This creates harmonious rhythm throughout the interface.

### Component Library

**Navigation:**
- Sticky header with logo, dark/light mode toggle
- Clean navigation menu with calculator categories
- Breadcrumb navigation on tool pages

**Calculator Interface:**
- Card-based layout with subtle shadows
- Input fields with clear labels and placeholder text
- Prominent "Calculate" buttons with primary color
- Results displayed in highlighted sections
- Reset functionality clearly accessible

**Content Sections:**
- Featured calculators grid (3-4 columns on desktop)
- Blog preview cards with featured images
- Tool description cards with consistent formatting
- FAQ accordion sections

**AdSense Integration:**
- Header banner (728x90)
- Sidebar rectangles (300x250)
- In-content rectangles between calculator and article content
- Footer banner placements

## Key Design Principles

1. **Trust & Professionalism**: Clean lines, consistent spacing, professional color palette
2. **Instant Feedback**: Real-time calculations without page refreshes
3. **Scannable Content**: Clear hierarchy, generous whitespace, organized sections
4. **Mobile Excellence**: Touch-friendly inputs, readable text sizes, optimized layouts

## Images
**Hero Section**: Large hero image showing diverse people using calculators/planning finances (1200x600px). Professional, bright, and welcoming tone.

**Calculator Icons**: Simple, consistent SVG icons for each calculator category (finance, health, math, etc.)

**Blog Images**: Stock photos related to each article topic, optimized for web (800x400px)

**Background Elements**: Subtle geometric patterns or gradients for visual interest without distraction

## Accessibility & Performance
- High contrast ratios in both modes
- Keyboard navigation support
- Fast loading with optimized images
- Progressive enhancement for JavaScript features
- Screen reader friendly labels and descriptions