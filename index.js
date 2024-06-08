let result = document.getElementById("Input");
let expression = "";
    function clearResult() {
        expression = "";
        result.value = expression;
    }

    function eliminateValue() {
        expression = expression.slice(0,-1);
        result.value = expression;
    }
    function appendValue(digit) {
        expression = expression + digit;
        result.value = expression;
    }
    function getResult() {
        try {
            const finalResult = eval(expression);
            result.value = finalResult;
            expression = finalResult.toString();
        }
        catch(error) {
            result.value = "Error";
            expression = "";
        }
    }