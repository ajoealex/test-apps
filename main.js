// main.js

window.addEventListener('DOMContentLoaded', () => {
    const tilesContainer = document.getElementById('tilesContainer');

    tilesData.forEach(tile => {
        const tileElement = document.createElement('div');
        tileElement.className = 'tile';
        tileElement.innerText = tile.name;
        
        tileElement.addEventListener('click', () => {
            // window.location.href = tile.link;
            window.open(tile.link, '_blank', 'noopener,noreferrer');
        });
        
        tilesContainer.appendChild(tileElement);
    });
});
