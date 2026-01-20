const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));

const translations = {
  en: {
    "nav.download": "Download",
    "nav.how": "How it works",
    "nav.security": "Security",
    "nav.platforms": "Platforms",
    "nav.langLabel": "Language",
    "hero.eyebrow": "Fast, private file handoffs",
    "hero.title": "Send a file with a short code, not a long link.",
    "hero.lead":
      "Pushcode makes sharing feel simple and safe. Create a six-character code, share it, and your file arrives securely. Senders sign in, and only your device can open the file.",
    "hero.ctaPrimary": "Open the web app",
    "hero.ctaSecondary": "Download the apps",
    "hero.meta1Label": "Short-lived",
    "hero.meta1Value": "Codes expire fast",
    "hero.meta2Label": "Easy to share",
    "hero.meta2Value": "Six characters",
    "hero.meta3Label": "Works everywhere",
    "hero.meta3Value": "iOS · iPadOS · macOS · Windows · Linux CLI · Web",
    "hero.status1Title": "Waiting for the file",
    "hero.status1Body": "The sender signs in and uploads using your code.",
    "hero.status2Title": "Locked before it leaves",
    "hero.status2Body": "Your file stays private from start to finish.",
    "hero.status3Title": "Ready when you are",
    "hero.status3Body": "Download once, then it is gone.",
    "hero.tileLabel": "ACTIVE PUSHCODE",
    "hero.tileNote": "Tap to copy · expires in 58:14",
    "download.title": "Get Pushcode on every device.",
    "download.subtitle": "Download the apps so you are ready the moment a file arrives.",
    "download.iosLabel": "iOS & iPadOS",
    "download.iosTitle": "Download on the App Store",
    "download.iosNote": "Requires iOS 16.6 / iPadOS 16.6+",
    "download.macLabel": "macOS",
    "download.macTitle": "Download for Mac",
    "download.macNote": "Requires macOS 13.5 Ventura+",
    "download.winLabel": "Windows",
    "download.winTitle": "Download for Windows",
    "download.winNote": "Requires Windows 10+",
    "download.cta": "Download",
    "download.linuxLabel": "Linux CLI",
    "download.linuxTitle": "Install the CLI",
    "download.linuxNote": "x86_32 · amd64 · arm64",
    "download.webLabel": "Web",
    "download.webTitle": "Open in the browser",
    "download.open": "Open",
    "download.webNote": "Receive only (no sending)",
    "download.androidLabel": "Android",
    "download.androidTitle": "Coming soon",
    "download.androidNote": "Join the waitlist for early access",
    "download.select": "Select",
    "download.macSelect": "Mac download options",
    "download.macIntel": "Intel",
    "download.macApple": "Apple Silicon",
    "download.winSelect": "Windows download options",
    "download.win32": "32-bit",
    "download.win64": "64-bit",
    "download.linuxSelect": "Linux CLI download options",
    "download.linuxX86": "x86_32",
    "download.linuxAmd64": "amd64",
    "download.linuxArm64": "arm64",
    "how.title": "How it works (technical).",
    "how.subtitle":
      "Sender authenticates, fetches the receiver public key, encrypts the file locally, and uploads the encrypted container. The owner downloads and decrypts using their device key; the server never sees plaintext.",
    "how.step1Title": "Create pushcode + key",
    "how.step1Body": "The owner creates a pushcode bound to a device public key and short TTL.",
    "how.step2Title": "Encrypt & upload",
    "how.step2Body":
      "Sender authenticates, fetches the public key, encrypts the file locally, and uploads the encrypted container.",
    "how.step3Title": "Owner decrypts",
    "how.step3Body":
      "Owner downloads the container and decrypts with their device key; transfer closes after download or TTL.",
    "security.title": "Built for trust.",
    "security.subtitle": "Plain-English privacy that feels easy.",
    "security.card1Title": "Private by default",
    "security.card1Body": "Your files are locked before they leave your device.",
    "security.card1Tag": "Private",
    "security.card2Title": "Short-lived access",
    "security.card2Body": "Codes expire quickly, so old links do not hang around.",
    "security.card2Tag": "Short-lived",
    "security.card3Title": "Only the owner can open",
    "security.card3Body": "The file opens only on the device that made the code.",
    "security.card3Tag": "Owner-only",
    "security.card4Title": "Protected from guessing",
    "security.card4Body": "We block repeated guessing attempts.",
    "security.card4Tag": "Protection",
    "security.note":
      "In short: even if someone finds your code, they still cannot open the file without your device. It is designed to keep private stuff private.",
    "platforms.title": "Everywhere you work.",
    "platforms.subtitle": "Fast, simple apps built for each device.",
    "platforms.iosTitle": "iOS & iPadOS",
    "platforms.iosBody": "Quick sharing with a clean, mobile-first design.",
    "platforms.macTitle": "macOS",
    "platforms.macBody": "A lightweight menu-bar app for instant access.",
    "platforms.winTitle": "Windows",
    "platforms.winBody": "Tray-friendly, fast, and ready for daily work.",
    "platforms.linuxTitle": "Linux CLI",
    "platforms.linuxBody": "Scriptable transfers for terminals and CI.",
    "platforms.webTitle": "Web",
    "platforms.webBody": "Use it anywhere without installing anything.",
    "api.title": "How it works (technical).",
    "api.subtitle":
      "Files are encrypted on the sender’s device, uploaded as encrypted containers, and can only be opened by the owner’s device key.",
    "api.cardTitle": "Reliable, predictable transfers",
    "api.point1": "Short codes keep sharing effortless.",
    "api.point2": "Sender sign-in for accountability.",
    "api.point3": "Owner-only access to downloads.",
    "api.point4": "Works across desktop and mobile.",
    "api.cta": "Read the docs",
    "api.noteLabel": "Working description (for technical readers)",
    "api.noteBody":
      "Pushcode is an end-to-end encrypted file handoff system with short-lived codes, sender authentication, and owner-only downloads.",
    "cta.title": "Ready to share with confidence?",
    "cta.subtitle": "Join the private beta and start sending across all platforms.",
    "cta.primary": "Request access",
    "cta.secondary": "Talk to us",
    "footer.tagline": "Secure file sharing for individuals.",
    "footer.brandPrefix": "pushcode.io is a product of",
    "footer.brandLink": "dolani GmbH",
    "footer.copyright": "© 2025 dolani GmbH - from Tsüri🇨🇭 with ❤️",
    "footer.availability": "Available on iOS, iPadOS, macOS, Windows, Linux CLI, and web."
  },
  de: {
    "nav.download": "Download",
    "nav.how": "So funktioniert es",
    "nav.security": "Sicherheit",
    "nav.platforms": "Plattformen",
    "nav.langLabel": "Sprache",
    "hero.eyebrow": "Schnelle, private Dateifreigaben",
    "hero.title": "Dateien per kurzem Code senden, nicht per langem Link.",
    "hero.lead":
      "Pushcode macht das Teilen einfach und sicher. Erstelle einen sechsstelligen Code, teile ihn, und die Datei kommt geschützt an. Absender melden sich an, und nur dein Gerät kann sie öffnen.",
    "hero.ctaPrimary": "Web-App öffnen",
    "hero.ctaSecondary": "Apps herunterladen",
    "hero.meta1Label": "Kurzlebig",
    "hero.meta1Value": "Codes verfallen schnell",
    "hero.meta2Label": "Leicht zu teilen",
    "hero.meta2Value": "Sechs Zeichen",
    "hero.meta3Label": "Überall nutzbar",
    "hero.meta3Value": "iOS · iPadOS · macOS · Windows · Linux-CLI · Web",
    "hero.status1Title": "Warten auf die Datei",
    "hero.status1Body": "Der Absender meldet sich an und lädt mit deinem Code hoch.",
    "hero.status2Title": "Vor dem Senden gesperrt",
    "hero.status2Body": "Deine Datei bleibt von Anfang bis Ende privat.",
    "hero.status3Title": "Bereit, wenn du es bist",
    "hero.status3Body": "Einmal herunterladen, dann ist sie weg.",
    "hero.tileLabel": "AKTIVER PUSHCODE",
    "hero.tileNote": "Tippen zum Kopieren · läuft ab in 58:14",
    "download.title": "Pushcode auf jedem Gerät.",
    "download.subtitle": "Lade die Apps, damit du bereit bist, sobald eine Datei ankommt.",
    "download.iosLabel": "iOS & iPadOS",
    "download.iosTitle": "Im App Store laden",
    "download.iosNote": "Erfordert iOS 16.6 / iPadOS 16.6+",
    "download.macLabel": "macOS",
    "download.macTitle": "Für Mac laden",
    "download.macNote": "Erfordert macOS 13.5 Ventura+",
    "download.winLabel": "Windows",
    "download.winTitle": "Für Windows laden",
    "download.winNote": "Erfordert Windows 10+",
    "download.cta": "Laden",
    "download.linuxLabel": "Linux-CLI",
    "download.linuxTitle": "CLI installieren",
    "download.linuxNote": "x86_32 · amd64 · arm64",
    "download.webLabel": "Web",
    "download.webTitle": "Im Browser öffnen",
    "download.open": "Öffnen",
    "download.webNote": "Nur Empfang (kein Versand)",
    "download.androidLabel": "Android",
    "download.androidTitle": "Demnächst",
    "download.androidNote": "Auf die Warteliste für Early Access",
    "download.select": "Auswählen",
    "download.macSelect": "Mac-Download-Optionen",
    "download.macIntel": "Intel",
    "download.macApple": "Apple Silicon",
    "download.winSelect": "Windows-Download-Optionen",
    "download.win32": "32-Bit",
    "download.win64": "64-Bit",
    "download.linuxSelect": "Linux-CLI-Optionen",
    "download.linuxX86": "x86_32",
    "download.linuxAmd64": "amd64",
    "download.linuxArm64": "arm64",
    "how.title": "So funktioniert es (technisch).",
    "how.subtitle":
      "Absender authentifiziert sich, holt den öffentlichen Schlüssel des Empfängers, verschlüsselt lokal und lädt den verschlüsselten Container hoch. Der Besitzer lädt herunter und entschlüsselt mit dem Geräteschlüssel; der Server sieht keinen Klartext.",
    "how.step1Title": "Pushcode + Schlüssel",
    "how.step1Body": "Der Besitzer erstellt einen Pushcode mit Geräte‑Public‑Key und kurzer TTL.",
    "how.step2Title": "Verschlüsseln & hochladen",
    "how.step2Body":
      "Absender authentifiziert sich, holt den Public Key, verschlüsselt lokal und lädt den Container hoch.",
    "how.step3Title": "Besitzer entschlüsselt",
    "how.step3Body":
      "Besitzer lädt den Container herunter und entschlüsselt mit dem Geräteschlüssel; Abschluss nach Download oder TTL.",
    "security.title": "Für Vertrauen gebaut.",
    "security.subtitle": "Datenschutz in Klartext.",
    "security.card1Title": "Standardmäßig privat",
    "security.card1Body": "Dateien werden gesperrt, bevor sie dein Gerät verlassen.",
    "security.card1Tag": "Privat",
    "security.card2Title": "Kurzlebiger Zugriff",
    "security.card2Body": "Codes laufen schnell ab - keine alten Links.",
    "security.card2Tag": "Kurzlebig",
    "security.card3Title": "Nur der Besitzer öffnet",
    "security.card3Body": "Die Datei öffnet nur auf dem Gerät, das den Code erstellt hat.",
    "security.card3Tag": "Nur Besitzer",
    "security.card4Title": "Schutz vor Raten",
    "security.card4Body": "Wiederholtes Raten wird blockiert.",
    "security.card4Tag": "Schutz",
    "security.note":
      "Kurz gesagt: Selbst wenn jemand deinen Code findet, kann er die Datei ohne dein Gerät nicht öffnen. Privat bleibt privat.",
    "platforms.title": "Überall, wo du arbeitest.",
    "platforms.subtitle": "Schnelle, einfache Apps für jedes Gerät.",
    "platforms.iosTitle": "iOS & iPadOS",
    "platforms.iosBody": "Schnelles Teilen mit klarem, mobilem Design.",
    "platforms.macTitle": "macOS",
    "platforms.macBody": "Leichte Menüleisten-App für sofortigen Zugriff.",
    "platforms.winTitle": "Windows",
    "platforms.winBody": "Schnell, zuverlässig, ideal für den Alltag.",
    "platforms.linuxTitle": "Linux-CLI",
    "platforms.linuxBody": "Skriptfähig für Terminal und CI.",
    "platforms.webTitle": "Web",
    "platforms.webBody": "Überall nutzbar, ohne Installation.",
    "api.title": "So funktioniert es (technisch).",
    "api.subtitle":
      "Dateien werden auf dem Gerät des Absenders verschlüsselt, als verschlüsselte Container hochgeladen und können nur mit dem Geräteschlüssel des Besitzers geöffnet werden.",
    "api.cardTitle": "Zuverlässige Transfers",
    "api.point1": "Kurze Codes machen das Teilen leicht.",
    "api.point2": "Absender-Login für Verantwortung.",
    "api.point3": "Nur Besitzer können herunterladen.",
    "api.point4": "Funktioniert auf Desktop und Mobil.",
    "api.cta": "Dokumentation",
    "api.noteLabel": "Arbeitsbeschreibung (für Techniker)",
    "api.noteBody":
      "Pushcode ist ein Ende-zu-Ende-verschlüsseltes System für Dateiübergaben mit kurzen Codes, Absender-Login und Besitzer-Downloads.",
    "cta.title": "Bereit, sicher zu teilen?",
    "cta.subtitle": "Tritt der privaten Beta bei und sende auf allen Plattformen.",
    "cta.primary": "Zugang anfordern",
    "cta.secondary": "Kontakt aufnehmen",
    "footer.tagline": "Sicheres Teilen von Dateien für Einzelpersonen.",
    "footer.brandPrefix": "pushcode.io ist ein Produkt der",
    "footer.brandLink": "dolani GmbH",
    "footer.copyright": "© 2025 dolani GmbH - from Tsüri🇨🇭 with ❤️",
    "footer.availability": "Verfügbar für iOS, iPadOS, macOS, Windows, Linux-CLI und Web."
  },
  fr: {
    "nav.download": "Télécharger",
    "nav.how": "Comment ça marche",
    "nav.security": "Sécurité",
    "nav.platforms": "Plateformes",
    "nav.langLabel": "Langue",
    "hero.eyebrow": "Transferts rapides et privés",
    "hero.title": "Envoyez un fichier avec un code court, pas un long lien.",
    "hero.lead":
      "Pushcode rend le partage simple et sûr. Créez un code de six caractères, partagez-le et votre fichier arrive protégé. Les expéditeurs se connectent, et seul votre appareil peut l’ouvrir.",
    "hero.ctaPrimary": "Ouvrir l’app web",
    "hero.ctaSecondary": "Télécharger les apps",
    "hero.meta1Label": "Courte durée",
    "hero.meta1Value": "Les codes expirent vite",
    "hero.meta2Label": "Facile à partager",
    "hero.meta2Value": "Six caractères",
    "hero.meta3Label": "Partout",
    "hero.meta3Value": "iOS · iPadOS · macOS · Windows · Linux CLI · Web",
    "hero.status1Title": "En attente du fichier",
    "hero.status1Body": "L’expéditeur se connecte et envoie avec votre code.",
    "hero.status2Title": "Verrouillé avant l’envoi",
    "hero.status2Body": "Votre fichier reste privé du début à la fin.",
    "hero.status3Title": "Prêt quand vous l’êtes",
    "hero.status3Body": "Téléchargé une fois, puis supprimé.",
    "hero.tileLabel": "PUSHCODE ACTIF",
    "hero.tileNote": "Touchez pour copier · expire dans 58:14",
    "download.title": "Pushcode sur tous vos appareils.",
    "download.subtitle": "Téléchargez les apps pour être prêt dès qu’un fichier arrive.",
    "download.iosLabel": "iOS & iPadOS",
    "download.iosTitle": "Télécharger sur l’App Store",
    "download.iosNote": "Requiert iOS 16.6 / iPadOS 16.6+",
    "download.macLabel": "macOS",
    "download.macTitle": "Télécharger pour Mac",
    "download.macNote": "Requiert macOS 13.5 Ventura+",
    "download.winLabel": "Windows",
    "download.winTitle": "Télécharger pour Windows",
    "download.winNote": "Requiert Windows 10+",
    "download.cta": "Télécharger",
    "download.linuxLabel": "Linux CLI",
    "download.linuxTitle": "Installer la CLI",
    "download.linuxNote": "x86_32 · amd64 · arm64",
    "download.webLabel": "Web",
    "download.webTitle": "Ouvrir dans le navigateur",
    "download.open": "Ouvrir",
    "download.webNote": "Réception uniquement (pas d’envoi)",
    "download.androidLabel": "Android",
    "download.androidTitle": "Bientôt disponible",
    "download.androidNote": "Inscrivez-vous pour un accès anticipé",
    "download.select": "Sélectionner",
    "download.macSelect": "Options Mac",
    "download.macIntel": "Intel",
    "download.macApple": "Apple Silicon",
    "download.winSelect": "Options Windows",
    "download.win32": "32 bits",
    "download.win64": "64 bits",
    "download.linuxSelect": "Options Linux CLI",
    "download.linuxX86": "x86_32",
    "download.linuxAmd64": "amd64",
    "download.linuxArm64": "arm64",
    "how.title": "Fonctionnement (technique).",
    "how.subtitle":
      "L’expéditeur s’authentifie, récupère la clé publique du destinataire, chiffre localement puis envoie le conteneur chiffré. Le propriétaire télécharge et déchiffre avec sa clé d’appareil ; le serveur ne voit jamais le clair.",
    "how.step1Title": "Pushcode + clé",
    "how.step1Body": "Le propriétaire crée un pushcode lié à une clé publique d’appareil et à un TTL court.",
    "how.step2Title": "Chiffrer & envoyer",
    "how.step2Body":
      "L’expéditeur s’authentifie, récupère la clé publique, chiffre localement et envoie le conteneur chiffré.",
    "how.step3Title": "Déchiffrement propriétaire",
    "how.step3Body":
      "Le propriétaire télécharge le conteneur et déchiffre avec sa clé d’appareil ; clôture après téléchargement ou TTL.",
    "security.title": "Pensé pour la confiance.",
    "security.subtitle": "Une confidentialité simple à comprendre.",
    "security.card1Title": "Privé par défaut",
    "security.card1Body": "Les fichiers sont verrouillés avant de quitter votre appareil.",
    "security.card1Tag": "Privé",
    "security.card2Title": "Accès temporaire",
    "security.card2Body": "Les codes expirent vite, pas de vieux liens.",
    "security.card2Tag": "Court",
    "security.card3Title": "Seul le propriétaire ouvre",
    "security.card3Body": "Le fichier s’ouvre uniquement sur l’appareil qui a créé le code.",
    "security.card3Tag": "Propriétaire",
    "security.card4Title": "Protection contre le devinage",
    "security.card4Body": "Nous bloquons les tentatives répétées.",
    "security.card4Tag": "Protection",
    "security.note":
      "En bref : même si quelqu’un trouve votre code, il ne peut pas ouvrir le fichier sans votre appareil. C’est fait pour garder le privé privé.",
    "platforms.title": "Partout où vous travaillez.",
    "platforms.subtitle": "Des apps rapides et simples pour chaque appareil.",
    "platforms.iosTitle": "iOS & iPadOS",
    "platforms.iosBody": "Partage rapide avec un design mobile épuré.",
    "platforms.macTitle": "macOS",
    "platforms.macBody": "App discrète dans la barre de menus pour un accès instantané.",
    "platforms.winTitle": "Windows",
    "platforms.winBody": "Rapide, fiable, prêt pour le quotidien.",
    "platforms.linuxTitle": "Linux CLI",
    "platforms.linuxBody": "Transferts scriptables pour terminal et CI.",
    "platforms.webTitle": "Web",
    "platforms.webBody": "Utilisable partout, sans installation.",
    "api.title": "Fonctionnement (technique).",
    "api.subtitle":
      "Les fichiers sont chiffrés sur l’appareil de l’expéditeur, envoyés comme conteneurs chiffrés et ne peuvent être ouverts que par la clé de l’appareil du propriétaire.",
    "api.cardTitle": "Transferts fiables et prévisibles",
    "api.point1": "Des codes courts pour partager sans effort.",
    "api.point2": "Connexion des expéditeurs pour la traçabilité.",
    "api.point3": "Téléchargements réservés au propriétaire.",
    "api.point4": "Fonctionne sur desktop et mobile.",
    "api.cta": "Lire la doc",
    "api.noteLabel": "Description (pour lecteurs techniques)",
    "api.noteBody":
      "Pushcode est un système de transfert chiffré de bout en bout avec codes courts, connexion expéditeur et téléchargements réservés au propriétaire.",
    "cta.title": "Prêt à partager en toute confiance ?",
    "cta.subtitle": "Rejoignez la bêta privée et commencez à envoyer partout.",
    "cta.primary": "Demander l’accès",
    "cta.secondary": "Nous contacter",
    "footer.tagline": "Partage de fichiers sécurisé pour les particuliers.",
    "footer.brandPrefix": "pushcode.io est un produit de",
    "footer.brandLink": "dolani GmbH",
    "footer.copyright": "© 2025 dolani GmbH - from Tsüri🇨🇭 with ❤️",
    "footer.availability": "Disponible sur iOS, iPadOS, macOS, Windows, Linux CLI et web."
  }
};

const i18nElements = document.querySelectorAll("[data-i18n]");
const i18nTitleElements = document.querySelectorAll("[data-i18n-title]");
const i18nAriaElements = document.querySelectorAll("[data-i18n-aria]");
const languageSelect = document.querySelector("#lang-select");

const setLanguage = (lang) => {
  const pack = translations[lang] || translations.en;
  i18nElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (pack[key]) {
      el.textContent = pack[key];
    }
  });
  i18nTitleElements.forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (pack[key]) {
      el.setAttribute("title", pack[key]);
      el.setAttribute("aria-label", pack[key]);
    }
  });
  i18nAriaElements.forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (pack[key]) {
      el.setAttribute("aria-label", pack[key]);
    }
  });
  document.documentElement.lang = lang;
  if (languageSelect) {
    languageSelect.value = lang;
  }
  localStorage.setItem("pushcode-lang", lang);
};

const savedLang = localStorage.getItem("pushcode-lang");
const browserLang = navigator.language ? navigator.language.slice(0, 2) : "en";
const defaultLang = savedLang || (translations[browserLang] ? browserLang : "en");
setLanguage(defaultLang);

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
}

const dropdowns = document.querySelectorAll("[data-dropdown]");

const closeAllDropdowns = () => {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("open");
    const toggle = dropdown.querySelector(".dropdown-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
};

dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");
  const items = dropdown.querySelectorAll(".dropdown-item");

  if (toggle) {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = dropdown.classList.contains("open");
      closeAllDropdowns();
      if (!isOpen) {
        dropdown.classList.add("open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  }

  items.forEach((item) => {
    item.addEventListener("click", () => {
      closeAllDropdowns();
    });
  });
});

document.addEventListener("click", closeAllDropdowns);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllDropdowns();
  }
});

const downloadSelects = document.querySelectorAll(".download-select");
downloadSelects.forEach((select) => {
  select.addEventListener("change", (event) => {
    event.target.selectedIndex = 0;
  });
});
