function getFormvalue(event) {
    event.preventDefault();

  
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

   
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}


var form = document.getElementById("myForm");
form.addEventListener("submit", getFormValue);
