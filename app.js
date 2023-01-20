const elForm = document.querySelector('.form');
const elInput = document.querySelector('#space');
const personResult = document.querySelector('.person-result');
const bicycleResult = document.querySelector('.bicycle-result');
const carResult = document.querySelector('.car-result');
const planeResult = document.querySelector('.plane-result');

const personSpeed = 3.6;
const bicycleSpeed = 20.1;
const carSpeed = 70
const planeSpeed = 800


elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    const space = elInput.value

    const personTotalHour = space / personSpeed;
    const personHour = Math.floor(personTotalHour)
    const personTotalMinutes = (personTotalHour - personHour) * 60
    const personMinutes = Math.floor(personTotalMinutes)
    const personSeconds = Math.floor((personTotalMinutes - personMinutes) * 60)
    


    const bicycleTotalHour = space / bicycleSpeed;
    const bicycleHour = Math.floor(bicycleTotalHour)
    const bicycleTotalMinutes = (bicycleTotalHour - bicycleHour) * 60
    const bicycleMinutes = Math.floor(bicycleTotalMinutes)
    const bicycleSeconds = Math.floor((bicycleTotalMinutes - bicycleMinutes))



    const carTotalHour = space / carSpeed;
    const carHour = Math.floor(carTotalHour)
    const carTotalMinutes = (carTotalHour - carHour) * 60
    const carMinutes = Math.floor(carTotalMinutes)
    const carSeconds = Math.floor((carTotalMinutes - carMinutes))



    const planeTotalHour = space / carSpeed;
    const planeHour = Math.floor(planeTotalHour)
    const planeTotalMinutes = (planeTotalHour - planeHour) * 60
    const planeMinutes = Math.floor(planeTotalMinutes)
    const planeSeconds = Math.floor((planeTotalMinutes - planeMinutes))


    if (personHour === 0){
        personResult.textContent = `пребудет за ${personMinutes} минут ${personSeconds} секунд`;
    }else if(personMinutes === 0){
        personResult.textContent = `пребудет за ${personHour} часов, ${personSeconds} секунд`;
    }else if(personSeconds === 0){
        personResult.textContent = `пребудет за ${personHour} часов, ${personMinutes} минут`;
    }else{
        personResult.textContent = `пребудет за ${personHour} часов, ${personMinutes} минут ${personSeconds} секунд `;
    }

    if (bicycleHour === 0) {
        bicycleResult.textContent = `пребудет за ${bicycleMinutes} минут ${bicycleSeconds} секунд `;
    } else if(bicycleMinutes === 0){
        bicycleResult.textContent = `пребудет за ${bicycleHour} часов, ${bicycleSeconds} секунд `;
    }else if(bicycleSeconds === 0){
        bicycleResult.textContent = `пребудет за ${bicycleHour} часов, ${bicycleMinutes} минут `;
    }else{
        bicycleResult.textContent = `пребудет за ${bicycleHour} часов, ${bicycleMinutes} минут ${bicycleSeconds} секунд `;
    }

    if (carHour === 0) {
        carResult.textContent = `${carMinutes} минут ${carSeconds} секунд `;
    }else if(carMinutes === 0){
        carResult.textContent = `пребудет за ${carHour} часов,${carSeconds} секунд `;
    }else if(carSeconds === 0){
        carResult.textContent = `пребудет за ${carHour} часов, ${carMinutes} минут`;
    }else{
        carResult.textContent = `пребудет за ${carHour} часов, ${carMinutes} минут ${carSeconds} секунд `;
    }

    if (planeHour === 0) {
        planeResult.textContent = `пребудет за ${planeMinutes} минут ${planeSeconds} секунд `;
    }else if(planeMinutes === 0){
        planeResult.textContent = `пребудет за ${planeHour} часов, ${planeSeconds} секунд `;
    }else if(planeSeconds === 0){
        planeResult.textContent = `пребудет за ${planeHour} часов, ${planeMinutes} минут`;
    }else{
        planeResult.textContent = `пребудет за ${planeHour} часов, ${planeMinutes} минут ${planeSeconds} секунд `;
    }

    
});