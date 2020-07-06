import x from './x.js'
import './y.styl'
import png from './assets/1.jpg'

const div = document.querySelector('#app')
div.innerHTML = `
<img src="${png}">`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = (module)=>{
    const promise = import('./lazy.js')
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{})
}
div.appendChild(button)