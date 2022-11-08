const btn = document.querySelectorAll(`.Event`);
const input = document.querySelector(`input`);
const div = document.querySelector(`div`);
let NewGame;
function Random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function It4ever() {
  const btn1 = document.createElement(`button`);
  btn1.className = `Event`;
  const btn2 = document.createElement(`button`);
  btn2.className = `Event`;
  const btn3 = document.createElement(`button`);
  btn3.className = `Event`;
  div.innerHTML = ``;
  div.append(btn1);
  div.append(btn2);
  div.append(btn3);

  btn1.innerHTML = `Атаковать`;
  btn2.innerHTML = `Обнять`;
  btn3.innerText = `Трахнуть`;
  btn1.addEventListener(`click`, () => {
    NewGame.Attack();
    const btn4 = document.createElement(`button`);
    btn4.className = `Event`;
    const btn5 = document.createElement(`button`);
    btn5.className = `Event`;
    div.innerHTML = ``;
    btn4.innerText = `Использовать козырь`;
    btn5.innerText = `Стать рабом`;
    div.append(btn4);
    div.append(btn5);
    btn4.addEventListener(`click`, () => {
      NewGame.Bosit();
    });
    btn5.addEventListener(`click`, () => {
      NewGame.Slave();
    });
  });
  btn2.addEventListener(`click`, () => {
    NewGame.Hug();
    div.innerText = ``;
  });
  btn3.addEventListener(`click`, () => {
    NewGame.Fuck(Random(0, 1));
    div.innerText = ``;
  });
}
class Game {
  constructor(name) {
    if (
      name.toLocaleLowerCase() == `Alex`.toLocaleLowerCase() ||
      name.toLocaleLowerCase().includes(`Alish`.toLocaleLowerCase()) ||
      name.toLocaleLowerCase().includes(`Али`.toLocaleLowerCase()) ||
      name.toLocaleLowerCase() == `Clown`.toLocaleLowerCase()
    ) {
      return alert(`Вы метрвы. Вас отпиздил Босит`);
    } else if (name == `` || name % 10 || name % 10 == 0) {
      return alert(`Введите своё имя!!!`);
    } else {
      this.name = name;
      alert(`Мы вам рады ${this.name}`);
    }
    alert(
      `У вас два выбора пути. Пойти к старой бабке или же пойти на урок ИТ. Куда же вы пойдёте?`
    );
  }
  IT() {
    alert(`Вы встретили Алиша`);
    alert(`Теперь выберите действие которое вы хотите совершить`);
    alert(`Атаковать или Обнять или Трахнуть (шанс Перепихона 1/2)`);
  }
  OldBabka() {
    alert(`Поздравляем вас угостили пирожками`);
    alert(`Но от ИТ не сбежишь`);
    this.IT();
  }

  Attack() {
    alert(`Алиш на вас дыхнул и вы ослепли`);
    alert(`Вы нихуя не видите`);
    alert(`Хотите ли вы воспользоваться козырем?`);
    alert(`Или стать его рабом?`);
  }
  Bosit() {
    alert(`Вы призвали Босита`);
    alert(`Алишер напал на Босита`);
    alert(`Пока Алишер его пиздил вы смылись`);
    alert(`Вам это удалось`);
    return alert(`Это победа!!!`);
  }
  Hug() {
    alert(`Вы его обняли и он заплакал`);
    return alert(`Это победа!!!`);
  }
  Fuck(number) {
    if (number) {
      alert(`Вам это удалось`);
      alert(`18+`);
      alert(`Проходит 9 месяцев`);
      alert(`У вас рождается сын`);
      alert(`Он начинает учить Питон`);
    } else {
      alert(`Вас больше никто не видел`);
      return alert(`Игра окончена!`);
    }
  }
  Slave() {
    alert(`Вы больше никогда не видели света`);
    return alert(`Игра окончена!`);
  }
}
input.addEventListener("keydown", (e) => {
  if (e.key === `Enter`) {
    let onix = e.target.value;
    if (
      onix.toLocaleLowerCase() == `Alex`.toLocaleLowerCase() ||
      onix.toLocaleLowerCase().includes(`Alish`.toLocaleLowerCase()) ||
      onix.toLocaleLowerCase().includes(`Али`.toLocaleLowerCase()) ||
      onix.toLocaleLowerCase() == `Clown`.toLocaleLowerCase() ||
      onix == `` ||
      onix % 10 ||
      onix % 10 == 0
    ) {
      btn[0].innerHTML = ``;
      btn[1].innerHTML = ``;
      NewGame = new Game(onix);
    } else {
      NewGame = new Game(onix);
      btn[0].innerHTML = `урок ИТ`;
      btn[0].addEventListener(`click`, () => {
        NewGame.IT();
        It4ever(NewGame);
      });
      btn[1].innerHTML = `Старая бабка`;
      btn[1].addEventListener(`click`, () => {
        NewGame.OldBabka();
        It4ever();
      });
    }
  }
});
