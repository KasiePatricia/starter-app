# Hover Menu Component

A React component that displays an animated sliding menu when hovering over an image. The menu slides in from the left while the image slightly shifts to the right and dims.

## Features

- Smooth sliding animation on hover
- Image opacity transition
- Vertically centered menu items
- Responsive design
- Built with React and Tailwind CSS

## Prerequisites

- React (16.8 or later)
- Tailwind CSS (3.0 or later)
- A modern web browser that supports CSS transitions

## Installation

1. Make sure you have React and Tailwind CSS set up in your project
2. Create a new file called `HoverMenu.jsx` in your components directory
3. Copy the component code into the file

```bash
npm install -D tailwindcss
# or
yarn add -D tailwindcss
```

## Usage

```jsx
import HoverMenu from './components/HoverMenu';

function App() {
  return (
    <div>
      <HoverMenu />
    </div>
  );
}
```

## Component Structure

The component consists of three main parts:

1. Container section with title
```jsx
<section className="container flex flex-col items-center justify-center gap-5 mx-auto my-14">
  <h2 className="mb-4 text-2xl font-semibold">Show menu on image hover</h2>
  {/* ... */}
</section>
```

2. Figure element containing the image and menu
```jsx
<figure className="relative overflow-hidden m-2 min-w-[340px] max-w-[480px] max-h-[290px] w-full bg-black text-center group">
  {/* ... */}
</figure>
```

3. Navigation menu with links
```jsx
<nav className="absolute top-0 -left-[120px] w-[120px] h-full bg-black transition-all duration-300 ease-in-out group-hover:left-0 group-hover:opacity-100 flex flex-col justify-center">
  {/* ... */}
</nav>
```

## Styling Details

- Uses Tailwind's `group` utility for hover effects
- The menu starts hidden (-120px from the left) and slides in on hover
- Image transitions:
  - Opacity reduces to 50% on hover
  - Slides 120px to the right on hover
- Menu links have hover opacity effects
- All transitions use a 300ms duration with ease-in-out timing

## Customization

### Modifying Menu Width
To change the menu width, update these classes:
- `-left-[120px]` on the nav element
- `w-[120px]` on the nav element
- `group-hover:right-[-120px]` on the image

### Changing Colors
- Background color: modify `bg-black` on the figure and nav elements
- Text color: modify `text-white` on the links
- Opacity values: adjust `opacity-80` and `opacity-100` classes

### Adjusting Transitions
Modify the transition timing by changing:
- `duration-300`: Controls animation speed (300ms)
- `ease-in-out`: Controls animation timing function

## Browser Support

This component uses modern CSS features including:
- CSS Transitions
- Flexbox
- Position absolute/relative
- Opacity

Ensure your target browsers support these features.

## Accessibility

The component uses semantic HTML elements:
- `<figure>` for image container
- `<nav>` for navigation menu
- `<a>` for navigation links

Consider adding:
- ARIA labels for better screen reader support
- Keyboard navigation support
- Focus states for interactive elements

## License

MIT License - feel free to use and modify as needed.