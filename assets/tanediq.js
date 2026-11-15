// tanediq.com — shared page behaviour: e-mail links, copy button, hero network
(function () {
  var EMAIL = "Edijs.Tanons@datakom.lv";

  // Links with data-subject open an e-mail with a prefilled subject
  document.querySelectorAll("a.write[data-subject]").forEach(function (a) {
    a.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Tanediq: " + a.getAttribute("data-subject"));
  });

  // Copy e-mail address
  var btn = document.getElementById("copy-email"), msg = document.getElementById("copied");
  function selectEmail() {
    var el = document.getElementById("email"); if (!el) return;
    var r = document.createRange(); r.selectNodeContents(el);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }
  if (btn && msg) {
    btn.addEventListener("click", function () {
      try {
        navigator.clipboard.writeText(EMAIL).then(
          function () { msg.textContent = "Nokopēts"; },
          function () { selectEmail(); msg.textContent = "Iezīmēts, nospiediet Ctrl+C"; });
      } catch (e) { selectEmail(); msg.textContent = "Iezīmēts, nospiediet Ctrl+C"; }
      setTimeout(function () { msg.textContent = ""; }, 3000);
    });
  }

  // Hero network: faint nodes and links
  var c = document.getElementById("net"); if (!c) return;
  var ctx = c.getContext("2d");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pts = [], W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2), color = "147,228,60";
  function readColor() {
    var v = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
    var m = v.match(/^#([0-9a-f]{6})$/i);
    if (m) { var n = parseInt(m[1], 16); color = [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(","); }
  }
  function size() {
    var r = c.getBoundingClientRect(); W = r.width; H = r.height;
    c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.round(Math.min(70, W * H / 16000)); pts = [];
    for (var i = 0; i < n; i++) {
      pts.push({ x: W * (0.35 + Math.random() * 0.65), y: Math.random() * H, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18 });
    }
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < pts.length; i++) {
      var p = pts[i];
      if (!reduce) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1; }
      for (var j = i + 1; j < pts.length; j++) {
        var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
        if (d < 13000) { ctx.strokeStyle = "rgba(" + color + "," + (0.16 * (1 - d / 13000)).toFixed(3) + ")"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
      }
      ctx.fillStyle = "rgba(" + color + ",.45)"; ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.283); ctx.fill();
    }
    if (!reduce) requestAnimationFrame(draw);
  }
  readColor(); size(); draw();
  window.addEventListener("resize", function () { size(); if (reduce) draw(); });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () { readColor(); if (reduce) draw(); });
})();
