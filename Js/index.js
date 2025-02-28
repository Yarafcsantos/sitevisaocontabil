const menuBtn = document.getElementById ("menu-btn")
const navLinks = document.getElementById ("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "bx bx-x" : "bx bx-menu"  )
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "bx bx-menu")
})

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
}


ScrollReveal().reveal(".service-card", {
    ...scrollRevealOption,
    duration:1000,
    delay:1000,
    interval:500
})

ScrollReveal().reveal(".hero  ", {
    ...scrollRevealOption,
    
})

ScrollReveal().reveal(".section-containerr  ", {
    ...scrollRevealOption,
    delay:500,
    interval:500,
})

ScrollReveal().reveal(".cards-container ", {
    ...scrollRevealOption,
    delay:1000,
    interval:1000,
})

    ScrollReveal().reveal(".contact-container .section-header ", {
        ...scrollRevealOption,
    })

    ScrollReveal().reveal(".contact-container h3", {
        ...scrollRevealOption,
        delay:500,
        interval:500,
    })

    ScrollReveal().reveal(".contact-container a", {
        ...scrollRevealOption,
        delay:1000,
        interval:500,
    })

    ScrollReveal().reveal(".diferenciais-container .feature-card", {
        ...scrollRevealOption,
        delay:1000,
        interval:500,
    })

    ScrollReveal().reveal(".section-container .depoimentos-content", {
        ...scrollRevealOption,
        delay:1000,
        interval:500,
    })

    ScrollReveal().reveal(".section-container .imagem-depoimentos", {
        ...scrollRevealOption,
        delay:1000,
        interval:500,
    })

    ScrollReveal().reveal(".location-section", {
        ...scrollRevealOption,
        delay:500,
        interval:500,
    })

    ScrollReveal().reveal(".location-container .section-header", {
        ...scrollRevealOption,
        delay:500,
        interval:500,
    })
