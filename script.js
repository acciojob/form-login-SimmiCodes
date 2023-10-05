// Function to get the values of first and last name and display them using alert
function getFormValue(event) {
    event.preventDefault(); 

    
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");

    
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    
    alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}


const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", getFormValue);
