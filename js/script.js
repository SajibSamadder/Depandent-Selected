var slect_cuontry = document.querySelector("#slect_cuontry");
var slect_cuontry_option = document.querySelector("#slect_cuontry");


var dipartment = document.querySelector("#dipartment ");
var dipartment_option = document.querySelector("#dipartment option ");

var select_zila = document.querySelector("#select_zila");


slect_cuontry_option.innerHTML += `
        <option>${country[0].bangladesh}</option>
        <option>${country[0].india}</option>
      
`;


slect_cuontry.addEventListener("input", function() {
    var slected_cuontry_index = slect_cuontry.selectedIndex;
    var selected_option_text = slect_cuontry_option[slected_cuontry_index].textContent.toLowerCase();

    if (selected_option_text == country[0].bangladesh) {
        dipartment.innerHTML = `
        <option>${deffult}</option>
        <option>${dipartments[0].dhaka}</option>
        <option>${dipartments[0].barisal}</option>
        <option>${dipartments[0].khulna}</option>
        <option>${dipartments[0].rangpur}</option>
        
        `;
        select_zila.innerHTML = `
        <option>${deffult2}</option>`;
    } else if (selected_option_text == country[0].india) {
        dipartment.innerHTML = `
        <option>${deffult}</option>
        <option>${dipartments[0].klyan}</option>
        <option>${dipartments[0].kolkata}</option>
        <option>${dipartments[0].mumbai}</option>
        <option>${dipartments[0].noyadelhi}</option>
        
        `;
        select_zila.innerHTML = `
        <option>${deffult2}</option>`;
    } else {

        dipartment.innerHTML = `
        <option>${deffult}</option>
        `;
        select_zila.innerHTML = `
        <option>${deffult2}</option>`;

    }
})
dipartment.addEventListener("input", function() {
    var slected_dipartment_index = dipartment.selectedIndex;
    var selected_option_text = dipartment[slected_dipartment_index].textContent.toLowerCase();

    if (selected_option_text == dipartments[0].dhaka) {
        select_zila.innerHTML = `
        <option>${deffult2}</option>
        <option>${zila[0].dhaka_zila.savar}</option>
        <option>${zila[0].dhaka_zila.dohar}</option>
        <option>${zila[0].dhaka_zila.gopalganj}</option>
        
        
        `;
    } else if (selected_option_text == dipartments[0].barisal) {
        select_zila.innerHTML = `
        <option>${deffult2}</option>
        <option>${zila[0].barisal_zila.barisalshador}</option>
        <option>${zila[0].barisal_zila.patuakhali}</option>
        <option>${zila[0].barisal_zila.vola}</option>
        
        
        `;
    } else if (selected_option_text == dipartments[0].khulna) {
        select_zila.innerHTML = `
        <option>${deffult2}</option>
        <option>${zila[0].khulnazila.khulnazila1}</option>
        <option>${zila[0].khulnazila.khulnazila2}</option>
     
        
        
        `;
    } else if (selected_option_text == dipartments[0].rangpur) {
        select_zila.innerHTML = `
        <option>${deffult2}</option>
        <option>${zila[0].rangpurzila.rangpurzila1}</option>
        <option>${zila[0].rangpurzila.rangpurzila2}</option>
       
     
        
        
        `;
    } else if (selected_option_text == dipartments[0].klyan) {
        select_zila.innerHTML = `
        <option>${deffult2}</option>
        <option>${zila[0].klyan.klyan1}</option>
        <option>${zila[0].klyan.klyan2}</option>
        
    
        
        `;
    } else if (selected_option_text == dipartments[0].kolkata) {
        select_zila.innerHTML = `
        <option>${deffult2}</option>
        <option>${zila[0].kolkata.kolkata1}</option>
        <option>${zila[0].kolkata.kolkata2}</option>
        
        
        
        
        `;
    } else if (selected_option_text == dipartments[0].mumbai) {
        select_zila.innerHTML = `
        <option>${deffult2}</option>
        <option>${zila[0].mumbai.mumbai1}</option>
        <option>${zila[0].mumbai.mumbai2}</option>      
        `;
    } else if (selected_option_text == dipartments[0].noyadelhi) {
        select_zila.innerHTML = `
        <option>${deffult2}</option>
        <option>${zila[0].noyadelhi.noyadelhi1}</option>
        <option>${zila[0].noyadelhi.noyadelhi2}</option>
        `;
    } else {
        select_zila.innerHTML = `
        <option>${deffult2}</option>`;
    }
})