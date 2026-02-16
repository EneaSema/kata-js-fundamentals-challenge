
# Kata: JS Fundamentals Challenge

## Introduzione

In questo esercizio ti eserciterai con i fondamenti di JavaScript. Dovrai:
1. **Chiamare funzioni** già esistenti passando i parametri corretti
2. **Creare nuove funzioni** che restituiscono un valore (usando `return`) in base ai requisiti specificati

Questo è un esercizio pratico per imparare a scrivere codice JavaScript funzionante!

## Setup (Preparazione dell'ambiente)

1. **Fai il fork** di questo repository e clona la tua versione sulla tua macchina
2. **Apri il progetto** nel tuo editor di codice (es. VS Code)
3. **Installa le dipendenze** eseguendo questo comando nel terminale dalla directory principale del progetto:
   ```bash
   npm ci
   ```
   Questo comando scarica tutti gli strumenti necessari per verificare il tuo codice.

## Come lavorare: Istruzioni passo-passo

### 1. Parti dall'esempio
- Apri il file `src/00-example.js` per vedere alcuni esempi di funzioni già complete
- Questo ti darà un'idea di come dovrebbe essere strutturato il tuo codice

### 2. Scegli un file su cui lavorare
I file nella cartella `src/` sono ordinati per difficoltà:
- `01-for-loop-basic.js` - Cicli for di base
- `02-for-loop-and-arrays.js` - Cicli for con array
- `03-objects.js` - Lavorare con gli oggetti
- `04-calling-functions.js` - Chiamare funzioni esistenti
- `05-creating-functions.js` - Creare nuove funzioni
- `06-array-methods.js` - Metodi degli array

### 3. Leggi i commenti e scrivi il codice
- Ogni file contiene **commenti numerati** (es. `// 1. Define a function that takes a number...`)
- Questi commenti ti dicono **cosa devi fare**
- **Scrivi il tuo codice subito sotto** il commento corrispondente

### 4. Prova il tuo codice manualmente
Prima di eseguire i test, puoi verificare che il tuo codice funzioni:
- Aggiungi dei `console.log()` per stampare i risultati
- Esegui il file con Node.js, ad esempio:
  ```bash
  node src/01-for-loop-basic.js
  ```

## Cosa sono gli Unit Test? (e come usarli qui)

### Breve spiegazione
Gli **unit test** sono piccoli programmi automatici che verificano se il tuo codice funziona correttamente. Invece di testare manualmente ogni funzione, i test lo fanno per te in modo automatico e veloce.

**Pensa ai test come a un correttore automatico:**
- Tu scrivi le funzioni nei file `src/`
- I test (nella cartella `spec/`) controllano se le tue funzioni funzionano correttamente
- Ti danno un feedback immediato: ✅ PASS (corretto) o ❌ FAIL (da correggere)

**Non dovrai scrivere i test** - sono già pronti! Il tuo compito è scrivere il codice che li fa passare.

### Vuoi approfondire? 📚
Se sei curioso e vuoi saperne di più sugli unit test e Jest:
- **[Jest - Getting Started](https://jestjs.io/docs/getting-started)**
- **[Introduzione a Jest su dev.to](https://dev.to/kiraaziz/introduction-to-jest-bnf)**

### Come verificare le tue soluzioni con i test

#### Testare un singolo file
Per verificare le soluzioni di un file specifico, esegui:
```bash
npx jest spec/01-for-loop-basic.spec.js
```
Sostituisci il nome del file con quello corrispondente al file `src/` su cui stai lavorando.

#### Testare tutto insieme
Per eseguire tutti i test in una volta:
```bash
npm test
```

### Come interpretare i risultati

**All'inizio (prima di scrivere codice):**
- Vedrai molti ❌ `FAIL` rossi → è normale! Significa che il codice non è ancora completo
- Solo i test di esempio 00 saranno verdi ✅ `PASS`

Esempio di output iniziale:

![](./img/test-report.png)

**Durante il lavoro:**
- Ogni volta che completi una funzione correttamente, il test corrispondente diventerà ✅ `PASS`
- Se un test fallisce, leggi il messaggio di errore: ti dice **cosa non funziona** e **cosa si aspettava**

**Quando hai finito:**
- Tutti i test dovranno essere verdi ✅ `PASS`
- Questo significa che tutte le tue funzioni funzionano correttamente!

## Consigli pratici

1. **Lavora un file alla volta** - non cercare di fare tutto insieme
2. **Leggi attentamente i commenti** - ti dicono esattamente cosa fare
3. **Testa spesso** - esegui i test dopo ogni funzione che scrivi
4. **Leggi i messaggi di errore** - contengono informazioni preziose su cosa correggere
5. **Usa console.log()** per capire cosa sta succedendo nel tuo codice
6. **Consulta l'esempio** (`00-example.js`) se sei bloccato

## Risoluzione problemi

- **I test non partono?** Assicurati di aver eseguito `npm ci` per installare le dipendenze
- **Non capisci un errore?** Leggi con calma il messaggio: di solito dice cosa si aspettava e cosa ha ricevuto
- **Il codice funziona con console.log ma il test fallisce?** Controlla che la tua funzione faccia `return` del valore (non solo `console.log`)

Buon lavoro! 🚀

