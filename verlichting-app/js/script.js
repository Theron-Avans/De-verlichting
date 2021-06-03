/*
	Project:    De Verlichting
	Opdracht:   MDEV - Theron Garay
	Doel:       Verkenning van pwa-bleutooth en aanverwante zaken
	Auteur:     Avans hogeschool
	Datum:      22 mei 2021
	Toelichting:Script dat direct runt, ongeacht DOM
					Handelt initiële zaken af ter voorbereiding
*/
console.log('> init.js');

if(navigator.bluetooth){
	console.log('Ja, wel bluetooth');
	console.log(navigator.bluetooth);
	console.log(navigator.bluetooth.getAvailability);
	console.log(navigator.bluetooth.getDevices);
	console.log(navigator.bluetooth.requestDevice);
	console.log(navigator.bluetooth.referringDevice);
} else {
	console.log('Nee, geen bluetooth');
}
