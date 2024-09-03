document.getElementById('convert-button').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature-input').value);
    const unit = document.getElementById('unit-select').value;
    let result;

    if (isNaN(temperature)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }

    switch (unit) {
        case 'celsius':
            result = {
                celsius: temperature,
                fahrenheit: (temperature * 9/5) + 32,
                kelvin: temperature + 273.15
            };
            break;
        case 'fahrenheit':
            result = {
                celsius: (temperature - 32) * 5/9,
                fahrenheit: temperature,
                kelvin: (temperature - 32) * 5/9 + 273.15
            };
            break;
        case 'kelvin':
            result = {
                celsius: temperature - 273.15,
                fahrenheit: (temperature - 273.15) * 9/5 + 32,
                kelvin: temperature
            };
            break;
        default:
            document.getElementById('result').innerText = 'Unknown unit.';
            return;
    }

    document.getElementById('result').innerText = `Celsius: ${result.celsius.toFixed(2)}°C\n` +
                                                  `Fahrenheit: ${result.fahrenheit.toFixed(2)}°F\n` +
                                                  `Kelvin: ${result.kelvin.toFixed(2)} K`;
});