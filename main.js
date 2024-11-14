addEventListener('load', async () => {
    let sw = await navigator.serviceWorker.register('service-worker.js');
})