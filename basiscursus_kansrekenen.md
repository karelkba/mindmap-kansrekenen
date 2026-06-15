# Basiscursus Kansrekenen

## Inhoudsopgave

1. Wat is kansrekenen?
2. Basisconcepten en definities
3. De rekenwetten van kansen
4. Combinatoriek: tellen op de slimme manier
5. Voorwaardelijke kans
6. Onafhankelijke en afhankelijke gebeurtenissen
7. De wet van de totale kans
8. De stelling van Bayes
9. Veelvoorkomende kansvraagstukken
10. Oefenopgaven met uitwerkingen

---

## 1. Wat is kansrekenen? {#overzicht}

Kansrekenen is de wiskundige studie van toeval en onzekerheid. Het geeft ons een taal en gereedschap om uitspraken te doen over hoe *waarschijnlijk* iets is — van het opgooien van een munt tot het voorspellen van het weer, medische diagnoses, en financiële risico's.

**Kans** (notatie: *P*) is altijd een getal tussen 0 en 1:

- **P = 0** betekent: de gebeurtenis is onmogelijk.
- **P = 1** betekent: de gebeurtenis is zeker.
- **P = 0,5** betekent: fifty-fifty.

:::samengevat{#overzicht}
Kansrekenen meet hoe waarschijnlijk iets is, uitgedrukt als een getal tussen 0 (onmogelijk) en 1 (zeker). Kernformules: P(A) = gunstig/totaal · P(Aᶜ) = 1−P(A) · P(A∪B) = P(A)+P(B)−P(A∩B) · P(A|B) = P(A∩B)/P(B) · Bayes: P(B|A) = P(A|B)·P(B)/P(A)
:::

---

## 2. Basisconcepten en definities {#basis}

### Experiment en uitkomstenruimte {#uitkomstenruimte}

Een **kansexperiment** is een handeling waarvan de uitkomst onzeker is (bijv. een dobbelsteen gooien).

De **uitkomstenruimte** Ω (omega) is de verzameling van alle mogelijke uitkomsten.

> **Voorbeeld:** Een zeszijdige dobbelsteen gooien.  
> Ω = {1, 2, 3, 4, 5, 6}

:::samengevat{#uitkomstenruimte}
De uitkomstenruimte Ω is de verzameling van ALLE mogelijke uitkomsten van een experiment. Dobbelsteen: Ω = {1,2,3,4,5,6} · Munt: Ω = {kop, munt} · Twee munten: Ω = {(K,K),(K,M),(M,K),(M,M)}. Het totaal aantal uitkomsten in Ω is de noemer in de klassieke kansformule.
:::

### Gebeurtenis {#gebeurtenis}

Een **gebeurtenis** A is een deelverzameling van Ω — een of meer uitkomsten die we interessant vinden.

> **Voorbeeld:** A = "een even getal gooien" = {2, 4, 6}

:::samengevat{#gebeurtenis}
Een gebeurtenis A is een deelverzameling van Ω. Voorbeeld: A = "even getal" = {2,4,6}. Bewerkingen: complement Aᶜ (alles wat niet in A zit) · doorsnede A∩B (wat in beide zit) · vereniging A∪B (wat in A of B zit).
:::

### Klassieke kansformule {#klassiek}

Als alle uitkomsten even waarschijnlijk zijn:

```
P(A) = aantal gunstige uitkomsten / totaal aantal mogelijke uitkomsten
```

> **Voorbeeld:** P(even getal) = 3/6 = 1/2 = 0,5

:::samengevat{#klassiek}
P(A) = gunstige uitkomsten / totaal aantal uitkomsten. Alleen geldig als alle uitkomsten even waarschijnlijk zijn. Voorbeelden: P(6 gooien) = 1/6 · P(even) = 3/6 = 0,5 · P(aas uit 52 kaarten) = 4/52 = 1/13.
:::

---

## 3. De rekenwetten van kansen {#rekenwetten}

### Complementregel {#complement}

De kans dat A *niet* optreedt (het complement, geschreven als Aᶜ of Ā):

```
P(Aᶜ) = 1 − P(A)
```

> **Voorbeeld:** De kans op *geen* zes bij een dobbelsteen:  
> P(geen 6) = 1 − 1/6 = 5/6 ≈ 0,833

:::samengevat{#complement}
P(Aᶜ) = 1 − P(A). Gebruik de complementregel als het makkelijker is om de kans op het TEGENOVERGESTELDE te berekenen. Voorbeeld: P(minstens één kop bij 3 munten) = 1 − P(geen kop) = 1 − (1/2)³ = 7/8.
:::

### Optellingsregel {#optelling}

#### Mutueel uitsluitende gebeurtenissen (A ∩ B = ∅)

Als A en B niet tegelijk kunnen optreden:

```
P(A ∪ B) = P(A) + P(B)
```

> **Voorbeeld:** P(1 of 2 gooien) = 1/6 + 1/6 = 2/6 = 1/3

#### Algemene optellingsregel

Als A en B wél tegelijk kunnen optreden:

```
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
```

> **Voorbeeld:** Bij een kaartspel (52 kaarten):  
> A = "een harten trekken" → P(A) = 13/52  
> B = "een aas trekken" → P(B) = 4/52  
> A ∩ B = "harten-aas trekken" → P(A ∩ B) = 1/52  
> P(A ∪ B) = 13/52 + 4/52 − 1/52 = 16/52 = 4/13

:::samengevat{#optelling}
Mutueel uitsluitend (A∩B=∅): P(A∪B) = P(A) + P(B). Algemeen: P(A∪B) = P(A) + P(B) − P(A∩B). Trek de doorsnede af om dubbeltelling te vermijden. Controleer altijd eerst of A en B tegelijk kunnen optreden.
:::

:::samengevat{#uitsluitend}
Mutueel uitsluitend: A en B kunnen NIET tegelijk optreden → P(A∪B) = P(A)+P(B). Overlappend: A en B KAN BEIDEN optreden → P(A∪B) = P(A)+P(B)−P(A∩B). Voorbeeld mutueel uitsluitend: "1 gooien" en "6 gooien". Voorbeeld overlappend: "harten" en "aas" (de harten-aas is allebei).
:::

---

## 4. Combinatoriek: tellen op de slimme manier {#combinatoriek}

Bij kansrekenen moeten we vaak uitkomsten tellen. Combinatoriek biedt daarvoor de gereedschappen. De centrale vraag is altijd: **telt de volgorde mee, en mag herhaling?**

:::samengevat{#combinatoriek}
Vier telmodellen: (1) volgorde telt, geen herhaling → Variatie V(n,k)=n!/(n−k)! (2) alle n rangschikken → Permutatie P(n)=n! (3) volgorde telt niet, geen herhaling → Combinatie C(n,k)=n!/(k!(n−k)!) (4) herhaling mag, volgorde telt niet → C_h(n,k)=C(n+k−1,k). Telprincipe: stap1×stap2×… mogelijkheden.
:::

---

### 4.1 De basisregel: het telprincipe

Als een handeling bestaat uit twee onafhankelijke stappen, waarbij stap 1 op *m* manieren kan en stap 2 op *n* manieren, dan zijn er in totaal **m × n** mogelijkheden.

> **Voorbeeld:** Een menu biedt 3 voorgerechten en 4 hoofdgerechten. Het aantal mogelijke combinaties is 3 × 4 = **12**.

Dit principe breidt zich uit naar meer stappen:

> **Voorbeeld:** Een wachtwoord van 4 cijfers (0–9): 10 × 10 × 10 × 10 = **10.000** mogelijkheden.

---

### 4.2 De faculteit (n!) {#faculteit}

De faculteit telt het aantal manieren om *n* verschillende objecten te rangschikken:

```
n! = n × (n−1) × (n−2) × … × 2 × 1
```

| n | n! |
|:---:|---:|
| 0 | 1 |
| 1 | 1 |
| 2 | 2 |
| 3 | 6 |
| 4 | 24 |
| 5 | 120 |
| 6 | 720 |
| 10 | 3.628.800 |

> **Voorbeeld:** Op hoeveel manieren kunnen 5 renners de finish passeren?  
> 5! = 120 manieren.

> **Bijzonderheid:** 0! = 1 per definitie — er is precies één manier om niets te rangschikken.

:::samengevat{#faculteit}
n! = n × (n−1) × … × 2 × 1. Betekenis: aantal manieren om n objecten te rangschikken. Per definitie: 0!=1. Tabel: 3!=6 · 5!=120 · 6!=720 · 10!=3.628.800. Voorbeeld: 5 renners kunnen op 5!=120 manieren finishen.
:::

---

### 4.3 Variaties — volgorde telt, geen herhaling {#variaties}

Een **variatie** is een geordende selectie van *k* objecten uit *n*, zonder herhaling.

```
V(n, k) = n! / (n − k)!
```

> **Voorbeeld:** Op hoeveel manieren kunnen de gouden, zilveren en bronzen medaille worden verdeeld onder 8 atleten?  
> V(8, 3) = 8! / 5! = 8 × 7 × 6 = **336**

:::samengevat{#variaties}
Variatie V(n,k): geordende keuze van k uit n, zonder herhaling. V(n,k) = n!/(n−k)!. Verschil met permutatie: bij een variatie kies je k uit n (k≤n); bij een permutatie rangschik je ALLE n elementen. Voorbeeld: goud/zilver/brons onder 8 atleten: V(8,3)=8×7×6=336.
:::

---

### 4.4 Permutaties P(n) {#permutaties}

Een **permutatie** is een rangschikking van *alle n* objecten. Speciaal geval van een variatie waarbij k = n.

```
P(n) = n!
```

**Permutaties met herhaling:** k posities, n soorten → nᵏ mogelijkheden

**Permutaties van niet-onderscheidbare objecten:**

```
Aantal = n! / (n₁! × n₂! × … × nₖ!)
```

> **Voorbeeld:** BANAAN: 6! / (1! × 3! × 2!) = **60**  
> **Voorbeeld:** MISSISSIPPI: 11! / (1! × 4! × 4! × 2!) = **34.650**

:::samengevat{#permutaties}
Permutatie P(n)=n!: rangschikking van ALLE n elementen. Met herhaling (pincode): nᵏ. Niet-onderscheidbaar: n!/(n₁!×n₂!×…). Voorbeelden: BANAAN (B×1,A×3,N×2): 6!/(1!×3!×2!)=60 · MISSISSIPPI: 11!/(1!×4!×4!×2!)=34.650.
:::

---

### 4.5 Permutaties van objecten die niet allemaal verschillend zijn

Als er herhalingen zitten in de objecten zelf, deel je de faculteit door de faculteiten van de herhalingen:

```
Aantal rangschikkingen = n! / (n₁! × n₂! × … × nₖ!)
```

> **Voorbeeld:** Op hoeveel manieren kunnen 3 rode, 2 blauwe en 1 groene vlag op een rij worden gehangen?  
> 6! / (3! × 2! × 1!) = 720 / 12 = **60**

---

### 4.6 Combinaties — volgorde telt niet, geen herhaling {#combinaties}

Een **combinatie** is een ongeordende selectie: je kiest *k* objecten uit *n* waarbij de volgorde niet uitmaakt.

```
C(n, k) = n! / (k! × (n − k)!)
```

> **Voorbeeld:** Op hoeveel manieren kun je een commissie van 3 personen samenstellen uit 8 kandidaten?  
> C(8, 3) = 8! / (3! × 5!) = 56

**Handige rekentrucs:**
- C(n, 0) = 1
- C(n, n) = 1
- C(n, k) = C(n, n−k) (symmetrie)

:::samengevat{#combinaties}
C(n,k) = n!/(k!×(n−k)!): ongeordende keuze van k uit n, geen herhaling. Eigenschappen: C(n,0)=1 · C(n,n)=1 · C(n,k)=C(n,n−k). Voorbeelden: commissie van 3 uit 8: C(8,3)=56 · lotto 6 uit 45: C(45,6)=8.145.060.
:::

#### De driehoek van Pascal {#pascal}

De waarden van C(n,k) staan in de driehoek van Pascal. Elke waarde is de som van de twee waarden erboven:

```
        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1
```

:::samengevat{#pascal}
Rij n van de driehoek geeft C(n,0) t/m C(n,n). Elke waarde = som van twee waarden erboven (Pascal's regel: C(n,k)=C(n−1,k−1)+C(n−1,k)). Som van rij n = 2ⁿ. Rij 4: 1 4 6 4 1 → C(4,0)=1, C(4,1)=4, C(4,2)=6, C(4,3)=4, C(4,4)=1.
:::

---

### 4.7 Combinaties met herhaling {#herhaling}

Als je *k* objecten kiest uit *n* soorten en herhaling is toegestaan:

```
C_h(n, k) = C(n + k − 1, k)
```

> **Voorbeeld:** 5 smaken, 3 bolletjes (herhaling mag, hoorntje = geen volgorde):  
> C_h(5, 3) = C(7, 3) = **35** mogelijkheden.

:::samengevat{#herhaling}
C_h(n,k) = C(n+k−1,k): ongeordende keuze van k uit n soorten, herhaling MAG. Vergelijking: zonder herhaling C(5,3)=10 · met herhaling C_h(5,3)=C(7,3)=35. Voorbeeld: ijssalon met 5 smaken, 3 bolletjes kiezen (smaken mogen herhalen): 35 mogelijkheden.
:::

---

### 4.8 Overzichtstabel: vier telmodellen

| | **Volgorde telt** | **Volgorde telt niet** |
|---|---|---|
| **Geen herhaling** | Variatie V(n,k) = n!/(n−k)! | Combinatie C(n,k) = n!/(k!(n−k)!) |
| **Herhaling toegestaan** | nᵏ | C_h(n,k) = C(n+k−1, k) |

---

### 4.9 De binomiaalcoëfficiënt en de binomiale stelling {#binstelling}

```
(a + b)ⁿ = Σ C(n,k) × aⁿ⁻ᵏ × bᵏ    (k van 0 tot n)
```

> **Voorbeeld:** (a + b)³ = a³ + 3a²b + 3ab² + b³

**Nuttige identiteiten:**
- Som van een rij: C(n,0) + … + C(n,n) = 2ⁿ
- Symmetrie: C(n,k) = C(n, n−k)
- Pascal's regel: C(n,k) = C(n−1, k−1) + C(n−1, k)

:::samengevat{#binstelling}
(a+b)ⁿ = Σ C(n,k)×aⁿ⁻ᵏ×bᵏ. Voorbeeld: (a+b)³ = a³+3a²b+3ab²+b³. De coëfficiënten zijn de getallen uit rij n van de driehoek van Pascal. Identiteiten: som rij = 2ⁿ · symmetrie C(n,k)=C(n,n−k) · Pascal C(n,k)=C(n−1,k−1)+C(n−1,k).
:::

---

### 4.10 Oefenopgaven combinatoriek (met uitwerkingen)

**Opgave C1**  
Op hoeveel manieren kunnen 6 personen in een rij staan?

**Uitwerking:** 6! = **720**

---

**Opgave C2**  
Op hoeveel manieren kan een voorzitter, secretaris en penningmeester worden gekozen uit een club van 15 leden?

**Uitwerking:** Volgorde telt, geen herhaling.  
V(15, 3) = 15 × 14 × 13 = **2.730**

---

**Opgave C3**  
Een lotto-ticket vereist het kiezen van 6 nummers uit 45. Hoeveel verschillende tickets zijn mogelijk?

**Uitwerking:** C(45, 6) = **8.145.060**

---

**Opgave C4**  
Op hoeveel manieren kunnen de letters van **MISSISSIPPI** worden gerangschikt?

**Uitwerking:** 11! / (1! × 4! × 4! × 2!) = **34.650**

---

**Opgave C5**  
Een klas van 20 leerlingen wordt verdeeld in twee groepen van 10. Op hoeveel manieren?

**Uitwerking:** C(20, 10) = **184.756**

---

**Opgave C6**  
Een menu biedt 4 soepen, 6 hoofdgerechten en 3 desserts. Hoeveel menu's zijn mogelijk?

**Uitwerking:** 4 × 6 × 3 = **72**

---

## 5. Voorwaardelijke kans {#voorwaardelijk}

De **voorwaardelijke kans** P(A | B) is de kans op A, *gegeven dat* B al is opgetreden.

```
P(A | B) = P(A ∩ B) / P(B)     [geldig als P(B) > 0]
```

> **Voorbeeld:** Klas met 18 meisjes en 12 jongens. 6 meisjes dragen bril.  
> P(bril | meisje) = (6/30) / (18/30) = 6/18 = 1/3 ≈ 0,333

:::samengevat{#voorwaardelijk}
P(A|B) = P(A∩B)/P(B): kans op A gegeven dat B al is opgetreden. We verkleinen de uitkomstenruimte naar alleen de uitkomsten waar B optreedt. Vermenigvuldigingsregel: P(A∩B) = P(A|B)×P(B). Voorbeeld: klas 18 meisjes/12 jongens, 6 meisjes met bril → P(bril|meisje) = 6/18 = 1/3.
:::

:::samengevat{#formule-vk}
P(A|B) = P(A∩B)/P(B). Termen: P(A|B) = wat we willen weten · P(A∩B) = kans dat A én B allebei optreden · P(B) = kans op B (moet >0 zijn). Vermenigvuldigingsregel (omgekeerd): P(A∩B) = P(A|B)×P(B).
:::

### De vermenigvuldigingsregel

```
P(A ∩ B) = P(A | B) × P(B)
```

---

## 6. Onafhankelijke en afhankelijke gebeurtenissen {#onafhankelijk}

### Onafhankelijke gebeurtenissen

A en B zijn **onafhankelijk** als het optreden van B geen invloed heeft op de kans van A:

```
P(A | B) = P(A)   →   P(A ∩ B) = P(A) × P(B)
```

> **Voorbeeld:** Munt twee keer opgooien.  
> P(kruis, dan munt) = 1/2 × 1/2 = 1/4

### Afhankelijke gebeurtenissen

> **Voorbeeld:** Twee azen trekken zonder terugleggen.  
> P(eerste aas) = 4/52  
> P(tweede aas | eerste aas) = 3/51  
> P(beide azen) = 4/52 × 3/51 = 1/221

:::samengevat{#onafhankelijk}
Onafhankelijk: P(A|B)=P(A) → P(A∩B)=P(A)×P(B). Afhankelijk: eerste uitkomst beïnvloedt de tweede. Onafhankelijk voorbeeld: munt 2×: P(K,M)=1/2×1/2=1/4. Afhankelijk voorbeeld: 2 azen zonder terugleggen: P=4/52×3/51=1/221.
:::

---

## 7. De wet van de totale kans {#totale-kans}

Als B₁, B₂, …, Bₙ een partitie vormen van Ω:

```
P(A) = P(A | B₁)·P(B₁) + P(A | B₂)·P(B₂) + … + P(A | Bₙ)·P(Bₙ)
```

> **Voorbeeld:** Machine X (60%, 2% defect) en machine Y (40%, 5% defect):  
> P(defect) = 0,02 × 0,60 + 0,05 × 0,40 = 0,012 + 0,020 = **0,032 (3,2%)**

:::samengevat{#totale-kans}
P(A) = Σ P(A|Bᵢ)·P(Bᵢ): splits de uitkomstenruimte in deelscenario's B₁,B₂,… (mutueel uitsluitend en uitputtend) en tel de gewogen deelkansen op. Voorbeeld: machine X (60%, 2% defect) + Y (40%, 5% defect) → P(defect)=0,02×0,60+0,05×0,40=3,2%.
:::

---

## 8. De stelling van Bayes {#bayes}

De stelling van Bayes draait de voorwaardelijke kans om:

```
P(B | A) = P(A | B) × P(B) / P(A)
```

> **Voorbeeld (medische test):**  
> P(ziek) = 0,01 · P(+|ziek) = 0,99 · P(+|gezond) = 0,05  
> P(+) = 0,99×0,01 + 0,05×0,99 = 0,0594  
> P(ziek|+) = (0,99×0,01)/0,0594 ≈ **16,7%**  
> Ondanks positieve test slechts 16,7% — omdat de ziekte zeldzaam is!

:::samengevat{#bayes}
P(B|A) = P(A|B)×P(B)/P(A): draait de voorwaardelijke kans om. Stappen: (1) bepaal prior P(B) (2) bepaal likelihood P(A|B) (3) bereken P(A) via wet totale kans (4) vul in. Medisch voorbeeld: ziekte 1%, test 99% sensitief, 5% vals-positief → P(ziek|+)≈16,7% (basisfrequentie is cruciaal!).
:::

:::samengevat{#formule-bayes}
P(B|A) = P(A|B)×P(B)/P(A). Termen: P(B|A)=posterior (wat we willen) · P(A|B)=likelihood (wat we weten) · P(B)=prior (basisfrequentie) · P(A)=totale kans (via wet totale kans). Bereken P(A) altijd eerst via: P(A)=P(A|B)·P(B)+P(A|Bᶜ)·P(Bᶜ).
:::

:::samengevat{#medisch}
Ziekte 1%: P(ziek)=0,01 · Test positief als ziek: P(+|ziek)=0,99 · Vals-positief: P(+|gezond)=0,05. Berekening: P(+)=0,99×0,01+0,05×0,99=0,0594. P(ziek|+)=0,0099/0,0594≈16,7%. Conclusie: positieve test ≠ zeker ziek — de zeldzaamheid van de ziekte domineert.
:::

:::samengevat{#toepassingen}
Bayes in de praktijk: spam-filters (P(spam|woord) berekend op basis van trainingsdata) · medische diagnose (testresultaat + basisfrequentie) · rechtbank (prosecutor's fallacy vermijden: P(match|onschuldig)≠P(onschuldig|match)) · AI en machine learning (Bayesiaanse netwerken modelleren onzekerheid).
:::

---

## 9. Veelvoorkomende kansvraagstukken {#bijzonder}

### Het verjaardagsprobleem {#verjaardag}

```
P(geen match) = 365/365 × 364/365 × … × (365−n+1)/365
P(minstens 1 match) = 1 − P(geen match)
```

| Groepsgrootte | Kans op match |
|:---:|:---:|
| 10 | 11,7% |
| 23 | **50,7%** |
| 30 | 70,6% |
| 50 | 97,0% |

:::samengevat{#verjaardag}
P(minstens 1 match) = 1 − P(niemand zelfde verjaardag). P(geen match) = 365/365 × 364/365 × … × (365−n+1)/365. Verrassend: bij slechts 23 personen is de kans al >50% — omdat er C(23,2)=253 mogelijke paren zijn. Bij 50 personen: 97%.
:::

### De binomiale verdeling {#binomiaal}

```
P(k successen in n pogingen) = C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ
```

> Bij 10 munten, kans op precies 7 keer kruis:  
> P = C(10,7) × (0,5)⁷ × (0,5)³ = 120/1024 ≈ **11,7%**

:::samengevat{#binomiaal}
P(k) = C(n,k)×pᵏ×(1−p)ⁿ⁻ᵏ: kans op precies k successen bij n onafhankelijke pogingen met kans p. Componenten: C(n,k)=aantal manieren · pᵏ=kans op k successen · (1−p)ⁿ⁻ᵏ=kans op mislukkingen. Voorbeeld: 10 munten, 7× kruis: C(10,7)×(0,5)¹⁰=120/1024≈11,7%.
:::

---

## 10. Oefenopgaven met uitwerkingen

### Opgave 1
Een dobbelsteen wordt één keer gegooid. Wat is de kans op een getal groter dan 4?

**Uitwerking:** P(>4) = 2/6 = **1/3 ≈ 0,333**

---

### Opgave 2
Twee dobbelstenen worden gegooid. Wat is de kans dat de som 7 is?

**Uitwerking:** 6 combinaties op 36 → P(som=7) = **1/6 ≈ 0,167**

---

### Opgave 3
Vaas met 5 rode en 3 blauwe knikkers. Twee trekken zonder terugleggen. Kans dat beide rood?

**Uitwerking:** 5/8 × 4/7 = 20/56 = **5/14 ≈ 0,357**

---

### Opgave 4
Kaart trekken uit 52. Kans op heer of rode kaart?

**Uitwerking:** 4/52 + 26/52 − 2/52 = **28/52 = 7/13 ≈ 0,538**

---

### Opgave 5
Klas: 70% slaagt voor wiskunde, 60% voor Nederlands, 50% voor beide. Kans op minstens één?

**Uitwerking:** 0,70 + 0,60 − 0,50 = **0,80 (80%)**

---

### Opgave 6 (Bayes)
Lijn A (70%, 3% defect) en lijn B (30%, 7% defect). Product is defect. Kans dat het van lijn A komt?

**Uitwerking:**  
P(defect) = 0,03×0,70 + 0,07×0,30 = 0,042  
P(A|defect) = 0,021/0,042 = **0,50 (50%)**

---

## Samenvatting van de belangrijkste formules

| Concept | Formule |
|---|---|
| Klassieke kans | P(A) = gunstig / totaal |
| Complement | P(Aᶜ) = 1 − P(A) |
| Optelling (uitsluitend) | P(A ∪ B) = P(A) + P(B) |
| Optelling (algemeen) | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) |
| Voorwaardelijke kans | P(A \| B) = P(A ∩ B) / P(B) |
| Vermenigvuldiging (afhankelijk) | P(A ∩ B) = P(A \| B) × P(B) |
| Vermenigvuldiging (onafhankelijk) | P(A ∩ B) = P(A) × P(B) |
| Variatie | V(n,k) = n! / (n−k)! |
| Permutatie | P(n) = n! |
| Combinaties | C(n,k) = n! / (k!(n−k)!) |
| Combinaties met herhaling | C_h(n,k) = C(n+k−1, k) |
| Wet van de totale kans | P(A) = Σ P(A \| Bᵢ)·P(Bᵢ) |
| Bayes | P(B \| A) = P(A \| B)·P(B) / P(A) |
| Binomiaal | P(k) = C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ |

---

*Veel succes met studeren! Kansrekenen is lastig in het begin, maar met oefening worden de patronen snel herkenbaar.*

---

## 11. Praktisch {#praktisch}

### Stappenplan voor het bepalen van het aantal mogelijkheden {#stappenplan}

Elk vraagstuk over het tellen van mogelijkheden kun je oplossen door de volgende stappen te volgen. Altijd in dezelfde volgorde, zonder giswerk of aanvoelen.

---

**Stap 1: Schrijf één concreet eindresultaat op**

Schrijf letterlijk op hoe één uitkomst eruit ziet.
Tel de elementen → dat is **k**.

> Comité van 3 uit 25: (Jan, Piet, An) → k = 3
> Cijferslot: (3, 8, 4, 7) → k = 4
> Outfit: (hemd 2, broek 7, hoed 1) → k = 3

---

**Stap 2: Bepaal per slot de groepsgrootte**

Waaruit kies je bij elk slot? → geeft **n1, n2, n3, ...**

> Comité: slot 1 uit 25, slot 2 uit 24, slot 3 uit 23
> Cijferslot: elk slot uit {0,...,9}
> Outfit: slot 1 uit 4 hemden, slot 2 uit 13 broeken, slot 3 uit 3 hoeden

**⚠️ Opgelet! Komen alle slots uit dezelfde groep?**

- **Nee** → verschillende groepen → n1 × n2 × n3 × ... → **klaar**
- **Ja** → zelfde groep → ga door naar stap 3

---

**Stap 3: Raadpleeg de determinatietabel**

| Volgorde belangrijk? | Herhaling? | Formule | Voorbeeld |
|---|---|---|---|
| Ja (slots benoemd) | Ja | nᵏ | Cijferslot: (3,8,4,7) |
| Ja (slots benoemd) | Nee | V(n,k) = n!/(n−k)! | Podium: (Jana, Piet, An) |
| Nee (slots anoniem) | Nee | C(n,k) = n!/(k!(n−k)!) | Comité: {Jana, Piet, An} |
| Nee (slots anoniem) | Ja | C_h(n,k) = C(n+k−1,k) | IJsje: {aardbei, aardbei, vanille} |

---

:::samengevat{#stappenplan}
Stap 1: Schrijf één concreet eindresultaat op → tel de elementen → dat is k · Stap 2: Bepaal per slot de groepsgrootte → n1, n2, n3, ... · ⚠️ Komen alle slots uit dezelfde groep? Nee → n1×n2×n3×... → klaar. Ja → stap 3 · Stap 3: Determinatietabel → Volgorde ja + herhaling ja → nᵏ · Volgorde ja + herhaling nee → V(n,k) · Volgorde nee + herhaling nee → C(n,k) · Volgorde nee + herhaling ja → C_h(n,k)
:::
