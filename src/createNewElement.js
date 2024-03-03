import Icon from "./coffee cup.png";

function createNewElement(category, text, href = "") {
  const element = document.createElement(category);
  element.textContent = text;
  if (category === "a") element.href = href;
  return element;
}

class Section {
  constructor(title) {
    this.allModules = [];
    this._title = document.createElement("h1");
    this.title = title;
  }
  set title(value) {
    this._title.textContent = value + " ";
    const myImage = new Image(); // Create a new Image object for each instance
    myImage.src = Icon;
    myImage.setAttribute("style", "height:100px; vertical-align: sub");

    this._title.appendChild(myImage);
  }
  createModule(module) {
    this.allModules.push(module);
  }
  returnAllModules(div) {
    div.appendChild(this._title);

    // Simplified loop for appending modules
    this.allModules.forEach((module) => {
      div.innerHTML += `<hr>${module.map((el) => el.outerHTML).join("")}`;
    });
  }
}

export { createNewElement, Section };
