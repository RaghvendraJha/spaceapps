function openForm(type) {
    const modal = document.getElementById("formModal");
    const formTitle = document.getElementById("formTitle");
    
    switch(type) {
        case 'parent':
            formTitle.textContent = "Join as a Parent";
            break;
        case 'school':
            formTitle.textContent = "Join as a School";
            break;
        case 'industry':
            formTitle.textContent = "Join as a Startup/Company";
            break;
    }
    
    modal.style.display = "flex";
}

function closeForm() {
    document.getElementById("formModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("formModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Trigger pop-up after a delay
setTimeout(() => {
    openForm('parent');
}, 10000); // 10 seconds delay

// Email Functionality
function sendEmail(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const review = document.getElementById("review").value;

    const mailtoLink = `mailto:help.momsmart@gmail.com?subject=New User Submission&body=Name: ${name}%0DEmail: ${email}%0DWhatsApp: ${whatsapp}%0DReview: ${review}`;
    
    window.location.href = mailtoLink;
    closeForm();
}
