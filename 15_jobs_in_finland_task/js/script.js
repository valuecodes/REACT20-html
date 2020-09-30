function openSearch(){
    let searchContainer = document.getElementById('searchContainer')
    let state = searchContainer.style.visibility
    if(state==='hidden'||state===''){
        searchContainer.style.visibility='visible'
    }else{
        searchContainer.style.visibility='hidden'
    }
}

function openSideMenu(e){
    let navList = document.getElementById('navList')
    navList.style.left = '0%'
}

function closeSideMenu(){
    console.log('click')
    let navList = document.getElementById('navList')
    navList.style.left = '-110%'
}