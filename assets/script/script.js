

let cart = [];

let userName = null;
let userAddress = null;



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

let foodContainer = Array.from(document.querySelectorAll('.food-options .options .item-container'));

let drinkContainer = Array.from(document.querySelectorAll('.drink-options .options .item-container'));

let dessertContainer = Array.from(document.querySelectorAll('.dessert-options .options .item-container'));

let numberOfSelectedItems = 0


foodContainer.map((item) => {
    item.addEventListener('click',function(){

        if (item.classList.contains('selected-border')) {
            item.querySelector('.checkmark').classList.add('no-display')
            item.classList.remove('selected-border');
            numberOfSelectedItems --;

        } else if (document.querySelector('.food-options .options .item-container.selected-border')){
            document.querySelector('.food-options .options .item-container.selected-border .checkmark').classList.add('no-display');
            document.querySelector('.food-options .options .item-container.selected-border').classList.remove('selected-border');
            item.classList.add('selected-border');
            item.querySelector('.no-display').classList.remove('no-display');
            
        } else {
            item.classList.add('selected-border');
            item.querySelector('.no-display').classList.remove('no-display');
            numberOfSelectedItems ++;
        }


        if (numberOfSelectedItems === 3) {
            activateButton();

        } else {
            deactivateButton();
        }


    });
});

drinkContainer.map((item) => {
    item.addEventListener('click',function(){

        if (item.classList.contains('selected-border')) {
            item.querySelector('.checkmark').classList.add('no-display')
            item.classList.remove('selected-border');
            numberOfSelectedItems --;

        } else if (document.querySelector('.drink-options .options .item-container.selected-border')){
            document.querySelector('.drink-options .options .item-container.selected-border .checkmark').classList.add('no-display');
            document.querySelector('.drink-options .options .item-container.selected-border').classList.remove('selected-border');
            item.classList.add('selected-border');
            item.querySelector('.no-display').classList.remove('no-display');

        } else {
            item.classList.add('selected-border');
            item.querySelector('.no-display').classList.remove('no-display');
            numberOfSelectedItems ++;
        }


        if (numberOfSelectedItems === 3) {
            activateButton();

        } else {
            deactivateButton();
        }

        
    });
});

dessertContainer.map((item) => {
    item.addEventListener('click',function(){

        if (item.classList.contains('selected-border')) {
            item.querySelector('.checkmark').classList.add('no-display')
            item.classList.remove('selected-border');
            numberOfSelectedItems --;

        } else if (document.querySelector('.dessert-options .options .item-container.selected-border')){
            document.querySelector('.dessert-options .options .item-container.selected-border .checkmark').classList.add('no-display');
            document.querySelector('.dessert-options .options .item-container.selected-border').classList.remove('selected-border');
            item.classList.add('selected-border');
            item.querySelector('.no-display').classList.remove('no-display');
            
        } else {
            item.classList.add('selected-border');
            item.querySelector('.no-display').classList.remove('no-display');
            numberOfSelectedItems ++;

        }



        if (numberOfSelectedItems === 3) {
            activateButton();

        } else {
            deactivateButton();
        }

    });
});








function activateButton() {

    document.querySelector('.lower-bar button').innerHTML = 'Fechar pedido';
    document.querySelector('.lower-bar button').style.backgroundColor = '#32B72F';
    document.querySelector('.lower-bar button').classList.add('active');
}

function deactivateButton() {
    document.querySelector('.lower-bar button').innerHTML = 'Selecione os 3 itens<br>para fechar o pedido';
    document.querySelector('.lower-bar button').style.backgroundColor = '#CBCBCB';
    document.querySelector('.lower-bar button').classList.remove('active')
}





function modalPopUp() {
    userName = prompt('Digite seu Nome');
    userAddress = prompt('Digite seu Endereço');

    let chosenItems = Array.from(document.querySelectorAll('.app-container .selected-border'));

    chosenItems.map((item, index) => {
        cart.push(item.getAttribute('data-key'));
        
    });

    document.querySelector('.modal-container').classList.remove('no-display');

    let foodPrice = parseFloat(foodsJson[cart[0]].price);
    let drinkPrice = parseFloat(drinksJson[cart[1]].price);
    let dessertPrice = parseFloat(dessertsJson[cart[2]].price);


    document.querySelector('.modal-container .modal .product-line.food .item').innerHTML = foodsJson[cart[0]].name;
    document.querySelector('.modal-container .modal .product-line.food .price').innerHTML = foodPrice.toLocaleString('pt-br',{ minimumFractionDigits: 2, maximumFractionDigits: 2 });;

    document.querySelector('.modal-container .modal .product-line.drink .item').innerHTML = drinksJson[cart[1]].name;
    document.querySelector('.modal-container .modal .product-line.drink .price').innerHTML = drinkPrice.toLocaleString('pt-br',{ minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.querySelector('.modal-container .modal .product-line.dessert .item').innerHTML = dessertsJson[cart[2]].name;
    document.querySelector('.modal-container .modal .product-line.dessert .price').innerHTML = dessertPrice.toLocaleString('pt-br',{ minimumFractionDigits: 2, maximumFractionDigits: 2 });


    let total = foodPrice + drinkPrice + dessertPrice;

    document.querySelector('.modal-container .modal .product-line.total .price').innerHTML = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.querySelector ('.client-info .name-area .name').innerHTML = userName;
    document.querySelector ('.client-info .address-area .name').innerHTML = userAddress;
}


function concludeOrder() {

    let foodPrice = parseFloat(foodsJson[cart[0]].price);
    let drinkPrice = parseFloat(drinksJson[cart[1]].price);
    let dessertPrice = parseFloat(dessertsJson[cart[2]].price);

    let total = foodPrice + drinkPrice + dessertPrice;

    total = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


    let clientOrder = `Olá, gostaria de fazer o *pedido* \n\n\n- *Prato*: ${foodsJson[cart[0]].name} \n\n\n- *Bebida*: ${drinksJson[cart[1]].name}  \n\n\n- *Sobremesa*: ${dessertsJson[cart[2]].name} \n\n\n*Total*: *${total}* \n\n\n*Nome do Cliente*: ${userName} \n\n\n*Endereço de entrega*: ${userAddress}`;

    let encodedOrder = encodeURIComponent(clientOrder);
 
    window.open(`https://wa.me/5521964970146?text=${encodedOrder}`, '_blank');
}

function closeModal() {
    document.querySelector('.modal-container').classList.add('no-display');
}












//-----------------Events-----------------//


document.querySelector('.lower-bar button').addEventListener("click", () => {
    if(document.querySelector('.lower-bar button').classList.contains('active')) {
        modalPopUp();
    }
});

document.querySelector('.modal button:nth-last-child(2)').addEventListener("click", concludeOrder);

document.querySelector('.modal .cancel').addEventListener("click", closeModal);

