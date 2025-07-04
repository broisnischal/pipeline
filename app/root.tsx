import { Links, Meta, Outlet, Scripts } from "react-router";
import "#app/tailwind.css";

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col items-center justify-center p-12">
          <h1 className="text-6xl font-bold ">Hello world!</h1>
          <p>{process.env.NODE_ENV}</p>
        </div>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
