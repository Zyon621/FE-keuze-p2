# Checklist Frameworks en Libraries

## Technische oplossing hoofdstructuur Frontend

Ik maak een webapplicatie voor een bloemist ("Florist") als Single Page Application met React. Het is één pagina met een navigatiebalk, een hero, categorieën, een shop-gedeelte en een footer. De pagina hoeft niet opnieuw te laden, omdat React de onderdelen in de browser bijwerkt.

**1. Welk frontend framework en waarom**
Ik gebruik React (19.3). Ik heb voor React gekozen omdat het met componenten werkt. Mijn pagina bestaat uit `Navbar`, `Hero`, `Shop` en `Footer`, die ik los kan maken en hergebruiken. React is ook reactief: met `useState` en `useEffect` past de pagina zich automatisch aan als de data verandert. De categorieën worden bijvoorbeeld pas getoond nadat ze zijn opgehaald. React heeft veel documentatie en een grote community.

**2. Welke browsers ondersteunt het framework**
React 19 werkt in alle moderne browsers: Chrome, Edge, Firefox en Safari, ook op mobiel. Internet Explorer wordt niet ondersteund.

**3. Gebruik ik een template**
Ik gebruik geen kant-en-klare design template. Ik ben gestart met het standaard Vite + React-project (`npm create vite@latest`). Het ontwerp is gemaakt met Bootstrap-componenten en mijn eigen CSS (`index.css`, `App.css`).

**4. Rol van een grid systeem**
Ik gebruik het Bootstrap 5 grid (`container`, `row`, `col-12 col-sm-6 col-lg-4`). Daarmee staan de categoriekaarten op een telefoon onder elkaar, op een tablet in 2 kolommen en op een laptop in 3 kolommen. Daarnaast gebruik ik Flexbox en eigen media queries (`max-width: 991.98px`, `767.98px` en `1024px`) om de pagina responsive te maken.

**5. Welke scripttalen gebruik ik**
- JavaScript (JSX) voor de logica en de opbouw van de componenten
- HTML (in `index.html` en in JSX)
- CSS voor de opmaak
- JSON voor de data (`categories.json`)
- npm-commando's om het project te starten en te bouwen

**6. Gebruik ik een CDN**
Nee. Ik heb React en Bootstrap met npm geïnstalleerd en importeer ze in `main.jsx`. Vite bundelt alles bij `npm run build`. Voordelen: ik zit vast aan een vaste versie, ik ben niet afhankelijk van een externe server, ik kan offline werken en ik kan JSX en modules gebruiken.

**7. Van welke andere libraries is het framework afhankelijk**
React heeft `react-dom` nodig om in de browser te renderen. Voor het ontwikkelen heb ik Node.js, npm en Vite nodig, met `@vitejs/plugin-react` om JSX te kunnen lezen. Bootstrap 5 gebruik ik voor de opmaak en de werking van de navbar (de inklapbare knop op mobiel), via `bootstrap.bundle.min.js`.

**8. Welke plug-ins gebruik ik**
- `@vitejs/plugin-react`: Vite-plugin voor JSX en Fast Refresh.
- Bootstrap JS bundle: voor de inklapbare navigatie.
- Oxlint: controleert mijn code op fouten (`npm run lint`).
- React Developer Tools (browserextensie): om componenten en state te bekijken.

---

## Minimale hardware eisen ontwikkelomgeving

| Apparaat | Specificaties |
|---|---|
| Laptop | Intel Core i5 / AMD Ryzen 5 of beter, minimaal 8 GB RAM, SSD met minimaal 256 GB, Windows 10 of 11 |
| Beeldscherm | Minimaal 1920 x 1080 (Full HD) |
| Muis en toetsenbord | Standaard muis en toetsenbord of touchpad |
| Internetverbinding | Nodig om packages met npm te installeren en voor documentatie |
| Smartphone | Om te testen of de site er goed uitziet op een mobiel scherm |

## Te gebruiken software ontwikkelomgeving

| Ontwikkeltool | Software | Versie |
|---|---|---|
| Besturingssysteem | Windows | 11 |
| IDE | Visual Studio Code | Nieuwste versie |
| Ondersteunende frameworks | Node.js, Vite | Node 24 LTS, Vite 8 |
| Webserver | Vite development server (`npm run dev`) | 8 |
| Database | Geen database, de data komt uit `categories.json` via `fetch()` | n.v.t. |
| Browsers | Chrome, Firefox, Edge | Nieuwste versie |
| Package manager | npm | 11 |
| Taskmanager | npm scripts (`dev`, `build`, `lint`, `preview`) | n.v.t. |
| Test software | Handmatig testen in de browser met DevTools, plus Oxlint | Nieuwste versie |
| Browser plug-ins | React Developer Tools | Nieuwste versie |

## Configuratie Ontwikkelomgeving

| Naam technologie | Gebruikte versie | Website | Reden |
|---|---|---|---|
| Frontend framework: React | 19.3 | https://react.dev | Bouwt de hele frontend met componenten en state. |
| Dependency library 1: Bootstrap | 5.3 | https://getbootstrap.com | Grid, navbar, cards en knoppen. Zorgt voor een responsive layout. |
| Dependency library 2: Vite | 8.3 | https://vite.dev | Build tool en development server. Ververst direct bij opslaan. |
| Dependency library 3: react-dom | 19.3 | https://react.dev | Rendert de React-componenten in de browser (`createRoot`). |
| Eventuele plugins | @vitejs/plugin-react 6, Oxlint 1 | https://github.com/vitejs/vite-plugin-react, https://oxc.rs | JSX-ondersteuning en code-controle. |
