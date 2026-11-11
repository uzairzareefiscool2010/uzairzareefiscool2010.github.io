/* ==========================================================
   STAGE — Stage A (scatter), B (centre collapse), C (flash),
   D (poster reveal). Uses the Web Animations API (no libraries).
   ========================================================== */
(function () {
  "use strict";

  var TITLE = "MAJLIS ANUGERAH MUTIARA GEMILANG 2026";
  var CODE_BITS = [
    "0xFF41", "sudo access --grant", "root@mainframe:~#", "decrypt(0x7A3F)",
    "01001101 01000001", "ping 10.0.0.77", "chmod +x gemilang.sh", "SYS.OK",
    "BREACH://2026", "{ auth: true }", "kernel.load()", "0xDEADBEEF",
    "fetch('/mutiara')", "[ ACCESS GRANTED ]", "10110010", "ssh node-77"
  ];

  var T_SCATTER = 1900;   // Stage A: hold scattered, glitching
  var T_COLLAPSE = 1900;  // Stage B: converge to the exact centre
  var T_FLASH_IN = 450;   // Stage C: ramp to full white
  var T_FLASH_OUT = 2550; // Stage C: white -> poster (flash total ~3 s)

  var stage = document.getElementById("stage");
  var core = document.getElementById("core");
  var flash = document.getElementById("flash");
  var poster = document.getElementById("poster");
  var logoSource = document.getElementById("logo-neon");

  var CENTER = "translate(-50%, -50%)";

  function rand(min, max) { return min + Math.random() * (max - min); }

  function scatterPoint(margin) {
    var w = window.innerWidth / 2 - margin;
    var h = window.innerHeight / 2 - margin;
    return { x: rand(-w, w), y: rand(-h, h) };
  }

  function addItem(el, extraClass, delay) {
    el.classList.add("stage__item", extraClass);
    el.style.opacity = "0";
    stage.appendChild(el);
    var p = scatterPoint(60);
    return { el: el, x: p.x, y: p.y, rot: rand(-35, 35), delay: delay };
  }

  function buildItems() {
    var items = [];
    var i;

    var logo = logoSource.cloneNode(true);
    logo.removeAttribute("id");
    var lp = addItem(logo, "stage__item--logo", 0);
    lp.x = rand(-0.25, 0.25) * window.innerWidth;
    lp.y = rand(-0.2, 0.2) * window.innerHeight;
    lp.rot = rand(-12, 12);
    items.push(lp);

    var letters = TITLE.replace(/\s+/g, "").split("");
    for (i = 0; i < letters.length; i++) {
      var g = document.createElement("span");
      g.textContent = letters[i];
      items.push(addItem(g, "stage__item--glyph", rand(0, 500)));
    }

    for (i = 0; i < CODE_BITS.length; i++) {
      var c = document.createElement("span");
      c.textContent = CODE_BITS[i];
      items.push(addItem(c, "stage__item--code", rand(0, 600)));
    }

    for (i = 0; i < 14; i++) {
      var s = document.createElement("span");
      s.style.height = Math.round(rand(80, 260)) + "px";
      var sp = addItem(s, "stage__item--stream", rand(0, 500));
      sp.rot = 0;
      items.push(sp);
    }

    for (i = 0; i < 6; i++) {
      var r = document.createElement("span");
      var d = Math.round(rand(30, 90));
      r.style.width = d + "px";
      r.style.height = d + "px";
      items.push(addItem(r, "stage__item--ring", rand(0, 600)));
    }
    return items;
  }

  function pose(it, scale) {
    return CENTER + " translate(" + it.x + "px, " + it.y + "px) rotate(" + it.rot + "deg) scale(" + scale + ")";
  }

  function scatter(items) {
    stage.classList.add("is-glitching");
    return items.map(function (it) {
      return it.el.animate([
        { opacity: 0, transform: pose(it, 0.2) },
        { opacity: 1, transform: pose(it, 1.15), offset: 0.6 },
        { opacity: 0.85, transform: pose(it, 1) }
      ], { duration: 700, delay: it.delay, easing: "ease-out", fill: "forwards" }).finished;
    });
  }

  function collapse(items) {
    return items.map(function (it) {
      return it.el.animate([
        { opacity: 1, transform: pose(it, 1) },
        { opacity: 1, transform: CENTER + " translate(0px, 0px) rotate(" + (it.rot + 540) + "deg) scale(0.05)", offset: 0.92 },
        { opacity: 0, transform: CENTER + " translate(0px, 0px) rotate(" + (it.rot + 600) + "deg) scale(0)" }
      ], { duration: T_COLLAPSE, easing: "cubic-bezier(0.7, 0, 0.9, 0.4)", fill: "forwards" }).finished;
    });
  }

  function wait(ms) {
    return new Promise(function (resolve) { window.setTimeout(resolve, ms); });
  }

  function run() {
    var items = buildItems();
    stage.setAttribute("aria-hidden", "false");

    // A — scattered, glitching
    return Promise.all(scatter(items))
      .then(function () { return wait(T_SCATTER); })
      // B — reverse explosion to the exact centre
      .then(function () { return Promise.all(collapse(items)); })
      // C — singularity, then full-screen white flash
      .then(function () {
        stage.classList.remove("is-glitching");
        core.animate([
          { opacity: 1, transform: "scale(0.2)" },
          { opacity: 1, transform: "scale(3)" }
        ], { duration: T_FLASH_IN, easing: "ease-in", fill: "forwards" });
        return flash.animate([{ opacity: 0 }, { opacity: 1 }],
          { duration: T_FLASH_IN, easing: "ease-in", fill: "forwards" }).finished;
      })
      // D — poster appears under the white, then the white fades out
      .then(function () {
        window.MainframeRain.stop();
        document.body.classList.add("is-poster");
        poster.classList.add("is-visible");
        stage.innerHTML = "";
        return flash.animate([{ opacity: 1 }, { opacity: 0 }],
          { duration: T_FLASH_OUT, easing: "ease-out", fill: "forwards" }).finished;
      })
      .then(function () {
        flash.style.display = "none";
      });
  }

  window.MainframeStage = { run: run };
})();
