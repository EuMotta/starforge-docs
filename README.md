# 🌟 Star Forge

[![CI](https://github.com/EuMotta/starforge-docs/actions/workflows/ci.yml/badge.svg)](https://github.com/EuMotta/starforge-docs/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)

> Reusable UI components for React/Next.js with copy-paste simplicity and full customization control.

Star Forge is a collection of user interface components that simplifies the development of accessible applications. Inspired by shadcn/ui, Star Forge offers a unique approach: instead of encapsulated libraries, you copy and paste pure code, maintaining full control over customization and integration.

## ✨ Features

- **🎨 Reusable**: Copy and paste directly into your project, with no unnecessary dependencies
- **🔧 Customizable**: Adjust styles and behavior with Tailwind CSS or edit the TypeScript/React code directly
- **♿ Accessible**: Built on headless primitives — Radix UI or Base UI, your choice at install time — ensuring compliance with ARIA standards
- **🤖 AI-ready**: Structured and readable code, ideal for integration with artificial intelligence tools
- **🚀 Simple Integration**: Add components via CLI or copy and paste manually
- **📦 Zero Abstraction**: Modify every component to reflect your design vision, with no abstraction layers

## 🛠️ Tech Stack

- **React 19** - User interface library
- **Next.js 16** - Full-stack React framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS v4** - Utility-first CSS framework for styling
- **Radix UI or Base UI** - Unstyled, accessible primitives (dual-engine, chosen at install)
- **Framer Motion** - Animation library
- **Fumadocs** - Documentation framework
- **Lucide React** - Beautiful icons

## 🚀 Quick Start

### Prerequisites

- [Node.js 22](https://nodejs.org/) or later
- [Next.js](https://nextjs.org/) project with TypeScript and Tailwind CSS

### Installation

1. **Initialize shadcn in your project:**

```bash
npx shadcn@latest init
```

2. **Add a component to your project:**

```bash
npx shadcn@latest add https://starforge-docs.com/r/button.json
```

By default components install the **Radix UI** engine. For **Base UI**, use the `base-` prefix on primitives or the `-base` suffix on blocks (e.g. `r/login-dialog-base.json`).

3. **Use the component:**

```tsx
import { Button } from '@/components/ui/button';

export default function Home() {
  return <Button variant="outline">Hello World</Button>;
}
```

### Automatic Setup

For new projects, we recommend using `create-next-app`:

```bash
npx create-next-app@latest
```

During installation, select:

- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ App Router
- ✅ src/ directory

## 📚 Documentation

- **[Installation Guide](https://starforge-docs.com/docs/installation)** - Complete setup instructions
- **[Components](https://starforge-docs.com/docs)** - Explore all available components
- **[Engine Choice](https://starforge-docs.com/docs/engine-choice)** - Radix UI or Base UI

## 🎯 Why Star Forge?

Unlike traditional component libraries that lock you into their design system, Star Forge gives you:

- **Total Control**: Every line of code is yours to modify
- **No Dependencies**: Only what you actually need
- **Performance**: No unused code bundled with your app
- **Flexibility**: Adapt components to your exact requirements
- **Learning**: Understand how components work under the hood

## 🔧 Development

### Project Structure

```
starforge-docs/
├── content/docs/          # MDX documentation files
├── src/
│   ├── components/       # React components
│   ├── registry/         # Component registry
│   └── app/              # Next.js app router
├── public/               # Static assets
```

### Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
npm run build:components # Regenerate registry.json and public/r/*.json
npm run audit:registry   # Validate registry dependency resolution
npm run test:registry    # Run registry install simulation tests
npm test                 # Run component tests (vitest)
```

## 🤝 Contributing

We welcome contributions! Whether you're fixing a bug, improving documentation, or adding a new component, your help is appreciated.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full development workflow, including how to add components and dual-engine primitives.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [shadcn/ui](https://ui.shadcn.com/)
- Built with [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Documentation powered by [Fumadocs](https://fumadocs.vercel.app/)

---

<div align="center">
  <strong>Built with ❤️</strong>
</div>
