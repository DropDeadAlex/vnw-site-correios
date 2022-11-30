import IMask from "./components/imask" 


const $cep = document.querySelector("#cep")
const cepPattern = { mask: "00000-000", lazy: false}

const cepMasked = IMask($cep, cepPattern)