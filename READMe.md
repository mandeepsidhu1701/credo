

## Static deployment notes

This project is a React + Vite single-page application using **client-side
routing** (`react-router-dom`). All content is read from local files in
`src/data/*.ts` — no backend, database, authentication, or environment
variables are required at runtime.

Because it's an SPA, every route must fall back to `/index.html` on the
host. Otherwise refreshing `/about-us`, `/services`, `/contact-us`, or any
`/posts/<slug>` URL returns a 404.

### Netlify

`public/_redirects` ships the SPA fallback:

```
/*    /index.html   200
```

### Vercel

`vercel.json` provides the equivalent rewrite:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

### GitHub Pages

Either use a 404.html copy of `index.html`, or use the
`spa-github-pages` redirect trick.

### Hostinger (and other classic Apache hosts)

Upload the contents of `dist/` (after running `npm run build`) to your
`public_html/` directory and add an `.htaccess` file alongside
`index.html` so deep links work:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Without that rule, refreshing `/about-us` or any direct route URL on
Hostinger will return a 404.

## Project info

**URL**: https://credomigration.com

## How can I edit this code?

There are several ways of editing your application.



**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. 

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?


