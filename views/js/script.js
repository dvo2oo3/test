import GiftController from '../../controllers,js/GiftController.js';

const giftController = new GiftController();

function submitName() {
    const playerName = document.getElementById('playerName').value;
    if (playerName.trim() === '') {
        alert('Please enter your name.');
        return;
    }
    localStorage.setItem('playerName', playerName);
    document.getElementById('nameEntry').style.display = 'none';
    document.getElementById('giftBoxes').style.display = 'flex';
}

function selectGift(giftNumber) {
    const playerName = localStorage.getItem('playerName');
    giftController.addPlayerGift(playerName, giftNumber);
    window.location.href = `congrats.html?gift=${giftNumber}`;
}

window.submitName = submitName;
window.selectGift = selectGift;

// Trong script.js

window.selectGift = function(giftNumber) {
    const gifts = ['vòng', 'nhẫn', 'hoa', 'cái nịt'];
    const randomIndex = Math.floor(Math.random() * gifts.length);
    const selectedGift = gifts[randomIndex];
    window.location.href = `congrats.html?gift=${selectedGift}`;
};


