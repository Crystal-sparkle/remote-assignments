// h1 textContnt 改成
//Request 1: Click to Change Text.
//When the user clicks on the "Welcome Message" block, change text to "Have a Good Time!".

const changingMessage = document.getElementById("h1Message");

changingMessage.addEventListener("click", () => {
  changingMessage.textContent = "Have a Good Time!";
});

//Request 2: Click to Show/Close Menu.
//When the user clicks the menu at the top-right corner, show the hidden mobile menu.
//After that, the user can click the close button to hide it.
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

//Request 3: Click to Show More Content Boxes.
//There are some more content boxes waiting to show.
//When the user clicks the Call-to-Action button, show those hidden content boxes)

const calltoAction = document.getElementById("calltoAction");
const hiddenContent = document.getElementById("contentbox2");

// 添加點擊事件監聽器

calltoAction.addEventListener("click", () => {
  hiddenContent.style.display = "flex";
});
