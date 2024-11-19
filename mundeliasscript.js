window.onload = function() {
    const logoutLink = document.querySelector('a#logout img[title="Déconnexion [ William Yaxley ]"]');
    const mundeliasDiv = document.querySelector('.mundelias');

    if (logoutLink && mundeliasDiv) {
        mundeliasDiv.style.display = 'block';  // Rendre visible la div
    }
};
