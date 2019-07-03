"use strict";

var scenario = [{
  introText: {
    'et': 'Tähelepanu! Ees on töötuselaine! Mul naabrimees juba mitu kuud ilma tööta...',
    'en': 'Look out! A wave of unemployment is approaching. My neighbour has been out of a job for some months...',
    'ru': 'Внимание! Впереди грядет волна безработицы! Мой сосед тоже уже пару месяцев сидит без работы...'
  },
  accelerate: {
    result: 'continue',
    text: {
      'et': 'Hea otsus! Annad majandusele hoogu juurde ja inimesed saavad tööle tagasi!',
      'en': 'You gave the economy an extra boost. Excellent, good job! Workers can get their jobs back and the shops are open.',
      'ru': 'Отличное решение! Вы дали стимул экономике, и трудящиеся смогут вернуться на работу!'
    },
    drive: false
  },
  ignore: {
    result: 'end',
    text: {
      'et': 'Midagi peaks ikka tegema, et majandus taas kasvama hakkaks.',
      'en': 'There was already too little money in the economy and you tightened the flow of money even further!',
      'ru': 'Нужно было что-то предпринять, чтобы экономика могла вновь разогнаться.'
    },
    drive: true,
    carHidden: true
  },
  decelerate: {
    result: 'end',
    text: {
      'et': 'Halb otsus! Majanduses on niigi vähe raha ja sina tõmbad seda veelgi koomale!',
      'en': 'There was already too little money in the economy and you tightened the flow of money even further!',
      'ru': 'Плохое решение! В экономике и так не хватало денег, а вы еще больше стянули денежный оборот!'
    },
    drive: false,
    carHidden: true
  }
}, {
  introText: {
    'et': 'Tähelepanu! Pangad annavad kergekäeliselt madala intressimääraga laene. Ostan ise ka ühe korteri juurde!',
    'en': 'Look out! The banks are giving loans with low interest rates really easily. I can buy myself another apartment!',
    'ru': 'Внимание! Банки легкомысленно раздают кредиты под низкие проценты! Я тоже, пожалуй, прикуплю себе еще одну квартиру!'
  },
  accelerate: {
    result: 'end',
    text: {
      'et': 'Halb otsus! Kinnisvaramull lõhkeb ja inimesed ei suuda laenu tagasi maksta.',
      'en': 'The real estate bubble burst! People had no money to repay their loans with.',
      'ru': 'Плохое решение! «Пузырь» на рынке недвижимости лопнул и люди не могут выплачивать свои кредиты.'
    },
    drive: true
  },
  ignore: {
    result: 'end',
    text: {
      'et': 'Midagi peaks ikka tegema. Praegu aitad kaasa kinnisvaramulli lõhkemisele.',
      'en': 'The real estate bubble burst! People had no money to repay their loans with.',
      'ru': 'Нужно было что-то предпринять. Сейчас вы делаете всё, чтобы «пузырь» на рынке недвижимости лопнул.'
    },
    drive: true
  },
  decelerate: {
    result: 'continue',
    text: {
      'et': 'Hea otsus! Hoiad buumi vaos!',
      'en': 'Excellent, good job! You kept the boom under control.',
      'ru': 'Отличное решение! Вы обуздали бум!'
    },
    drive: true
  }
}, {
  introText: {
    'et': 'Tähelepanu! Riik on hakanud elama välislaenudest. Püsikulutused on suurenenud ja kuskilt peab see raha ju tulema!',
    'en': 'Look out! The government has started to live on foreign loans. Its spending costs have increased, but the money has to come from somewhere.',
    'ru': 'Внимание! Государство живет за счет кредитов! Выросли регулярные расходы, откуда-то же должны поступать эти деньги.'
  },
  accelerate: {
    result: 'end',
    text: {
      'et': 'Halb otsus! Riik elab niigi üle oma võimete ja sina annad laenamisele veel hoogu juurde!',
      'en': 'The government was already living beyond its means and you encouraged it to borrow even more!',
      'ru': 'Плохое решение! Страна и так жила не по средствам, а вы побуждаете брать еще больше кредитов!'
    },
    drive: true,
    carHidden: true
  },
  ignore: {
    result: 'warning',
    text: {
      'et': 'Oli tore sõit, aga nüüd tuleb selle lusti eest maksta. Tasu teetollimaks!',
      'en': 'Toll booth! The journey was fun, but now it has to be paid for...',
      'ru': 'Ну вот, приехали! Теперь придется платить за удовольствие… Платите дорожный налог!'
    },
    drive: true
  },
  decelerate: {
    result: 'continue',
    text: {
      'et': 'Hea otsus! Kulutada tuleb mõistlikult!',
      'en': 'Very good, spending has to be reasonable.',
      'ru': 'Отличное решение! Тратить нужно с умом!'
    },
    drive: true
  }
}, {
  introText: {
    'et': 'Tähelepanu! Suhkru hind tõuseb!',
    'en': 'Look out! The price of sugar is rising.',
    'ru': 'Внимание! Повышаются цены на сахар!'
  },
  accelerate: {
    result: 'warning',
    text: {
      'et': 'Pigem halb otsus! Ole ettevaatlik, nii võivad tõusta ka teised hinnad.',
      'en': 'Careful, that could raise other prices too.',
      'ru': 'Похоже, что это плохое решение! Поаккуратнее, так могут повыситься цены и на другие товары!'
    },
    carHidden: true
  },
  ignore: {
    result: 'continue',
    text: {
      'et': 'Hea otsus! Tegemist on ainult ühe hinna ajutise tõusuga, pole põhjust paanikaks.',
      'en': 'Correct! It is only a temporary rise in one price, no need to panic.',
      'ru': 'Отличное решение! это просто временное повышение цен на один товар, нет причин для паники.'
    },
    drive: true
  },
  decelerate: {
    result: 'end',
    text: {
      'et': 'Väga halb otsus! Importsuhkru hind on laes, aga saia ei saa kallimalt müüa. Pagarid on maruvihased!',
      'en': 'Bad idea! The price of imported sugar remains high, but the price of cake cannot be raised. Bakers are furious!',
      'ru': 'Очень скверное решение! Стоимость импортного сахара взлетела до небес, а продавать булку по более высокой цене нельзя. Пекари просто в ярости!'
    }
  }
}, {
  introText: {
    'et': 'Usalduskriis panganduses! Vanasti sai kogu aeg laenu, nüüd tahan uut pesumasinat osta, aga raha selleks keegi ei anna…',
    'en': 'A crisis of confidence in banking! I was always able to get a loan before, but now I want a new washing machine but nobody will lend me any money for it...',
    'ru': 'Кризис доверия в банковской системе! Раньше всё время давали кредиты, а тут захотел купить новую стиральную машину, так никто не дает кредит...'
  },
  accelerate: {
    result: 'continue',
    text: {
      'et': 'Hea otsus! Annad pangandusse raha juurde, usaldus taastub ja laenusaamine muutub taas võimalikuks.',
      'en': 'You put extra money in the banking system, trust gradually returns and the bankers become more confident.',
      'ru': 'Отличное решение! Вы добавили денег в банковскую систему, доверие восстанавливается, и получение кредитов опять стало возможным.'
    },
    drive: true
  },
  ignore: {
    result: 'warning',
    text: {
      'et': '<br />Midagi peaks ikka tegema, et pangandus taas toimima hakkaks.',
      'en': 'You should probably have done something. Cases like this need someone to step in to get the banking system back to work.',
      'ru': 'Нужно было что-то предпринять, чтобы банковская система вновь заработала.'
    },
    showDash: true
  },
  decelerate: {
    result: 'end',
    text: {
      'et': 'Väga halb otsus! Nii lähevad pangad pankrotti, sest panganduses pole vaba raha.',
      'en': 'Very bad decision! This is precisely how to make the banks go bankrupt.',
      'ru': 'Отличное решение! Так банки обанкротятся, поскольку в банковской системе нет свободных денег.'
    },
    drive: true
  }
}];
var gameStarted = false,
    overlay = document.querySelector('.map-reader-overlay'),
    overlayContent = document.querySelector('.map-reader-overlay-content'),
    okButton = overlay.querySelector('.map-reader-ok'),
    road = document.querySelector('.road'),
    car = document.querySelector('.layer-car'),
    exhaust = document.querySelector('.exhaust'),
    accelerateButton = document.querySelector('.button-accelerate'),
    ignoreButton = document.querySelector('.button-ignore'),
    decelerateButton = document.querySelector('.button-decelerate'),
    controls = document.querySelector('.layer-controls'),
    retryButton = document.querySelector('.game-over-retry'),
    continueButton = document.querySelector('.success-overlay .ok-button'),
    warningContinueButton = document.querySelector('.warning-overlay .ok-button'),
    currentStage = 0,
    warnings = 0,
    warningGameOverTexts = {
  'et': 'Üks vale otsus pole alati maailma lõpp, ent kolm korda keskpäraselt otsustades jõuab ikkagi sohu!',
  'en': 'One wrong choice is not always the end, but three mediocre solutions will add up to a disaster!',
  'ru': 'Одно плохое решение не обязательно конец, но после трёх ошибок всё-таки будет беда!'
},
    outroTexts = {
  'et': 'Nonii. Kell on viis ja minu tööpäev sai läbi. Proovi nüüd ise, mis tunne on majandust prognoosida. Ja tegelik elu on ikka veel palju keerulisem!',
  'en': 'Ok, it\'s 5 o\'clock and my shift is over, now it\'s your turn: see what it feels like to make predictions. Remember, reality is always more complex than any game!',
  'ru': 'Моя смена заканчивается в 5. Теперь попробуй прогнозировать экономику сам. Помни - реальность всегда гораздо сложнее чем симуляция!'
},
    startTexts = {
  'et': 'Asu keskpankuri rolli ja juhi rahapoliitikat. Keskpankur saab tõsta või langetada intressimäära ehk raha hinda ning sellega majandust pidurdada või hoogu juurde anda. Jälgi majandust ja vali õige lahendus.',
  'en': 'Be a central banker and run monetary policy! Central bankers make monetary policy by raising and lowering interest rates, which set the price of money. Watch the economy and choose the best solution.',
  'ru': 'Игра позволяет вжиться в роль центрального банкира и управлять денежно-кредитной политикой государства. Центральный банкир может понижать или повышать процентные ставки, то есть стоимость денег, и таким образом тормозить или разгонять экономику. Отслеживаете экономический климат и принимайте верное решение.'
},
    outro = document.querySelector('.outro'),
    getOut = outro.querySelector('.exitcar'),
    startDriving = outro.querySelector('.startdriving'),
    darkerBg = outro.querySelector('.darker'),
    darkerCar = outro.querySelector('.car-darker'),
    rain = outro.querySelector('.rain'),
    voices = outro.querySelector('.voices'),
    animal = outro.querySelector('.animal'),
    outroOverlay = outro.querySelector('.outro-overlay'),
    homeButton = document.querySelector('.home-button'),
    gameElement = document.querySelector('.game'),
    startScreen = document.querySelector('.presentation'),
    presentationButtons = startScreen.querySelectorAll('button'),
    presentationOverlay = startScreen.querySelector('.presentation-overlay'),
    langButtons = document.querySelectorAll('.lang-button'),
    currentLanguage = 'et',
    inputTimeoutTime = 3 * 60 * 1000,
    inputTimeout;

