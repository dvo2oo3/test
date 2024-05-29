import GiftModel from '../models/GiftModel.js';

export default class GiftController {
    constructor() {
        this.giftModel = new GiftModel();
    }

    addPlayerGift(playerName, giftNumber) {
        const date = new Date().toLocaleString();
        this.giftModel.addGift(playerName, giftNumber, date);
    }

    getGiftHistory() {
        return this.giftModel.getHistory();
    }
    addPlayerGift(playerName, giftNumber) {
        // Logic to add player's gift
        console.log(`Adding gift ${giftNumber} for player ${playerName}`);
    }
}


