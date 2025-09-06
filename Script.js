// Replace / confirm contract address and links if you want dynamic update
const contractAddr = '0x8545689...'; // replace with full real contract address
const polygonscanBase = 'https://polygonscan.com/address/';

document.getElementById('contractAddress').textContent = contractAddr;
document.getElementById('polygonscanLink').href = polygonscanBase + contractAddr;

// supply formatting
const raw = '21000000000000000000000000000000000000000000000000000000000000000000000000000';
document.getElementById('rawSupply').textContent = raw;

// format with commas every 3 digits (big integers)
function formatBigIntWithCommas(s) {
  // split into groups of 3 from the right
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.getElementById('fmtSupply').textContent = formatBigIntWithCommas(raw);
