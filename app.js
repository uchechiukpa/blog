function app(){
    const closeMobileNavbar = document.querySelector("#close-mobile-navbar");
    const openMobileNavbar = document.querySelector("#open-mobile-navbar")
    const mobileNavbar = document.querySelector("#mobile-navbar")


    closeMobileNavbar.addEventListener("click", function(){
        mobileNavbar.classList.add("hidden")

    })

    openMobileNavbar.addEventListener("click", function(){
        mobileNavbar.classList.remove("hidden")
    })

}


app();