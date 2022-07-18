# MagaNets
![Badge](https://img.shields.io/badge/node-v16.16.0-green)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The develop mode is supported only by modern browsers.

If you wish to test the application in other browsers, you need to build and run the project:

```bash
npm run build && npm run start
```


## Folder Structure
Each file inside `pages` is a frontend route in the application. The `components` folder includes all the reusable components. The `service` folder contains async methods to get data from the API. And finally, the `utils` folder to keep utility methods that can be used in various places in the application, like a currency formatter.

As we can't have files that are not real pages inside the `pages`, then the `tests` folder is being used for this purpose. Other Components and functions have their tests alongside with its files.


## Deploy

The app is being deployed in the Vercel platform, and can be acceced at [https://next-maga-nets.vercel.app/](https://next-maga-nets.vercel.app/)

