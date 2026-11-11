/* ==========================================================
   MAIN — password validation and sequence trigger
   ========================================================== */
(function () {
  "use strict";

  var PASSWORD = "ANUGERAH"; // case-sensitive

  var lock = document.getElementById("lock");
  var lockInner = document.getElementById("lock-inner");
  var form = document.getElementById("lock-form");
  var input = document.getElementById("password");
  var button = document.getElementById("lock-button");
  var status = document.getElementById("lock-status");
  var wrong = document.getElementById("wrong");

  var sequenceStarted = false; // guarantees the animation runs exactly once

  function restartClass(el, name) {
    el.classList.remove(name);
    void el.offsetWidth; // force reflow so the animation restarts
    el.classList.add(name);
  }

  function showWrong() {
    wrong.setAttribute("aria-hidden", "false");
    wrong.classList.add("is-visible");
    restartClass(wrong, "is-glitching");
    restartClass(lockInner, "is-shaking");
    status.textContent = "SYS://ACCESS DENIED · INVALID CREDENTIALS_";
    input.select();
  }

  function clearWrong() {
    wrong.classList.remove("is-visible", "is-glitching");
    wrong.setAttribute("aria-hidden", "true");
    lockInner.classList.remove("is-shaking");
    status.textContent = "SYS://MAINFRAME · NODE-77 · AWAITING CREDENTIALS_";
  }

  function startSequence() {
    if (sequenceStarted) { return; }
    sequenceStarted = true;

    clearWrong();
    input.disabled = true;
    button.disabled = true;
    status.textContent = "SYS://ACCESS GRANTED · DECRYPTING_";

    lock.classList.add("is-leaving");
    window.setTimeout(function () { lock.classList.add("is-gone"); }, 500);

    window.MainframeStage.run();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (sequenceStarted) { return; }

    if (input.value === PASSWORD) {
      startSequence();
    } else {
      showWrong();
    }
  });

  input.addEventListener("input", clearWrong);

  window.MainframeRain.start();
  input.focus();
})();
