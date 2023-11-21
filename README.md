# ⬛ nextjs-i18n

Simplify Next.js internationalization with our client-side companion to Node-i18n. Seamlessly integrate and access translated content in your project with ease.

## Installation

```bash
# npm
npm install @drawilet/nextjs-i18n

# yarn
yarn add @drawilet/nextjs-i18n
```

## Getting started

Follow the [i18n](https://www.npmjs.com/package/@drawilet/i18n#getting-started) guide up to point 3, then come back here.

1. Add the i18n option to your `next.config.js`.

   ```js
   const i18n = require("./i18n.config");

   /** @type {import('next').NextConfig} */
   const nextConfig = {
     i18n: {
       locales: i18n.locales,
       defaultLocale: i18n.defaultLocale,
     },
   };

   module.exports = nextConfig;
   ```

1. Add the I18nProvider to your `_app.tsx (.jsx)` file.

   ```ts
   import type { AppProps } from "next/app";
   import { useRouter } from "next/router";

   import { I18nProvider } from "@drawilet/nextjs-i18n";
   import resources from "../locales/pages.json"; // OUTPUT_PATH

   export default function MyApp({ Component, pageProps }: AppProps) {
     const router = useRouter();

     return (
       <I18nProvider resources={resources} router={router}>
         <Component {...pageProps} />
       </I18nProvider>
     );
   }
   ```

1. In the pages where you want to use i18n, import the `useI18n` hook.

   ```ts
   import { useI18n } from "@drawilet/nextjs-i18n";

   export const _i18n = {
     title: "Hello World",
   };

   const Page = () => {
     const i18n = useI18n();

     return (
       <div>
         <h1>{i18n("title")}</h1>
       </div>
     );
   };

   export default Page;
   ```

<br>
<br>

> ## Note
>
> Remember to use the command `npx i18n generate` every time you update the texts to be translated.
