// Placeholder price for Taler Coin
async function updateTalerPrice() {
  // اگر API واقعی داری می‌تونی اینجا فراخوانی کنی
  document.getElementById('talerPrice').textContent = "TALER: $0.001";
}

updateTalerPrice();
setInterval(updateTalerPrice, 60000); // بروزرسانی هر دقیقه
