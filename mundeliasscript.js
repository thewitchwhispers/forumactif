window.onload = function() {
    setTimeout(function() {
        const logoutLink = document.querySelector('a#logout');
        if (logoutLink && logoutLink.querySelector('img[alt="Déconnexion [ William Yaxley ]"][title="Déconnexion [ William Yaxley ]"]')) {
            const mundeliasDiv = document.querySelector('.mundelias');
            if (mundeliasDiv) {
                mundeliasDiv.style.display = 'block';
            }
        }
    }, 2000);  // Attendre 2 secondes
};
