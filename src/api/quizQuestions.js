export var positionQuestion = {
  question: "Ets interior o exterior?",
  answers: [{
      type: ["Interior"],
      content: "Interior"
    },
    {
      type: ["Exterior"],
      content: "Exterior"
    },
  ]
};
export var interiorQuestions = [
  positionQuestion,
  {
    question: "Alçada? (respecte els interiors)",
    answers: [{
        type: ["Zoom Rize 2"],
        content: "Sóc clarament més alt que la mitja"
      },
      {
        type: ["Zoom Rize 2"],
        content: "Sóc lleugerament més alt que la mitja"
      },
      {
        type: ["Zoom Freak 2", "KD 13", "Kobe 5 Protro"],
        content: "Sóc com la mitja"
      },
      {
        type: ["Zoom Freak 2", "KD 13", "Kobe 5 Protro", "Air Jordan 35"],
        content: "Sóc lleugerament més baix que la mitja"
      },
      {
        type: ["Air Jordan"],
        content: "Sóc clarament més baix que la mitja"
      }
    ]
  },
  {
    question: "Pes? (respecte els interiors)",
    answers: [{
        type: ["Zoom Rize 2"],
        content: "Sóc clarament més pesat que la mitja"
      },
      {
        type: ["Air Jordan 35"],
        content: "Sóc lleugerament més pesat que la mitja"
      },
      {
        type: ["Kobe 5 Protro"],
        content: "Sóc com la mitja"
      },
      {
        type: ["Zoom Freak 2"],
        content: "Sóc lleugerament més lleuger que la mitja"
      },
      {
        type: ["KD 13"],
        content: "Sóc clarament més lleuger que la mitja"
      }
    ]
  },
  {
    question: "IMC o Ets un jugador robust, equilibrat o prim? (respecte els interiors)",
    answers: [{
        type: ["Air Jordan 35", "Zoom Rize"],
        content: "Sóc un jugador de complexió robusta"
      },
      {
        type: ["Zoom Rize 2"],
        content: "Sóc un jugador de complexió més aviat robusta"
      },
      {
        type: ["Zoom Freak 2", "Kobe 5 Protro"],
        content: "Sóc un jugador equilibrat"
      },
      {
        type: ["Zoom Freak 2", "KD 13"],
        content: "Sóc un jugador de complexió més aviat prima"
      },
      {
        type: ["KD 13"],
        content: "Sóc un jugador de complexió prima"
      },
    ]
  },
  {
    question: "Valora la teva capacitat de reacció/explosivitat (respecte els interiors)",
    answers: [{
        type: ["KD 13", "Air Jordan"],
        content: "Sóc un jugador explosiu, canvi-ho ràpid de velocitat"
      },
      {
        type: ["KD 13", "Kobe 5 Protro", "Zoom Freak 2"],
        content: "Sóc un jugador més aviat explosiu"
      },
      {
        type: ["Kobe 5 Protro"],
        content: "Sóc tant explosiu com la majoria dels jugadors"
      },
      {
        type: ["Zoom Rize 2"],
        content: "Sóc un jugador poc explosiu"
      },
      {
        type: ["Zoom Rize 2"],
        content: "Sóc un jugador molt poc explosiu"
      },
    ]
  },
  {
    question: "Valora la teva velocitat màxima (respecte els interiors)",
    answers: [{
        type: ["Air Jordan 35"],
        content: "Sóc un jugador molt ràpid"
      },
      {
        type: ["Kobe 5 Protro", "KD 13"],
        content: "Sóc un jugador més aviat ràpid"
      },
      {
        type: ["Zoom Freak 2", "KD 13"],
        content: "Sóc tant ràpid com la majoria de jugadors"
      },
      {
        type: ["Zoom Freak 2"],
        content: "Sóc un jugador més aviat lent"
      },
      {
        type: ["Zoom Rize 2"],
        content: "Sóc un jugador lent"
      },
    ]
  },
  {
    question: "Valora la teva força (respecte els interiors)",
    answers: [{
        type: ["Zoom Rize 2"],
        content: "Sóc un jugador molt fort"
      },
      {
        type: ["Kobe 5 Protro", "Air Jordan 35"],
        content: "Sóc un jugador més aviat fort"
      },
      {
        type: ["Kobe 5 Protro"],
        content: "Sóc un jugador tant fort com la majoria"
      },
      {
        type: ["KD 13"],
        content: "Sóc un jugador més aviat fluix"
      },
      {
        type: ["Zoom Freak 2"],
        content: "Sóc un jugador més fluix que la majoria"
      },
    ]
  },
  {
    question: "Valora el teu salt vertical (respecte els interiors)",
    answers: [

      {
        type: ["Air Jordan 35"],
        content: "Salto molt més que la mitja"
      },
      {
        type: ["Kobe 5 Protro", "Zoom Freak 2"],
        content: "Salto més que la mitja"
      },
      {
        type: ["Zoom Freak 2", "KD 13"],
        content: "Salto tant alt com la majoria"
      },
      {
        type: ["KD 13"],
        content: "Salto una mica menys que la mitja"
      },
      {
        type: ["Zoom Rize 2"],
        content: "Salto menys que la mitja"
      },
    ]
  },
  {
    question: "Valora la teva capacitat d'endur-te una pilota dividida/rebot/lluita (respecte els interiors)",
    answers: [

      {
        type: ["Zoom Rize 2"],
        content: "Sens dubte m'emporto jo la pilota"
      },

      {
        type: ["Zoom Freak 2", "KD 13"],
        content: "Normalment m'emporto jo la pilota"
      },
      {
        type: ["KD 13", "Air Jordan 35"],
        content: "Tinc les mateixes possibilitats d'emportar-me la pilota que la majoria"
      },
      {
        type: ["Air Jordan 35"],
        content: "Normalment s'emporta la pilota el contrari"
      },
      {
        type: ["Kobe 5 Protro"],
        content: "S'emportarà la pilota el contrari"

      }
    ]
  }
];
export var exteriorQuestions = [
  positionQuestion,
  {
    question: "Alçada? (respecte els exteriors)",
    answers: [{
        type: ["KD 13", "Kobe 5 Protro"],
        content: "Sóc clarament més alt que la mitja"
      },
      {
        type: ["KD 13"],
        content: "Sóc lleugerament més alt que la mitja"
      },
      {
        type: ["Air Jordan 35", "Curry 8"],
        content: "Sóc com la mitja"
      },
      {
        type: ["Zoom Freak 2"],
        content: "Sóc lleugerament més baix que la mitja"
      },
      {
        type: ["Zoom Freak 2"],
        content: "Sóc clarament més baix que la mitja"
      }
    ]
  },
  {
    question: "Pes? (respecte els exteriors)",
    answers: [{
        type: ["Kobe 5 Protro"],
        content: "Sóc clarament més pesat que la mitja"
      },
      {
        type: ["KD 13"],
        content: "Sóc lleugerament més pesat que la mitja"
      },
      {
        type: ["Zoom Freak 2", "Air Jordan 35"],
        content: "Sóc com la mitja"
      },
      {
        type: ["Zoom Freak 2"],
        content: "Sóc lleugerament més lleuger que la mitja"
      },
      {
        type: ["Curry 8"],
        content: "Sóc clarament més lleuger que la mitja"
      }
    ]
  },
  {
    question: "IMC o Ets un jugador robust, equilibrat o prim? (respecte els exteriors)",
    answers: [{
        type: ["Kobe 5 Protro", "Zoom Freak 2"],
        content: "Sóc un jugador de complexió robusta"
      },
      {
        type: ["Zoom Freak 2", "Kobe 5 Protro"],
        content: "Sóc un jugador de complexió més aviat robusta"
      },
      {
        type: ["KD 13", "Air Jordan 35"],
        content: "Sóc un jugador equilibrat"
      },
      {
        type: ["Curry 8"],
        content: "Sóc un jugador de complexió més aviat prima"
      },
      {
        type: ["Curry 8"],
        content: "Sóc un jugador de complexió prima"
      },
    ]
  },
  {
    question: "Valora la teva capacitat de reacció/explosivitat (respecte els exteriors)",
    answers: [{
        type: ["Curry 8", "Air Jordan"],
        content: "Sóc un jugador explosiu, canvi-ho ràpid de velocitat"
      },
      {
        type: ["Air Jordan"],
        content: "Sóc un jugador més aviat explosiu"
      },
      {
        type: ["Zoom Freak 2"],
        content: "Sóc tant explosiu com la majoria dels jugadors"
      },
      {
        type: ["Zoom Freak 2"],
        content: "Sóc un jugador poc explosiu"
      },
      {
        type: ["KD 13", "Kobe 5 Protro"],
        content: "Sóc un jugador molt poc explosiu"
      },
    ]
  },
  {
    question: "Valora la teva velocitat màxima (respecte els exteriors)",
    answers: [{
        type: ["Curry 8"],
        content: "Sóc un jugador molt ràpid"
      },
      {
        type: ["Air Jordan 35"],
        content: "Sóc un jugador més aviat ràpid"
      },
      {
        type: ["Zoom Freak 2", "Air Jordan 35"],
        content: "Sóc tant ràpid com la majoria de jugadors"
      },
      {
        type: ["Zoom Freak 2", "Kobe 5 Protro"],
        content: "Sóc un jugador més aviat lent"
      },
      {
        type: ["KD 13", "Kobe 5 Protro"],
        content: "Sóc un jugador lent"
      },
    ]
  },
  {
    question: "Valora la teva força (respecte els exteriors)",
    answers: [{
        type: ["KD 13", "Kobe 5 Protro"],
        content: "Sóc un jugador molt fort"
      },
      {
        type: ["KD 13", "Air Jordan 35"],
        content: "Sóc un jugador més aviat fort"
      },
      {
        type: ["Zoom Freak 2"],
        content: "Sóc un jugador tant fort com la majoria"
      },
      {
        type: ["Zoom Freak 2"],
        content: "Sóc un jugador més aviat fluix"
      },
      {
        type: ["Curry 8"],
        content: "Sóc un jugador més fluix que la majoria"
      },
    ]
  },
  {
    question: "Valora el teu salt vertical (respecte els interiors)",
    answers: [

      {
        type: ["Air Jordan 35"],
        content: "Salto molt més que la mitja"
      },
      {
        type: ["KD 13", "Curry 8"],
        content: "Salto més que la mitja"
      },
      {
        type: ["KD 13"],
        content: "Salto tant alt com la majoria"
      },
      {
        type: ["Kobe 5 Protro"],
        content: "Salto una mica menys que la mitja"
      },
      {
        type: ["Zoom Freak 2"],
        content: "Salto menys que la mitja"
      },
    ]
  },
  {
    question: "Valora la teva capacitat d'endur-te una pilota dividida/rebot/lluita (respecte els interiors)",
    answers: [

      {
        type: ["Air Jordan 35"],
        content: "Sens dubte m'emporto jo la pilota"
      },

      {
        type: ["Curry 8"],
        content: "Normalment m'emporto jo la pilota"
      },
      {
        type: ["KD 13"],
        content: "Tinc les mateixes possibilitats d'emportar-me la pilota que la majoria"
      },
      {
        type: ["Kobe 5 Protro"],
        content: "Normalment s'emporta la pilota el contrari"
      },
      {
        type: ["Kobe 5 Protro", "Zoom Freak 2"],
        content: "S'emportarà la pilota el contrari"

      }
    ]
  }
];
