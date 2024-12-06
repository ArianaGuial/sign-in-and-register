// document.addEventListener('DOMContentLoaded', function() {
//     // Get modal elements
//     const modal = document.getElementById('material-modal');
//     const closeBtn = document.querySelector('.close-modal');

//     // Get ALL buttons, both from list and grid views
//     const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

//     console.log('Found buttons:', viewDetailsBtns.length); // Debug log

//     // Open modal function
//     function openModal(materialId) {
//         console.log('Opening modal for:', materialId); // Debug log
//         modal.style.display = 'block';
//         document.body.style.overflow = 'hidden';

//         // Hide all product details first
//         document.querySelectorAll('.product-details').forEach(detail => {
//             detail.style.display = 'none';
//         });

//         // Show the selected material's details
//         const selectedDetails = document.getElementById(`${materialId}-details`);
//         if (selectedDetails) {
//             selectedDetails.style.display = 'grid';
//         } else {
//             console.error('Could not find details for:', materialId);
//         }
//     }

//     // Add click event to all View Details buttons
//     viewDetailsBtns.forEach(btn => {
//         btn.addEventListener('click', function(e) {
//             e.preventDefault();
//             const materialId = this.getAttribute('data-material-id');
//             console.log('Button clicked for:', materialId); // Debug log
//             openModal(materialId);
//         });
//     });

//     // Close modal when X is clicked
//     closeBtn.addEventListener('click', function() {
//         modal.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     });

//     // Close modal when clicking outside
//     window.addEventListener('click', function(event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//             document.body.style.overflow = 'auto';
//         }
//     });

//     // Add to Cart functionality
//     function addToCart(button) {
//         // Get product details from button data attributes
//         const productId = button.getAttribute('data-product-id');
//         const productName = button.getAttribute('data-product-name');
//         const productPrice = button.getAttribute('data-product-price');
        
//         // Get selected options (if any)
//         const productDetails = button.closest('.product-info');
//         const selectedOptions = {};
//         productDetails.querySelectorAll('select').forEach(select => {
//             selectedOptions[select.previousElementSibling.textContent] = select.value;
//         });

//         // Create cart item object
//         const cartItem = {
//             id: productId,
//             name: productName,
//             price: productPrice,
//             options: selectedOptions,
//             quantity: 1
//         };

//         // Get existing cart or create new one
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
//         // Check if item already exists in cart
//         const existingItemIndex = cart.findIndex(item => 
//             item.id === cartItem.id && 
//             JSON.stringify(item.options) === JSON.stringify(cartItem.options)
//         );

//         if (existingItemIndex > -1) {
//             // Update quantity if item exists
//             cart[existingItemIndex].quantity += 1;
//         } else {
//             // Add new item if it doesn't exist
//             cart.push(cartItem);
//         }

//         // Save updated cart
//         localStorage.setItem('cart', JSON.stringify(cart));

//         // Show success message
//         const button_text = button.textContent;
//         button.textContent = 'Added to Cart!';
//         button.style.backgroundColor = '#28a745';
//         button.disabled = true;

//         // Reset button after 2 seconds
//         setTimeout(() => {
//             button.textContent = button_text;
//             button.style.backgroundColor = '';
//             button.disabled = false;
//         }, 2000);

//         // Update cart count in navigation (if you have one)
//         updateCartCount();
//     }

//     // Function to update cart count in navigation
//     function updateCartCount() {
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];
//         const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
//         // If you have a cart count element in your navigation, update it
//         const cartCount = document.getElementById('cart-count');
//         if (cartCount) {
//             cartCount.textContent = totalItems;
//             if (totalItems > 0) {
//                 cartCount.style.display = 'block';
//             }
//         }
//     }

//     // Add hover effect to the Add to Cart button
//     document.querySelectorAll('.add-to-cart-btn').forEach(button => {
//         button.addEventListener('mouseover', function() {
//             this.style.backgroundColor = '#444';
//         });
        
//         button.addEventListener('mouseout', function() {
//             if (!this.disabled) {
//                 this.style.backgroundColor = '#333';
//             }
//         });
//     });
// }); 

// // Function to add product to cart
// let cart = [];

// function addToCart(button) {
//     const productId = button.getAttribute('data-product-id');
//     const productName = button.getAttribute('data-product-name');
//     const productPrice = button.getAttribute('data-product-price');

//     // Create a product object and add it to the cart
//     const product = {
//         id: productId,
//         name: productName,
//         price: parseFloat(productPrice)
//     };

//     cart.push(product);
//     updateCartDropdown();
// }

// // Function to update the cart dropdown
// function updateCartDropdown() {
//     const cartItemsContainer = document.getElementById('cart-items');
//     cartItemsContainer.innerHTML = '';

//     cart.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//         cartItemsContainer.appendChild(li);
//     });
// }

// // Toggle cart dropdown visibility when the cart icon is clicked
// document.getElementById('cart-icon').addEventListener('click', () => {
//     const cartDropdown = document.getElementById('cart-dropdown');
//     cartDropdown.style.display = cartDropdown.style.display === 'none' || cartDropdown.style.display === '' ? 'block' : 'none';
// });

// const modalCloseButton = document.querySelector('.close-modal');
// modalCloseButton.addEventListener('click', () => {
//     document.getElementById('material-modal').style.display = 'none';
// });

// // Added to cart notification
// document.addEventListener('DOMContentLoaded', function() {

//     // Add to Cart functionality
//     function addToCart(button) {
//         const productId = button.getAttribute('data-product-id');
//         const productName = button.getAttribute('data-product-name');
//         const productPrice = button.getAttribute('data-product-price');

