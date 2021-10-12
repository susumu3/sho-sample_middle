$(function(){
// スムーススクロール
$('a[href^="#"]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  //ヘッダーの高さを取得
  var header = $('header').outerHeight() - 20;
  //ヘッダーの高さを引く
  var position = target.offset().top-header;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});

// ドローワーメニュー
  $('#js-hamburger').on('click', function(){
    $('body').toggleClass('is-drawerActive');

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
      $('#js-global-menu').attr('aria-hidden', false);
    } else {
      $(this).attr('aria-expanded', false);
      $('#js-global-menu').attr('aria-hidden', true);
    }
  })

  $('#js-drawer-background, #js-global-menu__menu').on('click', function(){
    $('body').removeClass('is-drawerActive');
    $('#js-hamburger').attr('aria-expanded', false);
    $('#js-global-menu').attr('aria-hidden', true);
  })

  // アコーディオン
  $('.jsAccordionTitle').on('click', function(){
    $(this).next().toggleClass('is-open')
  });

  // お問い合わせフォーム
  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form textarea').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdON0sg2749_6x2MAquFiRSNNuV4iwO0uG0Eyfxd1c_WKdoJQ/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});