#!/usr/bin/env node

import pug from 'pug'
import fs from 'fs-extra'

const render = pug.compileFile('html-content.pug', { pretty: false })

fs.ensureDir('dist')
const dataUriPrefix =
await fs.writeFile('dist/bookmarkeble-notepad.bookmarklet', `data:text/html;charset=utf-8,${render()}`)