//         const cartItem = {
//             id: productId,
//             name: productName,
//             price: productPrice
//         };

//          // Show success message (notification)
//          const button_text = button.textContent;
//          button.textContent = 'Added to Cart!';
//          button.style.backgroundColor = '#28a745';
//          button.disabled = true;

//         setTimeout(() => {
//             notification.classList.remove('show');
//         }, 3000);
//     }

//     document.querySelectorAll('.add-to-cart-btn').forEach(button => {
//         button.addEventListener('click', function() {
//             addToCart(this);
//         });
//     });
// });

// // User Profile Dropdown
// document.getElementById('user-icon').addEventListener('click', function() {
//     var userDropdown = document.getElementById('user-dropdown');
//     // Toggle the dropdown visibility
//     if (userDropdown.style.display === 'none' || userDropdown.style.display === '') {
//         userDropdown.style.display = 'block';
//     } else {
//         userDropdown.style.display = 'none';
//     }
// });

// // Close the dropdown if the user clicks anywhere outside of the user icon
// window.addEventListener('click', function(event) {
//     var userDropdown = document.getElementById('user-dropdown');
//     var userProfile = document.getElementById('user-profile');
//     if (!userProfile.contains(event.target)) {
//         userDropdown.style.display = 'none';
//     }
// });

// // Handle Sign-Out button click
// document.getElementById('sign-out-btn').addEventListener('click', function() {
//     // Optionally, redirect to the home page or login page
//     window.location.href = 'signin.html';  // Example redirect
// });

document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartItemsList = document.getElementById('cart-items');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    const modal = document.getElementById('material-modal');
    const closeBtn = document.querySelector('.close-modal');

    // Load cart from localStorage
    const loadCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        updateCartDropdown(cart);
    };

    // Save cart to localStorage
    const saveCart = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    // Update cart dropdown
    const updateCartDropdown = (cart) => {
        cartItemsList.innerHTML = '';
        if (cart.length === 0) {
            cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
            return;
        }
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - Php ${parseFloat(item.price).toFixed(2)} (${item.quantity})`;
            cartItemsList.appendChild(li);

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remove';
            deleteButton.style.marginLeft = '10px';
            
            // Add event listener to the delete button
            deleteButton.addEventListener('click', () => {
                removeItemFromCart(index);
            });

            // Append the delete button to the list item
            li.appendChild(deleteButton);
        });
    };

    // Add item to cart
    const addItemToCart = (productId, productName, productPrice) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cart.findIndex(item => item.id === productId);

        if (existingItemIndex > -1) {
            // If item exists, increase quantity
            cart[existingItemIndex].quantity += 1;
        } else {
            // Add new item
            cart.push({ id: productId, name: productName, price: parseFloat(productPrice), quantity: 1 });
        }

        saveCart(cart);
        updateCartDropdown(cart);
    };

    // Attach event listeners to Add to Cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            const productName = this.getAttribute('data-product-name');
            const productPrice = this.getAttribute('data-product-price');

            if (!productId || !productName || !productPrice) {
                console.error('Missing product attributes for Add to Cart.');
                return;
            }

            addItemToCart(productId, productName, productPrice);

            const buttonText = this.textContent;
            this.textContent = 'Added to Cart!';
            this.style.backgroundColor = '#28a745';
            this.disabled = true;

            setTimeout(() => {
                this.textContent = buttonText;
                this.style.backgroundColor = '';
                this.disabled = false;
            }, 2000);
        });
    });

    // Toggle cart dropdown visibility when the cart icon is clicked
    cartIcon.addEventListener('click', () => {
        cartDropdown.style.display =
            cartDropdown.style.display === 'none' || cartDropdown.style.display === '' ? 'block' : 'none';
    });

    // Modal functionality for View Details buttons
    const openModal = (materialId) => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Hide all product details
        document.querySelectorAll('.product-details').forEach(detail => {
            detail.style.display = 'none';
        });

        // Show the selected material's details
        const selectedDetails = document.getElementById(`${materialId}-details`);
        if (selectedDetails) {
            selectedDetails.style.display = 'grid';
        } else {
            console.error(`Could not find details for material ID: ${materialId}`);
        }
    };

    // Attach click events to View Details buttons
    viewDetailsBtns.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const materialId = this.getAttribute('data-material-id');
            openModal(materialId);
        });
    });

    // Close modal when the close button is clicked
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Initialize cart on page load
    loadCart();
});

// User Profile Dropdown
document.getElementById('user-icon').addEventListener('click', function () {
    var userDropdown = document.getElementById('user-dropdown');
    userDropdown.style.display = userDropdown.style.display === 'none' || userDropdown.style.display === '' ? 'block' : 'none';
});

// Close the dropdown if the user clicks anywhere outside of the user icon
window.addEventListener('click', function (event) {
    var userDropdown = document.getElementById('user-dropdown');
    var userProfile = document.getElementById('user-profile');
    if (!userProfile.contains(event.target)) {
        userDropdown.style.display = 'none';
    }
});

// Handle Sign-Out button click
document.getElementById('sign-out-btn').addEventListener('click', function () {
    window.location.href = 'signin.html'; // Example redirect
});

// Function to remove an item from the cart
function removeItemFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);  // Remove the item at the specified index
    saveCart(cart);  // Save the updated cart to localStorage
    updateCartDropdown(cart);  // Re-render the cart dropdown
}

// Function to save the cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

