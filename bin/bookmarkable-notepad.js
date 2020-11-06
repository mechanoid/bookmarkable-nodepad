#!/usr/bin/env node
import fs from 'fs-extra'
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const bookmarklet = await fs.readFile(resolve(__dirname, '..','dist', 'bookmarkable-notepad.bookmarklet'))

console.log(`Copy the following line to your browsers address bar, and save it as bookmark:
---`);

console.log(bookmarklet.toString());

