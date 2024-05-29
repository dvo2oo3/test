import GiftController from '../../controllers,js/GiftController.js';

const giftController = new GiftController();

document.addEventListener('DOMContentLoaded', () => {
    const historyTableBody = document.querySelector('#historyTable tbody');
    const history = giftController.getGiftHistory();

    history.forEach(entry => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = entry.playerName;
        row.appendChild(nameCell);

        const giftCell = document.createElement('td');
        giftCell.textContent = entry.giftNumber;
        row.appendChild(giftCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = entry.date;
        row.appendChild(dateCell);

        historyTableBody.appendChild(row);
    });
});
