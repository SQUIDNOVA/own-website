// ======================================================================= nav bar code =============================================================================================

// Navigation bar code
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.btn');
    const menuList = document.querySelector('.elements');
    let menuOpen = false;

    if (!menuBtn || !menuList) {
        console.error('Menu elements not found');
        return;
    }

    menuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        menuList.classList.toggle('showlist');
    });
});

