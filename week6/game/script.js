document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("container");
  const addBallButton = document.getElementById("addBall");

  addBallButton.addEventListener("click", function() {
      addBall(container);
  });

  function addBall(container) {
      const ball = document.createElement("div");
      ball.classList.add("ball");

      container.appendChild(ball);
  }
});
