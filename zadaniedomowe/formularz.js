var ellogin = document.getElementById('login');
var elhaslo = document.getElementById('haslo');
var elkolor = document.getElementById('kolor');

var tab = [];


function zapisz(){
    
    tab[0] = ellogin.value.fontcolor("#" + elkolor.value);
    tab[1] = elhaslo.value.fontcolor("#" + elkolor.value);
    tab[2] = elkolor.value.fontcolor("#" + elkolor.value);
    console.log(tab);
    document.write(tab);
};
