// casos de uso dos itens

//criar item com subtotal certo-------em uma situação real seriam passados como parametro uma id etc
async function createItem(name, price, quantity){
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }

}

export default createItem;