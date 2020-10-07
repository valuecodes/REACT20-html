

(function () {
    let carousel = document.getElementById('carousel')
    let numberOfPictures = 4
    let imageWidth = 1200
    let speed = 1;
    let direction = 1
    
    setInterval(()=>{
        let right = Number(carousel.style.right.split('px')[0])
        let width = imageWidth*(numberOfPictures-1)
        
        right+= speed * direction

        if(right > width){
            direction=-1
        }

        if(right<0){
            direction=1
        }

        carousel.style.right=right+'px'
    }, 20);
    
})();

function openMenu(){
    let navigation = document.getElementById('navigation')
    let height = navigation.style.height
    console.log(height)
    if(height==='auto'){
        navigation.style.height=0
    }else{
        navigation.style.height='auto'
    }
}
