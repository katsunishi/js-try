const quiz = [
  {
    question: "IDEA史上、最もイケてるのは？",
    answers: ["しゅーさん", "みなみさん", "たいよー", "こだまさん"],
    correct: "こだまさん",
  },
  {
    question: "IDEAで一番かわいいのは？",
    answers: ["あつしさん", "ひろむくん", "たいよー", "こだまさん"],
    correct: "こだまさん",
  },
  {
    question: "IDEAで一番敬意を表すべきお方は？",
    answers: ["こだまさん", "こだまさん", "こだまさん", "こだまさん"],
    correct: "こだまさん",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

//答えと次の問題へ
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("当たり前だよなあ？？？");
    score++;
  } else {
    window.alert("うんち！");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数があれば実行
    setupQuiz();
  } else {
    //問題数がなければ実行
    window.alert(
      "終了！あなたの正解数は" + score + "/" + quizLength + "です！"
    );
  }
};

//ボタンクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
