const tabs =
document.querySelectorAll(".tab");
const dishes =
document.querySelectorAll(".dish");

function showCategory(category) {
    dishes.forEach(function (dish) {
        if (dish.dataset.category === category) {
            dish.style.display = "block";
        } else {
            dish.style.display = "none";
        }
    }); 
}

tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
            t.classList.remove("active");
        });
        tab.classList.add("active");
        showCategory(tab.dataset.category);
    });
});
showCategory("starters");

const bookBtn =
document.getElementById("book-btn");
const reserveForm =
document.getElementById("reserve-form");
const thankYou =
document.getElementById("thank-you");
const guestName =
document.getElementById("guest-name");
const guestNameText =
document.getElementById("guest-name-text");

bookBtn.addEventListener("click", function(){
    if (guestName.value === ""){
        alert("Please enter your name");
        return;
    }
    guestNameText.textContent = guestName.value;
    reserveForm.style.display = "none";
    thankYou.style.display = "block";
});