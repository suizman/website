document.addEventListener("DOMContentLoaded", function(e) {
  anchors.options = {
    icon: '#'
  }

  anchors.add('.docs-content h2, .docs-content h3');

  $('.dropdown').click(function() {
    $(this).toggleClass('is-active');
  });
});
