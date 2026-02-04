import { HeadContent, Scripts } from '@tanstack/react-router';
import * as reactRouter from '@tanstack/react-router';

import appCss from '../styles.css?url';

export const Route = reactRouter.createRootRoute({
  head: () => ({
    links: [
      {
        href: appCss,
        rel: 'stylesheet',
      },
    ],
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        content: 'width=device-width, initial-scale=1',
        name: 'viewport',
      },
      {
        content: 'Megadrive DB - A comprehensive database for Sega Megadrive games.',
        name: 'description',
      },
      {
        title: 'Mega Drive DB',
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body
        className="bg-slate-950 text-slate-50"
        style={{
          backgroundImage: 'url("/background.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {children}
        <Scripts />
      </body>
    </html>
  );
}
