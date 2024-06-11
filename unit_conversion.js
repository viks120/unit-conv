function check_answer() {

    let authoritative_answer;

    const temperatures = ["Kelvin", "Celsius", "Fahrenheit", "Rankine"];
    const volumes = ["liters", "tablespoons", "cubic-inches", "cups", "cubic-feet", "gallons"];

    const input_numerical_value = parseFloat(document.getElementById("input_numerical_value").value);
    const input_unit_of_measure = document.getElementById("input_unit_of_measure").value;
    const target_unit_of_measure = document.getElementById("target_unit_of_measure").value;
    const student_response = parseFloat(document.getElementById("student_response").value);

    if(isNaN(student_response)) {
        return "incorrect";
    }

    authoritative_answer = get_authorative_answer(temperatures, 
                                                volumes, input_numerical_value, 
                                                input_unit_of_measure, 
                                                target_unit_of_measure, 
                                                student_response);

    if (authoritative_answer === "invalid" ) {
        return "invalid";
    }

    if (Math.round(authoritative_answer * 10) / 10 === Math.round(student_response * 10) / 10) {
        return "correct";
    } else {
        return "incorrect";
    }
}

function update_output() {
    result = check_answer();
    document.getElementById("result").innerHTML = '<b>Output:</b> ' + result;
}


function get_authorative_answer(temperatures, 
                                volumes, 
                                input_numerical_value, 
                                input_unit_of_measure, 
                                target_unit_of_measure) {

    let response;

    if(temperatures.includes(input_unit_of_measure) && temperatures.includes(target_unit_of_measure)) {
        response = temperature_conversion(input_numerical_value, input_unit_of_measure, target_unit_of_measure);
    } else if(volumes.includes(input_unit_of_measure) && volumes.includes(target_unit_of_measure)) {
        response = volume_conversion(input_numerical_value, input_unit_of_measure, target_unit_of_measure);
    } else {
        return "invalid";
    }

    if(response === null) {
        return "invalid";
    }

    return response;
}

function temperature_conversion(input_numerical_value, input_unit_of_measure, target_unit_of_measure) {
    if(input_unit_of_measure === target_unit_of_measure) {
        return input_numerical_value;
    }

    let celsius;
    switch (input_unit_of_measure) {
        case "Kelvin":
            celsius = input_numerical_value - 273.15;
            break;
        case "Fahrenheit":
            celsius = (input_numerical_value - 32) * 5/9;
            break;
        case "Rankine":
            celsius = (input_numerical_value - 491.67) * 5/9;
            break;
        case "Celsius":
            celsius = input_numerical_value;
            break;
        default:
            return null;
    }

    switch (target_unit_of_measure) {
        case "Kelvin":
            return celsius + 273.15;
        case "Fahrenheit":
            return celsius * 9/5 + 32;
        case "Rankine":
            return (celsius + 273.15) * 9/5;
        case "Celsius":
            return celsius;
        default:
            return null;
    }
}

function volume_conversion(input_numerical_value, input_unit_of_measure, target_unit_of_measure) {
    const liter_cubic_inch = 0.0163871;
    const liter_tablespoon = 0.0147868;
    const liter_cup = 0.236588;
    const liter_cubic_foot = 28.3168;
    const liter_gallon = 3.78541;

    let liters;
    switch (input_unit_of_measure) {
        case "liters":
            liters = input_numerical_value;
            break;
        case "tablespoons":
            liters = input_numerical_value * liter_tablespoon;
            break;
        case "cubic-inches":
            liters = input_numerical_value * liter_cubic_inch;
            break;
        case "cups":
            liters = input_numerical_value * liter_cup;
            break;
        case "cubic-feet":
            liters = input_numerical_value * liter_cubic_foot;
            break;
        case "gallons":
            liters = input_numerical_value * liter_gallon;
            break;
        default:
            return null;
    }

    switch (target_unit_of_measure) {
        case "liters":
            return liters;
        case "tablespoons":
            return liters / liter_tablespoon;
        case "cubic-inches":
            return liters / liter_cubic_inch;
        case "cups":
            return liters / liter_cup;
        case "cubic-feet":
            return liters / liter_cubic_foot;
        case "gallons":
            return liters / liter_gallon;
        default:
            return null;
    }
}
