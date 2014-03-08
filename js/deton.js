$(document).ready(function() {
    $('button').click(function() {
        $('.ppp').remove();
    	var Ro = $("input[name=Ro]").val();
        var C = $("input[name=C]").val();
        var H = $("input[name=H]").val();
        var N = $("input[name=N]").val();
        var O = $("input[name=O]").val();
        var Cl = $("input[name=Cl]").val();
        var F = $("input[name=F]").val();
        var a = 0;
        var k = 0;
        var ro = parseFloat(Ro, 10);
        var c = parseFloat(C, 10);
        var h = parseFloat(H, 10); 
        var n = parseFloat(N, 10); 
        var o = parseFloat(O, 10); 
        var cl = parseFloat(Cl, 10); 
        var f = parseFloat(F, 10); 
        if ((cl === 0) && (f === 0)) {
            a=o/(2*c+h/2);
            if (a>1) {
                k=(c+h+2-o+2*c+h/2)/(c+1);
            } else {
                k=(c+h+2)/(c+1);
            }
        } else {
            if (o=0) {
                a=f/(c-f/4+h-f);
                k=(c+h+2-f+c-f/4+h-f)/(c+1);
            } else {
                a=o/(2*c+(h-cl-f)/2);
                if (a>1) {
                    k=(c+h+2-cl-f-o+2*c+(h-cl-f)/2)/(c+1);
                } else {
                    k=(c+h+2-cl-f)/(c+1);
                }
            }
        }
        var nn=0.90483224+1.9097131*ro-0.20668778*ro*ro-0.19601222*ro*ro*ro+0.050027134*ro*ro*ro*ro-0.003335511*ro*ro*ro*ro*ro;
        var ch=Math.pow(2.71828,(nn*Math.log(ro)))*Math.pow(2.71828,((1/nn)*Math.log(a*k)));
        ro*=1000;
        var d=249.0452+8636.2299*ch-5677.897*ch*ch+2195.3933*ch*ch*ch-506.38893*ch*ch*ch*ch+70.867064*ch*ch*ch*ch*ch-5.8821718*ch*ch*ch*ch*ch*ch+0.26587807*ch*ch*ch*ch*ch*ch*ch-0.0050361302*ch*ch*ch*ch*ch*ch*ch*ch;
        var pn=ro*d*d/(nn+1);
        var qd=3.464*Math.sqrt(d);
        var Pyc=(nn*nn-1)*d*d*ro*(1+6/((nn+1)*(nn+1)*(nn-1)*(nn-1)))/(nn*11.998);
        
        var a_out = a.toFixed(2);
        var k_out = k.toFixed(2);
        var nn_out = nn.toFixed(2);
        var ch_out = ch.toFixed(2);
        var d_out = d.toFixed(2);
        var pn_out = (pn/1000000).toFixed(2);
        var qd_out = qd.toFixed(2);
        var Pyc_out = (Pyc/1000000).toFixed(2);
        $('#messages').append("<p class='ppp'>Кислородный коэффициент: a="+a_out + ";</p>");
        $('#messages').append("<p class='ppp'>Коэффициент, учитывающий соотношение атомов H, C, N: K="+k_out + ";</p>");
        $('#messages').append("<p class='ppp'>Показатель политропы: n="+nn_out + ";</p>");
        $('#messages').append("<p class='ppp'>Число детонации: Ч="+ch_out + ";</p>");
        $('#messages').append("<p class='ppp'>Идеальная скорость детонации при плотности монокристалла: Dmax="+d_out + ", м/с;</p>");
        $('#messages').append("<p class='ppp'>Давление во фронте детонационной волны: Pн="+pn_out + ", МПа;</p>");
        $('#messages').append("<p class='ppp'>Давление продуктов детонации в точке Жуге: Pж="+Pyc_out + ", МПа.</p>");
    });
});
