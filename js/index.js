$(document).ready(function() {
  console.log('document is ready.');
  // fullpage init
  $('#fullpage').fullpage({
    navigation: true,
    navigationTooltips: 'left',
    easingcss3: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    sectionsColor: ['whitesmoke', 'whitesmoke', 'whitesmoke', 'whitesmoke'],
    onLeave: function(index, nindex) {
      if (index == 2) {
        $('.foodudes>*').removeClass('reveal');
      }
      if (index == 3) {
        $('.icook>*').removeClass('reveal');
      }
    }
  });
});

$(document).load(function() {
  console.log('document is loaded.')
});
