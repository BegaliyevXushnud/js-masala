


// function juftVaToqYigindisiniTop(son) {
//     let juftYigindi = 0;
//     let toqYigindi = 0;

//     for (let i = 1; i <= son; i++) {
//         if (i % 2 === 0) {
//             juftYigindi += i;
//         } else {
//             toqYigindi += i;
//         }
//     }

//     const farq = Math.abs(juftYigindi - toqYigindi);

//     console.log(`Juft sonlar yig'indisi: ${juftYigindi}`);
//     console.log(`Toq sonlar yig'indisi: ${toqYigindi}`);
//     console.log(`Farq: ${farq}`);

//     alert(`Juft sonlar yig'indisi: ${juftYigindi}\nToq sonlar yig'indisi: ${toqYigindi}\nFarq: ${farq}`);
// }
// const kiritilganSon = prompt("Iltimos, biror son kiriting:");


// const son = parseInt(kiritilganSon);

// if (!isNaN(son) && son > 0) {
//     juftVaToqYigindisiniTop(son);
// } else {
//     console.log("Iltimos, to'g'ri son kiriting.");
//     alert("Iltimos, to'g'ri son kiriting.");
// }
 
// 1-masala









// function yigindiniTop(son) {
//     let yigindi = 0;

//     for (let i = 1; i <= son; i++) {
//         yigindi += i;
//     }

//     return yigindi;
// }

// const berilganSon = 10;
// const yigindi = yigindiniTop(berilganSon);

// console.log(`${berilganSon} gacha bo'lgan sonlarning yig'indisi: ${yigindi}`);

// 2- Masala







// function arrayYigindisiniTop(arr) {
//     let yigindi = 0;

//     for (let i = 0; i < arr.length; i++) {
//         yigindi += arr[i];
//     }

//     return yigindi;
// }

// const array = [1, 2, 3, 4, 5];
// const yigindi = arrayYigindisiniTop(array);

// console.log(`Array ichidagi sonlar yig'indisi: ${yigindi}`);


// 3-masala





// function juftSonlarYigindisiniTop(arr) {
//     let juftYigindi = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             juftYigindi += arr[i];
//         }
//     }

//     return juftYigindi;
// }

// const array = [1, 2, 3, 4, 5, 6];
// const juftYigindi = juftSonlarYigindisiniTop(array);

// console.log(`Array ichidagi juft sonlar yig'indisi: ${juftYigindi}`);

// 4-masala






// function sonArraydaBormi(arr, son) {
//     return arr.includes(son);
// }
// const array = [1, 2, 3, 4, 5];
// const son = 3;
// const mavjudmi = sonArraydaBormi(array, son);

// if (mavjudmi) {
//     console.log(`${son} soni Array ichida bor.`);
// } else {
//     console.log(`${son} soni Array ichida yo'q.`);
// }

// 5-masala










// function sonniOlYokiQosh(arr, son) {
//     const index = arr.indexOf(son);

//     if (index !== -1) {
//         arr.splice(index, 1);
//     } else {
      
//         arr.push(son);
//     }

//     return arr;
// }
// let array = [1, 2, 3, 4, 5];
// let son = 3;
// console.log(`Oldin: ${array}`);
// array = sonniOlYokiQosh(array, son);
// console.log(`Keyin: ${array}`);

// son = 6;
// console.log(`Oldin: ${array}`);
// array = sonniOlYokiQosh(array, son);
// console.log(`Keyin: ${array}`);

// 6-masala







function birinchiVaOxirgiFarqi(arr) {
    if (arr.length === 0) {
        return null; 
    }

    const birinchiSon = arr[0];
    const oxirgiSon = arr[arr.length - 1];
    const farq = Math.abs(birinchiSon - oxirgiSon);

    return farq;
}

const array = [10, 2, 3, 4, 5];
const farq = birinchiVaOxirgiFarqi(array);

if (farq !== null) {
    console.log(`Birinchi va oxirgi sonlar o'rtasidagi farq: ${farq}`);
} else {
    console.log("Massiv bo'sh.");
}


// 7-masala