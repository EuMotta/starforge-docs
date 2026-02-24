import { motion } from 'framer-motion';

type TechStack = string[];

const TECH_STACK: TechStack = [
  'React',
  'Next.js',
  'Tailwind CSS',
  'TypeScript',
  'Radix UI',
  'Base UI'
];

const TechList = () => (
  <div className="flex flex-wrap gap-2">
    {TECH_STACK.map((tech, index) => (
      <motion.span
        key={tech}
        className="rounded-lg border border-[var(--color-fd-border)] bg-[var(--color-fd-primary)]/5 px-4 py-2 text-sm font-medium text-[var(--color-fd-primary)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.8 + index * 0.15 }}
      >
        {tech}
      </motion.span>
    ))}
  </div>
);

const TechStackList = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.7 }}
  >
    <TechList />
  </motion.div>
);

export default TechStackList;
