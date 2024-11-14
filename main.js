addEventListener('load', async () => {
    let sw = await navigator.serviceWorker.register('service-worker.js');
})
let publicVapidKey = '';

async function register() {
    var req = await fetch('http://localhost:5164/PushNotifications/Register', {
        method: 'POST',
        body: JSON.stringify(
            {
                "id": "471",
                "endpoint": "app.com",
                "name": "app.com"
            }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    var res = await req.json();
    publicVapidKey = res.apiKey;
}

async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey
    });
    fetch('http://localhost:5164/PushNotifications/Subscribe', {
        method: 'POST',
        body: JSON.stringify({
            "userId": "4",
            "endpoint": "euphonious-tanuki-23ddff.netlify.app",
            "p256dh": publicVapidKey,
            "auth": "string"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(JSON.stringify(push));
}