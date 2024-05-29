const urlParams = new URLSearchParams(window.location.search);
const giftNumber = urlParams.get('gift');
const playerName = localStorage.getItem('playerName');
document.querySelector('.message').innerText = `Chúc mừng ${playerName}! Bạn đã nhận được món quà là: ${giftNumber}🫣`;

// document.addEventListener('DOMContentLoaded', () => {
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const selectedGift = urlParams.get('gift');
//     if (selectedGift) {
//         document.getElementById('giftDisplay').textContent = `You received: ${selectedGift}`;
//     } else {
//         document.getElementById('giftDisplay').textContent = 'No gift selected.';
//     }
// });
