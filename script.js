 document.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }
    else {
        document.querySelector('.header').classList.remove('active');
    }
};
document.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add('active');
    }
    else {
        document.querySelector('.header').classList.remove('active');
    }; I
}


// ======================================================================= Email code =============================================================================================


function sendEmail() {
    let params = {
        name: document.getElementById("names").value,
        email: document.getElementById("emailid").value,
        message: document.getElementById("subjects").value,
    }

    emailjs.send('service_38n4v2r', 'template_9euo3dx', params)
        .then(response => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent!");
        })
        .catch(error => {
            console.error("FAILED...", error);
            alert("Error sending email: " + error);
        });
}
