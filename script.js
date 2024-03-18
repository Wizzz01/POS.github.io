const addFoodButtons = document.querySelectorAll('button[name="addItem"]');

addFoodButtons.forEach((button) => {
  button.addEventListener('click', () => {
    addFood();
  });
});

function addFood() {
  const template = `
    <select name="foodOpt" id="foodOpt">
      <option value="burger">Burger</option>
      <option value="fries">Fries</option>
      <option value="fishbol">Fishbol</option>
      <option value="kikiam">Kikiam</option>
    </select>
    <br><br>
    <label for="quantity">Quantity</label><br>
    <input type="number" id="quantity" name="quantity"><br>
    
  `;

  const newFoodItem = document.createElement('div');
  newFoodItem.innerHTML = template;
  // newFoodItem.classList.add('food-item');

  const foodItemsContainer = document.querySelector('.added-item-container');
  foodItemsContainer.appendChild(newFoodItem);
}

function finalOrder() {
  const foodItems = document.querySelectorAll('[name="foodOpt"]');
  let total = 0;
  foodItems.forEach(foodItem => {
    const foodValue = foodItem.value;
    const quantityValue = foodItem.parentElement.querySelector('[name="quantity"]').value;
    const quantity = parseInt(quantityValue);
    if (foodValue === "burger") {
      total += 60 * quantity;
    }else if (foodValue === "fries") {
      total += 50 * quantity;
    }else if (foodValue === "fishbol") {
      total += 20 * quantity;
    }else if (foodValue === "kikiam") {
      total += 25 * quantity;
    }
  });
  alert(`Order has been Finalized\nTotal = ${total}`);
}

function totalPay() {
  const cash = document.getElementById("payment").value;
  const foodItems = document.querySelectorAll('[name="foodOpt"]');
  let total = 0;
  foodItems.forEach(foodItem => {
    const foodValue = foodItem.value;
    const quantityValue = foodItem.parentElement.querySelector('[name="quantity"]').value;
    const quantity = Number(quantityValue);
    if (foodValue === "burger") {
      total += 60 * quantity;
    } else if (foodValue === "fries") {
      total += 50 * quantity;
    } else if (foodValue === "fishbol") {
      total += 20 * quantity;
    } else if (foodValue === "kikiam") {
      total += 25 * quantity;
    }
  });

  const change = cash - total;
  if (cash < total) {
    const shortage = total - cash;
    alert(`Payment is short, please add ${shortage} Pesos more to complete the order.`);
  } else if (cash > total) {
    alert(`Your change is: ${change} Pesos\nThank you, and enjoy your meal!`);
  } else {
    alert(`Thank you, and enjoy your meal!`);
  }
}