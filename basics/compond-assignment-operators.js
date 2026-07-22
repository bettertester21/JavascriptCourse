
{
    let x = 10;
    console.log(x); // Output: 10
}

{
    let x = 10 + y;
    console.log(x); // Output: 15
}

{
    let x = true;
    let y = x &&= 10;

    console.log(x); // Output: 10
}

{
    let x = 10;
    x += 5;
    console.log(x); // Output: 15
}
{
    let x = 10;
    x -= 5;
    console.log(x); // Output: 5
}
{
    let x = 10;
    x *= 5;
console.log(x); // Output: 50
}

{
    let x = 10;
    x **= 5;
    console.log(x); // Output: 100000
}

{
    let x = 10;
    x /= 5;
    console.log(x); // Output: 2
}

{
    let x = 10;
    x %= 5;
    console.log(x); // Output: 0
}

{
    let text = "Hello";
    console.log(text); // Output: "Hello"
}

{
    let text = "Hello"; text += " World";
    console.log(text); // Output: "Hello World"
}
{
    let x = true;
    let y = x &&= 10;
    console.log(x); // Output: 10
}
{
    let x = false;
    let y = x &&= 10;
    console.log(x); // Output: false
}
{
    let x = 1;
    let y = x &&= 10;
    console.log(x); // Output: 10
}
{
    let x = 0;
    let y = x &&= 10;
    console.log(x); // Output: 0
}

{
    let x = undefined;
    let y = x &&= 10;
    console.log(x); // Output: undefined
}
{
    let x = null;
    let y = x &&= 10;
    console.log(x); // Output: null
}

{
    let x = false;
    let y = x ||= 10;
    console.log(x); // Output: 10
}
{
    let x = true;
    let y = x ||= 10;
    console.log(x); // Output: true
}

{
    let x = null;
    let y = x ||= 10;
    console.log(x); // Output: 10
}

{
    let x = undefined;
    let y = x ||= 10;
    console.log(x); // Output: 10
}
{
    let x;
    x ??= 10;
    console.log(x); // Output: 10
}
{
    let x = 0;
    x ??= 10;
    console.log(x); // Output: 0
}
{
    let x = null;
    x ??= 10;
    console.log(x); // Output: 10
}

{
    let x = undefined;
    x ??= 10;
    console.log(x); // Output: 10
}

{
    let x = 10;
    let y = 5;
    x ??= 10;
    console.log(x); // Output: 10   
}

{
    let text = "12345";

    let min = Math.min(...text);
    let max = Math.max(...text);
    console.log(min); // Output: 1
    console.log(max); // Output: 5
}

