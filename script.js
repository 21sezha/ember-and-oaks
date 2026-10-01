const tabs =
document.querySelectorAll(".tab");
const dishes =
document.querySelectorAll(".dish")

function showcategory(category) {
    dishes.forEach(function (dish) {
        if (dish.dataset.category === category) {
            dish.style.display = "block";
        } else {
            dish.style.display = "none";
        }
    }); 
}

tabs.foreach(function (tab) {
    tab.addeventlistener("click", function () {
        tabs.foreach(function (t) {
            t.classlist.remove("active");
        });
        tab.classlist.add("active");
        showcategory(tab.dataset.category);
    });
});
showcategory("starters");