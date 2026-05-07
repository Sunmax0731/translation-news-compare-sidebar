const status = document.getElementById("status");
document.getElementById("record").addEventListener("click", async () => {
  const payload = { savedAt: new Date().toISOString(), product: "translation-news-compare-sidebar" };
  if (globalThis.chrome?.storage?.local) {
    await chrome.storage.local.set({ "translation-news-compare-sidebar-last-note": payload });
  }
  status.textContent = "saved";
});
