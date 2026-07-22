{
    let hour = 13;
    let greeting;

    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    console.log(greeting); // Output: Good day
}

{

    let time = 20;
    let greeting;

    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    console.log(greeting); // Output: Good evening
}
