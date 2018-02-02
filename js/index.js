window.addEventListener("load", function(event) {
  // console.log("All resources finished loading!");
  // fullpage init
  $('#fullpage').fullpage({
    navigation: true,
    navigationTooltips: 'left',
    sectionsColor: ['whitesmoke', 'whitesmoke', 'whitesmoke', 'whitesmoke'],
    onLeave: function(index, nindex) {
      if (index == 2) {
        $('.foodudes>*').removeClass('reveal');
      }
      if (index == 3) {
        $('.icook>*').removeClass('reveal');
      }
      if (index == 4) {
        $('.end>*').removeClass('reveal');
      }
    }
  });
  nanobar.go(100);
  setTimeout(function() {
    document.querySelector('#fullpage').classList.add("show");
    document.querySelector('#fp-nav ul').classList.add("show");
    document.querySelector('#preload-page').classList.add("hidden");
  }, 500);
});

window.addEventListener("DOMContentLoaded", function(event) {
  // console.log("DOM fully loaded and parsed");
  nanobar.go(60);
});
