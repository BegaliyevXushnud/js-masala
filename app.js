



// Funksiya kiritilgan songacha bo'lgan juft va toq sonlar yig'indisini topadi va farqni aniqlaydi
function juftVaToqYigindisiniTop(son) {
    let juftYigindi = 0;
    let toqYigindi = 0;

    for (let i = 1; i <= son; i++) {
        if (i % 2 === 0) {
            juftYigindi += i;
        } else {
            toqYigindi += i;
        }
    }

    const farq = Math.abs(juftYigindi - toqYigindi);

    console.log(`Juft sonlar yig'indisi: ${juftYigindi}`);
    console.log(`Toq sonlar yig'indisi: ${toqYigindi}`);
    console.log(`Farq: ${farq}`);

    alert(`Juft sonlar yig'indisi: ${juftYigindi}\nToq sonlar yig'indisi: ${toqYigindi}\nFarq: ${farq}`);
}

// Foydalanuvchidan sonni kiritishni so'rash
const kiritilganSon = prompt("Iltimos, biror son kiriting:");

// Sonni raqamga aylantirish
const son = parseInt(kiritilganSon);

if (!isNaN(son) && son > 0) {
    // Juft va toq sonlar yig'indisini topish va farqni aniqlash
    juftVaToqYigindisiniTop(son);
} else {
    console.log("Iltimos, to'g'ri son kiriting.");
    alert("Iltimos, to'g'ri son kiriting.");
}
