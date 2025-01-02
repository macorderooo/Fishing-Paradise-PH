let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));

        
        cart.push({ name, price });
        
        
        localStorage.setItem('cart', JSON.stringify(cart));
        
        
        updateCart();
    });
});


function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}


updateCart();

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Logged in as ${username}`);
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const email = document.getElementById('email').value;
    alert(`Registered as ${newUsername}`);
});

const usernameDisplay = document.getElementById('username-display');
const emailDisplay = document.getElementById('email-display');
usernameDisplay.textContent = localStorage.getItem('username') || 'Guest';
emailDisplay.textContent = localStorage.getItem('email') || 'Not provided';
document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    window.location.href = 'login.html';
});
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const email = document.getElementById('email').value;

    if (newUsername && newPassword && email) {
        localStorage.setItem('username', newUsername);
        localStorage.setItem('email', email);
        alert(`Registered successfully as ${newUsername}`);
        window.location.href = 'login.html';
    } else {
        alert('Please fill in all fields.');
    }
});