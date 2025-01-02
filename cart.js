document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(div);
        total += item.price;
    });

    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Proceeding to checkout!');
    });
});