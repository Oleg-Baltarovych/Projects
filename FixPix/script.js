$(".email").blur(function () {
  if ($(this).val() != "") {
    let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    if (pattern.test($(this).val())) {
      $(this).css({ border: "1px solid #569b44" });
    } else {
      $(this).css({ border: "1px solid #ff0000" });
    }
  } else {
    $(this).css({ border: "1px solid #ff0000" });
  }
});

$(".visa").click(() => {
  $(".paypal").removeClass("active");
  return $(".visa").addClass("active");
});

$(".paypal").click(() => {
  $(".visa").removeClass("active");
  return $(".paypal").addClass("active");
});
