const inputFactory = (type, id, className, ariaDescribedby) => {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.classList.add(className);
  input.ariaDescribedby = ariaDescribedby;
  return input;
};

const labelFactory = (text, htmlFor) => {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.classList.add("form-label");
  label.textContent = text;
  return label;
};

const appendNodeElement = (parentNode, childNode) => {
  parentNode.appendChild(childNode);
};

export const formFactory = () => {
  const form = document.createElement("form");

  const nameLabel = labelFactory("User's name", "userName");
  const nameInput = inputFactory(
    "text",
    "userName",
    "form-control",
    "nameHelp"
  );
  //  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

  const ageLabel = labelFactory("User's age", "userAge");
  const ageInput = inputFactory("number", "userAge", "form-control", "ageHelp");

  const imageLabel = labelFactory("User's Image", "userImage");
  const imageInput = inputFactory(
    "text",
    "userImage",
    "form-control",
    "nameHelp"
  );

  const genderLabel = labelFactory("User's gender", "userGender");
  const genderInput = inputFactory(
    "text",
    "userGender",
    "form-control",
    "nameHelp"
  );

  appendNodeElement(form, nameLabel);
  appendNodeElement(form, nameInput);
  appendNodeElement(form, ageLabel);
  appendNodeElement(form, ageInput);
  appendNodeElement(form, imageLabel);
  appendNodeElement(form, imageInput);
  appendNodeElement(form, genderLabel);
  appendNodeElement(form, genderInput);

  appendNodeElement(document.querySelector(".modal-body"), form);

  return form;
};
