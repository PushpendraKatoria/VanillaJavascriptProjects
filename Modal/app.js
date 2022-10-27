const modalButton = document.querySelector('.modal-btn')
const closeButton = document.querySelector('.close-btn')
const modalOverlay = document.querySelector('.modal-overlay');


// modalButton.addEventListener('click', function() {
//     console.log("Modal button clicked")
//     modalOverlay.classList.add('open-modal')
// })

// closeButton.addEventListener('click', function() {
// modalOverlay.classList.remove('open-modal')
// })


window.addEventListener('click', function (event) {
    const classes = event.target.classList;
    if(classes.contains('modal-btn')) {
        modalOverlay.classList.add('open-modal');
    } else if(classes.contains('close-btn') || classes.contains('close')) {
        console.log('close button click hua')
        modalOverlay.classList.remove('open-modal')
    } else {
        console.log(event.target.parentNode);
        if(!event.target.parentNode.classList.contains('modal-overlay') && !event.target.parentNode.classList.contains('modal-container')) {
            console.log(classes)
            modalOverlay.classList.remove('open-modal')
        }
        
    }
})