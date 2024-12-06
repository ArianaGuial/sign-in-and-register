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

