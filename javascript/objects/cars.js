import { CarBlueprint } from "./car_blueprint.js";

const dieselCar = new CarBlueprint("cervená", "diesel", "nafta", "Ford Focus");
dieselCar.logCarProperties();
const petrolCar = new CarBlueprint(
  "modrá",
  "benzín",
  "benzin",
  "Škoda Octavia"
);
petrolCar.logCarProperties();
dieselCar.logDivider();
petrolCar.logDivider();
