window.onscroll = () => {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop
    console.log(fixedNav)
    console.log(window.pageYOffset)
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// hamburger
const hamburger = document.querySelector('#hamburger')

// navbar
const nav = document.querySelector('#nav')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    nav.classList.toggle('nav-active')
})

// darkmode
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')
const toggleColor = document.getElementById('toggle-color')

darkToggle.addEventListener('click', () => {
    if (darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

localStorage.theme === 'dark' || (!('theme' in localStorage)
    && window.matchMedia('(prefers-color-scheme:dark)').matches) ?
    darkToggle.checked = true : darkToggle.checked = false


localStorage.theme === 'dark' || (!('theme' in localStorage)
    && window.matchMedia('(prefers-color-scheme:dark)').matches) ?
    document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
