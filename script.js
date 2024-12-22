
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

    if(rawUnity == 'celsius' && convertUnity == 'fairenheit'){
        let convert  = convertCelsiusToFairenheit(typedunity);
        convertedUnity.value = convert.toFixed(1);
    } 
    if(rawUnity == 'fairenheit' && convertUnity == 'celsius'){
        let convert  = convertFairenheitToCelsius(typedunity);
        convertedUnity.value = convert.toFixed(1);
    } 
    if(rawUnity == 'celsius' && convertUnity == 'kelvin'){
        let convert  = convertCelsiusToKelvin(typedunity);
        convertedUnity.value = convert.toFixed(2);
    } 
    if(rawUnity == 'fairenheit' && convertUnity == 'kelvin'){
        let convert  = convertFairenheitToKelvin(typedunity);
        convertedUnity.value = convert.toFixed(2);
    }
    if(rawUnity == 'kelvin' && convertUnity == 'fairenheit'){
        let convert  = convertKelvinToFairenheit(typedunity);
        convertedUnity.value = convert.toFixed(2);
    }
    if(rawUnity == 'kelvin' && convertUnity == 'celsius'){
        let convert  = convertKelvinToCelsius(typedunity);
        convertedUnity.value = convert.toFixed(2);
    } 

})