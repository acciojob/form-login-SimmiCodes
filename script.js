function getFormvalue() {
	event.preventDefault();
	var form = document.getElementById("form1");

    
    var firstName = form.elements.fname.value;
    var lastName = form.elements.lname.value;
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}
