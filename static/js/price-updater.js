function updatePrice(selectElement) {
    const selectedOption = selectElement.value;
    const itemCard = selectElement.closest('.item-card');
    const priceElement = itemCard.querySelector('.item-price');
    const oldPriceElement = itemCard.querySelector('.item-old-price');
    const basePrice = parseFloat(itemCard.dataset.basePrice);
    const baseOldPrice = parseFloat(itemCard.dataset.baseOldPrice || '0');

    let multiplier;
    switch(selectedOption) {
        case '500 gm':
            multiplier = 1;
            break;
        case '1 kg':
            multiplier = 2;
            break;
        case '2 kg':
            multiplier = 4;
            break;
        default:
            multiplier = 1;
    }

    const newPrice = basePrice * multiplier;
    priceElement.textContent = `Rs.${newPrice}`;

    if (oldPriceElement && baseOldPrice) {
        const newOldPrice = baseOldPrice * multiplier;
        oldPriceElement.textContent = `Rs.${newOldPrice}`;
    }
}