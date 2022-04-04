let models = [
    {
        name: "Car 1",
        img: 'img/1.jpg',
        link: 'https://www.sahibinden.com/ilan/vasita-otomobil-opel-opel-astra-1.6-benzin-plus-otomatik-plussedan-kredi-senet-1014407897/detay'
    },
    {
        name: "Car 2",
        img: 'img/2.jpg',
        link: 'https://www.sahibinden.com/ilan/vasita-otomobil-fiat-my-auto-dan-hatasiz-boyasiz-tramersiz1.3-egea-takas-olur-1004674977/detay'
    },
    {
        name: "Car 3",
        img: 'img/3.jpg',
        link: 'https://www.sahibinden.com/ilan/vasita-otomobil-renault-ercan-otomotiv-den-2015-fluence-1%2C5-dci-touch-edc-152-bin-km-1014411903/detay'
    },
    {
        name: "Car 4",
        img: 'img/4.jpg',
        link: 'https://www.sahibinden.com/ilan/vasita-otomobil-citroen-48-ay-vade-imkaniyla-sunrooflu-dizel-otomatik-citroen-c5-998044183/detay'
    }
]

let index = 0;
let slideCount = models.length;
let interval;
let settings={
    duration: '2000',
    random: false
}

init(settings);

document.querySelector('.js-left-arrow').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.js-right-arrow').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);

});


document.querySelectorAll('.js-arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
})

document.querySelectorAll('.js-arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    });
})

function init(settings){

    let prev;

    interval = setInterval(function(){
        if(settings.random){
            do{
              index = Math.floor(Math.random() * slideCount);
            }
            while(index==prev)
            prev = index
        }
        else{
            if (slideCount == index+1){
                index = -1;
            }
            showSlide(index);
            index++
        }
        showSlide(index);
    },settings.duration)
}

function showSlide(i){

    index = i;

    if (i < 0){
        index = slideCount - 1;
    }
    if (i >= slideCount){
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src', models[index].img);
    
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}

