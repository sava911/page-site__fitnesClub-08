function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
  else if (elem.createTextRange) {
    var range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select()
  }
};

function mask(evt) {
  var matrix = "+7 (___) ___ ____";
  var i = 0;
  var def = matrix.replace(/\D/g, "");
  var val = this.value.replace(/\D/g, "");

  if (def.length >= val.length) val = def;
  this.value = matrix.replace(/./g, function(a) {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
  });

  if (evt.type == 'blur') {
    if (this.value.length == 2) this.value = "";
  } else setCursorPosition(this.value.length, this)
};

var feedback = document.querySelector('.feedback-form');
var phone = feedback.querySelector('input[name="phone"]');

phone.addEventListener('input', mask);
phone.addEventListener('focus', mask);
phone.addEventListener('blur', mask);

function onTestPhone() {
  if (phone.value.length < 17) {
    phone.setCustomValidity('Номер должен состоять из 10-ти цифр');
  } else {
    phone.setCustomValidity('');
  }
};

function scrollTo(evt) {
  evt.preventDefault();
  var blockID = this.getAttribute('href');

  document.querySelector(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

var anchorSubscription = document.querySelector('.scroll-to-subscription');

anchorSubscription.addEventListener('click', scrollTo);
