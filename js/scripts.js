/*!

*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

const syncPointer = ({ x: pointerX, y: pointerY }) => {
    const x = pointerX.toFixed(2)
    const y = pointerY.toFixed(2)
    const xp = (pointerX / window.innerWidth).toFixed(2)
    const yp = (pointerY / window.innerHeight).toFixed(2)
    document.documentElement.style.setProperty('--x', x)
    document.documentElement.style.setProperty('--xp', xp)
    document.documentElement.style.setProperty('--y', y)
    document.documentElement.style.setProperty('--yp', yp)
  }
  document.body.addEventListener('pointermove', syncPointer)
  
const syncPointer2 = ({ x: pointerX, y: pointerY }) => {
    const x2 = pointerX.toFixed(2)
    const y2 = pointerY.toFixed(2)
    const xp2 = (pointerX / window.innerWidth).toFixed(2)
    const yp2 = (pointerY / window.innerHeight).toFixed(2)
    document.documentElement.style.setProperty('--x2', x2)
    document.documentElement.style.setProperty('--xp2', xp2)
    document.documentElement.style.setProperty('--y2', y2)
    document.documentElement.style.setProperty('--yp2', yp2)
  }
  document.body.addEventListener('pointermove', syncPointer2)
  const syncPointer3 = ({ x: pointerX, y: pointerY }) => {
    const x3 = pointerX.toFixed(2);
    const y3 = pointerY.toFixed(2);
    const xp3 = (pointerX / window.innerWidth).toFixed(2);
    const yp3 = (pointerY / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty('--x3', x3);
    document.documentElement.style.setProperty('--xp3', xp3);
    document.documentElement.style.setProperty('--y3', y3);
    document.documentElement.style.setProperty('--yp3', yp3);
  };
  
  document.body.addEventListener('pointermove', syncPointer3);
  
  

  function getGreeting() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const time = hour + minute / 60;

    if (time >= 4 && time < 9) {
      return "Hello there, early bird! ";
    } else if (time >= 9 && time < 11.83) {
      return "Good morning! ";
    } else if (time >= 11.83 && time < 16) {
      return "Good afternoon! ";
    } else if (time >= 16 && time < 20) {
      return "Good evening! ";
    } else {
      return "Hello there, nocturnal beast! ";
    }
}

function updateGreeting() {
    const greetingEl = document.getElementById("greeting");
    if (greetingEl) {
      greetingEl.textContent = getGreeting();
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    updateGreeting(); // initial call on load
    setInterval(updateGreeting, 60000); // update every 60 seconds
  });
//button toggle issue fix  
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const buttonAdjustment = document.querySelector('.button-adjustment');
  
    if (menuToggle && buttonAdjustment) {
      menuToggle.addEventListener('click', () => {
        const isActive = menuToggle.classList.contains('active');
        if (!isActive) {
          buttonAdjustment.style.zIndex = '0'; // behind sidebar
          buttonAdjustment.style.position = 'relative';
        } else {
          buttonAdjustment.style.zIndex = '1050'; // in front again
          buttonAdjustment.style.position = 'relative';
        }
      });
    }
  });
//scrollspy for nav bar
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const navBrand = document.querySelector(".navbar-brand");

  const sectionColors = {
    about: "#f97316",   // orange
    skills: "#fdd835",  // yellow
    projects: "#8B5CF6",// purple
    connect: "#0198fc"  // blue
  };

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update brand color
    navBrand.style.color = sectionColors[currentSection] || "white";

    // Update nav link colors
    navLinks.forEach(link => {
      const target = link.getAttribute("data-section");
      if (target === currentSection) {
        link.style.color = sectionColors[currentSection];
      } else {
        link.style.color = "white";
      }
    });
  });
});


//connect with me section button reaction
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const sendBtn = document.getElementById("send-btn");

  sendBtn.addEventListener("click", async function () {
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/mashok@depaul.edu", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      alert("Message sent successfully!");
      window.location.reload();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  });
});


 

//footer bro - 
document.addEventListener("DOMContentLoaded", () => {
  const taglines = [
    "Created, customized, and lowkey obsessed over by Manoj Kumar Ashok.",
    "Designed, developed, and occasionally debugged by Manoj Kumar Ashok.",
    "Built with pixels, caffeine, and barely enough sleep — Manoj Kumar Ashok.",
    "If it breaks, it’s still my fault — Manoj Kumar Ashok.",
    "Manufactured with curiosity and controlled chaos — Manoj Kumar Ashok."
  ];

  const footerEl = document.getElementById("footer-tagline");
  if (footerEl) {
    const year = new Date().getFullYear();
    const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
    footerEl.textContent = `${randomTagline} © ${year}`;
    footerEl.style.color = "white";
  }
});

//typed.js for heading 1
document.addEventListener("DOMContentLoaded", function () {
  // Delay typing start slightly to prevent emoji flash/render glitch
  setTimeout(() => {
    new Typed("#typed-text", {
      strings: [
        "Data Science", //\u{1F4BB}",              // 💻
        "Machine Learning",// \u{1F9E0}",          // 🧠
       "Artificial Intelligence", //\u{1F916}",   // 🤖
        "Deep Learning", //\u{1F9EC}",            // 🧬
        "Computer Vision", //\u{1F441}",          // 👁️
       "Natural language processing" //\u{1F5E3}"  // 🗣️

      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 3000,   // keeps each word for 3 seconds
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|"     // funky block cursor
    });
  }, 300); // ⬅ slight delay to fix emoji render issue
});



