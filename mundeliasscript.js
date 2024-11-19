window.onload = function() {
    // Vérifie si l'image avec alt="William Yaxley" existe
    const image = document.querySelector('img[alt="William Yaxley"]');
    // Si l'image existe, rendre la div .mundelias visible
    if (image) {
        const mundeliasDiv = document.querySelector('.mundelias');
        if (mundeliasDiv) {
            mundeliasDiv.style.display = 'block'; // Ou 'visible' selon ce que tu veux
        }
    }
};
