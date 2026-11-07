# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A static vanilla HTML/CSS/JS portfolio site. No build step, no package manager, no framework — every project is plain HTML/CSS/JS served directly from the filesystem.

## Structure

- `index.html` / `main.js` / `style.css` — the portfolio landing page. `main.js` holds a `projects` array (title, description, icon, link); it renders one card per entry into `#project-grid`. Adding a new sub-project means adding an entry here and linking to `<folder>/index.html`.
- Each subfolder (`my-todoo-app/`, `fx-converter/`, `snake-game/`) is a self-contained mini-app with its own `index.html`, `main.js`, and `style.css`, with no shared code or dependencies between them or with the root.

## Running

There is no dev server or build command. Open `index.html` (or any subfolder's `index.html`) directly in a browser, or serve the repo root with any static file server (e.g. `python3 -m http.server`) so relative links between the landing page and subfolders resolve correctly.

## Notes per sub-app

- `fx-converter`: calls the public `https://api.exchangerate-api.com/v4/latest/{from}` endpoint directly from the browser — requires network access, no API key.
- `my-todoo-app`: persists todos to `localStorage` under the key `my-todos`.
- `snake-game`: persists high score to `localStorage` under the key `snakeHighScore`; difficulty/speed and level-up logic live in `main.js`.
