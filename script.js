let themeDots = document.getElementsByClassName('theme-dot')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

for (var i=0; themeDots.length>i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode=='light'){
        console.log('getting inside loop', mode)
        document.getElementById('theme-style').href= 'default.css'
    }
    if(mode=='blue'){
        console.log('getting inside loop', mode)
        document.getElementById('theme-style').href= 'blue.css'
    }
    if(mode=='green'){
        console.log('getting inside loop', mode)
        document.getElementById('theme-style').href= 'green.css'
    }
    if(mode=='purple'){
        console.log('getting inside loop', mode)
        document.getElementById('theme-style').href= 'purple.css'
    }
    localStorage.setItem('theme', mode)
}