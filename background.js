chrome.webRequest.onCompleted.addListener(
  async details => {
    if (details.url.startsWith("https://pr0gramm.com/api/items/info?itemId=")) {
      try {
        const res = await fetch(details.url);
        const data = await res.json();

        if (data.tags && Array.isArray(data.tags)) {
          // an alle Tabs mit pr0gramm Seite senden
          const tabs = await chrome.tabs.query({ url: "https://pr0gramm.com/*" });
          for (const tab of tabs) {
            chrome.tabs.sendMessage(tab.id, { type: "tags", tags: data.tags });
          }
        }
      } catch (err) {
        console.error("Fehler beim Verarbeiten der API:", err);
      }
    }
  },
  { urls: ["https://pr0gramm.com/api/items/info*"] }
);