
// ========================================================================= //
// //LOADER
// ========================================================================= //


// $(document).ready(function () {
// setTimeout(function () {
// $('.loader').fadeOut(1000);
// console.log("document loaded!");
// }, 0);
// });

function hideLoader() {
    $('.loader').hide();
}

setTimeout(function () {
    $(window).ready(hideLoader);
    console.log("document loaded!");
}, 2000);


// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 20 * 1000);
