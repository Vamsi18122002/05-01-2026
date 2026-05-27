function checkPasswordStrength(password)
{
    var number = false;
    var upper = false;

    if (password.length < 8)
    {
        return "Weak";
    }

    for (var i = 0; i < password.length; i++)
    {
        var ch = password[i];

        if (ch >= '0' && ch <= '9')
        {
            number = true;
        }

        if (ch >= 'A' && ch <= 'Z')
        {
            upper = true;
        }
    }

    if (number == false)
    {
        return "Weak";
    }

    if (upper == false)
    {
        return "Weak";
    }

    return "Strong";
}

console.log(checkPasswordStrength("Vasi123"))