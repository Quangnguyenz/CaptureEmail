window.onload = function () {
    let emailModal = document.getElementsByClassName('email-modal')[0];
    let closeModal = document.getElementsByClassName('email-modal__close-btn')[0];
    let emailState = false;
    let emailInput = document.getElementsByClassName('email-modal__input')[0];
    let emailButton = document.getElementsByClassName('email-modal__button')[0];

    
    
    document.body.addEventListener('mouseleave', () => {
        if (emailState == false) {
            emailModal.classList.add('email-modal--visible')
            emailState = true
        }
    })

    closeModal.addEventListener("click", () => {
        emailModal.classList.remove('email-modal--visible')

    });

    function emailIsValid (email){
        return /\S+@\S+\.\S+/.test(email);
    }
    
    emailButton.addEventListener('click', () => {
        if(emailIsValid(emailInput.value)){
            console.log(emailInput.value)
        } else {
            alert("invalid email")
        }
        }

    )

    console.log(document);




}