var hideOverlay = function hideOverlay() {
  overlay.classList.remove('visible');
};

var showOverlay = function showOverlay() {
  overlay.classList.add('visible');
};

var playOnce = function playOnce(element, callback) {
  var eventType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'animationend';
  var action = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : playAnimation;

  var afterAnimate = function afterAnimate(event) {
    event.target.removeEventListener(event.type, afterAnimate);
    element.classList.add('ended');

    if (callback) {
      callback(event);
    }
  };

  element.addEventListener(eventType, afterAnimate);
  action(element);
};

var playAnimation = function playAnimation(element) {
  element.classList.add('animated');
};

var stopAnimation = function stopAnimation(element) {
  element.classList.remove('animated');
};

var afterFirstIteration = function afterFirstIteration(element, callback) {
  playOnce(element, callback, 'animationiteration', playAnimation);
};

var showElement = function showElement(element) {
  element.classList.add('visible');
};

var hideElement = function hideElement(element) {
  element.classList.remove('visible');
  stopAnimation(element);
};

var startCar = function startCar() {
  playAnimation(road);
  playAnimation(exhaust);
  showElement(exhaust);
};

var stopCar = function stopCar() {
  stopAnimation(road);
  stopAnimation(exhaust);
  hideElement(exhaust);
};

var showText = function showText(text) {
  var _long = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  overlayContent.innerHTML = text;
  overlay.classList.toggle('long-text', _long);
  showOverlay();
};

