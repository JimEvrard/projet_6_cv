function affiche_contenu(target) {
    let parent = target.parentNode.parentNode;
    let cible = parent.querySelector('#cible');
    if (cible.style.display != '') {
        cible.style.display = '';
    } else {
        cible.style.display = 'none';
    }
}


