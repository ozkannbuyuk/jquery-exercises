$("#colorpicker").on("input", function (e) {
  $(":root").css("--primary-color", $(this).val());
});
