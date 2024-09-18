function menuFixed() {
    // Menu fixed
    const headerTop = document.querySelector(".header-top");
    const headerBottom = document.querySelector(".header-bottom");
    const logo = document.querySelector(".logo");
    const navLink = document.querySelectorAll(".nav__link");
    const form = document.querySelector(".header__form");
    const formInput = document.querySelector(".header__input"); 
    const iconSearch = document.querySelector(".icon--search"); 
    const headerTel = document.querySelector(".header__info-tel"); 
    const headerFavor = document.querySelector(".header__info-favor"); 
    const iconFavor = document.querySelector(".icon--favorite"); 
    const iconMobileSearch = document.querySelector(".icon--mobile-search-btn"); 

    window.onscroll = function(){
        
        if(window.scrollY > 100){
            headerTop.classList.add('active');
            headerBottom.classList.add('active');
            logo.classList.add('active');
            form.classList.add('active');
            formInput.classList.add('active');
            iconSearch.classList.add('active');
            headerTel.classList.add('active');
            headerFavor.classList.add('active');
            iconFavor.classList.add('active');
            iconMobileSearch.classList.add('active');

            navLink.forEach(function(link){
                link.classList.add('active')
            })
        }
        else{
            headerTop.classList.remove('active');
            headerBottom.classList.remove('active');
            logo.classList.remove('active');
            form.classList.remove('active');
            formInput.classList.remove('active');
            iconSearch.classList.remove('active');
            headerTel.classList.remove('active');
            headerFavor.classList.remove('active');
            iconFavor.classList.remove('active');
            iconMobileSearch.classList.remove('active');

            navLink.forEach(function(link){
                link.classList.remove('active')
            })
        }
    };

};

export default menuFixed;