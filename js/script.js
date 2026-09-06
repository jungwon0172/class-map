document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('#categoryTabs button');
  var cards = document.querySelectorAll('#platformGrid .card');
  var emptyState = document.getElementById('emptyState');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      var filter = tab.getAttribute('data-filter');
      var visibleCount = 0;

      cards.forEach(function (card) {
        var match = filter === 'all' || card.getAttribute('data-category') === filter;
        card.hidden = !match;
        if (match) visibleCount++;
      });

      if (emptyState) {
        emptyState.classList.toggle('show', visibleCount === 0);
      }
    });
  });
});
