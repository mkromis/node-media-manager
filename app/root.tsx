import type { LinksFunction, LoaderFunctionArgs } from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import { getUser } from "./session.server";
import stylesheet from "./style/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return { user: await getUser(request) };
};

export default function App() {
  return (
    <html lang="en" className="h-full" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>Blues Stack</title>
        <script type="text/javascript">
          {`// On page load or when changing themes, best to add inline in 'head' to avoid FOUC (Flash of unstyled content)`}
          {/* document.documentElement.classList.toggle(
          &quot;dark&quot;,
          localStorage.theme === &quot;dark&quot; ||
          (!(&quot;theme&quot; in localStorage) && window.matchMedia(&quot;(prefers-color-scheme: dark)&quot;).matches),
          ); */}
        </script>
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