var showIntro = function showIntro(index, callback) {
  var stage = document.querySelector(".stage-".concat(index)),
      intro = stage.querySelector(':scope > .intro');
  showElement(stage);
  showElement(intro);
  playOnce(intro, function () {
    stopAnimation(intro);
    stopCar();
    var loop = stage.querySelector(':scope > .loop');

    if (loop) {
      afterFirstIteration(loop, callback);
      showElement(loop);
    } else {
      if (callback) {
        callback();
      }
    }
  });
};

var showStage = function showStage(index) {
  if (index > 0) {
    clearElement(document.querySelector(".stage-".concat(index - 1)));
  }

  hideElement(document.querySelector('.game-over-overlay'));
  hideElement(document.querySelector('.success-overlay'));
  hideElement(document.querySelector('.warning-overlay'));
  showElement(car);
  startCar();
  showIntro(index, function () {
    unlockControls(function () {
      showText(scenario[index].introText[currentLanguage]);
    });
  });
};

var lockControls = function lockControls() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  playOnce(controls, callback, 'transitionend', hideElement);
};

var unlockControls = function unlockControls() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  playOnce(controls, callback, 'transitionend', showElement);
};

var hideStage = function hideStage(index) {
  var stage = document.querySelector(".stage-".concat(index)),
      intro = stage.querySelector(':scope > .intro'),
      loop = stage.querySelector(':scope > .loop');
  hideElement(intro);

  if (loop) {
    hideElement(loop);
    stopAnimation(loop);
  }
};

