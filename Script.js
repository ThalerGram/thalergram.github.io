const messages = document.getElementById('messages');
const msgInput = document.getElementById('msgInput');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', () => {
  const msg = msgInput.value.trim();
  if(msg === '') return;
  const div = document.createElement('div');
  div.className = 'message sent';
  div.textContent = msg;
  messages.appendChild(div);
  msgInput.value = '';
  messages.scrollTop = messages.scrollHeight;
});

// Fetch crypto prices
async function updatePrices() {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await res.json();
    document.getElementById('btcPrice').textContent = `BTC: $${data.bitcoin.usd}`;
    document.getElementById('ethPrice').textContent = `ETH: $${data.ethereum.usd}`;
  } catch(e) {
    console.error('Crypto API error', e);
  }
}
updatePrices();
setInterval(updatePrices, 60000); // update every 1 min
