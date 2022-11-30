const Install = document.getElementById('InstallButton');

window.addEventListener('InstallPrompt', (event) => {
    window.deferredPrompt = event;
  Install.classList.toggle("hidden", false);
});

Install.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  Install.classList.toggle("hidden", true);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});