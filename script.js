//Забираем кнопку
let btn = document.querySelector('.btn');

//забиарем из первого селекта

let sel = document.getElementsByClassName('money_select')

//забираем из второго селекта
let selNum = document.getElementsByClassName('moneyCount_select')

//забираем из третьего селекта

let selEnd = document.getElementsByClassName('moneySum_select')

//забираем из инпута
let selNumEnd = document.querySelector('.sum_input')

//забираем инпут ответа
let resInput = document.querySelector('.resNumber_inp');



//нажимаем на кнопку
let moneyStart = '';
let moneyCountStart = '';

let moneyEnd = '';
let moneyCountEnd = '';

let poolV = 50 * 25 * 3 //метры в кубе
let moneyV = (0.157 * 0.069 * 0.0001) //метры в кубе

let dolToRub = 0;
let rubToDol = 0;

let resCount = 0;
let resV = 0;

let result = 0

btn.addEventListener('click', () => {
    
    for(let i = 0; i < 2; i++) {
        if(sel[0][i].selected == true) {
           // console.log(sel[0][i])
            moneyStart = sel[0][i].value;
            console.log(moneyStart)
        }
    }

    for(let i = 0; i < 3; i++) {
        if(selNum[0][i].selected == true) {
           // console.log(selNum[0][i])
            moneyCountStart = selNum[0][i].value;
            console.log(moneyCountStart)
        }
    }

    for(let i = 0; i < 2; i++) {
        if(selEnd[0][i].selected == true) {
            //console.log(selEnd[0][i])
            moneyEnd = selEnd[0][i].value;
            console.log(moneyEnd)
        }
    }

    moneyCountEnd = selNumEnd.value;

    if (moneyStart == 'dol' && moneyEnd == 'dol') {
        resCount = moneyCountEnd / moneyCountStart;
        resV = moneyV * resCount
        result = (poolV/100)*resV
    } else if (moneyStart == 'dol' && moneyEnd == 'rub') {
        dolToRub = moneyCountEnd / 77;
        
        resCount = dolToRub / moneyCountStart;
        resV = moneyV * resCount
        result = (poolV/100)*resV
    } else if (moneyStart == 'rub' && moneyEnd == 'dol') {
        rubToDol = moneyCountEnd * 77
        resCount = rubToDol / moneyCountStart;
        resV = moneyV * resCount
        result = (poolV/100)*resV
    } else if (moneyStart == 'rub' && moneyEnd == 'rub') {
        resCount = moneyCountEnd / moneyCountStart;
        resV = moneyV * resCount
        result = (poolV/100)*resV
    }

    resInput.value = result;

    window.scrollTo(0,document.body.scrollHeight);

})


