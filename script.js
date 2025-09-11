// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     // Toggle mobile menu
//     menuToggle.addEventListener('click', function() {
//         navLinks.classList.toggle('active');
//     });

//     // Close mobile menu when clicking outside
//     document.addEventListener('click', function(event) {
//         const isClickInside = navLinks.contains(event.target) || menuToggle.contains(event.target);
        
//         if (!isClickInside && navLinks.classList.contains('active')) {
//             navLinks.classList.remove('active');
//         }
//     });

//     // Add smooth scrolling to all navigation links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
            
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
            
//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth'
//                 });
                
//                 // Close mobile menu after clicking a link
//                 if (navLinks.classList.contains('active')) {
//                     navLinks.classList.remove('active');
//                 }
//             }
//         });
//     });

//     // Coming Soon Effect
//     const hajjLink = document.querySelector('.hajj-link');
//     const comingSoonOverlay = document.getElementById('comingSoonOverlay');
//     const closeOverlay = document.querySelector('.close-overlay');

//     if (hajjLink && comingSoonOverlay) {
//         hajjLink.addEventListener('click', function(e) {
//             e.preventDefault();
//             comingSoonOverlay.style.display = 'flex';
//         });

//         closeOverlay.addEventListener('click', function() {
//             comingSoonOverlay.style.display = 'none';
//         });

//         // Close overlay when clicking outside
//         comingSoonOverlay.addEventListener('click', function(e) {
//             if (e.target === comingSoonOverlay) {
//                 comingSoonOverlay.style.display = 'none';
//             }
//         });
//     }
// });


// // Smooth scroll functionality for the scroll button
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);
        
//         if (targetElement) {
//             targetElement.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     // Cache DOM elements
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');
//     const hajjLink = document.querySelector('.hajj-link');
//     const comingSoonOverlay = document.getElementById('comingSoonOverlay');
//     const closeOverlay = document.querySelector('.close-overlay');

//     // Toggle mobile menu with error handling
//     if (menuToggle && navLinks) {
//         menuToggle.addEventListener('click', function() {
//             navLinks.classList.toggle('active');
//         });
//     }

//     // Close mobile menu when clicking outside
//     document.addEventListener('click', function(event) {
//         if (navLinks && menuToggle) {
//             const isClickInside = navLinks.contains(event.target) || menuToggle.contains(event.target);
            
//             if (!isClickInside && navLinks.classList.contains('active')) {
//                 navLinks.classList.remove('active');
//             }
//         }
//     });

//     // Smooth scrolling with error handling
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
            
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
            
//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth'
//                 });
                
//                 // Close mobile menu after clicking a link
//                 if (navLinks && navLinks.classList.contains('active')) {
//                     navLinks.classList.remove('active');
//                 }
//             }
//         });
//     });

//     // Coming Soon overlay functionality
//     if (hajjLink && comingSoonOverlay && closeOverlay) {
//         hajjLink.addEventListener('click', function(e) {
//             e.preventDefault();
//             comingSoonOverlay.style.display = 'flex';
//         });

//         closeOverlay.addEventListener('click', function() {
//             comingSoonOverlay.style.display = 'none';
//         });

//         comingSoonOverlay.addEventListener('click', function(e) {
//             if (e.target === comingSoonOverlay) {
//                 comingSoonOverlay.style.display = 'none';
//             }
//         });
//     }

//     // Countdown timer functionality
//     function updateCountdown() {
//         const countdownElements = document.querySelectorAll('.countdown-number');
//         if (!countdownElements.length) return;

//         const now = new Date();
//         const target = new Date(now.getFullYear(), now.getMonth() + 1, 1);
//         const diff = target - now;

//         const timeUnits = [
//             Math.floor(diff / (1000 * 60 * 60 * 24)),     // days
//             Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), // hours
//             Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)), // minutes
//             Math.floor((diff % (1000 * 60)) / 1000)  // seconds
//         ];

//         countdownElements.forEach((element, index) => {
//             if (element) {
//                 element.textContent = timeUnits[index];
//             }
//         });
//     }

//     // Initialize countdown
//     if (document.querySelector('.countdown')) {
//         updateCountdown();
//         setInterval(updateCountdown, 1000);
//     }

//     // Add lazy loading for images
//     document.querySelectorAll('img').forEach(img => {
//         img.loading = 'lazy';
//     });
// });

// //Special Package
// // Lightbox Functionality
// function openLightbox(button) {
//     const lightbox = document.getElementById('lightbox');
//     const lightboxImg = document.getElementById('lightbox-img');
//     const packageImg = button.parentElement.querySelector('.main-image');
//     lightboxImg.src = packageImg.src;
//     lightbox.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// }

// function closeLightbox() {
//     const lightbox = document.getElementById('lightbox');
//     lightbox.style.display = 'none';
//     document.body.style.overflow = 'auto';
// }

// // Close lightbox when clicking outside the image
// document.getElementById('lightbox').addEventListener('click', function(e) {
//     if (e.target === this) {
//         closeLightbox();
//     }
// });

