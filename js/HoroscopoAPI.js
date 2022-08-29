//?LINK  DIRECCION API= https://api.adderou.cl/tyaas/
window.onload = function () {
  //! LINK PARAMETROS Y URL
  const url = "https://api.adderou.cl/tyaas/";
  const params = {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  };
  //! LINK FETCH DE FECHA
    fetchFecha = () => {
        fetch(url, params)
          .then((response) => response.json())
          .then((data) => mostrarData(data));
        let mostrarData = (data) => {
          let InnerFecha = data.titulo
          document.querySelector("#fecha").innerHTML = InnerFecha;
        };
      };
  //!  TOMA DE DATOS DESDE EL SITIO. /////
  //* LINK FETCH DE ARIES
  fetchAries = () => {
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => mostrarData(data));
    let mostrarData = (data) => {
      let InnerAries = {
        amor: data.horoscopo.aries.amor,
        salud: data.horoscopo.aries.salud,
        dinero: data.horoscopo.aries.dinero,
        color: data.horoscopo.aries.color,
        numero: data.horoscopo.aries.numero,
      };
      document.querySelector("ariesAmor").innerHTML = InnerAries.amor;
      document.querySelector("ariesSalud").innerHTML = InnerAries.salud
      document.querySelector("ariesDinero").innerHTML = InnerAries.dinero
    };
  };
  //* /////////////////////////////////////////////////////////////////////
  //* LINK FETCH DE TAURO
  fetchTauro = () => {
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => mostrarData(data));
    let mostrarData = (data) => {
      let InnerTauro = {
        amor: data.horoscopo.tauro.amor,
        salud: data.horoscopo.tauro.salud,
        dinero: data.horoscopo.tauro.dinero,
        color: data.horoscopo.tauro.color,
        numero: data.horoscopo.tauro.numero,
        fechaSigno: data.horoscopo.tauro.fechaSigno,
      };
      document.getElementById("tauroAmor").innerHTML = InnerTauro.amor;
      document.getElementById("tauroSalud").innerHTML = InnerTauro.salud;
      document.getElementById("tauroDinero").innerHTML = InnerTauro.dinero;
    };
  };
  //* /////////////////////////////////////////////////////////////////////
  //* LINK FETCH DE GEMINIS
  fetchGeminis = () => {
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => mostrarData(data));
    let mostrarData = (data) => {
      let InnerGeminis = {
        amor: data.horoscopo.geminis.amor,
        salud: data.horoscopo.geminis.salud,
        dinero: data.horoscopo.geminis.dinero,
        color: data.horoscopo.geminis.color,
        numero: data.horoscopo.geminis.numero,
      };
      document.querySelector("geminisAmor").innerHTML = InnerGeminis.amor;
      document.querySelector("geminisSalud").innerHTML = InnerGeminis.salud;
      document.querySelector("geminisDinero").innerHTML = InnerGeminis.dinero;
    };
  };
  //* ////////////////////////////////////////////////////////////////////
  //* LINK FETCH DE CANCER
  fetchCancer = () => {
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => mostrarData(data));
    let mostrarData = (data) => {
      let InnerCancer = {
        amor: data.horoscopo.cancer.amor,
        salud: data.horoscopo.cancer.salud,
        dinero: data.horoscopo.cancer.dinero,
        color: data.horoscopo.cancer.color,
        numero: data.horoscopo.cancer.numero,
      };
      document.querySelector("cancerAmor").innerHTML = InnerCancer.amor;
      document.querySelector("cancerSalud").innerHTML = InnerCancer.salud;
      document.querySelector("cancerDinero").innerHTML = InnerCancer.dinero;
    };
  };
  //* ////////////////////////////////////////////////////////////////////
  //* LINK FETCH DE LEO
  fetchLeo = () => {
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => mostrarData(data));
    let mostrarData = (data) => {
      let InnerLeo = {
        amor: data.horoscopo.leo.amor,
        salud: data.horoscopo.leo.salud,
        dinero: data.horoscopo.leo.dinero,
        color: data.horoscopo.leo.color,
        numero: data.horoscopo.leo.numero,
      };
      document.querySelector("#leoAmor").innerHTML = InnerLeo.amor;
      document.querySelector("#leoSalud").innerHTML = InnerLeo.salud;
      document.querySelector("#leoDinero").innerHTML = InnerLeo.dinero;
    };
  };
  //* ////////////////////////////////////////////////////////////////////
  //* LINK FETCH DE VIRGO
  fetchVirgo = () => {
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => mostrarData(data));
    let mostrarData = (data) => {
      let InnerVirgo = {
        amor: data.horoscopo.virgo.amor,
        salud: data.horoscopo.virgo.salud,
        dinero: data.horoscopo.virgo.dinero,
        color: data.horoscopo.virgo.color,
        numero: data.horoscopo.virgo.numero,
      };
      document.querySelector("#virgoAmor").innerHTML = InnerVirgo.amor;
      document.querySelector("#virgoSalud").innerHTML = InnerVirgo.salud;
      document.querySelector("#virgoDinero").innerHTML = InnerVirgo.dinero;
    };
  };
  //* ////////////////////////////////////////////////////////////////////
  //* LINK FETCH DE LIBRA
  fetchLibra = () => {
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => mostrarData(data))
      .catch((error) => console.log(error));
    let mostrarData = (data) => {
      let InnerLibra = {
        amor: data.horoscopo.libra.amor,
        salud: data.horoscopo.libra.salud,
        dinero: data.horoscopo.libra.dinero,
        color: data.horoscopo.libra.color,
        numero: data.horoscopo.libra.numero,
      };
      document.getElementById("libraAmor").innerHTML = InnerLibra.amor;
      document.getElementById("libraSalud").innerHTML = InnerLibra.salud;
      document.getElementById("libraDinero").innerHTML = InnerLibra.dinero;
    };
  };
  //* /////////////////////////////////////////////////////////////////////
  //* LINK FETCH DE ESCORPIO
  fetchEscorpio = () => {
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => mostrarData(data));
    let mostrarData = (data) => {
      let InnerEscorpio = {
        amor: data.horoscopo.escorpion.amor,
        salud: data.horoscopo.escorpion.salud,
        dinero: data.horoscopo.escorpion.dinero,
        color: data.horoscopo.escorpion.color,
        numero: data.horoscopo.escorpion.numero,
      };
      document.querySelector("escorpioAmor").innerHTML = InnerEscorpio.amor;
      document.querySelector("escorpioSalud").innerHTML = InnerEscorpio.salud;
      document.querySelector("escorpioDinero").innerHTML = InnerEscorpio.dinero;
    };
  };
  //* ////////////////////////////////////////////////////////////////////
  //* LINK FETCH DE SAGITARIO
  fetchSagitario = () => {
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => mostrarData(data));
    let mostrarData = (data) => {
      let InnerSagitario = {
        amor: data.horoscopo.sagitario.amor,
        salud: data.horoscopo.sagitario.salud,
        dinero: data.horoscopo.sagitario.dinero,
        color: data.horoscopo.sagitario.color,
        numero: data.horoscopo.sagitario.numero,
      };
      document.querySelector("sagitarioAmor").innerHTML = InnerSagitario.amor;
      document.querySelector("sagitarioSalud").innerHTML = InnerSagitario.salud;
      document.querySelector("sagitarioDinero").innerHTML = InnerSagitario.dinero;
    };
  };
  //* ////////////////////////////////////////////////////////////////////
  //* LINK FETCH DE CAPRICORNIO
  fetchCapricornio = () => {
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => mostrarData(data));
    let mostrarData = (data) => {
      let InnerCapricornio = {
        amor: data.horoscopo.capricornio.amor,
        salud: data.horoscopo.capricornio.salud,
        dinero: data.horoscopo.capricornio.dinero,
        color: data.horoscopo.capricornio.color,
        numero: data.horoscopo.capricornio.numero,
      };
      document.querySelector("capricornioAmor").innerHTML = InnerCapricornio.amor;
      document.querySelector("capricornioSalud").innerHTML = InnerCapricornio.salud;
      document.querySelector("capricornioDinero").innerHTML = InnerCapricornio.dinero;

    };
  };
  //* ////////////////////////////////////////////////////////////////////
  //* LINK FETCH DE ACUARIO
  fetchAcuario = () => {
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => mostrarData(data));
    let mostrarData = (data) => {
      let InnerAcuario = {
        amor: data.horoscopo.acuario.amor,
        salud: data.horoscopo.acuario.salud,
        dinero: data.horoscopo.acuario.dinero,
        color: data.horoscopo.acuario.color,
        numero: data.horoscopo.acuario.numero,
      };
      document.querySelector("acuarioAmor").innerHTML = InnerAcuario.amor;
      document.querySelector("acuarioSalud").innerHTML = InnerAcuario.salud;
      document.querySelector("acuarioDinero").innerHTML = InnerAcuario.dinero;
    };
  };
  //* ////////////////////////////////////////////////////////////////////
    //* LINK FETCH DE PISCIS
    fetchPiscis = () => {
        fetch(url, params)
          .then((response) => response.json())
          .then((data) => mostrarData(data));
        let mostrarData = (data) => {
          let InnerPiscis = {
            amor: data.horoscopo.piscis.amor,
            salud: data.horoscopo.piscis.salud,
            dinero: data.horoscopo.piscis.dinero,
            color: data.horoscopo.piscis.color,
            numero: data.horoscopo.piscis.numero,
          };
          document.querySelector("piscisAmor").innerHTML = InnerPiscis.amor;
          document.querySelector("piscisSalud").innerHTML = InnerPiscis.salud;
          document.querySelector("piscisDinero").innerHTML = InnerPiscis.dinero;
        };
      };
      //* ////////////////////////////////////////////////////////////////////
  fetchAries();
  fetchTauro();
  fetchGeminis();
  fetchCancer();
  fetchLeo();
  fetchVirgo();
  fetchLibra();
  fetchEscorpio();
  fetchSagitario();
  fetchCapricornio();
  fetchAcuario();
  fetchPiscis();
  fetchFecha();
};
