{

    let age = 16;
    let country = "USA";
    let text = "You can Not drive!";

    if (country == "USA") {
       if (age >= 16) {
          text = "You can drive!";
        }
    }
    Console.log(text); // Output: You can drive!
}

{

    let age = 16;
    let country = "USA";
    let text = "You can Not drive!";

    if (country == "USA" && age >= 16) {
    text = "You can drive!";
    }
    Console.log(text); // Output: You can drive!
}

