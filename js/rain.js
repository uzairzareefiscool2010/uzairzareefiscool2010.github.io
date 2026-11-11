/* ==========================================================
   RAIN — scrolling green code on the background canvas
   ========================================================== */
(function () {
  "use strict";

  var canvas = document.getElementById("rain");
  var ctx = canvas.getContext("2d");
  var CHARS = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/\\{}[]#$%&*+=-:;ｱｲｳｴｵｶｷｸｹｺ";
  var FONT_SIZE = 16;
  var columns = [];
  var width = 0;
  var height = 0;
  var timer = null;

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);

    var count = Math.ceil(width / FONT_SIZE);
    columns = [];
    for (var i = 0; i < count; i++) {
      columns.push(Math.floor(Math.random() * -height / FONT_SIZE));
    }
  }

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.09)";
    ctx.fillRect(0, 0, width, height);
    ctx.font = FONT_SIZE + "px monospace";

    for (var i = 0; i < columns.length; i++) {
      var y = columns[i] * FONT_SIZE;
      var ch = CHARS.charAt(Math.floor(Math.random() * CHARS.length));
      // bright head, dimmer trail is produced by the fade fill above
      ctx.fillStyle = Math.random() > 0.96 ? "#b6ffc8" : "#00ff41";
      ctx.fillText(ch, i * FONT_SIZE, y);

      if (y > height && Math.random() > 0.975) {
        columns[i] = 0;
      }
      columns[i]++;
    }
  }

  function start() {
    if (timer) { return; }
    resize();
    timer = window.setInterval(draw, 55);
  }

  function stop() {
    window.clearInterval(timer);
    timer = null;
  }

  window.addEventListener("resize", function () {
    if (timer) { resize(); }
  });

  window.MainframeRain = { start: start, stop: stop };
})();
