let vaisiai = document.querySelector("#btn-vaisiai");
let filtrasDarzoves = document.querySelector("#filter2")
let filtrasVaisiai = document.querySelector("#filter1");

vaisiai.addEventListener("click", function () {
    filtrasDarzoves.classList.remove("d-none")
    filtrasVaisiai.classList.add("d-none");


}
);

let darzoves = document.querySelector("#btn-darzoves");

darzoves.addEventListener("click", function () {
    filtrasVaisiai.classList.remove("d-none");
    filtrasDarzoves.classList.add("d-none");

}
)

let visi = document.querySelector("#btn-visi");
visi.addEventListener("click", function () {
    filtrasVaisiai.classList.remove("d-none");
    filtrasDarzoves.classList.remove("d-none");


}
)