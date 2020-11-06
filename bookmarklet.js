const a = document.querySelector('textarea')
const b = document.querySelector('pre')
a.addEventListener('input', e => { b.innerHTML = a.value })
