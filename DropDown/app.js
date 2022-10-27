const listEl = document.querySelector('.dropdown-content');
const btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
   
// })

window.addEventListener('click', function(event) {
    console.log(event.target);
    if(event.target.id !=="btn") {
        console.log("Hi bro")
        if(event.target.classList.contains('list-item')) {
            btn.textContent = event.target.getAttribute('data-val');
        }
        listEl.classList.remove('show');
    } else if(event.target.id ==="btn"){
        console.log('dropdown clicked')
        listEl.classList.toggle('show');
        
    }
}) 