// // Close lightbox with Escape key
// document.addEventListener('keydown', function(e) {
//     if (e.key === 'Escape') {
//         closeLightbox();
//     }
// });
// // Gallery Filter Functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const filterButtons = document.querySelectorAll('.filter-btn');
//     const galleryItems = document.querySelectorAll('.gallery-item');

//     // Show all items initially
//     galleryItems.forEach(item => item.classList.add('show'));

//     filterButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             // Remove active class from all buttons
//             filterButtons.forEach(btn => btn.classList.remove('active'));
//             // Add active class to clicked button
//             button.classList.add('active');

//             const filterValue = button.getAttribute('data-filter');

//             galleryItems.forEach(item => {
//                 item.classList.remove('show');
//                 if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
//                     item.classList.add('show');
//                 }
//             });
//         });
//     });
// });



// // navigation 
// document.addEventListener('DOMContentLoaded', function () {
//     // ======= CACHE ELEMENTS =======
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');
//     const hajjLink = document.querySelector('.hajj-link');
//     const comingSoonOverlay = document.getElementById('comingSoonOverlay');
//     const closeOverlay = document.querySelector('.close-overlay');
//     const lightbox = document.getElementById('lightbox');
//     const lightboxImg = document.getElementById('lightbox-img');
//     const filterButtons = document.querySelectorAll('.filter-btn');
//     const galleryItems = document.querySelectorAll('.gallery-item');
//     const dropdowns = document.querySelectorAll('.dropdown');

//     // ======= MOBILE MENU =======
//     if (menuToggle && navLinks) {
//         menuToggle.addEventListener('click', function (e) {
//             e.stopPropagation();
//             navLinks.classList.toggle('active');
//         });

//         document.addEventListener('click', function (event) {
//             const isClickInside = navLinks.contains(event.target) || menuToggle.contains(event.target);
//             if (!isClickInside && navLinks.classList.contains('active')) {
//                 navLinks.classList.remove('active');
//             }
//         });
//     }

//     // ======= DROPDOWN TOGGLE (WORKS ON MOBILE) =======
//     if (dropdowns.length) {
//         dropdowns.forEach(dropdown => {
//             const trigger = dropdown.querySelector('.dropbtn');

//             trigger.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 e.stopPropagation();

//                 // Close all other dropdowns first
//                 dropdowns.forEach(d => {
//                     if (d !== dropdown) {
//                         d.classList.remove('open');
//                     }
//                 });

//                 // Toggle current one
//                 dropdown.classList.toggle('open');
//             });
//         });

//         // Close dropdowns on outside click
//         document.addEventListener('click', function () {
//             dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
//         });
//     }

//     // ======= SMOOTH SCROLL =======
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);

//             if (targetElement) {
//                 e.preventDefault();
//                 targetElement.scrollIntoView({ behavior: 'smooth' });
//                 if (navLinks && navLinks.classList.contains('active')) {
//                     navLinks.classList.remove('active');
//                 }
//             }
//         });
//     });

//     // ======= COMING SOON OVERLAY =======
//     if (hajjLink && comingSoonOverlay && closeOverlay) {
//         hajjLink.addEventListener('click', function (e) {
//             e.preventDefault();
//             comingSoonOverlay.style.display = 'flex';
//         });

//         closeOverlay.addEventListener('click', function () {
//             comingSoonOverlay.style.display = 'none';
//         });

//         comingSoonOverlay.addEventListener('click', function (e) {
//             if (e.target === comingSoonOverlay) {
//                 comingSoonOverlay.style.display = 'none';
//             }
//         });
//     }

//     // ======= COUNTDOWN TIMER =======
//     function updateCountdown() {
//         const countdownElements = document.querySelectorAll('.countdown-number');
//         if (!countdownElements.length) return;

//         const now = new Date();
//         const target = new Date(now.getFullYear(), now.getMonth() + 1, 1);
//         const diff = target - now;

//         const timeUnits = [
//             Math.floor(diff / (1000 * 60 * 60 * 24)), // days
//             Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), // hours
//             Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)), // minutes
//             Math.floor((diff % (1000 * 60)) / 1000) // seconds
//         ];

//         countdownElements.forEach((element, index) => {
//             element.textContent = timeUnits[index];
//         });
//     }

//     if (document.querySelector('.countdown')) {
//         updateCountdown();
//         setInterval(updateCountdown, 1000);
//     }

//     // ======= LAZY LOAD IMAGES =======
//     document.querySelectorAll('img').forEach(img => {
//         img.loading = 'lazy';
//     });

//     // ======= LIGHTBOX =======
//     window.openLightbox = function (button) {
//         const packageImg = button.parentElement.querySelector('.main-image');
//         lightboxImg.src = packageImg.src;
//         lightbox.style.display = 'block';
//         document.body.style.overflow = 'hidden';
//     };

//     window.closeLightbox = function () {
//         lightbox.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     };

