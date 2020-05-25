
eventListeners();
function eventListeners(){
    const ui = new UI();

    document.querySelector('.add-number').addEventListener('click',function(){
        ui.addPhone();
    })
}
function UI(){
}

UI.prototype.addPhone = function(){
    const contact = document.createElement('div');
    
    contact.classList.add('input-number');
    // document.querySelector('.add-number').style.display="none";
    contact.innerHTML = `
    <input id="contact-phone" class="phone-number" type="tel" name="contact-phone"/>`;
    document.querySelector('.phone').appendChild(contact);
    document.querySelector('.add-number').style.top = '20px';
}



