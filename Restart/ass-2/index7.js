function delay(ms)
{
    return new Promise(function(resolve)
    {
        setTimeout(function()
        {
            resolve();
        }, ms);
    });
}

delay(2000).then(function() {
    alert("Done");
});
