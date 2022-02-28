
const labels = document.querySelector('#labels');
const values = document.querySelector('#values');
const amount = document.querySelector('#amount');
const select = document.querySelector('#select');

const currency = [
    {
        name: 'BYN',
        value: 'byn',
        prices: {
            eur: 0.33,
            usd: 0.38,
            cny: 2.39,
            rub: 30.05
        }
    },
    {
        name: 'EUR',
        value: 'eur',
        prices: {
            byn: 3,
            usd: 1.13,
            cny: 7.17,
            rub: 90.06
        }
    },
    {
        name: 'USD',
        value: 'usd',
        prices: {
            eur: 0.88,
            byn: 2.64,
            cny: 6.33,
            rub: 79.47
        }
    },
    {
        name: 'CNY',
        value: 'cny',
        prices: {
            eur: 0.14,
            usd: 0.16,
            byn: 0.42,
            rub: 12.53
        }
    },
    {
        name: 'RUB',
        value: 'rub',
        prices: {
            eur: 0.011,
            usd: 0.013,
            cny: 0.080,
            byn: 0.033
        }
    }
];


currency.forEach(item => {
    let opt = document.createElement('option');
    opt.innerHTML = item.name;
    opt.value = item.value;
    select.appendChild(opt);
});


function render() {

    const currentCurrency = currency.find(item => item.value === select.value);
    console.log(currentCurrency);

    labels.innerHTML = '';
    values.innerHTML = '';

    for (let currencyName in currentCurrency.prices) {
        const label = document.createElement('label');
        label.innerHTML = currencyName.toUpperCase();
        const value = document.createElement('label');
        value.innerHTML = (currentCurrency.prices[currencyName] * amount.value).toFixed(2);
        labels.appendChild(label);
        values.appendChild(value);
    }

}

render();

select.addEventListener('change', render);
amount.addEventListener('input', render);