const setCopyright = () => {
    const footer = document.querySelector('footer');
    const date = new Date();
    footer.innerHTML = `<p><small>© Jake Shandling ${date.getFullYear()}</small></p>`;
}

const hideElements = () => {
    const buttons = document.querySelectorAll('.bit-event-buttons');
    buttons.forEach(b => {
        if (b.firstChild.firstChild.innerText === "I Was There") {
            b.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setCopyright();
    hideElements();
});

document.querySelector("bit-show-past-display").addEventListener('click', (e) => {
    setTimeout(() => {
        hideElements();
    }, 10);
})