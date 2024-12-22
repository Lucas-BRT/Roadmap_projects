
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
    
    let convert;
    switch (rawUnity) {
        case 'celsius':
            switch (convertUnity) {
                case 'fairenheit':
                    convert = convertCelsiusToFairenheit(typedunity);
                    convertedUnity.value = convert.toFixed(1);
                    break;
                case 'kelvin':
                    convert = convertCelsiusToKelvin(typedunity);
                    convertedUnity.value = convert.toFixed(2);
                    break;
            }
            break;
        case 'fairenheit':
            switch (convertUnity) {
                case 'celsius':
                    convert = convertFairenheitToCelsius(typedunity);
                    convertedUnity.value = convert.toFixed(1);
                    break;
                case 'kelvin':
                    convert = convertFairenheitToKelvin(typedunity);
                    convertedUnity.value = convert.toFixed(2);
                    break;
            }
            break;
        case 'kelvin':
            switch (convertUnity) {
                case 'fairenheit':
                    convert = convertKelvinToFairenheit(typedunity);
                    convertedUnity.value = convert.toFixed(2);
                    break;
                case 'celsius':
                    convert = convertKelvinToCelsius(typedunity);
                    convertedUnity.value = convert.toFixed(2);
                    break;
            }
            break;
    }

})