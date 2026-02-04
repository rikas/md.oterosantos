import { Lock } from 'lucide-react';

import { Button } from '../Button';

export function LoginButton({ ...props }): React.ReactElement {
  return (
    <Button className="bg-transparent border-2 border-emerald-700" {...props}>
      <span className="flex flex-row gap-2 items-center">
        <Lock size={18} strokeWidth={1.5} /> Sign in
      </span>
    </Button>
  );
}
