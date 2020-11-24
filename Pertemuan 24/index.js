let nilai = [90, 70, 85, 95, 65];

for(let i=0; i<nilai.length; i++) {
    console.log("Nilai = ", nilai[i] + 5);
}
console.log(nilai);

let john = ["Chris", "Yoda", 77, true];

console.log(chris[chris.length - 1]);
console.log (chris);

//toString
console.log(nilai.toString());
console.log(chris.toString());

//join
console.log(chris.join(" - "));

//pop()
chris.pop();
console.log(chris.join(" - "));

//push()
chris.push(true);
chris.push("Hello");
console.log(chris.join(" - "));

//shift()
chris.shift();
console.log(chris.join(" - "));

//unshift
chris.unshift("Yoda");
chris.unshift("YYY");
console.log(virgin.join(" --- "));

//splice()
chris.splice(3,0, "Limitless","adalah nama saya");
console.log(chris.join(" - "));

//concat()
let all=chris.concat(baju,warna );
console.log(all.join(" -- "));

//slice()
let minuman = ["Jus Jeruk", "Jus Mangga", "Jus Durian", "Chocolate"];
let minumanJus = minuman.slice(0, 3);
console.log(minumanJus);

//sort()
let fruits = ["Jeruk", "Apel", "Mangga", "Jambu"];
buah.sort();
console.log(fruits); 

// bilangan.sort();
// console.log(bilangan); 

let bilangan = [20, 7, 2, 4.5, 50, 100];
let urutDariTerkecil = function(a, b) {
  return a - b;
};
let urutDariTerbesar = function(a, b) {
  return b - a;
};
console.log(bilangan.sort(urutDariTerkecil));
console.log(bilangan.sort(urutDariTerbesar));

//Reverse()
let negaraAsia = ["Jepang", "Indonesia", "Thailand", "India"];
negara.sort().reverse();
console.log(negaraAsia);
