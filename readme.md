# 🔥 pr0‑heat

**pr0‑heat** ist eine Chrome‑Extension für [pr0gramm.com](https://pr0gramm.com),  
die Zusatzinformationen zu Beiträgen anzeigt – wie z. B. farblich hervorgehobene Tags anhand ihrer „Confidence“.

---

## 🧩 Features

- Markiert Tags mit einem Farbverlauf (`#161618 → #4b4b4b → #ee4d2e`) abhängig von ihrer *Confidence*
- Färbt positive/negative Votes (`+` / `−`) in Weiß für bessere Lesbarkeit
- Fängt API‑Requests zu  
  `https://pr0gramm.com/api/items/info?itemId=...`  
  im Hintergrund ab und verarbeitet das JSON‑Ergebnis automatisch
- Arbeitet vollständig client‑seitig (kein Server notwendig)

---

## 🚀 Installation (für Entwickler)

1. Projekt klonen oder herunterladen:
   ```bash
   git clone https://github.com/ClaraOriginal/pr0-heat.git
   cd pr0-heat
   ```

2. Chrome öffnen und zu  
   ```
   chrome://extensions/
   ```
   navigieren.

3. **Entwicklermodus aktivieren** (Schalter oben rechts).

4. **„Entpackte Erweiterung laden“** auswählen  
   und den Ordner wählen, der die Datei `manifest.json` enthält.

5. Erweiterung sollte nun in Chrome erscheinen und kann über das Symbol oder direkt auf  
   [https://pr0gramm.com](https://pr0gramm.com) getestet werden.

6. Bei Code‑Änderungen → in `chrome://extensions` auf **„Neu laden“** klicken.

---

## ⚙️ Projektstruktur

```
pr0-heat/
│
├─ manifest.json        # Definition der Extension
├─ background.js        # Fängt API‑Requests ab und sendet Daten an Content‑Script
├─ content.js           # Manipuliert DOM (Farben, Styles)
├─ content.css          # Optionales Styling für Votes usw.
└─ README.md            # Diese Datei
```

---

## 💡 Entwicklungshinweise

- Verwende `console.log()` für Debug‑Ausgaben.
- Um das Background‑Skript zu inspizieren:  
  `chrome://extensions` → bei pr0‑heat → **Service Worker → „Inspect“**
- Codeänderungen erfordern immer ein „Reload“ der Extension.

---

## 🧠 Ziel des Projekts

Ziel ist es, visuelles Feedback für Tag‑Daten innerhalb von pr0gramm zu geben  
und damit einen schnellen Überblick über Bewertungen von Tags zu schaffen.  
Die Erweiterung kann als Basis oder Experimentierplattform für weitere Features dienen.

---

## 📄 Lizenz

Dieses Projekt ist Open Source. Für Details siehe [LICENSE](LICENSE)
