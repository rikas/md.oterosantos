import { ChevronLeft, ChevronRight } from 'lucide-react';
import { twJoin } from 'tailwind-merge';

type Props = {
  currentPageIndex: number;
  onChange: (detail: { detail: { currentPageIndex: number } }) => void;
  pagesCount: number;
};
export function Pagination({ currentPageIndex, onChange, pagesCount }: Props): React.ReactElement {
  const buttonClassNames = twJoin(
    'p-1.5 md:p-2 rounded-full bg-slate-900 text-slate-200 ring ring-slate-800 hover:bg-slate-800',
    'focus:ring-slate-500 focus-visible:ring-slate-500 outline-none cursor-pointer',
    'disabled:opacity-10 disabled:pointer-events-none',
  );

  const handlePrevious = () => {
    if (currentPageIndex > 1) {
      onChange({ detail: { currentPageIndex: currentPageIndex - 1 } });
    }
  };
  const handleNext = () => {
    if (currentPageIndex < pagesCount) {
      onChange({ detail: { currentPageIndex: currentPageIndex + 1 } });
    }
  };

  const isNextDisabled = currentPageIndex >= pagesCount;
  const isPreviousDisabled = currentPageIndex <= 1;

  return (
    <div className="flex flex-row items-center gap-3 md:gap-4">
      <span className="text-slate-300">
        {currentPageIndex} / {pagesCount}
      </span>

      <div className="flex flex-row items-center gap-2">
        <button
          aria-label="Go to previous page"
          className={buttonClassNames}
          disabled={isPreviousDisabled}
          onClick={handlePrevious}
          title="Previous page"
        >
          <ChevronLeft strokeWidth={1.3} />
        </button>

        <button
          aria-label="Go to next page"
          className={buttonClassNames}
          disabled={isNextDisabled}
          onClick={handleNext}
          title="Next page"
        >
          <ChevronRight strokeWidth={1.3} />
        </button>
      </div>
    </div>
  );
}
