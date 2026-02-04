type Props = {
  description: string;
  title: string;
};

export function EmptyState({ description, title }: Props): React.ReactElement {
  return (
    <div className="w-full h-32 flex flex-col items-center justify-center gap-2">
      <h3 className="text-slate-600 text-xl">{title}</h3>
      <p className="text-slate-500 text-sm">{description}</p>
    </div>
  );
}
