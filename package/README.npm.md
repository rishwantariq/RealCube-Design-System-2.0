RealCube Design System
RealCube Design System is a versatile component library built with Next.js, ShadCN, and Tailwind CSS. This package provides reusable, customizable components, hooks, utilities, and styles that can be easily integrated into your projects.

What’s Included
Component Library: A collection of UI components ready to use out-of-the-box.
Hooks and Utilities: Helpful hooks and functions to simplify development.
Styles and Tailwind Configuration: Customizable styles and a Tailwind configuration file to align with your project’s branding.
Installation
Install the RealCube Design System package via npm:

bash
Copy code
npm install realcube-design-system
This package includes the core components, hooks, styles, and configurations you need.

Usage

1. Import Global Styles (Optional)
   To use the default global styles provided by RealCube, import global.css in your main application file (such as \_app.tsx in a Next.js app):

tsx
Copy code
// In your main application file (e.g., \_app.tsx)
import 'realcube-design-system/styles/global.css'; 2. Import Components
You can import and use any component directly from the library. Here’s an example:

tsx
Copy code
import { Button } from 'realcube-design-system/components';

function App() {
return <Button variant="primary">Click Me</Button>;
} 3. Customize Tailwind Configuration
The package includes a tailwind.config.ts file. You can extend or use it as a reference for your own Tailwind configuration:

js
Copy code
// tailwind.config.js
const realcubeConfig = require('realcube-design-system/tailwind.config');

module.exports = {
...realcubeConfig,
// Your custom Tailwind configuration here
}; 4. Access Example Components
Example components are available in the examples folder within the package. To use an example component, import it directly from the package:

tsx
Copy code
import ExampleButton from 'realcube-design-system/components/examples/ExampleButton';

function App() {
return <ExampleButton />;
}
