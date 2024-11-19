window.onload = function() {
    // Sélectionner le lien de déconnexion
    const logoutLink = document.querySelector('a#logout');
    // Vérifier que l'élément existe et que les attributs alt et title sont corrects
    if (logoutLink && logoutLink.querySelector('img[alt="Déconnexion [ William Yaxley ]"][title="Déconnexion [ William Yaxley ]"]')) {
        // Sélectionner la div avec la classe .mundelias
        const mundeliasDiv = document.querySelector('.mundelias');
        // Rendre visible la div .mundelias si les conditions sont remplies
        if (mundeliasDiv) {
            mundeliasDiv.style.display = 'block';
        }
    }
};
