





//-----------------Interface-----------------//




document.querySelector('.food-options .options').setAttribute('data-identifier', 'dishes');
document.querySelector('.drink-options .options').setAttribute('data-identifier', 'drinks');
document.querySelector('.dessert-options .options').setAttribute('data-identifier', 'desserts');



foodsJson.map((item, index) => {
    let foodItem = document.querySelector('.item-container').cloneNode(true);

    foodItem.setAttribute('data-key', index);
    foodItem.setAttribute('data-identifier', 'food-option');
    foodItem.querySelector('.item-container h4').setAttribute('data-identifier', 'food-title');
    foodItem.querySelector('.item-container h3').setAttribute('data-identifier', 'food-price');

    foodItem.querySelector('.item-container .img').style.backgroundImage = `url('${item.img}')`;
    foodItem.querySelector('.item-container h4').innerHTML = item.name;
    foodItem.querySelector('.item-container p').innerHTML = item.description;
    foodItem.querySelector('.item-container h3').innerHTML = item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


    document.querySelector('.food-options .options').append(foodItem);





});



drinksJson.map((item, index) => {
    let drinkItem = document.querySelector('.item-container').cloneNode(true);

    drinkItem.setAttribute('data-key', index);
    drinkItem.setAttribute('data-identifier', 'food-option');
    drinkItem.querySelector('.item-container h4').setAttribute('data-identifier', 'food-title');
    drinkItem.querySelector('.item-container h3').setAttribute('data-identifier', 'food-price');

    drinkItem.querySelector('.item-container .img').style.backgroundImage = `url('${item.img}')`;
    drinkItem.querySelector('.item-container h4').innerHTML = item.name;
    drinkItem.querySelector('.item-container p').innerHTML = item.description;
    drinkItem.querySelector('.item-container h3').innerHTML = item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});





    document.querySelector('.drink-options .options').append(drinkItem);

});

dessertsJson.map((item, index) => {
    let dessertItem = document.querySelector('.item-container').cloneNode(true);

    dessertItem.setAttribute('data-key', index);
    dessertItem.setAttribute('data-identifier', 'food-option');
    dessertItem.querySelector('.item-container h4').setAttribute('data-identifier', 'food-title');
    dessertItem.querySelector('.item-container h3').setAttribute('data-identifier', 'food-price');

    dessertItem.querySelector('.item-container .img').style.backgroundImage = `url('${item.img}')`;
    dessertItem.querySelector('.item-container h4').innerHTML = item.name;
    dessertItem.querySelector('.item-container p').innerHTML = item.description;
    dessertItem.querySelector('.item-container h3').innerHTML = item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});





    document.querySelector('.dessert-options .options').append(dessertItem);

});




//-----------------Functions-----------------//

document.querySelector('.item-container').addEventListener('click',function(){
    document.querySelectorAll('.item-container').classList.remove('selected-border');
    this.classList.add('selected-border');
});