const form = document.querySelector("form"),
    statusTxt = form.querySelector(".button-area");
form.onsubmit = (e) => {
    e.preventDefault();
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "message.php", true);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.response;

            if (response.indexOf("Email and password is required!") != -1 || response.indexOf("Enter valid email!") || response.indexOf("Sorry failed to send your message!") || response.indexOf("Your message has been sent!")) {

                statusTxt.style.color = "red";
            } else {
                form.reset();

                setTimeout(() => {
                    statusTxt.style.display = "none";
                }, 1000);
            }
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}