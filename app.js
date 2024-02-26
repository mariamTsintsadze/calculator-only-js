function InputNumber(data){
    //შეიყვანოს მონაცემი
    let write = prompt(data)
    //სანამ შეყვანილი მონაცემი არ იქნება რიცხვი მანამდე ახლიდან შეაყვანინოს
    while (isNaN(parseInt(write))) {
        alert('Invalid input. Please enter a number');
        write = prompt('Enter a valid data');
    }
    return write;
}

while(true){
    //იძახებს ფუნქციას პირველი და მეორე რიცხვისთვის
    let firstNumber = InputNumber('Enter a first number');
    let secondNumber = InputNumber('Enter a second number');


    let allOperations = ['+', '-', '*', '/', '%', '**'];

    //შეიყვანოს არითმეტიკული მოქმედება
    let operation = prompt('Enter one of the main arithmetic operations');
    //სანამ შეყვანილი მონაცემი არ ემთხვევა მასივში არსებულისას მანამდე მოსთხოვოს შეყვანა
    while (!allOperations.includes(operation)) {
        alert('Invalid operation. Please enter one of: "+", "-", "*", "/", "%', "**");
        operation = prompt('Enter one of the main arithmetic operations');
    }

    //სრულდება არითმეტიკული მოქმედებები +, -, *, /, %, **;
    if (operation === '+') {
        console.log(+firstNumber + +secondNumber);
    } else if (operation === '-') {
        console.log(+firstNumber - +secondNumber);
    } else if (operation === '*') {
        console.log(+firstNumber * +secondNumber);
    } else if (operation === '/') {
        //თუ უნაშთოდ იყოფა მძიმის შემდეგ არ გამოიტანოს ციფრები
        if (+secondNumber !== 0 && +firstNumber % +secondNumber === 0) {
            console.log((+firstNumber / +secondNumber).toFixed(0));
            //თუ სრულად არ იყოფა მძიმის შემდეგ 2 ციფრი გამოაქვს
        }else if(+secondNumber !== 0 && +firstNumber % +secondNumber !== 0){
            console.log((+firstNumber / +secondNumber).toFixed(2));
            //თუ ნულია მეორე ციფრი შეცდომაა
        }else {
            alert('ERROR: Division by 0');
            //ხელახლა სთხოვს მეორე რიცხვის შეყვანას სანამ სწორად არ შეიყვანენ მონაცემს
            secondNumber = prompt('Enter a second number');
            while(isNaN(parseInt(secondNumber)) || +secondNumber === 0){
                alert('Invalid input. Please enter a valid number' )
                secondNumber = prompt('Enter a valid number');
            }
            console.log((+firstNumber / +secondNumber))
            
        }
    }else if(operation === '%') {
        console.log(+firstNumber % +secondNumber);
    }else if(operation === '**') {
        console.log(firstNumber ** secondNumber);
    }
    //თუ აღარ სურს გამოთვლა
    let end =confirm("Do you want to continue calculations?") 
    if(!end){
    break;
}
}