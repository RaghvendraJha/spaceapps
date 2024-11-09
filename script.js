function openForm(type) {
    const modal = document.getElementById("formModal");
    const formTitle = document.getElementById("formTitle");

    if (type === 'parent') formTitle.textContent = "Join as a Parent";
    if (type === 'school') formTitle.textContent = "Join as a School";
    if (type === 'industry') formTitle.textContent = "Join as Startup/Company";

    modal.style.display = "flex";
}

function closeForm() {
    document.getElementById("formModal").style.display = "none";
}

// Timed Pop-up
setTimeout(() => openForm('parent'), 10000); // 10 seconds

// Form Submission
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
