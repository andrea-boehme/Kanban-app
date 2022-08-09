/**
 * Changes image and display for mobile menu
 */
function toggle() {
    let img = document.getElementById('btn').src;
    if (img.indexOf('menu-w')!=-1) {
        document.getElementById('btn').src  = "../assets/img/close-w.png";
        document.getElementById('navigation-mobil').style.display = 'flex';
    }
        else {
        document.getElementById('btn').src ="../assets/img/menu-w.png";
        document.getElementById('navigation-mobil').style.display = 'none';
    }
}