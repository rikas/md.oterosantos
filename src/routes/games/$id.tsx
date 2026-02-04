import { Dialog } from '@base-ui/react';
import { useStore } from '@tanstack/react-form';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Plus } from 'lucide-react';
import { twJoin } from 'tailwind-merge';

import { getGame, updateGame } from '~/api/games';
import { Button } from '~/components/Button';
import { boxOptions, cartOptions, manualOptions } from '~/components/selectOptions';
import { authMiddleware } from '~/lib/auth-middleware';
import { useAppForm } from '~/lib/form';

export const Route = createFileRoute('/games/$id')({
  server: { middleware: [authMiddleware] },
  loader: async ({ params }) => {
    const game = await getGame({ data: { id: params.id } });
    return { game };
  },
  component: RouteComponent,
});

function RouteComponent(): React.ReactNode {
  const { game } = Route.useLoaderData();
  const navigate = useNavigate();

  const handleOpenChange = () => {
    navigate({ to: '/games', viewTransition: true });
  };

  if (!game) {
    return null;
  }

  const form = useAppForm({
    defaultValues: {
      name: game.name,
      cartridge: game.cartridge,
      box: game.box,
      manual: game.manual,
      ptManual: game.ptManual,
      owned: game.owned,
    },
    onSubmit: async ({ value }) => {
      const response = await updateGame({ data: { id: game.id, ...value } });
      console.log(response);
      handleOpenChange();
    },
  });

  const gameOwned = useStore(form.store, (state) => state.values.owned);

  const handleOwnedChange = () => {
    form.setFieldValue('owned', true);
  };

  return (
    <Dialog.Root defaultOpen={true} onOpenChange={handleOpenChange} open={true}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 min-h-dvh backdrop-blur-xs bg-black/10 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />

        <Dialog.Popup className="fixed top-1/2 left-1/2 -mt-8 w-120 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-slate-950 p-6 outline transition-all duration-150 data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0 outline-slate-500">
          <div className="flex flex-col gap-4">
            <Dialog.Title className="text-xl sr-only">{game.name}</Dialog.Title>
          </div>

          {!gameOwned && (
            <>
              <div className="absolute z-20 top-1/2 left-1/2 -translate-1/2">
                <Button onClick={handleOwnedChange}>
                  <span className="flex flex-row gap-2 items-center">
                    <Plus size={18} strokeWidth={1.5} />I own this game
                  </span>
                </Button>
              </div>

              <div className="absolute z-10 inset-0 bg-black/20 m-1 rounded-lg" />
            </>
          )}

          <form
            className={twJoin(
              'flex flex-col w-full gap-5',
              !gameOwned ? 'blur-sm pointer-events-none' : '',
            )}
            onSubmit={(e) => {
              form.handleSubmit();
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <form.AppField name="name">
              {(field) => <field.TextField label="Game name" placeholder="Enter the game name" />}
            </form.AppField>

            <form.AppField name="box">
              {(field) => (
                <field.SelectField
                  label="Box"
                  options={boxOptions}
                  placeholder="Please select..."
                />
              )}
            </form.AppField>

            <form.AppField name="cartridge">
              {(field) => (
                <field.SelectField
                  label="Cartridge"
                  options={cartOptions}
                  placeholder="Please select..."
                />
              )}
            </form.AppField>

            <form.AppField name="manual">
              {(field) => (
                <field.SelectField
                  label="Manual"
                  options={manualOptions}
                  placeholder="Please select..."
                />
              )}
            </form.AppField>

            <form.AppField name="ptManual">
              {(field) => <field.CheckboxField label="Portuguese Manual" />}
            </form.AppField>

            <div className="flex flex-row gap-4 mt-4 items-center">
              <Button
                className="grow bg-transparent border border-emerald-700"
                onClick={handleOpenChange}
              >
                Close
              </Button>
              <form.AppForm>
                <form.SubmitButton className="grow" label="Save changes" />
              </form.AppForm>
            </div>
          </form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
