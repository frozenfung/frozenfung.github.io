$(document).ready(function() {
  console.log('document is ready.');
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
});

$(document).load(function() {
  console.log('document is loaded.')
});
