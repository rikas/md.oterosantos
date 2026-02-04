import { twJoin } from 'tailwind-merge';

type Props = {
  color: 'green' | 'red' | 'yellow';
  label: string;
};

export function Tag({ label, color }: Props): React.ReactElement {
  const classNames = twJoin(
    'px-2 py-0.5 text-xs rounded-md font-medium border-inherit border text-center',
    color === 'red' && 'border-red-400 text-red-400',
    color === 'green' && 'border-emerald-300/80 text-emerald-300/80',
    color === 'yellow' && 'border-yellow-200/80 text-yellow-200/80',
  );

  return <span className={classNames}>{label}</span>;
}
