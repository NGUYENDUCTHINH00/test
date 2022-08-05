// bài 1
// let str =prompt("Nhập vào để đảo ngược chuỗi");
// let a = ""
//     for( let i = str.length - 1 ;i >= 0 ;   i --){
//         a=a+str[i]
//     }
//     console.log(a);

// bài 2:
// let str = prompt('nhập vào chuỗi bất kỳ');
// let str1 = str.toLowerCase().split(' ');
// for(let i = 0; i < str1.length; i++) {
//     str1[i] = str1[i][0].toUpperCase() + str1[i].slice(1);
// }
// let str2 = str1.join(' ');
// console.log(str2);

// bài 3:
// arr = [1, 2, 3, 3, 4, 5, 4, 4, 4, 5, 5];
// let a = "";
// for (let i = 0; i <= arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; i++) {
//     if (arr[i] === arr[j]) {
//       break;
//     }
//     a = a + arr[i];
//   }
// }
// let newarr = a.split("");
// console.log(newarr);

// bài 4:
// arr = [5, 2, 3, 4, 1];
// let temp;
// let a = "";
// for (let i = 0; i <= arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[i]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// for (i = 0; i <= arr.length - 1; i++) {
//   a = a + arr[i];
// }
// console.log(a.split(""));


// bÀI 5 :
// let name1 = ["Thịnh" , "Hùng" , "Duy"];
// let state = true
// console.log(name1);
// while (state) {
//     let userInput = prompt(`Please input C/R/U/D `);
//     console.log(`------------------------------------------`);
//     switch (userInput) {

//         case "C":
//             let newname = prompt(" Hãy nhập nhân viên mới");
//             name1.push(newname)
//             for (let i = 0; i <= name1.length - 1; i++) {
//                 console.log(` ${i + 1}  .  ${name1[i]}`);
//             }
//             break;
//         case "R":
//             for (let i = 0; i <= name1.length - 1; i++) {
//                 console.log(` ${i + 1}  .  ${name1[i]}`);
//             }
//             break;
//         case "U":
//             let update = Number(prompt(" Hãy nhập vị trí mà bạn muốn update "));
//             let new1 = prompt(" Hãy nhập nội dung update");
//             name1[update - 1] = new1
//             for (let i = 0; i <= name1.length - 1; i++) {
//                 console.log(` ${i + 1}  .  ${name1[i]}`);
//             }
//             break;
//         case "D":
//             let delete1 = Number(prompt(`Hãy nhập vị trí mà bạn muốn delete `));
//             let b = delete1 - 1
//             name1.splice (b)
//             for (let i = 0; i <= name1.length - 1; i++) {
//                 console.log(` ${i + 1}  .  ${name1[i]}`);
//             }
//             state = false
//             break;
//     }
//     if(state === false){
//         break;
//     }
// }

// Bài 7 
// const bookstore = ["Tôi thấy hoa vàng trên cỏ xanh", "Đắc nhân tâm"];
// const cart = []
// let state = true;
// while (state) {
// let a = prompt('nhập vào chữ cái C/R/U/D/E')
// if (a === "C") {
//     alert('bạn muốn xem book nào');
//     let b = prompt('nhập book muốn mua');
//     let c = store.indexOf(b);
//     if (c != -1){
//     let findIndex2 = -1;
//         for (let i = 0; i <= cart.length - 1; i = i + 1) {
//         if (b === cart[i][0]) {
//             findIndex2 = i;
//             }
//         }
//         if (findIndex2 === -1) {
//         let number = Number(prompt("nhập số lượng"));
//         cart.push([b, number]);
//         } else {
//         let number = Number(prompt("nhập số lượng"));
//         cart[findIndex2][1] = cart[findIndex2][1] + number;
//         }
//         for (let i = 0; i <= cart.length - 1; i = i + 1) {
//             console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//         }

//     } else{
//         console.log('Item is not available');
//     }
// } else if (a === 'R') {
//     for(let i = 0 ; i < store.length; i++) {
//         let store1 = store[i];
//         console.log(i + 1, store1);
//     }
//     for(let k = 0;k < cart.length; k++){
//         let l = cart[k];
//         console.log(k + 1, l[0], l[1]);
//     }
// } else if (a === 'U') {
//     let updatedItem = prompt("Please input updated item name");
//     let findIndex = -1;
//     for (let i = 0; i <= cart.length - 1; i = i + 1) {
//       if (updatedItem === cart[i][0]) {
//         findIndex = i;
//       }
//     }
//     if (findIndex === -1) {
//       console.log("Item is not in cart");
//     } else {
//       let newNumber = prompt("Please input new number");
//       cart[findIndex][1] = newNumber;
//       for (let i = 0; i <= cart.length - 1; i = i + 1) {
//         console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//       }
//     }
// } else if (a === 'D') {
//     let g = prompt("nhập tên item");
//     let h = -1;
//     for (let i = 0; i <= cart.length - 1; i = i + 1) {
//       if (g === cart[i][0]) {
//         h = i;
//       }
//     }
// if (h === -1) {
//       console.log("Item is not in cart");
//     } else {
//       cart.splice(h, 1);
//       for (let i = 0; i <= cart.length - 1; i = i + 1) {
//         console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//       }
//     }
//   } else if (a === "E") {
//     console.log("Thank you for shopping");
//     state = false;
//   } else {
//     console.log("Invalid command");
//   }
// }
