function setCopyright() {
    const footer = document.querySelector('footer');
    const date = new Date();
    footer.innerHTML = `<p><small>© shandlingsounds ${date.getFullYear()}</small></p>`;
}

document.addEventListener('DOMContentLoaded', () => {
    setCopyright();
    setHamburgerMenuResponsiveness();
});
