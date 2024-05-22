document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const albumArt = document.getElementById('albumArt');
    const playlistItems = document.querySelectorAll('.playlist li');

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const source = this.getAttribute('data-src');
            const imgSrc = this.getAttribute('data-img');
            const currentSource = audioPlayer.querySelector('source');
            
            currentSource.src = source;
            albumArt.src = imgSrc;
            audioPlayer.load();
            audioPlayer.play();
        });
    });
});