var showResultText = function showResultText(result, text) {
  var overlay;

  if (result == 'end') {
    overlay = document.querySelector('.game-over-overlay');
  } else if (result == 'continue') {
    overlay = document.querySelector('.success-overlay');
  } else if (result == 'warning') {
    overlay = document.querySelector('.warning-overlay');
  }

  showElement(continueButton);
  showElement(warningContinueButton);
  overlay.querySelector('.content').innerHTML = text;
  showElement(overlay);
};

var showResult = function showResult(stageIndex, action) {
  var layer = document.querySelector(".stage-".concat(stageIndex, " .").concat(action)),
      animatable,
      loop;
  hideStage(stageIndex);

  if (layer.children.length == 0) {
    animatable = layer;
  } else {
    animatable = layer.querySelector('.intro');
    loop = layer.querySelector('.loop');
  }

  showElement(layer);
  showElement(animatable);

  if (scenario[stageIndex][action].carHidden) {
    hideElement(car);
  }

  if (scenario[stageIndex][action].drive) {
    startCar();
  }

  playOnce(animatable, function () {
    stopAnimation(animatable);
    var result = scenario[stageIndex][action].result,
        text = scenario[stageIndex][action].text[currentLanguage];

    if (loop) {
      afterFirstIteration(loop, function () {
        showResultText(result, text);
      });
      showElement(loop);
    } else {
      if (scenario[currentStage][action].showDash) {
        lockControls(function () {
          showResultText(result, text);
        });
      } else {
        showResultText(result, text);
      }
    }

    stopCar();
  });
};

var clearElement = function clearElement(element) {
  if (element.classList) {
    element.classList.remove('animated');
    element.classList.remove('ended');
    element.classList.remove('visible');
  }

  if (element.children && element.children.length > 0) {
    Array.prototype.forEach.call(element.children, clearElement);
  }
};

var restartStage = function restartStage(index) {
  var stage = document.querySelector(".stage-".concat(index));
  warnings = 0;
  clearElement(stage);
  showStage(index);
};

var doAction = function doAction(action) {
  hideOverlay();

  if (scenario[currentStage][action].showDash) {
    showResult(currentStage, action);
  } else {
    lockControls(function () {
      showResult(currentStage, action);
    });
  }
};

var playOutroPart1 = function playOutroPart1() {
  hideElement(document.querySelector('.success-overlay'));
  showElement(outro);
  showElement(getOut);
  playOnce(getOut, function () {
    showText(outroTexts[currentLanguage]);
    showElement(okButton);
  });
};

