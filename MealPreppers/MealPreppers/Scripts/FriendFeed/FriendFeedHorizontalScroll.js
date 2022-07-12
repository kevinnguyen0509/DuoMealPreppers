alert("You can click and drag this shit pretty damn POG!");

var slider = document.querySelectorAll(".scroll");



for (let i = 0; i < slider.length; i++) {

    let isDown = false;
    let startX;
    let scrollLeft;

    console.log("Pog"); // Look at me fuckn debug like a champ EZ

    slider[i].addEventListener('mousedown', (e) => {
        isDown = true;
        slider[i].classList.add('active');
        startX = e.pageX - slider[i].offsetLeft;
        scrollLeft = slider[i].scrollLeft;
    });
    slider[i].addEventListener('mouseleave', () => {
        isDown = false;
        slider[i].classList.remove('active');
    });
    slider[i].addEventListener('mouseup', () => {
        isDown = false;
        slider[i].classList.remove('active');
    });
    slider[i].addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider[i].offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider[i].scrollLeft = scrollLeft - walk;
        console.log(walk);
    });
}
