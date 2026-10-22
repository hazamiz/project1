let icon = document.getElementById('icon-mobile');
let ul = document.getElementById('ul-mobile');


icon.onclick = function () {
    ul.classList.toggle("mobile-nav1");
}









    // الحصول على الزر وجسم الصفحة
    const themeToggleBtn = document.getElementById('themetoggle');
    const bodyElement = document.body;

    // إضافة حدث عند النقر على الزر
    themeToggleBtn.addEventListener('click', () => {
        // تبديل الكلاس الخاص بالوضع الليلي
        bodyElement.classList.toggle('dark-mode');
        
        // تغيير نص الزر بناءً على الوضع الحالي
        if (bodyElement.classList.contains('dark-mode')) {
            themeToggleBtn.innerText = '☀️ الوضع الصباحي';
        } else {
            themeToggleBtn.innerText = '🌙 الوضع الليلي';
        }
    });








        // let userName = prompt("مرحبا بك في Elegance Glow ما هو اسمك الكريم ؟ ")
        // if (userName) {
        //     const welcomeText = document.getElementById('welcomeMessage');
        //     welcomeText.textContent = `اهلا بك يا ${userName} في عالم الاناقة`
        // }



        let basicBtn = document.querySelector(".plan-ptn");
        basicBtn.setAttribute("href",".letter");
        console.log(basicBtn);
        
        // لتفعيل ازرار المواقع التواصل الاجتماعي 
            // let fbBtn = document.querySelector(".facebook-button");
            // fbBtn.addEventListener("click", function() {
            //     fbBtn.setAttribute("href", "https://facebook.com");
            //     fbBtn.setAttribute("target","_blank");
            // });
            
            let allLink = document.querySelectorAll(".social a");
            let myUrls = [
                "https://facebook.com",
                "https://instagram.com",
                "https://wa.me",
                "https://t.me"
            ];
            for (let i=0; i<allLink.length; i++) {
                allLink[i].setAttribute("href", myUrls[i]);
                allLink[i].setAttribute("target","_blank");
            }







