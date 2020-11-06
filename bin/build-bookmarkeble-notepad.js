#!/usr/bin/env node

import pug from 'pug'
import fs from 'fs-extra'

const render = pug.compileFile('html-content.pug', { pretty: false })

fs.ensureDir('dist')
const output = 'dist/bookmarkeble-notepad.bookmarklet'
await fs.writeFile(output, `data:text/html;charset=utf-8,${render()}`)

console.log(`created ${output}`);
