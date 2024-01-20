function getParameterByName(e, a = window.location.href) {
        e = e.replace(/[\[\]]/g, "\\$&"); var t = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(a);
        return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "" : null
}
const el = document.currentScript;

var switchPage = false;
if (switchPage == true) {
        location.replace("https://entidy.id.vn/")
}
$.ajax({
        url: "https://vpcs.kingmarketing.vn/assets/ajaxs/boclink.php", method: "GET", dataType: "JSON", data: { v: getParameterByName("v", el.src) },
        success: function (e) { 1 == e.code && (location.href = e.url) }
});