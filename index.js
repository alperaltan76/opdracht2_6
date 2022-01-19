
window.addEventListener('load', slideshowSetup);

function slideshowSetup()
document.getElementById('slideshow-next').addEventListener('click', slideshowNext);

 
function slideshowNext() {

    let slides = doucument.getElementByClassNamee('slide');



    slides[0].ClassList.remove('visible');

    slides[1].ClassList.add('visible')

}