//     if (lightbox) {
//         lightbox.addEventListener('click', function (e) {
//             if (e.target === lightbox) {
//                 window.closeLightbox();
//             }
//         });

//         document.addEventListener('keydown', function (e) {
//             if (e.key === 'Escape') {
//                 window.closeLightbox();
//             }
//         });
//     }

//     // ======= GALLERY FILTER =======
//     if (filterButtons.length && galleryItems.length) {
//         galleryItems.forEach(item => item.classList.add('show'));

//         filterButtons.forEach(button => {
//             button.addEventListener('click', () => {
//                 filterButtons.forEach(btn => btn.classList.remove('active'));
//                 button.classList.add('active');

//                 const filterValue = button.getAttribute('data-filter');
//                 galleryItems.forEach(item => {
//                     item.classList.remove('show');
//                     if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
//                         item.classList.add('show');
//                     }
//                 });
//             });
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")
  const hajjLink = document.querySelector(".hajj-link")
  const comingSoonOverlay = document.getElementById("comingSoonOverlay")
  const closeOverlay = document.querySelector(".close-overlay")
  const dropdowns = document.querySelectorAll(".dropdown")
  const lightbox = document.getElementById("lightbox")
  const lightboxImg = document.getElementById("lightbox-img")
  const filterButtons = document.querySelectorAll(".filter-btn")
  const galleryItems = document.querySelectorAll(".gallery-item")

  // Toggle mobile menu
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      console.log("[v0] Mobile menu toggled:", navLinks.classList.contains("active"))
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInside = navLinks.contains(event.target) || menuToggle.contains(event.target)

    if (!isClickInside && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active")
      console.log("[v0] Mobile menu closed by outside click")
    }
  })

  // Dropdown functionality for mobile
  if (dropdowns.length) {
    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector("a")

      trigger.addEventListener("click", (e) => {
        // Only prevent default on mobile
        if (window.innerWidth <= 768) {
          e.preventDefault()
          e.stopPropagation()

          // Close all other dropdowns
          dropdowns.forEach((d) => {
            if (d !== dropdown) {
              d.classList.remove("open")
            }
          })

          // Toggle current dropdown
          dropdown.classList.toggle("open")
          console.log("[v0] Dropdown toggled:", dropdown.classList.contains("open"))
        }
      })
    })
  }

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => dropdown.classList.remove("open"))
  })

  // Add smooth scrolling to all navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        })

        // Close mobile menu after clicking a link
        if (navLinks && navLinks.classList.contains("active")) {
          navLinks.classList.remove("active")
        }
      }
    })
  })

  // Coming Soon Effect
  if (hajjLink && comingSoonOverlay) {
    hajjLink.addEventListener("click", (e) => {
      e.preventDefault()
      comingSoonOverlay.style.display = "flex"
    })

    closeOverlay.addEventListener("click", () => {
      comingSoonOverlay.style.display = "none"
    })

    // Close overlay when clicking outside
    comingSoonOverlay.addEventListener("click", (e) => {
      if (e.target === comingSoonOverlay) {
        comingSoonOverlay.style.display = "none"
      }
    })
  }

  // Countdown timer functionality
  function updateCountdown() {
    const countdownElements = document.querySelectorAll(".countdown-number")
    if (!countdownElements.length) return

    const now = new Date()
    const target = new Date(now.getFullYear(), now.getMonth() + 1, 1)
    const diff = target - now

    const timeUnits = [
      Math.floor(diff / (1000 * 60 * 60 * 24)), // days
      Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), // hours
      Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)), // minutes
      Math.floor((diff % (1000 * 60)) / 1000), // seconds
    ]

    countdownElements.forEach((element, index) => {
      if (element) {
        element.textContent = timeUnits[index]
      }
    })
  }

  // Initialize countdown
  if (document.querySelector(".countdown")) {
    updateCountdown()
    setInterval(updateCountdown, 1000)
  }

  // Add lazy loading for images
  document.querySelectorAll("img").forEach((img) => {
    img.loading = "lazy"
  })

  // Lightbox Functionality
  function openLightbox(button) {
    const lightboxImg = document.getElementById("lightbox-img")
    const packageImg = button.parentElement.querySelector(".main-image")
    lightboxImg.src = packageImg.src
    lightbox.style.display = "block"
    document.body.style.overflow = "hidden"
  }

  function closeLightbox() {
    lightbox.style.display = "none"
    document.body.style.overflow = "auto"
  }

  // Close lightbox when clicking outside the image
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox()
      }
    })
  }

  // Close lightbox with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox()
    }
  })

  // Gallery Filter Functionality
  if (filterButtons.length && galleryItems.length) {
    galleryItems.forEach((item) => item.classList.add("show"))

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")

        const filterValue = button.getAttribute("data-filter")
        galleryItems.forEach((item) => {
          item.classList.remove("show")
          if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
            item.classList.add("show")
          }
        })
      })
    })
  }
})
