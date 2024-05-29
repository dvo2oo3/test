export default class GiftModel {
    constructor() {
        this.history = JSON.parse(localStorage.getItem('giftHistory')) || [];
    }

    addGift(playerName, giftNumber, date) {
        this.history.push({ playerName, giftNumber, date });
        localStorage.setItem('giftHistory', JSON.stringify(this.history));
    }

    getHistory() {
        return this.history;
    }
}
