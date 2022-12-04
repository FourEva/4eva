var loader = document.getElementsByClassName("loading")[0];

document.body.style.overflow = 'hidden';

window.onload = () => {
	setTimeout(() => {
        loader.style.animation = 'fadeOut 0.3s forwards';
        document.body.style.overflowY = 'auto';
    }, 500);
    setTimeout(() => {
        loader.style.display = 'none';
    }, 600);
}

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}