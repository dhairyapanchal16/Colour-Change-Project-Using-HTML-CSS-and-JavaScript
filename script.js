const swatches = document.querySelectorAll('.color-d'); 
swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        const color = swatch.getAttribute('data-color');
        document.body.style.backgroundColor = color;
    });
});
