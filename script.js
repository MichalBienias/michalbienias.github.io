function sendEmail(){
    //Email API used "Elasticemail" service
    //Function defines structure of Email and retrieves correct data from Form Submitted
    //Alerts when submitted
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "michalbienias9@gmail.com",
        Password : "D6A86064AB9DFF91FBD4AFA41FD77FA6B84D",
        To : 'marekjozwiak17@gmail.com',
        From : 'mddetailers@gmail.com',
        Subject : "Detailing Request",
        Body : document.getElementById("name").value + " is requesting a "+ document.getElementById("cleaning").value + " cleaning. <br>You can reach out to them by texting or calling " + document.getElementById("phone").value + " or email them at " + document.getElementById("email").value + ". <br> Message from customer: " + document.getElementById("message").value
    }).then(
    message => alert("MDDetailers will contact you soon!")
    );
}
