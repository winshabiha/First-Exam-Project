const buttons = document.querySelectorAll('#select');
const orderList = document.getElementById('order');
const perPlayerInputBox = document.getElementById('per-player');
const calculate = document.getElementById('calculate');
const playerExpanse = document.getElementById('player-expanse');

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        const h3Text = button.parentElement.parentElement.querySelector('h3').innerText;
        if (orderList.children.length < 5) {
            const createdlist = document.createElement('li');
            createdlist.innerText = h3Text;
            orderList.appendChild(createdlist);
            button.disabled = true;
        } else {
            alert('Player selection done.No need of player anymore');
        }
    });
});


document.getElementById('calculate').addEventListener('click', function() {
    const perPlayerInput = parseInt(perPlayerInputBox.value);
    const listCount = orderList.children.length
    const result = perPlayerInput * listCount;
    const res = document.getElementById('playerExpanse')
    res.innerText = result
    perPlayerInputBox.value = ''
});

document.getElementById('calculate-button').addEventListener('click',function(){
    const playerExpanse = document.getElementById('playerExpanse')
    const playerExpanseValue = parseInt(playerExpanse.innerText)
    const managerInput = document.getElementById('Manager')
    const managerInputValue = parseInt(managerInput.value)
    const coachInput = document.getElementById('Coach')
    const coachInputValue = parseInt(coachInput.value)
    const summation = playerExpanseValue + managerInputValue + coachInputValue
    const Total = document.getElementById('total')
    Total.innerText = summation
    managerInput.value =''
    coachInput.value = ''
})