var deferredPrompt;

// Registratie van Service Worker
if('serviceWorker' in navigator){
	navigator.serviceWorker
	.register('../serviceworker.js')
	.then(function(){
		console.log('Service Worker is registrated!');
	});
}

// Gebruiker wordt gevraagd om app te installeren op homescreen
window.addEventListener('beforeinstallprompt', function(event){
	console.log('Beforeinstallprompt is fired!');
	event.preventDefault();
	deferredPrompt = event;
	return false;
});