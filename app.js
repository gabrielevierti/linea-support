// LineaMI · sito di supporto: scelta della lingua (Italiano / English), ricordata nel browser.
(function () {
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem("linea.lang"); } catch (e) { return null; }
  }
  function remember(lang) {
    try { localStorage.setItem("linea.lang", lang); } catch (e) { /* navigazione privata: va bene così */ }
  }
  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
  }

  var initial = saved() ||
    ((navigator.language || "").toLowerCase().indexOf("it") === 0 ? "it" : "en");
  if (location.hash === "#it" || location.hash === "#italiano") initial = "it";
  if (location.hash === "#en" || location.hash === "#english") initial = "en";
  apply(initial);

  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".langs [data-set]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        var lang = event.currentTarget.getAttribute("data-set");
        apply(lang);
        remember(lang);
      });
    }
  });
})();
