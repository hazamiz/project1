// 1. مصفوفة الأقسام للصبيان
let boysCategories = [
  
    { name: "بيجامات ولادي",  link: "boys-pajamas.html" },
    { name: "طقومة رياضية",  link: "boys-suits.html" },
    { name: "بناطلين وجينزات",  link: "boys-pants.html" },
    { name: "كنزات وتيشرتات",  link: "boys-shirts.html" },
    { name: "أحذية ولادي",  link: "boys-shoes.html" }

]
  
  // 2. إمساك الحاوية من الـ DOM
  let container = document.querySelector("#boys-categories-container");
  let cardsHTML = "";
  
  // 3. بناء الكروت بـ Loop
  for (let i = 0; i < boysCategories.length; i++) {
    cardsHTML += `
    <div class="cat-card">
 
    <h3>${boysCategories[i].name}</h3>
    <a href="${boysCategories[i].link}" class="details-btn">عرض التفاصيل</a>
    </div>
    `;
  }
  container.innerHTML = cardsHTML;
  
  // 4. حقن العناصر بالصفحة
