var buyTickets = document.querySelectorAll('.place-buy-btn');
var showticket = document.querySelector('.modal');
for(var buyTicket of buyTickets) {
    buyTicket.onclick = function() {
        showticket.classList.add('modal-open');
    }  // Add event listener to each button to open the modal when clicked.
}
var closebtn = document.querySelector('.modal-close');
closebtn.onclick = function() {
    showticket.classList.remove('modal-open');
}