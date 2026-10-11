# My Portfolio (React + TypeScript)

## 1. Run it on your computer

You need **Node.js** (version 18 or newer). Download it from https://nodejs.org.

Open a terminal inside this folder and run:

```bash
npm install     # downloads the libraries (only needed once)
npm run dev     # starts the site at http://localhost:5173
```

Keep `npm run dev` running. Every time you save a file, the browser updates.

## 2. Add your details

Open **`src/data/portfolio.ts`**. This is the only file you need for content.
Replace every value in `[square brackets]` with your real details.

TypeScript checks your data. If you make a mistake (for example, a missing field),
VS Code shows a red underline before you even open the browser.

## 3. Folder map

```
src/
  main.tsx              → starting point; draws <App /> on the page
  App.tsx               → puts all sections in order
  types.ts              → the "shape" of your data (TypeScript interfaces)
  data/portfolio.ts     → YOUR CONTENT (edit this)
  hooks/                → small reusable logic (typing effect, scroll-in animations)
  components/           → one file per section (Navbar, Hero, About, Portfolio, Contact)
  styles.css            → all colors, fonts and layout
```

## 4. Publish for free

First check the production build works:

```bash
npm run build   # creates the "dist" folder
```

### Option A: Vercel (easiest)
1. Put this folder in a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**, pick your repo.
3. Vercel detects Vite automatically. Click **Deploy**.
4. You get a free link like `your-name.vercel.app`.

### Option B: Netlify
1. Go to https://app.netlify.com/drop
2. Drag and drop the **`dist`** folder. Done.

### Option C: GitHub Pages
1. Run `npm run build`.
2. Upload the contents of `dist` to a repo named `your-username.github.io`.
3. Your site appears at `https://your-username.github.io`.
