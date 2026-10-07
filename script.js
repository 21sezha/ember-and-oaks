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