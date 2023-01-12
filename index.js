var rock = 1;
var paper = 2;
var sicssors = 3;

document.write(paper + "<br>");
document.write("----------------" + "<br>");
test1 = document.write(paper);

window.onload = function() {
  const btns = document.querySelectorAll('.btn');

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.style.display = "none";
    });
  });
}

function test(){
  document.getElementById("game").innerHTML = paper + 1;
}

