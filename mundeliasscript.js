window.onload = function() {
    setTimeout(function() {
        // Sélectionner le lien de déconnexion avec l'ID 'logout'
        const logoutLink = document.querySelector('a#logout');
        
        // Vérifier si l'élément existe et si l'image à l'intérieur contient bien les attributs 'alt' et 'title' corrects
        if (logoutLink) {
            const logoutImg = logoutLink.querySelector('img');
            
            // Vérifier les attributs alt et title de l'image
            if (logoutImg && logoutImg.getAttribute('alt') === 'Déconnexion [ William Yaxley ]' && logoutImg.getAttribute('title') === 'Déconnexion [ William Yaxley ]') {
                // Si l'image correspond, rendre visible la div .mundelias
                const mundeliasDiv = document.querySelector('.mundelias');
                if (mundeliasDiv) {
                    mundeliasDiv.style.display = 'block'; // Rendre la div visible
                }
            }
        }
    }, 5000);  // Attendre 5 secondes (augmenter le délai si nécessaire)
};
