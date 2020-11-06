const a = document.querySelector('textarea')
const b = document.querySelector('div')
a.addEventListener('input', e => { b.innerHTML = a.value })
