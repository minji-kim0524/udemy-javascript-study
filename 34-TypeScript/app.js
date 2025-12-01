var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var buttonElement = document.querySelector("button");
function add(a, b) {
    return a + b;
}
// 함수가 반환하는 값이 아무것도 없음을 표시 => 'void'
// 해당 함수에 return문이 없다는 의미임(반환하는 값이 없다 === return문이 없다)
// function printResult(result): void {
//   console.log(result);
// }
function printResult(result, printMode) {
    if (printMode === "console") {
        console.log(result);
    }
    else if (printMode === "alert") {
        alert(result);
    }
}
var results = [];
var names = ["Max"];
buttonElement.addEventListener("click", function () {
    // 앞에 '+' 표시를 추가하면 문자열을 숫자로 변환할 수 있음
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    var resultContainer = {
        res: result,
        print: function () {
            console.log(this.res);
        },
    };
    results.push(resultContainer);
    // results.push(5);
    // printResult(results);
    // results[0].print();
    printResult(result, "console");
    printResult(result, "alert");
});
