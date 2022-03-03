function affiche_contenu(target) {
    let parent = target.parentNode.parentNode;
    let cible = parent.querySelector('#cible');
    if (cible.style.display != '') {
        cible.style.display = '';
    } else {
        cible.style.display = 'none';
    }
}

const grid = [];

let grid_watcher = [];
let count = 0;
let click_count = 0;
let sum = 0

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 9; j++) {
        grid.push(j);
    }
}

grid.sort(() => Math.random() - .5);

document.querySelectorAll('.cell').forEach((cell, index) => {
    cell.setAttribute('data', grid[index]);
    cell.setAttribute('validate', 0);
    cell.setAttribute('id', ++count)
    switch (cell.getAttribute('data')) {
        case '0':
            cell.querySelector('.face2 .content').innerHTML = '<img src="./images/origami/chameau.png">';
            break;
        case '1':
            cell.querySelector('.face2 .content').innerHTML = '<img src="./images/origami/chat.png">';
            break;
        case '2':
            cell.querySelector('.face2 .content').innerHTML = '<img src="./images/origami/chauve-souris.png">';
            break;
        case '3':
            cell.querySelector('.face2 .content').innerHTML = '<img src="./images/origami/poisson.png">';
            break;
        case '4':
            cell.querySelector('.face2 .content').innerHTML = '<img src="./images/origami/dinosaure.png">';
            break;
        case '5':
            cell.querySelector('.face2 .content').innerHTML = '<img src="./images/origami/ecureuil.png">';
            break;
        case '6':
            cell.querySelector('.face2 .content').innerHTML = '<img src="./images/origami/lelephant.png">';
            break;
        case '7':
            cell.querySelector('.face2 .content').innerHTML = '<img src="./images/origami/licorne.png">';
            break;
        case '8':
            cell.querySelector('.face2 .content').innerHTML = '<img src="./images/origami/oiseau.png">';
            break;
        default:
            break;
    }
    cell.addEventListener('click', e => {


        grid_watcher.push({ number: cell.getAttribute('data'), element_id: cell.getAttribute('id') });
        if (grid_watcher.length > 1) {
            if (grid_watcher[0].number === grid_watcher[1].number &&
                grid_watcher[0].element_id !== grid_watcher[1].element_id) {
                document.getElementById(grid_watcher[0].element_id + '').querySelector('.face1').style.backgroundColor = '#708f6c';
                document.getElementById(grid_watcher[0].element_id + '').querySelector('.face1 .content').style.opacity = '1';
                document.getElementById(grid_watcher[0].element_id + '').setAttribute('validate', 1);
                document.getElementById(grid_watcher[1].element_id + '').setAttribute('validate', 1);
                document.getElementById(grid_watcher[1].element_id + '').querySelector('.face1').style.backgroundColor = '#708f6c';
                document.getElementById(grid_watcher[1].element_id + '').querySelector('.face1 .content').style.opacity = '1';
            }
            grid_watcher = [];
        }

        sum = 0;
        document.querySelectorAll('.cell').forEach(cell => {
            sum += parseInt(cell.getAttribute('validate'));
        });
        if (sum === 18) {
            alert('Vous avez gagné, prochaine étape : me recruter !!! ');
            window.scrollTo(0, 3306);
        }
    });
});

// ---------------------------------------------------- Carousel ----------------------------------------------------

const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');

let pictures = ['./images/hobbies/me.png', './images/hobbies/me5.jpeg', './images/hobbies/me6.jpeg', './images/hobbies/me4.jpg', './images/hobbies/me2.jpg', './images/hobbies/me3.jpg'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

rightBtn.addEventListener("click", moveRight);
