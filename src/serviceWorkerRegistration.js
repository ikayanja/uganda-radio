// In src/serviceWorkerRegistration.js

// Check if the 'serviceWorker' API is available in the current environment
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered: ', registration);
        })
        .catch((registrationError) => {
          console.error('Service Worker registration failed: ', registrationError);
        });
    });
  } else {
    console.log('Service Worker API is not available in this environment.');
  }