const galleryItemsList = document.querySelectorAll('.gallery-item');

galleryItemsList.forEach(item => item.addEventListener('click', changeState));

function changeState() {
    this.classList.toggle('active');
}
