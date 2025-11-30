function greet(name){
    if (!name)
        {
            console.log('hi there');
        }
    else
    {
    console.log(`Hello ${name} !!`);
    }
    alert("check the console!");
}
let celsius ;
function convertToFahrenheit(celsius)
{
    Fahrenheit = (celsius * 9/5) + 32 ;
    return console.log(`${Fahrenheit} F`);
}

function convertToCelsius(Fahrenheit)
{
   celsius = (Fahrenheit - 32 ) * 5/9 ;
    return console.log(` ${celsius} C `);
}

function convertTemperature(degrees , unit)
{
    if (unit === 'C')
    {
        convertToFahrenheit(degrees);
    }
    else if (unit === 'F' )
    {
        convertToCelsius(degrees);
    }
    else
    {
        console.log('unit not mach!!')
    }
}
function converLength(length , from , to)
{
    if (from === 'km' && to === 'mile')
    {
        mile = (length / 1.6) ;
        console.log(`${length} km is ${mile} miles`);
    }

    else if (from === 'mile' && to === 'km')
    {
        km = ( length * 1.6 );
        console.log(`${length} miles is ${km} KMs`);
    }
    else if (from === 'mile' && to === 'ft')
    {
        ft = ( length * 5280 );
        console.log(`${length} miles is ${ft} feets`);
    }
    else if (from === 'km' && to === 'ft')
    {
        ft = ( length * 3281 );
        console.log(`${length} KMS is ${ft} feets`);
    }
    else if (from === 'ft' && to === 'km')
    {
        km = ( length / 3281 );
        console.log(`${length} Feets is ${km} KMs`);
    }
    else if (from === 'ft' && to === 'mile')
    {
        mile = ( length / 5280 );
        console.log(`${length} Feets is ${mile} Miles`);
    }

    else
    {
        console.log("cheack the perameters");
    }
}
