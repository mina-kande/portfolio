console.log("読み込み成功");
let count = 0;
  const btn = document.getElementById("btn");
  const gooda = document.getElementById("goodcount");

btn.addEventListener("click", function (){
    count = count + 1

    console.log("いいねの数" + count);
    gooda.textContent = count
});


const btn5 = document.getElementById("btn5");
const homew = document.getElementById("homew");

btn5.addEventListener("click", function (){
     homew.style.backgroundColor = "red";

    console.log("変更成功");
});

