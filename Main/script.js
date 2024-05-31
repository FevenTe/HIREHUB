document.addEventListener("DOMContentLoaded", function () {
  const jobListingsContainer = document.querySelector(".job-listings")

  // Sample job data
  const jobs = [
    { title: "Back end developer", company: "Tech", location: "Addis abeba" },
    {
      title: "Graphic Designer",
      company: "Design Studio",
      location: "Addis Abeba",
    },
    {
      title: "Business manager",
      company: "Business company",
      location:"Addis Abeba",
    },
    {
      title: "Software Engineer",
      company: "Software Solutions",
      location: "Adama",
    },
    { title: "Web Developer", company: "Tech Co.", location: "Hawasa" },
    {
      title: "Graphic Designer",
      company: "Design Studio",
      location: "Addis Abeba",
    },
    {
      title: "Marketing Manager",
      company: "Marketing Agency",
      location: "Addis Abeba",
    },
    {
      title: "Software Engineer",
      company: "Software Solutions",
      location: "Adama",
    },
    
    {
      title: "vidio editor",
      company: "Film production",
      location: "Addis Abeba",
    },
    {
      title: "Sales",
      company: "Marketing company",
      location: "Deredawa",
    },
    
  ]

  // Populate job listings
  jobs.forEach((job) => {
    const jobCard = document.createElement("div")
    jobCard.classList.add("job-card")
    jobCard.innerHTML = `
            <h2>${job.title}</h2>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
        `
    jobListingsContainer.appendChild(jobCard)
  })

  // Search functionality
  const searchInput = document.getElementById("search")
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase()
    const jobCards = document.querySelectorAll(".job-card")

    jobCards.forEach((card) => {
      const title = card.querySelector("h2").textContent.toLowerCase()
      const company = card
        .querySelector("p:nth-child(2)")
        .textContent.toLowerCase()
      const location = card
        .querySelector("p:nth-child(3)")
        .textContent.toLowerCase()

      if (
        title.includes(searchTerm) ||
        company.includes(searchTerm) ||
        location.includes(searchTerm)
      ) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })
})
