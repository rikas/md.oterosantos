import { Dialog } from '@base-ui/react/dialog';
import { useRouter } from '@tanstack/react-router';

import { LoginButton } from './LoginButton';
import { LoginForm } from './LoginForm';

export function LoginModal(): React.ReactElement {
  const router = useRouter();

  const handleLogin = (): void => {
    router.invalidate();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger render={<LoginButton />} />
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 min-h-dvh bg-black/50 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:opacity-70 supports-[-webkit-touch-callout:none]:absolute" />

        <Dialog.Popup className="fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-slate-950 p-6 outline transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 outline-slate-500">
          <div className="flex flex-col gap-4">
            <Dialog.Title className="text-lg uppercase">Login</Dialog.Title>
            <LoginForm onSuccess={handleLogin} />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
