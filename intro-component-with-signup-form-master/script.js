console.log("script ロード");

// validationの作成
const nameValidation = (name) => {
  if (typeof name !== "string" || name.length === 0) {
    return false;
  }
  return true;
};

const emailValidation = (email) => {
  if (typeof email !== "string" || email.length === 0) {
    emailError.innerText = "Email cannot be empty"
    return false;
  }
  const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  if (mailRegex.test(email)) {
    return true
  }
  emailError.innerText = "Looks like this is not an email";
  return false;
};

const passwordValidation = (password) => {
  if (typeof password !== "string" || password.length === 0) {
    return false;
  }
  return true;
};


// FirstName
const firstNameInput = document.getElementById("firstName");
const firstnameError = document.getElementById('error_firstname');
//LastName
const lastNameInput = document.getElementById("lastName");
const lastnameError = document.getElementById('error_lastname');
//Email
const emailInput = document.getElementById("email");
const emailError = document.getElementById('error_email');
//Password
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById('error_password');
//Button
const button = document.getElementById("btn_claim-trial");


// 入力し始めると、invalidクラスを削除する
firstNameInput.oninput = () => {
  firstNameInput.classList.remove('input-invalid');
  firstnameError.innerText = '';
};

lastNameInput.oninput = () => {
  lastNameInput.classList.remove('input-invalid');
  lastnameError.innerText = '';
}
emailInput.oninput = () => {
  emailInput.classList.remove('input-invalid');
  emailError.innerText = '';
}
passwordInput.oninput = () => {
  passwordInput.classList.remove('input-invalid');
  passwordError.innerText = '';
}

button.onclick = () => {
  // ボタンをクリックした際、inputのバリューに対して、チェックを行う
  const firstNameValue = firstNameInput.value;
  const lastNameValue = lastNameInput.value;
  const mailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  // バリデーションチェック
  if (!nameValidation(firstNameValue)) {
    firstnameError.innerText = "First Name cannot be empty";
    invalidInput(firstNameInput);
  }
  if (!nameValidation(lastNameValue)) {
    lastnameError.innerText = "Last Name cannot be empty";
    invalidInput(lastNameInput);
  }
  if (!emailValidation(mailValue)) {
    invalidInput(emailInput);
  }
  if (!passwordValidation(passwordValue)) {
    passwordError.innerText = "Password cannot be empty"
    invalidInput(passwordInput);
  }
};

const invalidInput = (input) => {
  input.classList.add('input-invalid')
  input.placeholder = '';
};
