//moving duck
function switchPosition(theDuck, xAxis, yAxis) {
  let posOnXaxis = Math.floor(Math.random() * (xAxis - theDuck.width));
  let posOnYaxis = Math.floor(Math.random() * (yAxis - theDuck.height));

  theDuck.style.left = `${posOnXaxis}px`;
  theDuck.style.top = `${posOnYaxis}px`;
}

function startDuckGame() {
  const theDuck = document.getElementById("myduck");
  myduck.onmouseover = () => {
    theDuck.style.display = "none";
    setTimeout(() => {
      theDuck.style.display = "block";
      switchPosition(theDuck, window.innerWidth, window.innerHeight);
    }, 500);
  };
}
