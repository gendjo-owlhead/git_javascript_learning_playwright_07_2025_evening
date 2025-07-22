let name = "Anna Nováková";
let points = 98;

// Hodnocení
if (points >= 95) {
  console.log(
    name +
      " získal(a) " +
      points +
      " bodů a úspěšně dokončil(a) studium s červeným diplomem."
  );
} else if (points >= 75) {
  console.log(
    name + " získal(a) " + points + " bodů a úspěšně dokončil(a) studium."
  );
} else {
  console.log(
    name + " získal(a) pouze " + points + " bodů a studium nedokončil(a)."
  );
}
