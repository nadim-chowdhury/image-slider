let images = ["a.jpg", "b.jpg", "c.png", "d.jpg"];

let myImg = document.getElementById("my-img");

let count = -1;

function myImgChange() {
  count++;

  if (count >= images.length) {
    count = 0;
    myImg.src = images[count];
    console.log(count);
  } else {
    myImg.src = images[count];
    console.log(count);
  }
  setTimeout("myImgChange()", 1500);
}

window.onload(myImgChange());
