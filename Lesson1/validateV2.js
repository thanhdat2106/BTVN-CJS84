const phoneValidate = (phone) => {
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  return phone.match(regexPhoneNumber) ? true : false;
};
const emailValidate = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function validateText(text) {
  return /^[a-zA-Z]+$/.test(text);
}

function validateNumber(number) {
  return /^[0-9]+$/.test(number);
}
export { phoneValidate, emailValidate, validateText, validateNumber };
