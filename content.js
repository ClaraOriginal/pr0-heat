const style = document.createElement("style");
style.textContent = `
  span.tag span.vote-up,
  span.tag span.vote-down {
    color: white !important;
  }
`;
document.head.appendChild(style);

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "tags" && Array.isArray(msg.tags)) {
    msg.tags.forEach(tag => {
      const el = document.getElementById(`tag-${tag.id}`);
      if (!el) return;

      const conf = Math.pow(Math.max(0, Math.min(1, tag.confidence)),2);

      // Grundfarben als RGB
      const col1 = [0x16, 0x16, 0x18]; // #161618
      const col2 = [0x4b, 0x4b, 0x4b]; // #4b4b4b
      const col3 = [0xee, 0x4d, 0x2e]; // #ee4d2e

      // Interpolation: 0..0.5 -> col1→col2, 0.5..1 -> col2→col3
      let r, g, b;
      if (conf < 0.5) {
        const t = conf / 0.5;
        r = col1[0] + (col2[0] - col1[0]) * t;
        g = col1[1] + (col2[1] - col1[1]) * t;
        b = col1[2] + (col2[2] - col1[2]) * t;
      } else {
        const t = (conf - 0.5) / 0.5;
        r = col2[0] + (col3[0] - col2[0]) * t;
        g = col2[1] + (col3[1] - col2[1]) * t;
        b = col2[2] + (col3[2] - col2[2]) * t;
      }

      const color = `rgb(${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(0)})`;
      el.style.transition = "background-color 0.3s ease";
      el.style.backgroundColor = color;
    });
  }
});