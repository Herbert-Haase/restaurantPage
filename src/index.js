import "./reset.css";
import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const tabs = {
  home,
  menu,
  contact,
};

// home tab at page startup
const contentElement = document.querySelector("#content");
home.returnAllModules(contentElement);

const tabButtons = document.querySelectorAll(".tab-button");
tabButtons.forEach((button) => button.addEventListener("click", activateTab));

// switch to different tab
function activateTab() {
  // clear content
  contentElement.innerHTML = "";
  tabButtons.forEach((buttons) => buttons.classList.remove("tab-active"));
  this.classList.add("tab-active");
  // select tab
  const tabName = this.getAttribute("tab");
  const tabModule = tabs[tabName];
  if (tabModule) {
    tabModule.returnAllModules(contentElement);
  }
}
