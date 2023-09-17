var enterNum = document.getElementById("enterNumber");
var pushBtn = document.getElementById("submitBtn");
var subBtn = document.getElementById("submitBtn").value;
var sumAnswer = document.getElementById("answer");

pushBtn.addEventListener("click", () => {
  var userInput = enterNum.value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `http://localhost:3000/getData?number=${userInput}`, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = xhr.responseText;

      document.getElementById("answer").textContent = response;
    }
  };

  xhr.send();
});
