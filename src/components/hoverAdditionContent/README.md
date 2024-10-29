# Hover Card Component

A React component that implements a card with a smooth hover reveal effect. When users hover over or focus on the card, the image and title slide up to reveal additional content below.

## Features

- Smooth hover/focus transition effects
- Accessible focus states
- Responsive image handling
- Mobile-friendly touch interactions
- Built with React and Tailwind CSS

## Installation

1. Ensure you have React and Tailwind CSS installed in your project:

```bash
npm install react
npm install -D tailwindcss
```

2. Copy the `HoverCard` component into your project.

## Usage

```jsx
import HoverCard from './components/HoverCard';

function App() {
  return (
    <div>
      <HoverCard />
    </div>
  );
}
```

## How It Works

The hover reveal effect is achieved through several key techniques:

1. **Container Setup**
   ```jsx
   <div className="overflow-hidden transition-all duration-300">
   ```
   - `overflow-hidden` masks content that extends beyond the card boundaries
   - `transition-all` ensures smooth animations

2. **Image Movement**
   ```jsx
   className="transition-all duration-300 group-hover:-mt-20"
   ```
   - On hover, the image slides up by applying a negative margin
   - Part of a group transition for coordinated movement

3. **Title Adjustment**
   ```jsx
   className="transition-all duration-300 group-hover:pb-0"
   ```
   - Padding adjusts to accommodate the revealed content
   - Maintains smooth transition with the image

## Key Classes Explained

- `w-[300px] h-[280px]`: Fixed dimensions for the card
- `shadow-md`: Adds subtle elevation
- `rounded-lg`: Rounds the corners
- `group`: Enables hover effects on child elements
- `transition-all duration-300`: Smooth animation over 300ms
- `group-hover:-mt-20`: Moves image up on hover
- `object-cover`: Ensures proper image scaling

## Accessibility

The component includes:
- Focus states that match hover behaviors
- Semantic HTML structure
- Proper alt text support for images
- Keyboard-navigable link elements

## Customization

To modify the component:

1. **Change Card Dimensions**
   - Adjust `w-[300px] h-[280px]` classes
   - Update image height `h-56` accordingly

2. **Modify Animation Speed**
   - Change `duration-300` to desired speed
   - Available options: duration-75, duration-100, duration-150, etc.

3. **Adjust Reveal Distance**
   - Modify `group-hover:-mt-20` value
   - Larger negative margin = more revealed content

## Browser Support

- Works in all modern browsers
- Requires browsers that support:
  - CSS transitions
  - Hover/focus states
  - CSS Grid/Flexbox
  - Modern JavaScript

## Dependencies

- React 16.8+
- Tailwind CSS 2.0+

## License

MIT License - feel free to use in personal and commercial projects.

---

This component was inspired by modern card design patterns and implements best practices for smooth hover interactions.