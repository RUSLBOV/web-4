
    
    const checkboxes = document.querySelectorAll(".checkbox");
    const inputs = document.querySelectorAll(".item input[type='number']");
    const totalElement = document.querySelector(".sum");
    const btnOrder = document.querySelector(".btn");
    const surnameInput = document.querySelector("input[name='surname']");
    const nameInput = document.querySelector("input[name='name']");


    function updateTotal() {
        let total = 0;

        checkboxes.forEach((checkbox, index) => {
            const input = inputs[index];
            const price = parseInt(checkbox.value);

            if (checkbox.checked) {
              
                if (input.value === "0") input.value = 1;
                total += price * parseInt(input.value);
            } else {
                input.value = 0; 
            }
        });

        totalElement.textContent = `${total} р.`;
    }

    checkboxes.forEach((checkbox, index) => {
        const input = inputs[index];

        checkbox.addEventListener("change", () => {
            updateTotal();
        });

        input.addEventListener("input", () => {
            if (/^0\d|-\d/.test(input.value) || input.value < 0) {
                input.value = 0;
            }
            updateTotal();
        });
    });

    btnOrder.addEventListener("click", () => {
        const surname = surnameInput.value.trim();
        const name = nameInput.value.trim();
        if(surname!=="" || name !==""){
        let orderDetails = `Заказчик: ${surname} ${name}\n\nЗаказ:\n`;

        let hasOrder = false;

        checkboxes.forEach((checkbox, index) => {
            const input = inputs[index];
            const price = parseInt(checkbox.value);
            const quantity = parseInt(input.value);
            const label = checkbox.nextElementSibling.textContent.trim();

            if (checkbox.checked && quantity > 0) {
                hasOrder = true;
                orderDetails += `${label} - ${quantity} шт. - ${price * quantity} р.\n`;
            }
        });

        if (!hasOrder) {
            orderDetails += "Заказ не выбран.";
        }

        alert(orderDetails);
    }
    else{
        alert("Неправильное имя или фамилия")
    }
    });

    updateTotal(); 

