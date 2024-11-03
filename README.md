# RealCube Design System

## 📖 Project Overview

The **RealCube Design System** is a comprehensive library of reusable and customizable UI components designed specifically for RealCube applications. Built on top of [ShadCN](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/), this system incorporates RealCube's branding elements to create a cohesive, scalable design foundation.

## 🎯 Motivation and Vision

The RealCube Design System reflects our commitment to high-quality, user-centered software development. This project was a deep dive into using [Storybook](https://storybook.js.org/) for isolated component testing, development, and documentation. As a **single source of truth**, our design system ensures consistency and efficiency across RealCube products.

While private, this system showcases our investment in long-term innovation and sustainability, requiring continuous learning and adaptation to evolving tools and trends.

## ✨ Key Features

- **📚 Storybook-based Documentation**: Each component is documented with interactive Storybook examples, making it easy to understand and reuse.
- **🌗 Light & Dark Themes**: Support for light and dark modes, covering both Storybook's UI and component previews.
- **♿ Accessibility**: Built with [Storybook's accessibility addon](https://storybook.js.org/addons/@storybook/addon-a11y) to ensure compliance with accessibility standards.
- **🖼️ Global Decorators**: Consistent layouts and functionality across all stories, similar to Next.js's root layout, thanks to Storybook's global decorators.
- **🎛️ Custom Controls**: Tailored controls for components, allowing interactive testing and customization in Storybook.
- **🎨 Color Palette and Typography**: Integrated RealCube brand colors and typography for a cohesive look and feel.
- **🚀 Advanced Components**: Includes specialized components such as configurable sidebars, dynamic forms, and enhanced data tables tailored to RealCube’s needs.

## 🧩 Challenges and Solutions

### 1. Decorators for Global Components

Certain components, like `Toaster`, require global availability to function correctly. We used [Storybook decorators](https://storybook.js.org/docs/react/writing-stories/decorators) to wrap stories, providing a consistent environment similar to Next.js’s root layout.

### 2. Theme Customization

To synchronize themes across Storybook's UI and component previews, we implemented custom themes using CSS variables. Storybook’s theme options required additional adjustments to fully support RealCube’s light and dark modes.

### 3. Import Path Configuration

To avoid module resolution errors, we replaced alias imports (e.g., `@components/ui/button`) with relative paths in Storybook.

### 4. CSS Variables in Storybook

Some theme styles required manual adjustment due to limitations with CSS variables in Storybook’s UI. This was resolved by adding RealCube’s color variables directly in Storybook’s configuration.

## 🛠️ Project Setup

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **Chromatic** (optional) for deploying Storybook.

### Installation

Clone the repository and install dependencies:


```bash
git clone https://codehub.exalogic.co/rishwan97/realcube-2.0-design-system.git
cd realcube-2.0-design-system
npm install
```


### Development Server

```bash
npm run dev
npm run storybook
```

## 📄 Documentation

For an in-depth overview of our design process, versioning, and component workflow, please refer to the RealCube Design System Miro Board.

## 🤝 Contributing

Project Owners: This design system is private and developed solely by the RealCube team. For feedback or inquiries, please reach out to [rishwan.tariq@exalogic.co](mailto:rishwan.tariq@exalogic.co).

## 📚 Resources

- [Storybook Documentation](https://storybook.js.org/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

