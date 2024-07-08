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
const firstnameError = document.getElementById('firstname_error');
//LastName
const lastNameInput = document.getElementById("lastName");
const lastnameError = document.getElementById('lastname_error');
//Email
const emailInput = document.getElementById("email");
const emailError = document.getElementById('email_error');
//Password
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById('password_error');
//Button
const button = document.getElementById("submit_btn");


firstNameInput.addEventListener("focus", () => {
  firstNameInput.classList.remove('invalid');
  firstNameInput.style.color = "black";
  firstNameInput.style.outline = "1px solid var(--accent-blue)"
  firstnameError.innerText = "";
  firstNameInput.placeholder = "First Name"
});

lastNameInput.addEventListener("focus", () => {
  lastNameInput.classList.remove('invalid')
  lastNameInput.style.color = "black";
  lastNameInput.style.outline = "1px solid var(--accent-blue)"
  lastnameError.innerText = "";
  lastNameInput.placeholder = "Last Name"
});

emailInput.addEventListener("focus", () => {
  email.classList.remove('invalid');
  emailInput.style.color = "black";
  emailInput.style.outline = "1px solid var(--accent-blue)"
  emailError.innerText = "";
  emailInput.placeholder = "Email Address";
});

passwordInput.addEventListener("focus", () => {
  passwordInput.classList.remove('invalid');
  passwordError.innerText = "";
  passwordInput.placeholder = 'Password'
});

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
  input.classList.add('invalid')
  // placeholderの差し替え
  input.placeholder = "!";
};
