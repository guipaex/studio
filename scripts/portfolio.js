let projects = document.getElementById('projects')
        let item = document.getElementsByClassName('thumb')

        for(i = 0; i < item.length; i++){
            projName = item[i].id;
            let thumbNail = `<img src="img/thumbs/thumb_${projName}.jpg">`

            item[i].innerHTML += thumbNail;
        }