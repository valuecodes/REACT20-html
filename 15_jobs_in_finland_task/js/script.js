function openSearch(){
    let searchContainer = document.getElementById('searchContainer')
    let state = searchContainer.style.visibility
    if(state==='hidden'||state===''){
        searchContainer.style.visibility='visible'
    }else{
        searchContainer.style.visibility='hidden'
    }
}