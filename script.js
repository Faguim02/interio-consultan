const ViewMenu = () => {
    var link = document.getElementsByClassName('route')
    if(link[0].style.display == 'none'){
        for(var i=0; i<link.length; i++){
            link[i].style.display = 'flex';
        }
    }else{
        for(var i=0; i<link.length; i++){
            link[i].style.display = 'none';
        }
    }
}