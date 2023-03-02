window.addEventListener('DOMContentLoaded', function () {
    function blockGallary(){
        const block = document.querySelector('.gallary_image'),
              blockGallaryText = document.querySelectorAll('.gallary_text'),
              textInterval = setInterval(updateText, 1000); 

        updateText();

        function updateText() {
            let blockWidth = block.clientWidth,
                blockHeight = block.clientHeight;

            blockGallaryText.forEach(item => {
                item.innerHTML = `Зображення ${blockWidth}*${blockHeight}px`;
            });
            
            console.log(blockWidth + " " + blockHeight);
        }
    }

    blockGallary();
});