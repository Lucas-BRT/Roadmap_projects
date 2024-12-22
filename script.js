
const convertButton = document.getElementById('convertBTN');
const convertedUnity = document.getElementById('convertedUnity');

convertButton.addEventListener('click', () =>{
    const rawOption = document.getElementById('unityOptions');
    const convertOption = document.getElementById('unityOptionsToConvert');

    const rawUnity = rawOption.value;
    const convertUnity = convertOption.value;

    if (rawUnity === convertUnity) {
        alert('Please select a diferent type of unity!!!')
        return
    }

    if(rawUnity == 'celsius' && convertUnity == 'fairenheit'){
        let typedunity = Number(document.getElementById('rawunity').value);
        let convert  = (typedunity*1.8)+32;
        convertedUnity.value = convert.toFixed(1);
    } 
    if(rawUnity == 'fairenheit' && convertUnity == 'celsius'){
        let typedunity = Number(document.getElementById('rawunity').value);
        let convert  = (typedunity-32)/1.8;
        convertedUnity.value = convert.toFixed(1);
    } 
    if(rawUnity == 'celsius' && convertUnity == 'kelvin'){
        let typedunity = Number(document.getElementById('rawunity').value);
        let convert  = typedunity+273.15;
        convertedUnity.value = convert.toFixed(2);
    } 
    if(rawUnity == 'fairenheit' && convertUnity == 'kelvin'){
        let typedunity = Number(document.getElementById('rawunity').value);
        let convert  = (((typedunity)+459.67)*5)/9;
        convertedUnity.value = convert.toFixed(2);
    }
    if(rawUnity == 'kelvin' && convertUnity == 'fairenheit'){
        let typedunity = Number(document.getElementById('rawunity').value);
        let convert  = ((typedunity-273.15)*1.8)+32;
        convertedUnity.value = convert.toFixed(2);
    }
    if(rawUnity == 'kelvin' && convertUnity == 'celsius'){
        let typedunity = Number(document.getElementById('rawunity').value);
        let convert  = typedunity-273.15;
        convertedUnity.value = convert.toFixed(2);
    } 

})