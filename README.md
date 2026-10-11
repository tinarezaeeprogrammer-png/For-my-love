# For Zac, Always ♡ — Cinematic Romance

A romantic React + Vite website with a neon-pink heart, floating particles, interactive constellation, animated letter, background music, hidden message, and final confession. All website interface and content are in English.

## Run in VS Code
1. Install Node.js LTS from https://nodejs.org/ if needed.
2. Extract this project and open the folder in VS Code.
3. Choose **Terminal → New Terminal**.
4. Run `npm install`, then `npm run dev`.
5. Open the local URL Vite prints, usually http://localhost:5173.

## Add music
Copy an MP3 you have permission to use to `public/music/love-song.mp3`. Create the `public` and `music` folders if needed. Music starts after a visitor clicks the music button because browsers commonly block autoplay with sound.

## Personalize
At the top of `src/main.jsx`, edit `PARTNER_NAME` and `YOUR_NAME`. The letter and constellation messages are in the same file.

## Build
Run `npm run build`; the production files will be in `dist/`.
