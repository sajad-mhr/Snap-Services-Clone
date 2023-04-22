let is_open = false;
function openNavbarMobile() {
  console.log(is_open);
  if (!is_open) {
    $("#menu-icon").removeClass("bi-list");
    $("#menu-icon").addClass("bi-plus-lg");
    $("#menu-icon").addClass("close-menu-btn");
    $(".mobile-navigation-container").addClass("open");
    $("body").css("overflow-y", "hidden");
    $(".mobile-navigation-overley").css("display","block")
    is_open = true;
  } else {
    $("#menu-icon").removeClass("bi-plus-lg");
    $("#menu-icon").addClass("bi-list");
    $("#menu-icon").removeClass("close-menu-btn");
    $(".mobile-navigation-container").removeClass("open");
    $("body").css("overflow-y", "scroll");
    $(".mobile-navigation-overley").css("display","none")
    is_open = false;
  }
}

$("body").on("click",(e)=>{
  if(e.target.className === "mobile-navigation-overley"){
    $("#menu-icon").removeClass("bi-plus-lg");
    $("#menu-icon").addClass("bi-list");
    $("#menu-icon").removeClass("close-menu-btn");
    $(".mobile-navigation-container").removeClass("open");
    $("body").css("overflow-y", "scroll");
    $(".mobile-navigation-overley").css("display","none")
    is_open = false;
  }
})


$(".open-menu-btn").on("click", () => {
  openNavbarMobile();
});

$("#showMoreButton").on("click", () => {
  $(".future-container").css("max-height", "9999px");
  $(".show-more-future").css("display", "none");
});

let is_open_store = false;
function openInstallAppNavBar() {
  if (!is_open_store) {
    $("#install-app-icon").removeClass("bi-chevron-down");
    $("#install-app-icon").addClass("bi-chevron-up");
    $(".install-app-store").removeClass("close-install")
    $(".install-app-store").addClass("open-install")
    is_open_store = true;
  } else {
    $("#install-app-icon").removeClass("bi-chevron-up");
    $("#install-app-icon").addClass("bi-chevron-down");
    $(".install-app-store").removeClass("open-install")
    $(".install-app-store").addClass("close-install")
    is_open_store = false;
  }
}

$(".open-install-app-navigation").on("click", () => {
  openInstallAppNavBar();
});
$(".install-app-store");
