const form  = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if(bmi >= 15 && bmi <= 18.50){
        results.innerHTML = `${bmi} Underweight Range.`
    }
    else if(bmi >= 18.50 && bmi <= 25){
        results.innerHTML = `${bmi} Healthy Weight Range.`
    }
    else if(bmi >= 25 && bmi <= 30){
        results.innerHTML = `${bmi} Overweight Range.`
    }
    else if(bmi >= 30){
        results.innerHTML = `${bmi} Obese Range.`
    }else{
        results.innerHTML = `Invalid height & weight!!!`
    }

});