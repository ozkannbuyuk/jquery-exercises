$(document).ready(function () {
  const isIframe =
    self.frameElement &&
    (self.frameElement + "").indexOf("HTMLIFrameElement") > -1;

  if (isIframe) {
    $(".go-back").remove();
  }

  $("button")
    .on("click", function () {
      $(".counter-up").each(function () {
        $("button").hide();
        $(this)
          .prop("CounterUp", 0)
          .animate(
            {
              CounterUp: $(this).data("value"),
            },
            {
              duration: $(this).data("duration") || 3500,
              easing: "swing",
              step: (step) => {
                let number = Math.ceil(step);
                if ($(this).data("format")) {
                  number = new Intl.NumberFormat("en-US").format(number);
                }
                if ($(this).data("prefix")) {
                  number = $(this).data("prefix") + " " + number;
                }
                if ($(this).data("suffix")) {
                  number += " " + $(this).data("suffix");
                }
                $(this).text(number);
              },
              complete: () => {
                $("button").show().text("Restart");
              },
            }
          );
      });
    })
    .trigger("click");
});
