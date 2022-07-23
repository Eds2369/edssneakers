// mobile bar button
const barBtn = document.getElementById('mobile-bars')
const navLinks = document.getElementById('mobile-nav-links')
const closeNav = document.getElementById('nav-close-btn')

const navBackground = document.getElementById('mobile-nav-background')


barBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show')
    navBackground.classList.add('show')
})

closeNav.addEventListener('click', () => {
    navLinks.classList.remove('show')
    navBackground.classList.remove('show')
})

// window.addEventListener("click", e => e.target == navBackground ? navBackground.classList.remove("show") &&  navLinks.classList.remove('show') : false)

window.addEventListener('click', (e) => {
    if (e.target == navBackground) {
        navLinks.classList.remove('show')
        navBackground.classList.remove("show")
    }
})


// regular product iamge list
const expandedImg = document.getElementById('expanded-img')
const productThumbnails = document.querySelectorAll('#thumbnail-img')

console.log(productThumbnails);

productThumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener('click', () => {
        expandedImg.src = `images/image-product-${i+1}.jpg`
    })
})


// zoomed in image list

const expandedImgLightbox = document.getElementById('expanded-img-lightbox')
const lightboxThumbnails = document.querySelectorAll('#thumbnail-img-lightbox')

const productImgBackground = document.getElementById('product-click-background')

expandedImg.addEventListener('click', () => {
    let screenWidth = window.innerWidth
    console.log(screenWidth);

    if (screenWidth > 1024) {
        productImgBackground.classList.toggle('show')
    }
})


lightboxThumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener('click', () => {
        expandedImgLightbox.src = `images/image-product-${i+1}.jpg`
    })
})

window.addEventListener("click", e => e.target == productImgBackground ? productImgBackground.classList.remove("show") : false)


// cart functionality

const cartIcon = document.getElementById('cart-icon')
const cartBox = document.getElementById('cart-information')

const mainTest = document.getElementById('main-test')


cartIcon.addEventListener('click', () => {
    cartBox.classList.toggle('showCart')
    // console.log(mainTest);
})

// window.addEventListener("click", e => e.target != cartIcon ? cartBox.classList.remove('showCart') : false)



// increment buttons
const minusQuantity = document.getElementById('minus-quantity')
const plusQuantity = document.getElementById('plus-quantity')
const quantity = document.getElementById('quantity')

let startingQuantity = 1

minusQuantity.addEventListener('click', () => {
    console.log('minus');
    if (quantity.innerText > 1) {
        startingQuantity = quantity.innerText--
    }
    
})

plusQuantity.addEventListener('click', () => {
    console.log('plus');
    startingQuantity = quantity.innerText++ 
})

quantity.innerText = startingQuantity

// console.log(quantity.innerText);



// if cart is empty
const cartContent = document.createElement('span')
cartContent.id = 'cart-content'
cartContent.innerHTML = 'Your cart is empty.'
cartContent.style.padding = '60px 20px'

cartBox.appendChild(cartContent)


// added to cart content
const addToCartBtn = document.getElementById('cart')
// const itemPrice = document.getElementById('cart-item-cost')

const itemPrice = document.createElement('span')
itemPrice.id = 'cart-item-cost'

let itemCost = 125.00

itemPrice.innerText = itemCost

console.log(addToCartBtn);
console.log(itemPrice)
addToCartBtn.addEventListener('click', () => {
    cartContent.innerHTML =
    `
        <div class="cart-item">
        <div class="cart-item-img">
            <img src="images/image-product-1-thumbnail.jpg" alt="">
        </div>
        <div class="cart-item-info">
            <div class="cart-item-name">Autumn Limited Edition...</div>
            <div class="cart-item-quantity">
            <span id="cart-item-cost">$${itemCost}</span>
            <span>x</span>
            <span id="item-quantity">${quantity.innerText}</span>
            <span id="cart-total-cost">$${itemCost * quantity.innerText}</span>
            </div>
        </div>
        <div class="cart-item-delete">
            <img id="cart-item-delete" src="images/icon-delete.svg" alt="">
        </div>
        </div>
    `
//     cartContent.style.padding = '0px'
//     cartContent.innerHTML = `
//     <div class="cart-checkout">
//     <button id="cart-checkout">Checkout</button>
// </div>
//     `
    cartContent.style.padding = "0px"
    cartCheckoutBtn.innerHTML = `<button id="cart-checkout">Checkout</button>`
    cartBox.appendChild(cartContent) 
    cartBox.appendChild(cartCheckoutBtn)

    // cartBox.appendChild(cartContent)

    console.log('added to cart');
    console.log(quantity.innerText);

    document.getElementById('cart-checkout').addEventListener('click', () => {
        alert(`Thank you for your purchase! your total cost was $${itemCost * quantity.innerText}`)
        cartBox.classList.remove('showCart')

        cartContent.id = 'cart-content'
        cartContent.innerHTML = 'Your cart is empty.'
        cartContent.style.padding = '60px 20px'


        document.getElementById('cart-checkout').style.padding = '0'
        cartCheckoutBtn.innerHTML = ''
    })

    // delete from cart
    const deleteFromCart = document.getElementById('cart-item-delete')
    deleteFromCart.addEventListener('click', () => {        
        cartContent.id = 'cart-content'
        cartContent.innerHTML = 'Your cart is empty.'
        cartContent.style.padding = '60px 20px'


        document.getElementById('cart-checkout').style.padding = '0'
        cartCheckoutBtn.innerHTML = ''
    })

    alert('Item added to cart')
})


// check out btn
const cartCheckoutBtn = document.createElement('div')
cartCheckoutBtn.classList.add('cart-checkout')

if (cartContent.innerText == 'Your cart is empty.') {
    document.getElementById('cart-checkout').style.padding = '0'
    cartCheckoutBtn.innerHTML = ''
} 

