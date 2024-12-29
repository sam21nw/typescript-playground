// 1st variation
// let year = document.getElementById("year") as HTMLElement | null;
// let thisYear: string = new Date().getFullYear().toString()

// if (year) {
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear;
// }

// 2nd variation
let year = document.getElementById("year") as HTMLSpanElement;
let thisYear: string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear;