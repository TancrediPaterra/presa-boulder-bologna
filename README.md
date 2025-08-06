# PresaB - Palestra di Arrampicata Popolare di Bologna

🧗‍♀️ Sito web per la palestra di arrampicata popolare di Bologna - Un ambiente inclusivo e accogliente per tutti i livelli di arrampicata.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple?logo=vite)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-blue?logo=css3)

## 🚀 Demo

**Live Demo**: Il sito è accessibile in locale su `http://localhost:8080`

## 📋 Caratteristiche

- ✅ **Vanilla JavaScript** - Nessun TypeScript, codice pulito e semplice
- ✅ **CSS Puro** - Nessun framework CSS, solo vanilla CSS con custom properties
- ✅ **React Router** - Navigazione client-side
- ✅ **Design Responsive** - Ottimizzato per desktop e mobile
- ✅ **Tema Climbing** - Design ispirato al mondo dell'arrampicata
- ✅ **Performance** - Bundle leggero e veloce
- ✅ **Accessibilità** - Semantic HTML e buone pratiche

## 🛠️ Tecnologie Utilizzate

- **[React](https://reactjs.org/)** (18.3.1) - Library per l'interfaccia utente
- **[Vite](https://vitejs.dev/)** (5.4.19) - Build tool e dev server
- **[React Router](https://reactrouter.com/)** (6.30.1) - Routing client-side
- **CSS Custom Properties** - Per il theming e la coerenza del design
- **JavaScript ES6+** - Sintassi moderna senza TypeScript

## 📁 Struttura del Progetto

```
presa-boulder-bologna/
├── public/                 # File statici
│   ├── favicon.ico
│   └── hero-climbing.jpg
├── src/
│   ├── components/         # Componenti React
│   │   ├── About.jsx       # Sezione chi siamo
│   │   ├── Contact.jsx     # Informazioni di contatto
│   │   ├── Footer.jsx      # Footer del sito
│   │   ├── Hero.jsx        # Sezione hero principale
│   │   └── Schedule.jsx    # Orari e attività
│   ├── pages/              # Pagine dell'applicazione
│   │   ├── Index.jsx       # Homepage
│   │   └── NotFound.jsx    # Pagina 404
│   ├── assets/             # Risorse statiche
│   ├── App.jsx             # Componente principale
│   ├── main.jsx            # Entry point
│   └── index.css           # Stili globali e tema
├── package.json            # Dipendenze del progetto
├── vite.config.js          # Configurazione Vite
└── README.md
```

## 🎨 Sistema di Design

Il progetto utilizza CSS Custom Properties per un sistema di design coerente:

```css
:root {
  /* Colori principali */
  --primary: hsl(20, 80%, 45%);     /* Arancione climbing */
  --accent: hsl(15, 70%, 55%);      /* Accento energico */
  --energy: hsl(15, 90%, 65%);      /* Energia e passione */
  --rock: hsl(25, 20%, 40%);        /* Grigio roccia */

  /* Tema scuro automatico */
  @media (prefers-color-scheme: dark) { ... }
}
```

## 🚀 Installazione e Sviluppo

### Prerequisiti

- **Node.js** (versione 16 o superiore)
- **npm** o **yarn**

### Setup Locale

```bash
# 1. Clona il repository
git clone https://github.com/TancrediPaterra/presa-boulder-bologna.git

# 2. Entra nella directory del progetto
cd presa-boulder-bologna

# 3. Installa le dipendenze
npm install

# 4. Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:8080`

### Comandi Disponibili

```bash
# Sviluppo
npm run dev          # Avvia il server di sviluppo

# Build
npm run build        # Crea la build di produzione
npm run build:dev    # Crea una build di sviluppo

# Linting
npm run lint         # Controlla il codice con ESLint

# Preview
npm run preview      # Preview della build di produzione
```

## 🎯 Sezioni del Sito

### 🏠 Homepage
- **Hero Section** - Immagine di sfondo con call-to-action
- **About** - Informazioni sulla palestra e la filosofia
- **Schedule** - Orari di apertura e attività disponibili
- **Contact** - Informazioni di contatto e mappa

### 📱 Responsive Design
- Design mobile-first
- Breakpoints ottimizzati per tutti i dispositivi
- Immagini responsive e contenuti adattivi

## 🎨 Personalizzazione

### Colori e Tema
Modifica le CSS custom properties in `src/index.css`:

```css
:root {
  --primary: hsl(20, 80%, 45%);     /* Colore principale */
  --accent: hsl(15, 70%, 55%);      /* Colore accento */
  --energy: hsl(15, 90%, 65%);      /* Colore energia */
  /* ... altri colori */
}
```

### Contenuti
I contenuti sono facilmente modificabili nei rispettivi componenti:
- `Hero.jsx` - Testo principale e call-to-action
- `About.jsx` - Informazioni sulla palestra
- `Schedule.jsx` - Orari e attività
- `Contact.jsx` - Informazioni di contatto

## 📦 Dipendenze

### Produzione
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.30.1"
}
```

### Sviluppo
```json
{
  "@vitejs/plugin-react": "^4.3.1",
  "vite": "^5.4.19",
  "eslint": "^9.32.0"
}
```

## 🚀 Deploy

### Build di Produzione
```bash
npm run build
```

I file di produzione saranno generati nella cartella `dist/`.

### Deploy su Servizi Cloud
Il progetto può essere facilmente deployato su:
- **Vercel** - Supporto nativo per Vite
- **Netlify** - Deploy automatico da Git
- **GitHub Pages** - Deploy gratuito
- **Firebase Hosting** - Hosting scalabile

## 🤝 Contribuire

1. Fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 👨‍💻 Autore

**Tancredi Paterra**
- GitHub: [@TancrediPaterra](https://github.com/TancrediPaterra)
- Repository: [presa-boulder-bologna](https://github.com/TancrediPaterra/presa-boulder-bologna)

## 🙏 Riconoscimenti

- Design ispirato dalla comunità di arrampicata bolognese
- Emoji climbing da Unicode Consortium
- Grazie alla community React e Vite per gli strumenti eccellenti

---

**Made with ❤️ for the Bologna climbing community**
