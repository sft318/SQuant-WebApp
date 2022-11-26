const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = 'service_0dl5zzo';
    const templateID = "template_v2fd4kw";

    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
           btn.value = "Send Email";
           alert("Sent!");
         }, 
        (err) => {
            btn.value = "Send Email";
            alert(JSON.stringify(err));
        }
    );
});
