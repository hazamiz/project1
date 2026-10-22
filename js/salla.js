const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartModal = document.getElementById('cart-modal');
const cartOverlay = document.getElementById('cart-overlay');

openCartBtn.addEventListener('click', () => {
    cartModal.classList.add('active');

});
closeCartBtn.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

cartOverlay.addEventListener('click', () => {
    cartOverlay.classList.remove('active');
});



// التأكد من وجود عناصر التحكم بالسلة قبل تفعيلها لتجنب الأخطاء
// const openCartBtn = document.getElementById('open-cart-btn');
// const closeCartBtn = document.getElementById('close-cart-btn');
// const cartModal = document.getElementById('cart-modal');
// const cartOverlay = document.getElementById('cart-overlay');

// if (openCartBtn && cartModal) {
//     openCartBtn.addEventListener('click', () => {
//         cartModal.classList.add('active');
//     });
// }

// if (closeCartBtn && cartModal) {
//     closeCartBtn.addEventListener('click', () => {
//         cartModal.classList.remove('active');
//     });
// }

// if (cartOverlay && cartModal) {
//     cartOverlay.addEventListener('click', () => {
//         cartModal.classList.remove('active');
//     });
// }



// const openCartBtn = document.getElementById('open-cart-btn');
// const closeCartBtn = document.getElementById('close-cart-btn');
// const cartModal = document.getElementById('cart-modal');
// const cartOverlay = document.getElementById('cart-overlay');

// // فتح السلة عند النقر على الزر الذهبي
// if (openCartBtn && cartModal) {
//     openCartBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         cartModal.classList.add('active');
//     });
// }

// // إغلاق السلة عند النقر على زر الإغلاق (X)
// if (closeCartBtn && cartModal) {
//     closeCartBtn.addEventListener('click', () => {
//         cartModal.classList.remove('active');
//     });
// }

// // إغلاق السلة عند النقر على الخلفية المعتمة
// if (cartOverlay && cartModal) {
//     cartOverlay.addEventListener('click', () => {
//         cartModal.classList.remove('active');
//     });
// }