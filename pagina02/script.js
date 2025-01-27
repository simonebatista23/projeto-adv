document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Add a scroll event listener to change the navbar background
  const nav = document.querySelector("nav")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      nav.style.backgroundColor = "rgba(75, 15, 35, 0.9)" // Semi-transparent dark red
    } else {
      nav.style.backgroundColor = "#4B0F23" // Original dark red
    }
  })
})

