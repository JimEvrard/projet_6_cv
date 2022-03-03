const guess_word_element = document.getElementById('guess-word');
const letter_input_element = document.getElementById('letter-input');
const btn_send_element = document.getElementById('btn-send');

const word_guess = "Contact";
const word_guess_arr = word_guess.split('');

let loose_count = -1;
let word_buff = '';
let letters_find = [' ', '\''];
let letters_find_size_buff = letters_find.length;

function guess(word_arr) {
    word_buff = '';
    word_arr.forEach(letter => {
        if (letters_find.includes(letter)) {
            word_buff += letter;
        } else {
            word_buff += 'ˍ';
        }
    });
    display_word(word_buff);
    if (letters_find_size_buff === letters_find.length) {
        loose();
    }
    letters_find_size_buff = letters_find.length;

    if (word_guess === word_buff) {
        setTimeout(win, 1);
    }
}

function win() {
    alert('Tu as gagné'); // texte ecris dans l'alerte lors de la victoire
    reset();
    // ici se qui se passe aprés une victoire
}

function display_word(word) {
    guess_word_element.textContent = word;
}

function loose() {
    loose_count++;
    if (loose_count > 6) {
        alert('Tu as perdu'); // texte ecris dans l'alerte lors de la défaite
        reset();
        // ici se qui se passe aprés une défaite
    } else {
        document.querySelector('.img-container').innerHTML = `<img src="./images/pendu/hangman_${loose_count}.png">`;
    }
}

function reset() {
    loose_count = -1;
    word_buff = '';
    letters_find = [' ', '\''];
    letters_find_size_buff = letters_find.length;
    guess(word_guess_arr);
}

btn_send_element.addEventListener('click', e => {
    if (!letters_find.includes(letter_input_element.value) && letter_input_element.value !== '' && letter_input_element.value !== ' ') {
        if (word_guess_arr.includes(letter_input_element.value)) {
            letters_find.push(letter_input_element.value);
        }
    }
    letter_input_element.value = '';
    guess(word_guess_arr);
});

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        if (!letters_find.includes(letter_input_element.value) && letter_input_element.value !== '' && letter_input_element.value !== ' ') {
            if (word_guess_arr.includes(letter_input_element.value)) {
                letters_find.push(letter_input_element.value);
            }
        }
        letter_input_element.value = '';
        guess(word_guess_arr);
    }
});

guess(word_guess_arr);
