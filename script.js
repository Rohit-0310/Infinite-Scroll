const main = document.querySelector('.main');

function Rand_Value() {
    let random = Math.random() * 10
    console.log(random)
    return random
}


const loadingImage = () => {
  
 
    let i=1
     
    while (i <= 25) {
        let div = document.createElement('div')
        let img = document.createElement("img");
        let p = document.createElement("p");
        img.src = `https://source.unsplash.com/random/200x200?sig=${Rand_Value()}`;
        p.innerHTML = i;
        div.append(p,img);
        main.append(div);
        i++
    }
}


loadingImage()

function InfiniteScroll() {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        loadingImage()
    }
}

window.addEventListener('scroll',InfiniteScroll)