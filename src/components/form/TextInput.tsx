import { twJoin, twMerge } from 'tailwind-merge';

export function TextInput({
  className,
  ...props
}: React.ComponentProps<'input'>): React.ReactElement {
  const baseClasses = twJoin(
    'w-full p-2 rounded outline-none',
    'bg-slate-900 text-slate-200',
    'ring ring-slate-800 focus:ring-slate-700',
    '[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden',
  );

  const finalClassNames = twMerge(baseClasses, className);

  return <input className={finalClassNames} {...props} />;
}
