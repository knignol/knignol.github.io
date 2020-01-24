function generateColors(color){
    var tiny = tinycolor(color);
    var lighten = tinycolor(color).lighten(20).toHexString();
    var darken = tinycolor(color).darken(20).toHexString();
    var complement = tinycolor(color).complement().toHexString();
    var desaturate = tinycolor(color).desaturate(20).toHexString();
    var grayscale = tinycolor(color).greyscale().toHexString();
    var brighten = tinycolor(color).brighten(20).toHexString();
    var triad = tinycolor(color).triad();
    triad.map(function(t) { return t.toHexString(); });
    var tetrad = tinycolor(color).tetrad();
    tetrad.map(function(t) { return t.toHexString(); });
    var splitComplement = tinycolor(color).splitcomplement();
    splitComplement.map(function(t) { return t.toHexString(); });
    var monochromatic = tinycolor(color).monochromatic();
    monochromatic.map(function(t) { return t.toHexString(); });
    var analogous = tinycolor(color).analogous();
    analogous.map(function(t) { return t.toHexString(); });
    
    $(".lighten").css("background-color", lighten);
    $(".lighten-text").text(lighten);
    
    $(".darken").css("background-color", darken);
    $(".darken-text").text(darken);
    
    $(".complement").css("background-color", complement);
    $(".complement-text").text(complement);
    
    $(".desaturate").css("background-color", desaturate);
    $(".desaturate-text").text(desaturate);
    
    $(".grayscale").css("background-color", grayscale);
    $(".grayscale-text").text(grayscale);
    
    $(".brighten").css("background-color", brighten);
    $(".brighten-text").text(brighten);
    
    $(".triad-0").css("background-color", triad[0].toHexString());
    $(".triad-1").css("background-color", triad[1].toHexString());
    $(".triad-2").css("background-color", triad[2].toHexString());
    $(".triad-0-text").text(triad[0].toHexString());
    $(".triad-1-text").text(triad[1].toHexString());
    $(".triad-2-text").text(triad[2].toHexString());
    
    $(".tetrad-0").css("background-color", tetrad[0].toHexString());
    $(".tetrad-1").css("background-color", tetrad[1].toHexString());
    $(".tetrad-2").css("background-color", tetrad[2].toHexString());
    $(".tetrad-3").css("background-color", tetrad[3].toHexString());
    $(".tetrad-0-text").text(tetrad[0].toHexString());
    $(".tetrad-1-text").text(tetrad[1].toHexString());
    $(".tetrad-2-text").text(tetrad[2].toHexString());
    $(".tetrad-3-text").text(tetrad[3].toHexString());
    
    $(".split-0").css("background-color", splitComplement[0].toHexString());
    $(".split-1").css("background-color", splitComplement[1].toHexString());
    $(".split-2").css("background-color", splitComplement[2].toHexString());
    $(".split-0-text").text(splitComplement[0].toHexString());
    $(".split-1-text").text(splitComplement[1].toHexString());
    $(".split-2-text").text(splitComplement[2].toHexString());
    
    $(".mono-0").css("background-color", monochromatic[0].toHexString());
    $(".mono-1").css("background-color", monochromatic[1].toHexString());
    $(".mono-2").css("background-color", monochromatic[2].toHexString());
    $(".mono-3").css("background-color", monochromatic[3].toHexString());
    $(".mono-4").css("background-color", monochromatic[4].toHexString());
    $(".mono-5").css("background-color", monochromatic[5].toHexString());
    $(".mono-text-0").text(monochromatic[0].toHexString());
    $(".mono-text-1").text(monochromatic[1].toHexString());
    $(".mono-text-2").text(monochromatic[2].toHexString());
    $(".mono-text-3").text(monochromatic[3].toHexString());
    $(".mono-text-4").text(monochromatic[4].toHexString());
    $(".mono-text-5").text(monochromatic[5].toHexString());
    
    $(".ana-0").css("background-color", analogous[0].toHexString());
    $(".ana-1").css("background-color", analogous[1].toHexString());
    $(".ana-2").css("background-color", analogous[2].toHexString());
    $(".ana-3").css("background-color", analogous[3].toHexString());
    $(".ana-4").css("background-color", analogous[4].toHexString());
    $(".ana-5").css("background-color", analogous[5].toHexString());
    $(".ana-text-0").text(analogous[0].toHexString());
    $(".ana-text-1").text(analogous[1].toHexString());
    $(".ana-text-2").text(analogous[2].toHexString());
    $(".ana-text-3").text(analogous[3].toHexString());
    $(".ana-text-4").text(analogous[4].toHexString());
    $(".ana-text-5").text(analogous[5].toHexString());
}