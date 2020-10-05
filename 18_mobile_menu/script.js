
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