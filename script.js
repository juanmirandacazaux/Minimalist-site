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


