function createKid() {
    const kid = {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        Address: "",
        class: "",
        kidNumber: ""
    }
    let lastName = document.querySelector("#lname").value;
    let firstName = document.querySelector("#fname").value;
    let dateOfBirth = document.querySelector("#dob").value;
    let gender = document.querySelector("#gender").value;
    let address = document.querySelector("#address").value;
    let kClass = document.querySelector("#class").value;

    kid.firstName = firstName;
    kid.lastName = lastName;
    kid.dateOfBirth = dateOfBirth;
    kid.gender = gender;
    kid.Address = address;
    kid.class = kClass;
    kid.kidNumber = Math.floor(Math.random() * 100) + 1;
    createProfile(kid);
};


function createProfile(kid)    {
    let kidNameHtml = document.querySelector("#kidName");
    let genderHtml = document.querySelector("#profileGender");
    let DOBHtml = document.querySelector("#profileDob");
    let addressHtml = document.querySelector("#profileAddress");
    let classHtml = document.querySelector("#profileClass");
    let kidNoHtml = document.querySelector("#kidNo");

    kidNameHtml.textContent = kid.firstName + " " + kid.lastName;
    genderHtml.textContent = kid.gender;
    DOBHtml.textContent = kid.dateOfBirth;
    addressHtml.textContent = kid.Address;
    classHtml.textContent = kid.class;
    kidNoHtml.textContent = kid.studentNumber;
};

document.querySelector(".submit").addEventListener("click", createKid);