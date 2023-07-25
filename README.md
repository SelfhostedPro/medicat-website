# Medicat Website

### 1. Clone the repo

```bash
git clone https://github.com/SelfhostedPro/medicat-website.git
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start development Server

```bash
pnpm dev
```

**It will now be available at `localhost:3000`**

## Adding Download Sources

Download sources (under the alternative downloads section) are created from this file:
`/assets/data/altDownloads.json`

You can copy and paste an existing one and once the site redeploys it will be updated with the new download source visible.

## Documentation
You can add documentation at the following source:
`/content/docs/`

The website page for `localhost:3000/docs` is automatically generated based on these files. It will create a new topic if you create a new folder or subfolder and will automatically create links to those files.

Please copy an existing file and then modify the metadata at the top as that's the easiest way to get started.

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## TailwindCSS

TailwindCSS is already configured in this repo, so you can start using it without any installation.
