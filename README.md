A bookmarkable notepad is an URI that you can save as a bookmark and start taking notes offline after a simple click.
It is based on the idea of Jose Jesus Perez Aguinaga (see https://coderwall.com/p/lhsrcq/one-line-browser-notepad).

This repository is trying to provide a build setup for extending the behaviour a bit (see feature list below) and to
provide a convenient way to download, and bookmark the stuff.

## Features 1.0.x

- text is copied to a `div` element, so that the output can be saved (textarea would be invisible)
- the `textarea` element is hidden for printing (a.k.a saving as pdf)

## Usage:

```
npm i -g bookmarkable-notepad

```

## Development

### Build

```
npm run build
# => minify-css
# => minify-js
# => created dist/bookmarkable-notepad.bookmarklet
```
