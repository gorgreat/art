document.addEventListener("DOMContentLoaded", function (event) {
  let toogleNav = document.querySelector('.toogle__nav'),
    mobileItems = document.querySelector('.mobile__items'),
    popup = document.querySelector('.popup'),
    overlay = document.querySelector('.overlay'),
    callback = document.querySelector('.callback'),
    callbackBtn = document.querySelector('.callback__btn'),
    popupCloseBtn = document.querySelector('.popup__close'),
    featuresBtn = document.querySelector('.features___btn'),
    popupOrderClose = document.querySelector('.popup__order-close'),
    popupOrder = document.querySelector('.popup__order'),
    priceBtn = document.querySelectorAll('.price__btn');

  toogleNav.addEventListener('click', function () {
    mobileItems.classList.toggle('hidden');
  });

  function popupShow() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
  };

  function orderShow() {
    overlay.style.display = 'block';
    popupOrder.style.display = 'block';
  };

  function popupClose() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  };

  popupOrderClose.addEventListener('click', function () {
    orderClose();
  });

  featuresBtn.addEventListener('click', function () {
    orderShow();
  });

  function orderClose() {
    overlay.style.display = 'none';
    popupOrder.style.display = 'none';
  };

  callback.addEventListener('click', function () {
    popupShow();
  });

  callbackBtn.addEventListener('click', function () {
    popupShow();
  });

  overlay.addEventListener('click', function () {
    popupClose();
    orderClose();
  });

  popupCloseBtn.addEventListener('click', function () {
    popupClose();
  });

  for (let i = 0; i < priceBtn.length; i++) {
    priceBtn[i].addEventListener('click', function () {
      orderShow();
    });
  };

});

$(document).ready(function() {
  $(function () {
    $(".input__phone").mask("8 (999) 999-99-99");
  });
});
