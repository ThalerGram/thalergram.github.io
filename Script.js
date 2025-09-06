// Replace / confirm contract address and links if you want dynamic update
const contractAddr = '0xb4d1f80cbbf41b2a883098b9523ae32233fd038a'; // replace with full real contract address
const polygonscanBase = 'https://polygonscan.com/token/0xb4d1f80cbbf41b2a883098b9523ae32233fd038a';

document.getElementById('contractAddress').textContent = contractAddr;
document.getElementById('polygonscanLink').href = polygonscanBase + contractAddr;

// supply formatting
const raw = '21,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000';
document.getElementById('rawSupply').textContent = raw;

// format with commas every 3 digits (big integers)
function formatBigIntWithCommas(s) {
  // split into groups of 3 from the right
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.getElementById('fmtSupply').textContent = formatBigIntWithCommas(raw);
