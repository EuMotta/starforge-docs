# 🌟 Star Forge

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)

> Reusable UI components for React/Next.js with copy-paste simplicity and full customization control.

Star Forge is a collection of user interface components that simplifies the development of accessible applications. Inspired by shadcn/ui, Star Forge offers a unique approach: instead of encapsulated libraries, you copy and paste pure code, maintaining full control over customization and integration.

## ✨ Features

- **🎨 Reusable**: Copy and paste directly into your project, with no unnecessary dependencies
- **🔧 Customizable**: Adjust styles and behavior with Tailwind CSS or edit the TypeScript/React code directly
- **♿ Accessible**: Built with Radix UI, ensuring compliance with ARIA standards
- **🤖 AI-ready**: Structured and readable code, ideal for integration with artificial intelligence tools
- **🚀 Simple Integration**: Add components via CLI or copy and paste manually
- **📦 Zero Abstraction**: Modify every component to reflect your design vision, with no abstraction layers

## 🛠️ Tech Stack

- **React 19** - User interface library
- **Next.js 15** - Full-stack React framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Radix UI** - Unstyled, accessible components
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## 🚀 Quick Start

### Prerequisites

- [Node.js 20](https://nodejs.org/) or later
- [Next.js](https://nextjs.org/) project with TypeScript and Tailwind CSS

### Installation

1. **Initialize shadcn in your project:**

```bash
npx shadcn@latest init
```

2. **Add components to your project:**

```bash
npx shadcn@latest add https://star-forge-components.vercel.app/projects/r/text.json
```

3. **Use the component:**

```tsx
import { Text } from '@/components/star-forge/text';

export default function Home() {
  return <Text.H1>Hello World</Text.H1>;
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

- **[Installation Guide](https://starforge-docs.vercel.app/docs/instalation)** - Complete setup instructions
- **[Components](https://starforge-docs.vercel.app/docs/components)** - Explore all available components

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
└── scripts/              # Build scripts
```

### Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run build:registry   # Build component registry
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
```

## 🤝 Contributing

We welcome contributions! Whether you're fixing a bug, improving documentation, or adding a new component, your help is appreciated.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [shadcn/ui](https://ui.shadcn.com/)
- Built with [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Documentation powered by [Fumadocs](https://fumadocs.vercel.app/)

---

<div align="center">
  <strong>Built with ❤️ by the Star Forge</strong>
</div>
