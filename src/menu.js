import { Section, createNewElement } from "./createNewElement.js";
import Icon from "./coffe2go.png";
import Icon2 from "./cupcake.png";

const menu = new Section("Menu");

menu.createModule([createNewElement("h2", "Beverages")]);

menu.createModule([
  createNewElement("h3", "Cozy Brewed Coffee"),
  createNewElement(
    "p",
    "Our signature blend, crafted for the perfect balance of richness and aroma."
  ),
  createNewElement("h3", "Chai Latte Elixir"),
  createNewElement(
    "p",
    "A comforting blend of spiced chai and steamed milk, crowned with a sprinkle of cinnamon."
  ),
  createNewElement("h3", "Velvet Mocha Dream"),
  createNewElement(
    "p",
    "Indulge in the decadence of smooth chocolate and espresso, topped with velvety whipped cream."
  ),
]);
menu.createModule([createNewElement("h2", "Sweets to Savor")]);

menu.createModule([
  createNewElement("h3", "Heavenly Hazelnut Brownie"),
  createNewElement(
    "p",
    "A fudgy brownie infused with the nutty delight of hazelnuts, a true slice of indulgence."
  ),
  createNewElement("h3", "Classic Cinnamon Roll"),
  createNewElement(
    "p",
    "Soft layers of dough spiraled with cinnamon and drizzled with a sweet glaze - a timeless favorite."
  ),
]);

const coffeetogo = new Image();
coffeetogo.src = Icon;
coffeetogo.setAttribute(
  "style",
  "height:120px; position: absolute; top: 40%; right:8%"
);

const cupcake = new Image();
cupcake.src = Icon2;
cupcake.setAttribute(
  "style",
  "height:120px; position: absolute; top: 70%; right:6%"
);

menu.createModule([
  createNewElement(
    "p",
    "Dive into the perfect pairing of beverages and sweets at YourCozyRetreat, where every treat is a moment to savor."
  ),
  coffeetogo,
  cupcake,
]);

export { menu as default };
