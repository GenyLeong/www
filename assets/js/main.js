function eliminarElemento() {
    esconder = document.getElementById("esconder"), ancho = window.innerWidth, ancho < 768 ? $(esconder).removeClass("col-sm-1 col-md-1 pd-0 navbar-fixed-top nav-menu hidden-xs").addClass("navbar navbar-default visible-xs navbar-fixed-top") : $(esconder).removeClass("navbar navbar-default visible-xs navbar-fixed-top").addClass("col-sm-1 col-md-1 pd-0 navbar-fixed-top nav-menu hidden-xs"), ancho < 480 ? ($(".wrapper").attr("data-ibg-bg", "assets/img/enfocada.jpg"), $(".ibg-bg").css({
        background: 'url("assets/img/enfocada.jpg") 50% 50% / cover no-repeat'
    })) : ($(".wrapper").attr("data-ibg-bg", "assets/img/brain.jpg"), $(".ibg-bg").css({
        background: 'url("assets/img/brain.jpg") 50% 50% / cover no-repeat'
    }))
}

function altura_main() {
    altura = $(window).height(), $(".main").css("height", altura + "px"), $(".col-sm-11").css("height", altura + "px")
}

function maquina(e, n, a, i) {
    var t = n.length,
        r = document.getElementById(e),
        o = 0,
        s = setInterval(function() {
            r.innerHTML = r.innerHTML.substr(0, r.innerHTML.length - 1) + n.charAt(o) + " ", o >= t ? (clearInterval(s), r.innerHTML = r.innerHTML.substr(0, t), i && i()) : o++
        }, a)
}
$(document).ready(function() {
    var e = $(window).height();
 $("#pre-load-web").css({
        height: e + "px"
    })
}), $(window).load(function() {
    $("#pre-load-web").hide(), $(".container-fluid").css({
        display: "block"
    }), eliminarElemento(), altura_main(), $(".bg").interactive_bg(), $("#btns").interactive_bg({
        strength: 10,
        scale: 1.15,
        contain: !1,
        wrapContent: !0
    }), $(window).resize(function() {
        eliminarElemento(), altura_main(), $(".wrapper > .ibg-bg").css({
            width: $(window).outerWidth(),
            height: $(window).outerHeight()
        })
    }), maquina("maquinas", texto[0], 170, function() {
        maquina("maquinaria", texto[1], 170)
    }), console.log("ready")
});
var texto = ["Hola, mi nombre es Génesis León", "Soy estudiante de Ingeniería de Sistemas"];