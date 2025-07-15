const cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById('total').textContent = total.toFixed(2);
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  document.getElementById('cart').classList.add('hidden');
  document.getElementById('confirmation').classList.remove('hidden');

  // Simulate delivery countdown (e.g. 15 minutes real time would be long, so we simulate it)
  console.log("Order placed. Simulating 15-minute delivery...");
  // Optionally add a timer or progress bar for user feedback
}
