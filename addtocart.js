const product = [
    {
        id: 0,
        Image: 'images/indianburger2.png',  // Corrected spelling of 'burger.jpeg'
        title: 'Indian Burger',
        price: 20,
    },
    {
        id: 1,
        Image: 'images/naan.png',
        title: 'Naan',
        price: 10,
    },
    {
        id: 2,
        Image: 'images/food.png',
        title: 'Christmas Food',
        price: 25,
    },
    {
        id: 3,
        Image: 'images/comboburder.webp',  
        title: 'Burger Combo',
        price: 25,
    },
    {
        id: 4,
        Image: 'images/KadaiPanir.png',  
        title: 'Kadai Panir',
        price: 30,
    },
    {
        id: 5,
        Image: 'images/garlic naam.webp',  
        title: 'Garlic Naan',
        price: 15,
    },
    {
        id: 6,
        Image: 'images/noodles.png',  
        title: 'Noodles',
        price: 35,
    },
    {
        id: 7,
        Image: 'images/rice5.webp',  
        title: 'Rice',
        price: 10,
    },
    {
        id: 8,
        Image: 'images/samosa2.webp',  
        title: 'Samosa',
        price: 5,
    },
    {
        id: 9,
        Image: 'images/tandoori.png',  
        title: 'Tandoori Prawan',
        price: 20,
    },
    
];

let i = 0;

// Populate the root div with product data
document.getElementById('root').innerHTML = product.map((item) => {
    const { Image, title, price } = item;  // Destructuring the item object correctly
    return (
        `<div class="box">
            <div class="img-box">
                <img class="images" src="${Image}" alt="${title}"> <!-- Added alt attribute for accessibility -->
            </div>
            <div class="bottom">
                <p class"title">${title}</p>
                <h2>$ ${price}.00</h2>
                <button onclick="addtocart(${i++})">Add to cart</button>
            </div>
        </div>`
    );
}).join('');


var cart = []; // The cart array to store the items

function addtocart(a){
    cart.push({...catagories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}
// Function to add item to the cart
function addtocart(a) {
    cart.push({...product[a]});  // Correct reference to the `product` array
    displaycart(); // Refresh the cart display
}

// Function to save cart data before checkout
function saveCartData() {
    // Save the cart array and total amount to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cart));
    localStorage.setItem("cartTotal", document.getElementById("total").innerText);
}


// Function to display cart items
function displaycart() {
    let j = 0; total=0; // Initialize an index for the delete button
    
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML="$ "+0+".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            var { Image, title, price } = item;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${Image}' alt='${title}'>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
            );
        }).join('');
        
        
    }
}



// Function to remove an item from the cart
function delElement(index) {
    cart.splice(index, 1); 
    displaycart(); // Refresh the cart display
}

