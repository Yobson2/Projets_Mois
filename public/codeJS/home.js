window.addEventListener('load',()=>{

    let slider=document.querySelector('.cont_slide')
    let move=null
    let count=0
    
    function avance(){
        move=-1
        slider.style.transition=`0.5s`
        slider.style.transform=`translate{-400px}`
        modif()
    }
    
    function modif(){
        if(move===-1){
            slider.appendChild(slider.firstElementChild)
        }else{
            slider.prepend(slider.lastElementChild)
        }
        slider.style.transition="none"
        slider.style.transform=`translate(10px)`
    }
    
    setInterval(avance,1000)
    })
