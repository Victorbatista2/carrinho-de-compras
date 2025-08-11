//adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

//deletar item do carrinho-------em uma situação real seriam passados como parametro uma id etc
async function deleteItem(userCart,name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1 ){
        userCart.splice(index, 1);
    }
}

//remover um item-------em uma situação real seriam passados como parametro uma id etc
async function removeItem(userCart, item) {
    
    //1. encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //2. caso não encontre o item
    if (indexFound == -1 ){
        console.log("item não encontrado");
        return;
    }


    //3. item > 1 subtrair um item
    if (userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return;
    }

    //caso item=1 deletar o item
    if (userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }


}

//calcular o total
async function calculateTotal(userCart) {
    console.log("\nCart TOTAL is: ");
    
    const result = (userCart.reduce((total,item)=> total + item.subtotal(), 0));
    console.log(`💵TOTAL: ${result} `);
}

async function displayCart(userCart){
    console.log("\nCart list: ")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}X | Subtotal = ${item.subtotal()}`)
    });
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}