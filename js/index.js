if (window.innerWidth < 992) {
  location.pathname = 'nosupport.html';
}

// init nanobar
var nanobar;
var options = {
  target: document.querySelector('#preload-page'),
};
nanobar = new Nanobar(options);
nanobar.go(20);

window.addEventListener("load", function(event) {
  // console.log("All resources finished loading!");
  // fullpage init
  $('#fullpage').fullpage({
    navigation: true,
    sectionsColor: ['whitesmoke', 'whitesmoke', 'whitesmoke', 'whitesmoke'],
    onLeave: function(index) {
      console.log(index)
      if (index == 2) {
        $('.foodudes>*').removeClass('reveal');
      }
      if (index == 3) {
        $('.icook>*').removeClass('reveal');
      }
      if (index == 4) {
        $('.cakeresume>*').removeClass('reveal');
      }
      if (index == 5) {
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

  // tooltips
  tippy('[title]', {
    placement: 'top',
    theme: 'orange',
    arrow: true
  })
});

window.addEventListener("DOMContentLoaded", function(event) {
  // console.log("DOM fully loaded and parsed");
  nanobar.go(60);
});
