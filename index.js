fetch('https://api.thedogapi.com/v1/breeds?limit=6')
    .then(r => r.json())
    .then(data => {

        data.forEach(element => {
            let card = document.getElementById("grid");
            const div = document.createElement("div");
            div.className = "card"

            const div1 = document.createElement("div");
            div1.className = "tgl-view"

            const div2 = document.createElement("div");
            div2.className = "card-image"

            const img = document.createElement("img");
            img.className = "img"
            img.src = element.image.url

            const h2 = document.createElement("h2");
            h2.className = "card-title"
            h2.innerHTML= element.name

            card.appendChild(div)
            div.appendChild(div1)
            div1.appendChild(div2)
            div1.appendChild(h2)
            div2.appendChild(img)
        });
    })

