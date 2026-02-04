import { mergeProps, useRender } from '@base-ui/react';
import { twJoin, twMerge } from 'tailwind-merge';

export type ButtonProps = useRender.ComponentProps<'button'>;

export function Button({ className, render, ...props }: ButtonProps): React.ReactElement {
  const baseClassNames = twJoin(
    'p-1.5 md:p-2 md:px-4 rounded-md bg-emerald-800 text-emerald-100',
    'hover:bg-emerald-700 hover:text-emerald-50',
    'transition duration-100',
    'outline-none cursor-pointer',
    'disabled:opacity-10 disabled:pointer-events-none',
  );

  const classNames = twMerge(baseClassNames, className);

  const element = useRender({
    defaultTagName: 'button',
    props: mergeProps<'button'>({ className: classNames }, props),
    render,
  });

  return element;
}
