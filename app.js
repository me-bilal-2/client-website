// Load cart from localStorage
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in navbar
function updateCartCount() {
  var count = cart.reduce((sum, item) => sum + item.quantity, 0);
  var counter = document.getElementById('cart-count');
  if (counter) counter.innerText = count;
}

// Add to Cart Function
function addToCart(productName, productPrice, productImage) {
  var existing = cart.find(item => item.name === productName);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${productName} added to cart!`);
}

// Toggle mobile menu
function toggleMenu() {
  document.getElementById('navbar').classList.toggle('active');
}

// Call count update on page load
updateCartCount();
// Load cart from localStorage
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in navbar
function updateCartCount() {
  var count = cart.reduce((sum, item) => sum + item.quantity, 0);
  var counter = document.getElementById('cart-count');
  if (counter) counter.innerText = count;
}

// Add to Cart Function
function addToCart(productName, productPrice, productImage) {
  var existing = cart.find(item => item.name === productName);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${productName} added to cart!`);
}

// Render cart items on cart page
function renderCartItems() {
    var cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return;
  
    if (cart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }
  
    var html = '';
    cart.forEach((item, index) => {
        var total = 0;
        cart.forEach((item, index) => {
          total += item.price * item.quantity;
          html += `
            <div class="cart-item">
              <img src="${item.image}" width="80" alt="${item.name}" onerror="this.src='fallback.jpg';">
              <div>
                <h4>${item.name}</h4>
                <p>Price: Rs. ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <button onclick="removeItemFromCart(${index})" class="btn btn-danger btn-sm mt-2">Remove</button>
              </div>
            </div>
            <hr>
          `;
        });
        document.getElementById('cart-total').innerText = total;
        
    });
  
    cartContainer.innerHTML = html;
  }
  
// Proceed to checkout
function proceedToCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you! Your order has been placed.");
  localStorage.removeItem('cart');
  cart = [];
  updateCartCount();
  if (document.getElementById('cart-items')) {
    renderCartItems();
  }
}

// On load
window.onload = function () {
  updateCartCount();
  renderCartItems();
};

function removeItemFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
  }