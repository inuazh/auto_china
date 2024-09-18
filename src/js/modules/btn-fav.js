function btnFav() {

    const autoCard = document.querySelectorAll('.auto-card');
    // let favorite = [];
  
    autoCard.forEach(function (card) {
        card.addEventListener("click", (e) => {
            const btnFavor = card.querySelector(".btn-favorite");
        
            if (e.target.classList.contains('fav-icon')) {
                const btnFavModal = card.querySelector(".fav-btn-modal");

                btnFavor.classList.toggle('btn-favorite--selected');
                
                if(card.querySelector('.btn-favorite--selected')) {
                    btnFavModal.style.display = "block";
                    // favorite.filter((cardFavorited) => cardFavorited.id);


                    setTimeout(function(){
                        btnFavModal.style.display = "none";
                    }, 1200)
                } else {
                    // favorite.push(card)
                }
            } 
        })
    })
};
export default btnFav;


//     btn.addEventListener('click', function(){
//         btn.classList.toggle('btn-favorite--selected');

//         if (btn.classList.contains('btn-favorite--selected')) {
//             btnFavModal.forEach(function(btnModal){
//                 btnModal.style.display = "block";

//                 setTimeout(function(){
//                     btnFavModal.forEach(function(btnModal){
//                         btnModal.style.display = "none";
//                     })
//                 }, 1200);

//             })
           
//         } else  {
//             console.log("NO")
//         }
//     })
// }) 