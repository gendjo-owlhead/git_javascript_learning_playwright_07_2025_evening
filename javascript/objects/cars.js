import { CarBlueprint } from "./car_blueprint.js";

const dieselCar = new CarBlueprint(
  "Červená",
  "1.6 TDI",
  "Diesel",
  "Diesel auto"
);
dieselCar.logCarProperties();
const petrolCar = new CarBlueprint("Stříbrná", "1.0 TSI", "Benzín", "Ropák");
petrolCar.logCarProperties();
dieselCar.logCarProperties();

const newCar = dieselCar;
newCar.color = "Růžová";
dieselCar.logCarProperties();

const electricCar = new CarBlueprint("Modrá", "EV 160kW", "Elektřina", "Blesk");
electricCar.logCarProperties();

dieselCar.repaint("Zelená");
dieselCar.logCarProperties();

newCar.logCarProperties();

const dieselCarColor = dieselCar.getColor();
console.log(`Barva dieselového auta: ${dieselCarColor}`);
