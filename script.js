function validateForm() {
    var name = document.forms["pform"]["Name"].value;
    var comment = document.forms["pform"]["Comments"].value;
    var maleRadio = document.getElementById("male");
    var femaleRadio = document.getElementById("female");

    if (name === "" || comment === "") {
        alert("All fields are compulsory");
        if (name === "") {
            document.getElementById("name").focus();
        } else {
            document.getElementById("comment").focus();
        }
        return false;
    }

    if (!maleRadio.checked && !femaleRadio.checked) {
        alert("All fields are compulsory");
        return false;
    }

    // Additional validation logic if needed

    return true;
}
