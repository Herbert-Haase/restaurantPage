import { Section, createNewElement } from "./createNewElement.js";

const home = new Section("YourCozyRetreat");

home.createModule([
  createNewElement("h2", "Indulge in Warmth and Flavor"),
  createNewElement(
    "p",
    "Discover the art of serenity in every sip at YourCozyRetreat. Our little corner of comfort beckons you to experience the perfect blend of warmth, charm, and exceptional flavors."
  ),
]);
home.createModule([
  createNewElement("h2", "Visit Us Today"),
  createNewElement(
    "p",
    "Immerse yourself in the inviting ambiance and exquisite tastes that define YourCozyRetreat. Whether you crave a quiet solo moment or a friendly gathering, our doors are open to all who appreciate the art of a perfect cup."
  ),
  createNewElement("a", "Plan Your Visit"),
]);

home.createModule([
  createNewElement("h2", "Explore Our Menu"),
  createNewElement(
    "p",
    "Embark on a journey through our curated selection of artisanal coffees, soothing teas, and delectable pastries. Each item is a celebration of quality and taste, inviting you to savor the richness of every moment."
  ),
  createNewElement("a", "View Menu"),
]);

home.createModule([
  createNewElement("h2", "Cozy Ambiance Awaits"),
  createNewElement(
    "p",
    "Step into our rustic haven, where the aroma of freshly brewed coffee mingles with the soft hum of friendly conversations. Our cozy seating, warm lighting, and inviting decor create an atmosphere that feels like a comforting embrace."
  ),
  createNewElement("a", "Explore Our Space"),
]);

export { home as default };
