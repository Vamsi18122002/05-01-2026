function createCounter()
{
    var count = 0;

    return function()
    {
        count = count + 1;
        document.getElementById("result").innerHTML = count;
    }
}
var counter = createCounter();

document.getElementById("btn").onclick = function()
{
    counter();
}