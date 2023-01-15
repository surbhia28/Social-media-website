//sidebar
const menuItems = document.querySelectorAll('.menu-item');
//messages
const messagesNotification =document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//theme
const  theme =document.querySelector('#theme');
const themeModal=document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root =document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span')
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

//remove active class from all menuitems

const changeActiveItem = () => {
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item =>{
   item.addEventListener('click',() =>{
       changeActiveItem();
         item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
 })

//  =====================message===================================
//searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
message.forEach(user =>{
    let name = user.querySelector('h5').textContent.toLowerCase();
    if(name.indexOf(val)!= -1){
        user.style.display= 'flex';
    }else{
         user.style.display ='none';
    }
})
    


}
//search chat
messageSearch.addEventListener('keyup' ,searchMessage);

//highlights messages card whrn message menuitem is clicked
messagesNotification.addEventListener('click',() => {
messages.style.boxShadow ='0 0 1rem var(--color-primary)';
messagesNotification.querySelector('.notification-count').style.display ='none';
setTimeout(() => {
messages.style.boxShadow ='none';
}, 2000);
})

//themecustomization
//opens modal
const openThemeModal =() =>{
    themeModal.style.display='grid';
}
//closing modal
const closeThemeModal=(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
    
}


themeModal.addEventListener('click', closeThemeModal);


theme.addEventListener("click" , openThemeModal);

//f========================fonts=======================

//remove active class from spans of size selectos
const removeSizeSelector= () => {
    fontSizes.forEach(size =>{
       size.classList.remove('active');
    })
}

fontSizes.forEach(size =>{
    size.addEventListener('click',() => {
        removeSizeSelector();
        let fontSize ;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize ='10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize='13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize='16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize='19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize='22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
         //change font size of roooot html
    document.querySelector('html').style.fontSize=fontSize;
    })
   
})
//remove color active class
const changeActiveColorClass = () =>{
    colorPalette.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })
}

//change primary colors
 colorPalette.forEach(color =>{
    color.addEventListener('click',()=>{
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue =252;
        }else if(color.classList.contains('color-2')){
            primaryHue =52;
        }else if(color.classList.contains('color-3')){
        primaryHue =352;
       }else if(color.classList.contains('color-4')){
            primaryHue =152;
            }else if(color.classList.contains('color-5')){
           primaryHue =202;
    }
    color.classList.add('active');
    root.style.setProperty('--primary-color-hue' ,primaryHue);
 })
})
 // theme background values
 let lightColorLightness;
 let whiteColorLightness;
 let darkColorLightness;

 //change background color
 changeBG=()=>{
 root.style.setProperty('--light-color-lightness' , lightColorLightness);
 root.style.setProperty('--white-color-lightness' , whiteColorLightness);

 root.style.setProperty('--dark-color-lightness' , darkColorLightness);
 }

 Bg1.addEventListener('click',() =>{
    
     //add active class
     Bg1.classList.add('active');
     //remove activr class from others
     Bg2.classList.remove('active');
     Bg3.classList.remove('active');
     //remove customized changes from local storahge
     window.location.reload();
 });

 Bg2.addEventListener('click',() =>{
    lightColorLightness='15%';
     whiteColorLightness ='20%';
     darkColorLightness='95%';
     //add active class
     Bg2.classList.add('active');
     //remove activr class from others
     Bg1.classList.remove('active');
     Bg3.classList.remove('active');
     changeBG();
 });

     Bg3.addEventListener('click',() =>{
        lightColorLightness='0%';
         whiteColorLightness ='10%';
         darkColorLightness='95%';
         //add active class
         Bg3.classList.add('active');
         //remove activr class from others
         Bg1.classList.remove('active');
         Bg2.classList.remove('active');
         changeBG();

 });