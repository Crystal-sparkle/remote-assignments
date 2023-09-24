/*Assignment 2: HTML DOM and AJAX
Complete the functions below to make an AJAX call to a URL by Fetch API, 
and show the response data in the page. You may render UI with any style.*/

function ajax(url) {
  return fetch(url)
    .then(checkStatus)
    .then((res) => res.json())
    .catch((error) => console.log("Looks like there was a problem", error));

  function checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(newError(response.statusText));
    }
  }
}
function render(data) {
  data.forEach((product) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = `Product: ${product.name}, Price: ${product.price}, Description: ${product.description}`;
    document.body.appendChild(newDiv);
  });
}

const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
ajax(url).then((data) => {
  render(data);
});
// you should get product information in JSON format and render data in the page
