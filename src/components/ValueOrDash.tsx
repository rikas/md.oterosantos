import { Minus } from 'lucide-react';

type Props<T> = {
  render: (value: T) => React.ReactElement;
  value: T | undefined;
};
export function ValueOrDash<T>({ value, render }: Props<T>): React.ReactElement {
  if (!value) {
    return <Minus className="opacity-50 text-slate-600" size={25} strokeWidth={1.2} />;
  }

  return render(value as T);
}
