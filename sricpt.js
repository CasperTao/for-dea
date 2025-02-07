const messages = [
    "Yakin?",
    "Benaran Nih??",
    "Coba pikirin dulu?",
    "Gausah buru-buru ko",
    "santai aja mikirnya",
    "kalo beneran di tolak, parah sih",
    "tar gua bakalan sedih",
    "sedih banget cok",
    "yaudh lah kalo gitu mah",
    "Becanda cokk, bilang iya napa ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}