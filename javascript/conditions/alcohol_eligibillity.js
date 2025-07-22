const actualAge = 20;
const drinkingAgeLimit = 18;
const fullName = "John Doe";

if (actualAge >= drinkingAgeLimit) {
  console.log(fullName + " is allowed to drink alcohol.");
} else {
  console.log(fullName + " is not allowed to drink alcohol.");
  console.log(
    "You must be at least " + drinkingAgeLimit + " years old to drink alcohol."
  );
}
