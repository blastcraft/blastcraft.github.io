$(document).ready(function() {
    $('form input').change(function() {
        var v = parseFloat($(this).val());
        if (isNaN(v)) {
            $(this).addClass('highlighted');
        } else {
            $(this).removeClass('highlighted');
        }
    });
    
    $('#messages').hide();
    $('button').click(function() {
        $('#messages').hide();
        var Ro = $("input[name=Ro]").val();
        var C = $("input[name=C]").val();
        var H = $("input[name=H]").val();
        var N = $("input[name=N]").val();
        var O = $("input[name=O]").val();
        var Cl = $("input[name=Cl]").val();
        var F = $("input[name=F]").val();
        var a = 0;
        var k = 0;
        var calculation = $('form input.highlighted').length == 0;
        
        //Ro
        var ro = parseFloat(Ro);
        var c = parseFloat(C);
        var h = parseFloat(H);
        var n = parseFloat(N);
        var o = parseFloat(O);
        var cl = parseFloat(Cl);
        var f = parseFloat(F);
        if (c === 0) { calculation = false; $("input[name=C]").addClass('highlighted'); };
        if (h === 0) { calculation = false; $("input[name=H]").addClass('highlighted'); };
        if (o === 0) { calculation = false; $("input[name=O]").addClass('highlighted'); };
	//Calculation
        if (calculation) {
        if ((cl === 0) && (f === 0)) {
            a=o/(2*c+h/2);
            if (a > 1) {
                k = (c + h + 2 - o + 2 * c + h / 2) / (c + 1);
            } else {
                k = (c + h + 2) / (c + 1);
            }
        } else {
            if (o === 0) {
                a = f / (c - f / 4 + h - f);
                k = (c + h + 2 - f + c - f / 4 + h - f) / (c + 1);
            } else {
                a = o / (2 * c + (h - cl - f) / 2);
                if (a > 1) {
                    k = (c + h + 2 - cl - f - o + 2 * c + (h - cl - f) / 2) / (c + 1);
                } else {
                    k = (c + h + 2 - cl - f) / (c + 1);
                }
            }
        }
        var nn = 0.90483224 + 1.9097131 * ro - 0.20668778 * Math.pow(ro,2) - 0.19601222 * Math.pow(ro,3);
	    nn += 0.050027134 * Math.pow(ro,4) - 0.003335511 * Math.pow(ro,5);
        var ch = Math.pow(2.71828,(nn * Math.log(ro))) * Math.pow(2.71828,((1 / nn) * Math.log(a * k)));
        ro *= 1000;
        var d = 249.0452 + 8636.2299 * ch - 5677.897 * Math.pow(ch,2) + 2195.3933 * Math.pow(ch,3);
        d += -506.38893 * Math.pow(ch,4) + 70.867064 * Math.pow(ch,5) - 5.8821718*Math.pow(ch,6);
        d += 0.26587807 * Math.pow(ch,7) - 0.0050361302 * Math.pow(ch,8);
        var pn = ro * d * d / (nn + 1);
        var qd = 3.464 * Math.sqrt(d);
        var Pyc = (nn*nn - 1) * d * d * ro * (1 + 6 / ((nn + 1) * (nn + 1) * (nn - 1) * (nn - 1))) / (nn * 11.998);
        
        var a_out = a.toFixed(2);
        var k_out = k.toFixed(2);
        var nn_out = nn.toFixed(2);
        var ch_out = ch.toFixed(2);
        var d_out = d.toFixed(2);
        var pn_out = (pn/1000000).toFixed(2);
        var qd_out = qd.toFixed(2);
        var Pyc_out = (Pyc/1000000).toFixed(2);
        $('.a_out').text(a_out);
        $('.k_out').text(k_out);
        $('.nn_out').text(nn_out);
        $('.ch_out').text(ch_out);
        $('.d_out').text(d_out + " м/с");
        $('.pn_out').text(pn_out + " МПа");
        $('.Pyc_out').text(Pyc_out + " МПа");
        $('#messages').show();
        }
    });
});
