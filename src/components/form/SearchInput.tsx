import { Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useDebounce } from '~/lib/useDebounce';

import { TextInput } from './TextInput';

type Props = {
  onChange: (event: { detail: { filteringText: string } }) => void;
  value: string;
};

export function SearchInput({ onChange, value }: Props): React.ReactElement {
  const [internalValue, setInternalValue] = useState(value);
  const debouncedValue = useDebounce(internalValue, 300);

  useEffect(() => {
    onChange({ detail: { filteringText: debouncedValue } });
  }, [debouncedValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(event.target.value);
  };

  const handleClear = () => {
    setInternalValue('');
  };

  return (
    <div className="relative grow flex md:max-w-lg">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search className="text-slate-400" size={18} strokeWidth={1.5} />
      </div>
      <TextInput
        className="ps-10 pe-10"
        id="search"
        name="search"
        onChange={handleChange}
        placeholder="Search..."
        type="search"
        value={internalValue}
      />

      {internalValue && (
        <button
          className="absolute self-center p-1.5 inset-y-0 end-0 justify-center bg-slate-700/50 hover:bg-slate-700/60 rounded-full aspect-square flex items-center me-3 text-slate-400 hover:text-slate-200"
          onClick={handleClear}
          type="button"
        >
          <X size={18} strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
}
