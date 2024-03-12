function finalOrder() {
    const foodOpt = document.getElementById('foodOptions').value;
    const quantity = document.getElementById('quantity').value;

    if (foodOpt && quantity) {
        alert('Order has been finalized!');
    } else {
        alert('Please select an option and enter a quantity before finalizing the order.');
    }
}