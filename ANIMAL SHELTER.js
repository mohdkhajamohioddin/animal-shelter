let dogsButtonEl = document.getElementById("dogsButton");
let catsButtonEl = document.getElementById("catsButton");

let dogsTabEl = document.getElementById("dogsTab");
let catsTabEl = document.getElementById("catsTab");


catsTabEl.classList.add("d-none");

function onClickDogsTab() {
    dogsTabEl.classList.remove("d-none");
    catsTabEl.classList.add("d-none");

    dogsButtonEl.classList.add("selected-button");
    catsButtonEl.classList.remove("selected-button");
}

function onClickCatsTab() {
    dogsTabEl.classList.add("d-none");
    catsTabEl.classList.remove("d-none");

    dogsButtonEl.classList.add("selected-button");
    catsButtonEl.classList.remove("selected-button");
}


let petStatusEl = document.getElementById("status");
let breedStatusEl = document.getElementById("breedStatus");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let numberEl = document.getElementById("number");
let numberErrMsgEl = document.getElementById("numErrMsg");

let myFormEl = document.getElementById("myForm");

let formData = {
    status: "Dog",
    breedStatus: "Dasch",
    name: "",
    email: "",
    number: ""
};
petStatusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
});

breedStatusEl.addEventListener("change", function(event) {
    formData.breedStatus = event.target.value;
});

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }

    formData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }

    formData.email = event.target.value;
});

numberEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        numberErrMsgEl.textContent = "Required*";
    } else {
        numberErrMsgEl.textContent = "";
    }

    formData.number = event.target.value;
});

function validateFormData(formData) {
    let {
        name,
        email,
        number
    } = formData;
    if (name === "") {
        nameErrMsgEl.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsgEl.textContent = "Required*";
    }
    if (number === "") {
        numberErrMsgEl.textContent = "Required*";
    }
}


function requestButton() {
    localStorage.setItem("formData", JSON.stringify(formData));
}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
    requestButton(formData);
});


let givenStatusEb = document.getElementById("giveStatus");
let giveStatusEb = document.getElementById("gbStatusEb");

let nameEg = document.getElementById("nameEg");
let nameErrMsgEb = document.getElementById("nameErrMsgEb");

let emailEb = document.getElementById("emailEb");
let emailErrMsgEb = document.getElementById("emailErrMsgEb");

let numberEb = document.getElementById("numberEb");
let numberErrMsgEb = document.getElementById("numErrMsgEb");

let myFormEb = document.getElementById("myFormEb");

let formDataEb = {
    nameEg: "",
    emailEb: "",
    numErrMsgEb: "",
    giveStatus: "",
    gbStatusEb: ""
};
givenStatusEb.addEventListener("give", function(event) {
    formDataEb.giveStatus = event.target.value;
});

giveStatusEb.addEventListener("give", function(event) {
    formDataEb.gbStatusEb = event.target.value;
});

nameEg.addEventListener("give", function(event) {
    if (event.target.value === "") {
        nameErrMsgEb.textContent = "Required*";
    } else {
        nameErrMsgEb.textContent = "";
    }

    formDataEb.nameEg = event.target.value;
});

emailEb.addEventListener("give", function(event) {
    if (event.target.value === "") {
        emailErrMsgEb.textContent = "Required*";
    } else {
        emailErrMsgEb.textContent = "";
    }

    formDataEb.emailEb = event.target.value;
});

numberEb.addEventListener("give", function(event) {
    if (event.target.value === "") {
        numberErrMsgEb.textContent = "Required*";
    } else {
        numberErrMsgEb.textContent = "";
    }

    formDataEb.numberEb = event.target.value;
});

function validateFormDataGive(formDataEb) {
    let {
        nameEg,
        emailEb,
        numberEb
    } = formDataEb;
    if (nameEg === "") {
        nameErrMsgEb.textContent = "Required*";
    }
    if (emailEb === "") {
        emailErrMsgEb.textContent = "Required*";
    }
    if (numberEb === "") {
        numberErrMsgEb.textContent = "Required*";
    }
}


function giveAwayButton() {
    localStorage.setItem("formDataEb", JSON.stringify(formDataEb));
}

myFormEb.addEventListener("giveAway", function(event) {
    event.preventDefault();
    validateFormDataGive(formDataEb);
    giveAwayButton(formDataEb);
});