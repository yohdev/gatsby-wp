var acc = document.getElementsByClassName('ui-accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    /* var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    } */
  });
}

function initAcc(elem, option) {
  document.addEventListener('click', function (e) {
    if (!e.target.matches(elem + ' .a-btn')) return;
    else {
      if (!e.target.parentElement.classList.contains('active')) {
        if (option == true) {
          var elementList = document.querySelectorAll(elem + ' .a-container');
          Array.prototype.forEach.call(elementList, function (e) {
            e.classList.remove('active');
          });
        }
        e.target.parentElement.classList.add('active');
      } else {
        e.target.parentElement.classList.remove('active');
      }
    }
  });
}

initAcc('.faq-accordion.v1', true);