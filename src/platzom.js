function platzom(str) 
{    
    let translation = str;
    
    let lenght = str.length;
    let reverse = str.split('').reverse().join('');
    if(str == reverse)
    {
        let capitalize = true;
        let minMay = str.split('');
        for(let i = 0; i < lenght; i++)
        {
            minMay[i] = capitalize ? minMay[i].toUpperCase() : minMay[i].toLowerCase();
            capitalize = !capitalize;
        }
        return minMay.join('');
    }

    if(str.toLowerCase().endsWith('ar'))
    {
        translation = str.slice(0,-2);
    }

    if(str.toLowerCase().startsWith('z'))
    {
        translation += 'pe';
    }

    if(lenght >= 10)
    {
        const firstHalf = str.slice(0,lenght/2);
        const secondHalf = str.slice(lenght/2);

        translation = firstHalf + '-' + secondHalf;
    }

    return translation;
}