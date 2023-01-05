function createThumbnail(){
    let gallery = document.getElementsByClassName('proj');
    let itemBG = document.getElementsByClassName('info')

    for (i = 0; i < gallery.length; i++){
        let proj = gallery[i].id;
        let bg = itemBG[i]
        /*let title = `<p class="title">${proj}</p>`;*/
        /* gallery[i].innerHTML += title;*/
        bg.style.backgroundImage = `url('./img/thumbs/${proj}.jpg')`;
    }
   
}

createThumbnail()