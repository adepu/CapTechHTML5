var worldCategory = $("#world");
var catWorld = document.getElementById("world");
var catBusiness = document.getElementById("business");
var catOpinion = document.getElementById("opinion");
var catSports = document.getElementById("sports");
var catFashion = document.getElementById("fashion");
var catVideo = document.getElementById("video");

catWorld.onclick = function() {
    clearCategories();
    catWorld.style.fontWeight="bold";
};
catBusiness.onclick = function() {
    clearCategories();
    catBusiness.style.fontWeight="bold";
};
catOpinion.onclick = function() {
    clearCategories();
    catOpinion.style.fontWeight="bold";
};
catSports.onclick = function() {
    clearCategories();
    catSports.style.fontWeight="bold";
};
catFashion.onclick = function() {
    clearCategories();
    catFashion.style.fontWeight="bold";
};
catVideo.onclick = function() {
    clearCategories();
    catVideo.style.fontWeight="bold";
};

function activeCategory(category) {
    category.style.fontWeight="bold";
}

function clearCategories() {
    catWorld.style.fontWeight="normal";
    catBusiness.style.fontWeight="normal";
    catOpinion.style.fontWeight="normal";
    catSports.style.fontWeight="normal";
    catFashion.style.fontWeight="normal";
    catVideo.style.fontWeight="normal";
}
