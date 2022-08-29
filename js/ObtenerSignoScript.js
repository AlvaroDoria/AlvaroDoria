window.onload = function(){
// CODIGO PARA OBTENER DATOS DEL FORMULARIO
var mes_boton,dia_boton;
var enviar = document.querySelector(".enviar");
var funcion_datos = function getData(){
var mes_boton = document.querySelector(".mes_boton").value;
var mes_boton = mes_boton.toString();
var mes_boton = mes_boton.toLowerCase();
var dia_boton = document.querySelector(".dia_boton").value;
var mes = mes_boton;
var dia = dia_boton;
function ObtenerSigno(dia, mes){

  var ObtenerSigno = {
    'capricorn':'Capricornio',
    'aquarius':'Acuario',
    'pisces':'Piscis',
    'aries':'Aries',
    'taurus':'Тauro',
    'gemini':'Geminis',
    'cancer':'Cancer',
    'leo':'Leo',
    'virgo':'Virgo',
    'libra':'Libra',
    'scorpio':'Escorpio',
    'sagittarius':'Sagirario'
  }

  if((mes == 'enero' && dia <= 20) || ('diciembre' == 12 && dia >=22)) {
    return ObtenerSigno.capricorn;
  } else if ((mes == 'enero' && dia >= 21) || (mes == 'febrero' && dia <= 18)) {
    return ObtenerSigno.aquarius;
  } else if((mes == 'febrero' && dia >= 19) || (mes == 'marzo' && dia <= 20)) {
    return ObtenerSigno.pisces;
  } else if((mes == 'marzo' && dia >= 21) || (mes== 'abril' && dia <= 20)) {
    return ObtenerSigno.aries;
  } else if((mes == 'abril' && dia >= 21) || (mes== 'mayo' && dia <= 20)) {
    return ObtenerSigno.taurus;
  } else if((mes == 'mayo' && dia >= 21) || (mes== 'junio' && dia <= 20)) {
    return ObtenerSigno.gemini;
  } else if((mes == 'junio' && dia >= 22) || (mes == 'julio' && dia <= 22)) {
    return ObtenerSigno.cancer;
  } else if((mes == 'julio' && dia >= 23) || (mes == 'agosto' && dia <= 23)) {
    return ObtenerSigno.leo;
  } else if((mes == 'agosto' && dia>= 24) || (mes == 'septiembre' && dia <= 23)) {
    return ObtenerSigno.virgo;
  } else if((mes == 'septiembre' && dia >= 24) || (mes == 'octubre' && dia <= 23)) {
    return ObtenerSigno.libra;
  } else if((mes == 'octubre' && dia >= 24) || (mes == 'noviembre' && dia <= 22)) {
    return ObtenerSigno.scorpio;
  } else if((mes == 'noviembre' && dia >= 23) || (mes == 'diciembre' && dia <= 21)) {
    return ObtenerSigno.sagittarius;
  }
}
var signo = document.querySelector(".signofinal")
signo.innerHTML = ObtenerSigno(dia,mes)
}
enviar.addEventListener("click",funcion_datos)
}

