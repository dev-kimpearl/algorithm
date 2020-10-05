const btn = document.querySelector('#button');
const word = document.querySelector('#word');
const userWord = document.querySelector('#userWord');
const error = document.querySelector('#error');

btn.addEventListener('click', () => {
    const word_value = word.textContent;
    const userWord_value = userWord.value;
    const last_char = word_value[word_value.length -1];
    const first_char = userWord_value[0];
    
        if (last_char === first_char) {
            word.innerText = userWord_value;
            error.innerText = '';
            userWord.value = '';
            userWord.focus(); // 커서가 input에 유지되도록 설정
            dictionary.push(userWord_value);
        } else {
            error.innerText = '땡!'
            userWord.value = '';
            userWord.focus(); // 커서가 input에 유지되도록 설정
        }        
    
})

