let telInput = document.querySelector("#telInput");
// let telDisplay = document.querySelector("");
let errorMsg = document.querySelector("#telError");
// let img = document.querySelector("");
console.log("welcome home");
//get all network providers prefixes
const mtn_pref = [
  ` 0703, 0706, 0803, 0806, 0810, 0813, 0814, 0816, 0903, 0906, 0913,`,
];
const etisalat_pref = [`0809, 0817, 0818, 0908, 0909`];
const glo_pref = [`0805, 0807, 0811, 0705, 0815, 0905`];
const airtel_pref = [`0802, 0808, 0812, 0701, 0902, 0907, 0901, 0708`];

//validations
const validate = () => {
  if (isNaN(telInput.value)) {
    errorMsg.innerHTML = "Only Numbers are allowed";
  } //if the first number is not 0
  else if (telInput.value.charAt(0) !== "0") {
    errorMsg.innerHTML = "Number must start with 0";
  } // check if input is less than 4
  else if (telInput.value.length < 4 || telInput.value.length > 11) {
    errorMsg.innerHTML = "Number cannot be less than 4 or greater than 11";
  } else {
    errorMsg.innerHTML = "";
  }
};

// check if input match prefix
const checkPrefix = () => {
  let phoneNo = Number(telInput.value).substr(0, 4);
  if (mtn_pref.includes(phoneNo)) {
    telDisplay.innerHTML = "Your Number is an MTN Number";
  } else if (etisalat_pref.includes(phoneNo)) {
    telDisplay.innerHTML = "Your Number is an Etisalat Number";
  } else if (glo_pref.includes(phoneNo)) {
    telDisplay.innerHTML = "Your Number is a Glo Number";
  } else if (airtel_pref.includes(phoneNo)) {
    telDisplay.innerHTML = "Your Number is an Airtel Number";
    // } else if (ntel_pref.includes(phoneNo)) {
    // telDisplay.innerHTML = "Your Number is an Ntel Number";
  } else {
    telDisplay.innerHTML = "Invalid Number";
  }
};

telInput.addEventListener("input", () => {
  console.log("welcome");
  validate();
  // checkPrefix();
});
}