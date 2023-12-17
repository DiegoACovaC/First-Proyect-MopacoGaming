// Datos de ejemplo de productos gaming
const products = [
    { id: 1, name: "Disco Duro", price: 49.99 },
    { id: 2, name: "Teclado Gamer", price: 99.99 },
    { id: 3, name: "Mouse Gamer", price: 59.99 },
    // Agrega más productos aquí...
];

// Estado del carrito
let cartItems = [];

// Función para mostrar los productos de gaming disponibles
function displayProducts() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button class="boton" onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Función para agregar un producto al carrito
function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
        cartItems.push(productToAdd);
        displayCart();
    }
}

// Función para mostrar el contenido del carrito
function displayCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
        `;
        cartContainer.appendChild(cartItem);
        total += item.price;
    });

    document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;
}

// Llamamos a las funciones para mostrar los productos y el carrito al cargar la página
displayProducts();
displayCart();
