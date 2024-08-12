
const container = document.querySelector(".intro__text");
const text = "Привет, меня зовут Ярик, я люблю программировать и разрабатывать веб-приложения"

function typingAnimation(element, text, index = 0) {
    element.textContent += text[index];


    if (index === text.length - 1) {
        return
    }

    setTimeout(() => typingAnimation (element, text, index + 1), 50)

}

typingAnimation(container, text)