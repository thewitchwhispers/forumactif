window.onload = function() {
    setTimeout(function() {
        // Sélectionner le lien avec l'ID 'fa_welcome'
        const welcomeLink = document.querySelector('a#fa_welcome');
        
        // Vérifier si le lien contient le texte "William Yaxley"
        if (welcomeLink && welcomeLink.textContent.includes('William Yaxley')) {
            // Si le texte est trouvé, rendre visible la div .mundelias
            const mundeliasDiv = document.querySelector('.mundelias');
            if (mundeliasDiv) {
                mundeliasDiv.style.display = 'block'; // Rendre la div visible
            }
        }
    }, 5000);  // Attendre 5 secondes (augmenter le délai si nécessaire)
};
