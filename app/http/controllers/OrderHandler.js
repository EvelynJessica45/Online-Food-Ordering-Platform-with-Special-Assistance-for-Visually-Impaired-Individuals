// public/js/orderHandler.js

function handleOrder(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form data
    const form = event.target;
    const formData = new FormData(form);
    const orderDetails = {
        paymentType: formData.get('paymentType'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        items: JSON.parse(document.getElementById('cartItems').value),
        totalPrice: document.getElementById('totalPrice').value
    };

    // Display the order details in the modal
    displayBill(orderDetails);
}

function displayBill(orderDetails) {
    const billContent = document.getElementById('billContent');
    billContent.innerHTML = `
        <p><strong>Phone:</strong> ${orderDetails.phone}</p>
        <p><strong>Address:</strong> ${orderDetails.address}</p>
        <p><strong>Payment Type:</strong> ${orderDetails.paymentType}</p>
        <hr class="my-4">
        <div>
            ${Object.values(orderDetails.items).map(pizza => `
                <div class="flex justify-between items-center mb-4">
                    <div>
                        <h4 class="font-bold">${pizza.item.name}</h4>
                        <p>${pizza.qty} x ₹${pizza.item.price} = ₹${pizza.item.price * pizza.qty}</p>
                        <p>Size: ${pizza.item.size}</p>
                        <p>Calories: ${pizza.item.calories} kcal</p>
                    </div>
                    <div class="font-bold">₹${pizza.item.price * pizza.qty}</div>
                </div>
            `).join('')}
        </div>
        <hr class="my-4">
        <div class="text-right">
            <p class="text-lg font-bold">Total Amount: ₹${orderDetails.totalPrice}</p>
        </div>
    `;

    // Show the modal
    document.getElementById('billModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('billModal').classList.add('hidden');
}

// Attach event listener to the order form
document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('payment-form');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrder);
    }
});
