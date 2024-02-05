function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("temperatureInput").value);
    const conversionType = document.getElementById("conversionType").value;
    let convertedTemperature = 0;
    let resultText = "";
    
    switch (conversionType) {
        case "celsiusToFahrenheit":
            convertedTemperature = (inputTemperature * 9/5) + 32;
            resultText = `${inputTemperature}°C is ${convertedTemperature.toFixed(2)}°F`;
            break;
        case "fahrenheitToCelsius":
            convertedTemperature = (inputTemperature - 32) * 5/9;
            resultText = `${inputTemperature}°F is ${convertedTemperature.toFixed(2)}°C`;
            break;
        case "celsiusToKelvin":
            convertedTemperature = inputTemperature + 273.15;
            resultText = `${inputTemperature}°C is ${convertedTemperature.toFixed(2)} K`;
            break;
        case "fahrenheitToKelvin":
            convertedTemperature = (inputTemperature - 32) * 5/9 + 273.15;
            resultText = `${inputTemperature}°F is ${convertedTemperature.toFixed(2)} K`;
            break;
        default:
            resultText = "Invalid conversion type";
    }
    
    document.getElementById("result").textContent = resultText;
}