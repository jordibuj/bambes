export var positionQuestion = {
  question: "Interior o exterior?",
  answers: [
    {
      type: ["Interior"],
      content: "Interior",
    },
    {
      type: ["Exterior"],
      content: "Exterior",
    },
  ]
};

export var interiorQuestions = [
  positionQuestion,
  {
      question: "Alçada?",
      answers: [
          {
              type: ["Nike", "Jordan"],
              content: "Menys d'1.60"
          },
          {
              type: ["Jordan"],
              content: "Entre 1.60 i 1.70"
          },
          {
              type: ["Adidas"],
              content: "Entre 1.70 i 1.80"
          },
          {
              type: ["Converse"],
              content: "Entre 1.80 i 1.90"
          },
          {
              type: ["Puma"],
              content: "Més d'1.90"
          }
      ]
  },
  {
      question: "Pes?",
      answers: [
          {
              type: ["Nike"],
              content: "Menys de 60kg"
          },
          {
              type: ["Jordan"],
              content: "Entre 60 i 70kg"
          },
          {
              type: ["Adidas"],
              content: "Entre 70 i 80kg"
          },
          {
              type: ["Converse"],
              content: "Entre 80 i 90kg"
          },
          {
              type: ["Puma"],
              content: "Més de 90kg"
          },
      ]
  }
];

export var exteriorQuestions = [
  positionQuestion,
  {
      question: "Posició?",
      answers: [
          {
              type: ["Nike"],
              content: "Base"
          },
          {
              type: ["Jordan"],
              content: "Escorta"
          },
          {
              type: ["Adidas"],
              content: "Aler"
          },
          {
              type: ["Converse"],
              content: "Aler-pivot"
          },
          {
              type: ["Puma"],
              content: "Pivot"
          },
      ]
  },
  {
      question: "Tipus de jugador?",
      answers: [
          {
              type: ["Nike"],
              content: "Explosiu"
          },
          {
              type: ["Jordan"],
              content: "Cerebral"
          },
          {
              type: ["Adidas"],
              content: "Atlètic"
          },
          {
              type: ["Converse"],
              content: "Físic"
          },
          {
              type: ["Puma"],
              content: "Totxo"
          }
      ]
  }
];
