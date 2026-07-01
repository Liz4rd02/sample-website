const navToggle = document.querySelector("[data-nav-toggle]");
const navPanel = document.querySelector("[data-nav-links]");
const yearTargets = document.querySelectorAll("[data-year]");
const langButtons = document.querySelectorAll("[data-lang-button]");
const bookingForm = document.querySelector("[data-booking-form]");
const formStatus = document.querySelector("[data-form-status]");

const translations = {
  it: {
    "meta.description": "Sito del Dott. [Nome Cognome], fisiatra. Visite fisiatriche, patologie trattate, trattamenti riabilitativi, contatti e prenotazioni.",
    "skip": "Vai al contenuto",
    "nav.label": "Navigazione principale",
    "brand.aria": "Dott. [Nome Cognome] home",
    "brand.name": "Dott. [Nome Cognome]",
    "brand.role": "Fisiatra",
    "nav.open": "Apri menu",
    "nav.home": "Home",
    "nav.about": "Chi sono",
    "nav.conditions": "Patologie trattate",
    "nav.treatments": "Trattamenti",
    "nav.contacts": "Contatti e dove sono",
    "nav.book": "Prenota la tua visita",
    "language.label": "Seleziona lingua",
    "hero.title": "Muoversi meglio, con una cura costruita sulla persona.",
    "hero.text": "Il fisiatra è il medico della riabilitazione: valuta dolore, movimento e autonomia, collega diagnosi e percorso terapeutico, e coordina le cure quando servono fisioterapia, infiltrazioni o controlli specialistici.",
    "hero.actions": "Azioni principali",
    "hero.primary": "Prenota la tua visita",
    "hero.secondary": "Scopri le patologie",
    "hero.noteAria": "Perche scegliere una visita fisiatrica",
    "hero.note": "Sceglierlo significa avere una lettura medica del problema, un piano realistico e indicazioni chiare su cosa fare prima, durante e dopo la riabilitazione.",
    "hero.imageAlt": "Studio di fisiatria con strumenti per valutazione muscoloscheletrica",
    "hero.caption": "Visite fisiatriche, valutazione funzionale e percorsi riabilitativi.",
    "intro.aria": "Introduzione alla fisiatria",
    "intro.text": "Una visita fisiatrica è utile quando il dolore limita gesti quotidiani, sport, lavoro o recupero dopo un intervento. L'obiettivo non è solo ridurre il sintomo, ma capire perché compare e come tornare a muoversi con sicurezza.",
    "about.title": "Chi sono",
    "about.photo": "Foto",
    "about.name": "Dott. [Nome Cognome]",
    "about.bio": "Medico specialista in Medicina Fisica e Riabilitativa. Mi occupo di dolore muscoloscheletrico, recupero funzionale e percorsi riabilitativi personalizzati.",
    "about.trainingTitle": "Formazione",
    "about.training1": "Laurea in Medicina e Chirurgia, [Università].",
    "about.training2": "Specializzazione in Medicina Fisica e Riabilitativa, [Istituto].",
    "about.training3": "Aggiornamento continuo su dolore, postura e recupero motorio.",
    "about.experienceTitle": "Esperienza",
    "about.experience1": "Valutazione di esiti post-traumatici e post-operatori.",
    "about.experience2": "Gestione di percorsi riabilitativi in età adulta e anziana.",
    "about.experience3": "Collaborazione con fisioterapisti e altri specialisti.",
    "about.skillsTitle": "Skills",
    "about.skills1": "Valutazione funzionale e impostazione del piano terapeutico.",
    "about.skills2": "Inquadramento del dolore articolare, tendineo e vertebrale.",
    "about.skills3": "Indicazioni per esercizio terapeutico, ausili e rientro alle attività.",
    "conditions.title": "Patologie trattate",
    "conditions.text": "Alcuni problemi arrivano da un trauma, altri da carichi ripetuti, postura, artrosi o recuperi incompleti. La visita serve a distinguere cosa richiede terapia, esercizio, approfondimenti o semplicemente un piano più ordinato.",
    "conditions.spineAlt": "Illustrazione medica della colonna vertebrale",
    "conditions.spineTitle": "Dolore cervicale, dorsale e lombare",
    "conditions.spineText": "Lombalgia, sciatalgia, cervicalgia, rigidità e dolore persistente dopo episodi acuti.",
    "conditions.jointAlt": "Illustrazione medica di spalla, ginocchio, anca e mano",
    "conditions.jointTitle": "Spalla, ginocchio, anca e mano",
    "conditions.jointText": "Tendinopatie, artrosi, borsiti, limitazioni articolari e recupero dopo interventi.",
    "conditions.traumaAlt": "Illustrazione medica del recupero dopo trauma o chirurgia",
    "conditions.traumaTitle": "Esiti di traumi e chirurgia",
    "conditions.traumaText": "Percorsi dopo fratture, distorsioni, protesi, immobilizzazioni o periodi di inattività.",
    "conditions.functionAlt": "Illustrazione medica del movimento e dell'equilibrio",
    "conditions.functionTitle": "Difficoltà nel movimento",
    "conditions.functionText": "Perdita di forza, equilibrio, autonomia o sicurezza nei gesti quotidiani.",
    "treatments.title": "Trattamenti",
    "treatments.visitTitle": "Visita fisiatrica",
    "treatments.visitText": "Anamnesi, esame obiettivo, valutazione del movimento e indicazioni pratiche per il percorso successivo.",
    "treatments.planTitle": "Piano riabilitativo",
    "treatments.planText": "Obiettivi chiari, priorità terapeutiche e coordinamento con fisioterapista o altri professionisti.",
    "treatments.infiltrationTitle": "Terapie infiltrative",
    "treatments.infiltrationText": "Quando indicate, possono aiutare a controllare dolore e infiammazione in modo mirato.",
    "treatments.followTitle": "Controlli e follow-up",
    "treatments.followText": "Verifica dei progressi, adattamento del programma e indicazioni per mantenere i risultati.",
    "contact.title": "Contatti e dove sono",
    "contact.text": "Per prenotare una visita in studio usa telefono o email. I segnaposto sono pronti per essere sostituiti con indirizzo, orari e canali ufficiali.",
    "contact.mapAria": "Mappa placeholder dello studio",
    "contact.map": "Mappa / embed Google Maps",
    "contact.clinic": "Studio medico [Nome Studio]",
    "contact.address1": "[Via e numero civico]",
    "contact.address2": "[CAP] [Città]",
    "contact.phoneLabel": "Telefono",
    "contact.emailLabel": "Email",
    "contact.hoursLabel": "Orari",
    "contact.hours": "Lun-Ven, su appuntamento",
    "contact.bookingLink": "Modalità di prenotazione",
    "booking.title": "Prenota la tua visita",
    "booking.text": "Al momento la prenotazione passa dai contatti dello studio. Per una visita online, invece, puoi usare il profilo MioDottore del medico.",
    "booking.optionsAria": "Opzioni di prenotazione",
    "booking.studioLabel": "Visita in studio",
    "booking.studioTitle": "Prenota tramite contatti",
    "booking.studioText": "Chiama lo studio o scrivi una email per concordare giorno, orario e documenti da portare.",
    "booking.call": "Chiama lo studio",
    "booking.email": "Scrivi una email",
    "booking.onlineLabel": "Visita online",
    "booking.onlineTitle": "Vai al profilo MioDottore",
    "booking.onlineText": "Per le visite online usa la pagina MioDottore del medico. Il link è un placeholder da sostituire con il profilo reale.",
    "booking.miodottore": "Apri MioDottore",
    "booking.nameLabel": "Nome e cognome",
    "booking.phoneLabel": "Telefono",
    "booking.reasonLabel": "Motivo della visita",
    "booking.reasonPlaceholder": "Seleziona",
    "booking.reasonPain": "Dolore muscoloscheletrico",
    "booking.reasonRehab": "Percorso riabilitativo",
    "booking.reasonFollow": "Controllo / follow-up",
    "booking.messageLabel": "Note utili",
    "booking.submit": "Invia richiesta",
    "booking.status": "La richiesta non invia dati reali finché non viene collegato un servizio di prenotazione.",
    "booking.success": "Richiesta preparata. Collega il form a email o gestionale per l'invio reale.",
    "footer.name": "Dott. [Nome Cognome]",
    "footer.role": "Medicina Fisica e Riabilitativa",
    "footer.aria": "Link footer",
    "footer.privacy": "Privacy",
    "footer.rights": "Dott. [Nome Cognome]. Tutti i diritti riservati."
  },
  en: {
    "meta.description": "Website for Dr. [Name Surname], physiatrist. Physical medicine visits, treated conditions, rehabilitation treatments, contacts and appointments.",
    "skip": "Skip to content",
    "nav.label": "Main navigation",
    "brand.aria": "Dr. [Name Surname] home",
    "brand.name": "Dr. [Name Surname]",
    "brand.role": "Physiatrist",
    "nav.open": "Open menu",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.conditions": "Treated conditions",
    "nav.treatments": "Treatments",
    "nav.contacts": "Contacts and location",
    "nav.book": "Book your visit",
    "language.label": "Choose language",
    "hero.title": "Move better, with care built around the person.",
    "hero.text": "A physiatrist is a rehabilitation medicine doctor: they assess pain, movement and independence, connect diagnosis with treatment, and coordinate care when physiotherapy, injections or specialist follow-ups are needed.",
    "hero.actions": "Main actions",
    "hero.primary": "Book your visit",
    "hero.secondary": "View conditions",
    "hero.noteAria": "Why choose a physiatry visit",
    "hero.note": "Choosing a physiatrist means getting a medical reading of the problem, a realistic plan and clear guidance on what to do before, during and after rehabilitation.",
    "hero.imageAlt": "Physiatry studio with musculoskeletal assessment tools",
    "hero.caption": "Physiatry visits, functional assessment and rehabilitation pathways.",
    "intro.aria": "Introduction to physiatry",
    "intro.text": "A physiatry visit is useful when pain limits daily movement, sport, work or recovery after surgery. The aim is not only to reduce symptoms, but to understand why they appear and how to return to safe movement.",
    "about.title": "About",
    "about.photo": "Photo",
    "about.name": "Dr. [Name Surname]",
    "about.bio": "Specialist in Physical and Rehabilitation Medicine. I work with musculoskeletal pain, functional recovery and personalized rehabilitation pathways.",
    "about.trainingTitle": "Training",
    "about.training1": "Degree in Medicine and Surgery, [University].",
    "about.training2": "Specialization in Physical and Rehabilitation Medicine, [Institute].",
    "about.training3": "Continuous education in pain, posture and motor recovery.",
    "about.experienceTitle": "Experience",
    "about.experience1": "Assessment of post-traumatic and post-surgical outcomes.",
    "about.experience2": "Management of rehabilitation pathways for adults and older patients.",
    "about.experience3": "Collaboration with physiotherapists and other specialists.",
    "about.skillsTitle": "Skills",
    "about.skills1": "Functional assessment and therapeutic planning.",
    "about.skills2": "Clinical framing of joint, tendon and spine pain.",
    "about.skills3": "Guidance for therapeutic exercise, aids and return to activity.",
    "conditions.title": "Treated conditions",
    "conditions.text": "Some issues come from trauma, others from repeated load, posture, osteoarthritis or incomplete recovery. The visit helps clarify what needs therapy, exercise, further tests or simply a more orderly plan.",
    "conditions.spineAlt": "Medical illustration of the spine",
    "conditions.spineTitle": "Neck, back and lower back pain",
    "conditions.spineText": "Low back pain, sciatica, neck pain, stiffness and persistent pain after acute episodes.",
    "conditions.jointAlt": "Medical illustration of shoulder, knee, hip and hand joints",
    "conditions.jointTitle": "Shoulder, knee, hip and hand",
    "conditions.jointText": "Tendinopathies, osteoarthritis, bursitis, joint limitations and post-surgical recovery.",
    "conditions.traumaAlt": "Medical illustration of recovery after trauma or surgery",
    "conditions.traumaTitle": "Trauma and surgery outcomes",
    "conditions.traumaText": "Pathways after fractures, sprains, prostheses, immobilization or periods of inactivity.",
    "conditions.functionAlt": "Medical illustration of movement and balance",
    "conditions.functionTitle": "Movement difficulties",
    "conditions.functionText": "Loss of strength, balance, independence or confidence in everyday gestures.",
    "treatments.title": "Treatments",
    "treatments.visitTitle": "Physiatry visit",
    "treatments.visitText": "Medical history, physical examination, movement assessment and practical guidance for the next steps.",
    "treatments.planTitle": "Rehabilitation plan",
    "treatments.planText": "Clear goals, therapeutic priorities and coordination with physiotherapists or other professionals.",
    "treatments.infiltrationTitle": "Injection therapies",
    "treatments.infiltrationText": "When indicated, they can help control pain and inflammation in a targeted way.",
    "treatments.followTitle": "Check-ups and follow-up",
    "treatments.followText": "Progress review, program adjustment and guidance to maintain results.",
    "contact.title": "Contacts and location",
    "contact.text": "To book an in-person appointment, use the practice phone or email. The placeholders are ready to be replaced with address, opening times and official contact channels.",
    "contact.mapAria": "Practice map placeholder",
    "contact.map": "Map / Google Maps embed",
    "contact.clinic": "Medical practice [Practice Name]",
    "contact.address1": "[Street and number]",
    "contact.address2": "[Postcode] [City]",
    "contact.phoneLabel": "Phone",
    "contact.emailLabel": "Email",
    "contact.hoursLabel": "Hours",
    "contact.hours": "Mon-Fri, by appointment",
    "contact.bookingLink": "Booking options",
    "booking.title": "Book your visit",
    "booking.text": "At the moment, in-person appointments are booked through the practice contact details. For an online visit, use the doctor's MioDottore profile.",
    "booking.optionsAria": "Booking options",
    "booking.studioLabel": "In-person visit",
    "booking.studioTitle": "Book through the contact details",
    "booking.studioText": "Call the practice or send an email to agree on the day, time and documents to bring.",
    "booking.call": "Call the practice",
    "booking.email": "Send an email",
    "booking.onlineLabel": "Online visit",
    "booking.onlineTitle": "Go to the MioDottore profile",
    "booking.onlineText": "For online visits, use the doctor's MioDottore page. This is a placeholder link to replace with the real profile.",
    "booking.miodottore": "Open MioDottore",
    "booking.nameLabel": "Full name",
    "booking.phoneLabel": "Phone",
    "booking.reasonLabel": "Reason for visit",
    "booking.reasonPlaceholder": "Select",
    "booking.reasonPain": "Musculoskeletal pain",
    "booking.reasonRehab": "Rehabilitation pathway",
    "booking.reasonFollow": "Check-up / follow-up",
    "booking.messageLabel": "Useful notes",
    "booking.submit": "Send request",
    "booking.status": "This request does not send real data until a booking service is connected.",
    "booking.success": "Request prepared. Connect the form to email or scheduling software for real submission.",
    "footer.name": "Dr. [Name Surname]",
    "footer.role": "Physical and Rehabilitation Medicine",
    "footer.aria": "Footer links",
    "footer.privacy": "Privacy",
    "footer.rights": "Dr. [Name Surname]. All rights reserved."
  }
};

const setLanguage = (language) => {
  const dictionary = translations[language] || translations.it;

  document.documentElement.lang = language;
  localStorage.setItem("site-language", language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (key && dictionary[key]) {
      element.setAttribute("alt", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (key && dictionary[key]) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const key = element.dataset.i18nContent;
    if (key && dictionary[key]) {
      element.setAttribute("content", dictionary[key]);
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.langButton === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const closeMenu = () => {
  if (!navToggle || !navPanel) return;
  navPanel.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
};

if (navToggle && navPanel) {
  navToggle.addEventListener("click", () => {
    const isOpen = navPanel.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navPanel.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langButton || "it");
    closeMenu();
  });
});

yearTargets.forEach((target) => {
  target.textContent = String(new Date().getFullYear());
});

const revealTargets = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

if (bookingForm && formStatus) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const language = document.documentElement.lang === "en" ? "en" : "it";
    formStatus.textContent = translations[language]["booking.success"];
    formStatus.classList.add("is-success");
    bookingForm.reset();
  });
}

setLanguage(localStorage.getItem("site-language") || "it");
