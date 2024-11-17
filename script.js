document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('productForm');
    productForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        const productName = document.getElementById('productName').value.trim();
        const productQuantity = document.getElementById('productQuantity').value.trim();
        const productDescription = document.getElementById('productDescription').value.trim();
        const productPrice = document.getElementById('productPrice').value.trim();
        const productDelivery = document.getElementById('productDelivery').value.trim();

        if (productName === '') {
            alert('Product Name is required');
            isValid = false;
        }
        if (productQuantity === '') {
            alert('Quantity is required');
            isValid = false;
        }
        if (productDescription === '') {
            alert('Description is required');
            isValid = false;
        }
        if (productPrice === '') {
            alert('Price is required');
            isValid = false;
        }
        if (productDelivery === '') {
            alert('Delivery Date is required');
            isValid = false;
        }

        if (isValid) {
            alert(`Product Name: ${productName}\nQuantity: ${productQuantity}\nDescription: ${productDescription}\nPrice: ${productPrice}\nDelivery Date: ${productDelivery}`);

            // Изменение CSS
            const header = document.querySelector('h1');
            const submitButton = document.querySelector('button[type="submit"]');

            if (header) {
                header.style.backgroundColor = 'lightgreen'; // Меняем цвет фона заголовка
            }

            if (submitButton) {
                submitButton.style.display = 'none'; // Скрываем кнопку отправки
            }
        }
    });
});