var playOutroPart2 = function playOutroPart2() {
  hideOverlay();
  hideElement(getOut);
  startCar();
  showElement(startDriving);
  playOnce(startDriving, function () {
    hideElement(car);
    showElement(darkerBg);
    showElement(darkerCar);
    playOnce(darkerBg);
    playOnce(darkerCar, function () {
      showElement(rain);
      playAnimation(rain);
      showElement(animal);
      playOnce(animal, function () {
        /*showElement(voices);
        playOnce(voices, () => {
            showElement(outroOverlay);
            playOnce(outroOverlay, () => {
                goToStartScreen();
            });
        });*/
        showElement(outroOverlay);
        playOnce(outroOverlay, function () {
          goToStartScreen();
        });
      });
    });
  });
};

var restartGame = function restartGame() {
  gameStarted = false;
  currentStage = 0;
  clearElement(gameElement);
  showText(startTexts[currentLanguage], true);
  showElement(okButton);
  showElement(gameElement);
};

var goToStartScreen = function goToStartScreen() {
  restartGame();
  hideElement(gameElement);
  showElement(startScreen);
};

var presentationButtonClick = function presentationButtonClick(event) {
  var target = event.currentTarget;

  if (target.classList.contains('start-game')) {
    startGame();
  } else if (target.hasAttribute("data-text-".concat(currentLanguage))) {
    showPresentationOverlay(target.getAttribute("data-text-".concat(currentLanguage)));
  }
};

var startGame = function startGame() {
  hideElement(startScreen);
  restartGame();
  showElement(gameElement);
};

var showPresentationOverlay = function showPresentationOverlay(text) {
  presentationOverlay.innerHTML = text;
  showElement(presentationOverlay);
};

var switchLanguage = function switchLanguage(event) {
  var target = event.target;

  if (target.classList.contains('est')) {
    currentLanguage = 'et';
  } else if (target.classList.contains('eng')) {
    currentLanguage = 'en';
  } else {
    currentLanguage = 'ru';
  }

  document.documentElement.setAttribute('lang', currentLanguage);
  goToStartScreen();
};

okButton.addEventListener('click', function (event) {
  if (gameStarted) {
    playOutroPart2();
  } else {
    hideOverlay();
    var startGate = document.querySelector('.start');
    showElement(startGate);
    showElement(car);
    startCar();
    playOnce(startGate, function (event) {
      stopAnimation(startGate);
      hideElement(startGate);
      showStage(currentStage);
    });
    gameStarted = true;
    hideElement(okButton);
  }
});
accelerateButton.addEventListener('click', function () {
  doAction('accelerate');
});
ignoreButton.addEventListener('click', function () {
  doAction('ignore');
});
decelerateButton.addEventListener('click', function () {
  doAction('decelerate');
});
retryButton.addEventListener('click', function () {
  hideElement(document.querySelector('.game-over-overlay'));
  restartStage(currentStage);
});
continueButton.addEventListener('click', function () {
  currentStage++;

  if (currentStage >= scenario.length) {
    playOutroPart1();
  } else {
    showStage(currentStage);
  }
});
warningContinueButton.addEventListener('click', function () {
  warnings++;

  if (warnings > 2) {
    hideElement(document.querySelector('.warning-overlay'));
    showResultText('end', warningGameOverTexts[currentLanguage]);
  } else {
    currentStage++;

    if (currentStage >= scenario.length) {
      hideElement(document.querySelector('.warning-overlay'));
      playOutroPart1();
    } else {
      showStage(currentStage);
    }
  }
});
homeButton.addEventListener('click', function () {
  goToStartScreen();
});
Array.prototype.forEach.call(presentationButtons, function (item, index, array) {
  item.addEventListener('click', presentationButtonClick);
});
presentationOverlay.addEventListener('click', function () {
  hideElement(presentationOverlay);
});
Array.prototype.forEach.call(langButtons, function (item) {
  item.addEventListener('click', switchLanguage);
});
document.documentElement.addEventListener('click', function () {
  window.clearTimeout(inputTimeout);
  inputTimeout = window.setTimeout(goToStartScreen, inputTimeoutTime);
});