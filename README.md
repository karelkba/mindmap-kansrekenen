# Mindmap Kansrekenen

Interactieve mindmap met AI-uitleg via de Anthropic API, gehost op Netlify.

## Stap-voor-stap deployen op Netlify

### 1. Zet de bestanden op GitHub

1. Ga naar github.com en log in
2. Klik op **New repository** (groene knop rechtsboven)
3. Geef het de naam `mindmap-kansrekenen`
4. Kies **Public** en klik **Create repository**
5. Upload de drie bestanden via **Add file → Upload files**:
   - `index.html`
   - `netlify.toml`
   - de map `netlify/functions/ask.js`

   (Sleep de hele mappenstructuur in één keer naar het uploadvenster)

6. Klik **Commit changes**

---

### 2. Verbind GitHub met Netlify

1. Ga naar [netlify.com](https://netlify.com)
2. Klik **Sign up with GitHub**
3. Na inloggen: klik **Add new site → Import an existing project**
4. Kies **GitHub** en selecteer de repository `mindmap-kansrekenen`
5. Laat alle instellingen standaard staan en klik **Deploy site**

Netlify detecteert automatisch het `netlify.toml` bestand.

---

### 3. Voeg je Anthropic API-sleutel toe

1. Ga in Netlify naar **Site configuration → Environment variables**
2. Klik **Add a variable**
3. Vul in:
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** jouw API-sleutel (begint met `sk-ant-...`)
4. Klik **Save**
5. Ga naar **Deploys** en klik **Trigger deploy → Deploy site**

---

### 4. Klaar!

Netlify geeft je een gratis URL zoals `https://jouw-naam.netlify.app`.  
Die URL werkt op elk toestel, overal ter wereld.

**Later delen met leerlingen:** stuur gewoon die URL door.

---

## Bestanden

```
mindmap-kansrekenen/
├── index.html                  ← de mindmap
├── netlify.toml                ← Netlify configuratie
└── netlify/
    └── functions/
        └── ask.js              ← serverless function (verbergt API-sleutel)
```
