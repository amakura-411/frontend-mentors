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
    return false;
  }
  const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  return mailRegex.test(email);
};

const passwordValidation = (password) => {
  if (typeof password !== "string" || password.length === 0) {
    return false;
  }
  return true;
};

const button = document.getElementById("submit_btn");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

firstNameInput.addEventListener("input", () => {
  firstNameInput.style.border = "none";
  firstNameInput.style.color = "black";
});
lastNameInput.addEventListener("input", () => {
  lastNameInput.style.border = "none";
  lastNameInput.style.color = "black";
});
emailInput.addEventListener("input", () => {
  emailInput.style.border = "none";
  emailInput.style.color = "black";
});
passwordInput.addEventListener("input", () => {
  passwordInput.style.border = "none";
  passwordInput.style.color = "black";
});

button.onclick = () => {
  // ボタンをクリックした際、inputのバリューに対して、チェックを行う
  const firstNameValue = firstNameInput.value;
  const lastNameValue = lastNameInput.value;
  const mailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  // バリデーションチェック
  if (!nameValidation(firstNameValue)) {
    console.log("First Name cannot be empty");
    invalidInput(firstNameInput);
  }
  if (!nameValidation(lastNameValue)) {
    console.log("Last Name cannot be empty");
    invalidInput(lastNameInput);
  }
  if (!emailValidation(mailValue)) {
    console.log("Looks like this is not an email");
    invalidInput(emailInput);
  }
  if (!passwordValidation(passwordValue)) {
    console.log("Password cannot be empty");
    invalidInput(passwordInput);
  }
};

const invalidInput = (input) => {
  input.style.border = "2px solid red";
  input.style.color = "red";
  input.placeholder = "";
};
