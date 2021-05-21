//2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)
//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа


var event, ok;

var answers = [];

do { //Выводим первый вопрос
    ok = false; // т.к. игрок должен ввести число обязательно
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры'); // получаем ответ нашего игрока, так мы заполняем                                                                      // наш объект
   
    if (event == -1) { // если игрок нажал -1 - выходим из игры
        break;
    } else {
        ok = isAnswer(works.a0, event); // если игрок ввел не (-1), вызываем функцию, кот-ая проверяет введенные значения на корректность
    }                                   // works.a0 - кол-во вариантов ответа
   

} while (!ok);  // если ок - true, значит выходим из цикла, 
                // так как он работает пока наша переменная равна false (т.к. это 
                // просто проверка на корректность введенных данных, пока ок фолс, цикл продолжается)

getMasAnswer(answers, event);

switch (event) {          // проверяем ответ игрока
    case 1:               // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {              // также проверяем ответ на корректность данных, как и в первом примере через цикл 
            ok = false;   // и вызов функции, только меняется объект на b
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);



        switch (event) {
            case 1: 
            case 2: // Второе действие. Если ввели 1 и 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);



                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

var result = prompt("Если хотите вернуться к одному из окон и посмотреть свой ответ, введите номер окна: " + " " + works.a3 + ", " + works.b3 + ", " 
+ works.c3 + ", " + works.d3 + ", " + ' -1 - Выход из игры');

 switch (result) {
 	case '1': 
          alert(works.a00 + works.a1 + works.a2 + "\n Ваш ответ: " + answers[0]);
          break; 
   case '2': 
          alert(works.b00 + works.b1 + works.b2 + "\n Ваш ответ: " + answers[0]);
          break; 
   case '3': 
          alert(works.c00 + works.c1 + works.c2 + "\n Ваш ответ: " + answers[0]);
          break;  
   case '4': 
          alert(works.d00 + works.d1 + works.d2 + "\n Ваш ответ: " + answers[0]);
          break;
   case '-1': 
          alert("Спасибо за игру! До свидания!");
          break;
}


//------------------------------------------
function isAnswer(q, event) {                       // q - сколько вариантов ответа (2), event - ответ игрока,
    if (isNaN(event) || !isFinite(event)) {         // функция проверяет ответ игрока на введенное значение, 
        alert('Вы ввели недопустимый символ');      //если ввел не число, выведем алерт, функция вернет ложь
        return false;                               // если функция возвращает ложь, то переходим к самому началу,
                                                    // где игрок должен вести число
    } else if (event < 1 || event > q) {            // если ответ меньше одного или больше 2, так как q - это a0,
        alert('Ваше число выходит из допустимого диапозона');// выводим алерт и возвращаем тоже ложь
        return false;
    } else if (event > 1 || event <= q) 
    	  return true; // если ответ корректный, ответу присвоили true (истину), значит ОК равен либо true, либо false
    }
    

function getMasAnswer(answers, event) {
   answers.push(event);
}






