const setCopyright = () => {
    const footer = document.querySelector('footer');
    const date = new Date();
    footer.innerHTML = `<p><small>© Jake Shandling ${date.getFullYear()}</small></p>`;
}

document.addEventListener('DOMContentLoaded', () => {
    setCopyright();
});
