import { Section, createNewElement } from "./createNewElement.js";

const contact = new Section("Contact Us");

contact.createModule([
  createNewElement(
    "p",
    "Have questions or just want to say hello? Reach out to us!"
  ),
]);

contact.createModule([
  createNewElement("h2", "Adress:"),
  createNewElement("p", "123 Cozy Street, YourCity, CozyLand"),
  createNewElement("h2", "Phone:"),
  createNewElement("p", "+1 (555) 123-4567"),
  createNewElement("h2", "Email:"),
  createNewElement("a", "info@yourcozyretreat.com"),
]);

contact.createModule([
  createNewElement("h2", "Opening Hours:"),
  createNewElement("p", "Monday - Friday: 7:00 AM - 7:00 PM"),
  createNewElement("p", "Saturday - Sunday: 8:00 AM - 5:00 PM"),
]);

contact.createModule([
  createNewElement(
    "p",
    "Feel free to drop by during our opening hours, or send us a message using the provided email adress. We're here to make every visit to YourCozyRetreat a delightful experience."
  ),
]);

export { contact as default };
