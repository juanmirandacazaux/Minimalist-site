const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navContact: "Contact",
    landingTitle: "Welcome to My Minimalist Site",
    landingText: "Clean, simple, and fast — built with pure HTML, CSS, and JS.",
    introductionText: "You might be wondering, what does that mean? In a world saturated with endless notifications, flashing banners, and overwhelming information, we've chosen a different path. Here, we strip away the non-essential to focus on what truly matters: clarity, content, and purpose.",
    aboutTitle: "About Us",
    aboutText: "We believe simplicity is the ultimate sophistication.",
    contactTitle: "Get in Touch",
    contactText: "We’d love to hear from you! Fill out the form or call us today.",
    contactButton: "Call To Action",
    footerText: "© 2025 MySite. All rights reserved."
  },
  es: {
    navHome: "Inicio",
    navAbout: "Nosotros",
    navContact: "Contacto",
    landingTitle: "Bienvenido a mi sitio minimalista",
    landingText: "Limpio, simple y rápido — creado con HTML, CSS y JS puros.",
    introductionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel feugiat orci. Nullam venenatis leo id ante efficitur euismod. Proin sit amet massa viverra, dignissim velit interdum, molestie ipsum. Maecenas rhoncus eros eros, et pretium purus faucibus vitae. Mauris tempor odio et sapien venenatis malesuada. Sed et sem in lectus convallis eleifend. Duis lobortis lectus ex, a dictum tellus lobortis at. Duis vulputate lacus lorem, vitae pellentesque turpis interdum a. Sed egestas eleifend orci eu venenatis. Vestibulum non leo in nibh laoreet accumsan. Phasellus ut purus id erat pretium vestibulum. Sed tempus lorem interdum nibh venenatis rutrum.",
    aboutTitle: "Sobre nosotros",
    aboutText: "Creemos que la simplicidad es la máxima sofisticación.",
    contactTitle: "Contáctanos",
    contactText: "¡Nos encantaría saber de ti! Completa el formulario o llámanos.",
    contactButton: "Llamar a la acción",
    footerText: "© 2025 MiSitio. Todos los derechos reservados."
  },
  fr: {
    navHome: "Accueil",
    navAbout: "À propos",
    navContact: "Contact",
    landingTitle: "Bienvenue sur mon site minimaliste",
    landingText: "Propre, simple et rapide — construit avec HTML, CSS et JS purs.",
    aboutTitle: "À propos de nous",
    introductionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel feugiat orci. Nullam venenatis leo id ante efficitur euismod. Proin sit amet massa viverra, dignissim velit interdum, molestie ipsum. Maecenas rhoncus eros eros, et pretium purus faucibus vitae. Mauris tempor odio et sapien venenatis malesuada. Sed et sem in lectus convallis eleifend. Duis lobortis lectus ex, a dictum tellus lobortis at. Duis vulputate lacus lorem, vitae pellentesque turpis interdum a. Sed egestas eleifend orci eu venenatis. Vestibulum non leo in nibh laoreet accumsan. Phasellus ut purus id erat pretium vestibulum. Sed tempus lorem interdum nibh venenatis rutrum.",
    aboutText: "Nous croyons que la simplicité est la sophistication ultime.",
    contactTitle: "Contactez-nous",
    contactText: "Nous serions ravis de vous entendre !",
    contactButton: "Appel à l’action",
    footerText: "© 2025 MonSite. Tous droits réservés."
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key] || el.textContent;
  });
  localStorage.setItem("siteLang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("langSelector");
  const savedLang = localStorage.getItem("siteLang") || "en";
  selector.value = savedLang;
  setLanguage(savedLang);

  selector.addEventListener("change", e => {
    setLanguage(e.target.value);
  });
});


// Image Slider Functionality
function createImageSlider() {
  const sliderSection = document.createElement('div');
  sliderSection.className = 'image-slider-section';
  
  sliderSection.innerHTML = `
    <h2 data-key="sliderTitle">Our Work</h2>
    <div class="slider-container">
      <div class="slider-wrapper">
        <div class="slider-track"></div>
      </div>
      <div class="slider-nav">
        <button class="slider-arrow prev-arrow">←</button>
        <div class="slider-dots"></div>
        <button class="slider-arrow next-arrow">→</button>
      </div>
    </div>
  `;
  
  // Define slider data
  const slides = [
    {
      image: 'Assets/Draw.jpg',
      title: 'Minimal Design Project',
      description: 'A clean and functional design solution for modern businesses.'
    },
    {
      image: 'Assets/Our Story.png',
      title: 'Digital Experience',
      description: 'Creating seamless digital journeys for global clients.'
    },
    {
      image: 'Assets/Hero Image.png',
      title: 'Brand Identity',
      description: 'Developing strong visual identities that stand out.'
    },
    {
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      title: 'User Interface Design',
      description: 'Intuitive interfaces that enhance user experience.'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      title: 'Web Development',
      description: 'Building responsive and performant websites.'
    }
  ];
  
  // Initialize slider
  document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = sliderSection.querySelector('.slider-track');
    const sliderDots = sliderSection.querySelector('.slider-dots');
    const prevArrow = sliderSection.querySelector('.prev-arrow');
    const nextArrow = sliderSection.querySelector('.next-arrow');
    
    let currentSlide = 0;
    
    // Create slides
    slides.forEach((slide, index) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'slide';
      slideElement.innerHTML = `
        <img src="${slide.image}" alt="${slide.title}">
        <div class="slide-caption">
          <h3>${slide.title}</h3>
          <p>${slide.description}</p>
        </div>
      `;
      sliderTrack.appendChild(slideElement);
      
      // Create dot
      const dot = document.createElement('button');
      dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('data-index', index);
      dot.addEventListener('click', () => goToSlide(index));
      sliderDots.appendChild(dot);
    });
    
    // Function to update slider position
    function updateSlider() {
      const slideWidth = sliderTrack.clientWidth;
      sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      
      // Update dots
      sliderSection.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }
    
    // Go to specific slide
    function goToSlide(index) {
      currentSlide = index;
      updateSlider();
    }
    
    // Next slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    }
    
    // Previous slide
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider();
    }
    
    // Event listeners
    nextArrow.addEventListener('click', nextSlide);
    prevArrow.addEventListener('click', prevSlide);
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    sliderSection.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    sliderSection.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Initialize
    updateSlider();
    
    // Handle window resize
    window.addEventListener('resize', updateSlider);
  });
  
  return sliderSection;
}

// Testimonial Slider
function initTestimonialSlider() {
  const testimonialTrack = document.querySelector('.testimonial-track');
  if (!testimonialTrack) return;
  
  const slides = testimonialTrack.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  
  let currentTestimonial = 0;
  
  function updateTestimonialSlider() {
    const slideWidth = testimonialTrack.clientWidth;
    testimonialTrack.style.transform = `translateX(-${currentTestimonial * slideWidth}px)`;
  }
  
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % slides.length;
    updateTestimonialSlider();
  }
  
  function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + slides.length) % slides.length;
    updateTestimonialSlider();
  }
  
  if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);
  if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);
  
  // Auto slide testimonials
  setInterval(nextTestimonial, 7000);
  window.addEventListener('resize', updateTestimonialSlider);
}

// Animated statistics
function initStatistics() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(stat => {
    const target = parseInt(stat.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
    }, 16);
  });
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize testimonial slider if exists
  initTestimonialSlider();
  
  // Initialize statistics animation if exists
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        initStatistics();
        observer.unobserve(entry.target);
      }
    });
  });
  
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
});

