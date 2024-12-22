
const convertButton = document.getElementById('convertBTN');
const convertedUnity = document.getElementById('convertedUnity');

function convertCelsiusToFairenheit(celsius){
    return (celsius*1.8)+32;
}

function convertFairenheitToCelsius(fairenheit){
    return (fairenheit-32)/1.8;
}

function convertCelsiusToKelvin(celsius){
    return celsius+273.15;
}

function convertFairenheitToKelvin(fairenheit){
    return (((fairenheit)+459.67)*5)/9;
}

function convertKelvinToFairenheit(kelvin){
    return ((kelvin-273.15)*1.8)+32;
}

function convertKelvinToCelsius(kelvin){
    return kelvin-273.15;
}

const unityConversionTable = {
    celsius: {
        fairenheit: convertCelsiusToFairenheit,
        kelvin: convertCelsiusToKelvin
    },
    fairenheit: {
        celsius: convertFairenheitToCelsius,
        kelvin: convertFairenheitToKelvin
    },
    kelvin: {
        fairenheit: convertKelvinToFairenheit,
        celsius: convertKelvinToCelsius
    }
}

convertButton.addEventListener('click', () =>{
    const rawOption = document.getElementById('unityOptions');
    const convertOption = document.getElementById('unityOptionsToConvert');

    const rawUnity = rawOption.value;
    const convertUnity = convertOption.value;
    const typedunity = Number(document.getElementById('rawunity').value);

    if (rawUnity === convertUnity) {
        alert('Please select a diferent type of unity!!!')
        return
    }
    const convertFunction = unityConversionTable[rawUnity][convertUnity];
    const convertedValue = convertFunction(typedunity);
    convertedUnity.value = convertedValue.toFixed(2);

})