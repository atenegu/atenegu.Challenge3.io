
var seconds = 10000;
var minutes = Math.floor((seconds-Math.floor((seconds/3600))*3600)/60);
var hours = Math.floor((seconds/3600));


function updateCountdown(){
	if(seconds >= 0){
		seconds -= 1;
		document.getElementById('countdown').innerHTML = 'Prepare for landing in: ' + seconds+ ' seconds.';



	}

}

window.onload = function(){
	setInterval(updateCountdown, 1000);
};

// MAP
mapboxgl.accessToken = 'pk.eyJ1IjoiYXRlbmVndSIsImEiOiJja2JybWNhYW0yeGg5Mnpwdjc0dnYwaHNjIn0.1nZB7jsd5IQtpCOgVdW99Q';

// MAP PROPERTIES
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-80.6026042562, 28.6050359132],
  zoom: 12,
	
});

	map.addControl(new mapboxgl.NavigationControl());




// DOGS
function getAPIdata() {

	api_key='65888810-772c-4132-8474-b3d6c37ddc80';

	var request2 ='https://api.thedogapi.com/v1/images/search?limit=1&page=100&order=DESC';
	fetch(request2)

	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	

	.then(function(response) {
		onAPISucces(response);	
	})
	
	
	.catch(function (error) {
		onAPIError(error);
	});
}

function onAPISucces(response) {


	console.log(response);
	document.getElementById('dog').innerHTML= '<img src="https://cdn2.thedogapi.com/images/'+response[0].id+'.jpg">';





}

				// MAP MARKER
	var myPopup1 = new mapboxgl.Popup().setHTML('<h3>LANDING SITE A</h3><h4>Territory size: 55 km2</h4><h4>Territory invaded: 80%</h4><h4>Time left until total invasion: 20 000 seconds</h4>');
	var myPopup2 = new mapboxgl.Popup().setHTML('<h3>LANDING SITE B</h3><h4>Territory size: 100 km2</h4><h4>Territory invaded: 50%</h4><h4>Time left until total invasion: 100 000 seconds</h4>');
	var marker1 = new mapboxgl.Marker().setLngLat([-80.60419,28.60815]).setPopup(myPopup1).addTo(map);
	var marker2 = new mapboxgl.Marker().setLngLat([-80.62091,28.62748]).setPopup(myPopup2).addTo(map);
           

function onAPIError(error) {
	console.error('Request failed', error);
}



document.getElementById('button1').onclick = function () {
	setTimeout(getAPIdata,10);
	document.getElementById('button2').style.backgroundColor = '#8A8E93';
	document.getElementById('button1').style.border = '5px solid #6B9AC4';
	document.getElementById('step2').style.color = '#ffffff';
	document.getElementById('next').style.backgroundColor = '#ffffff';
} 

document.getElementById('button2').onclick = function () {
	setTimeout(getAPIdata,10);
	document.getElementById('button1').style.backgroundColor = '#8A8E93';
		document.getElementById('button2').style.border = '5px solid #6B9AC4';
		document.getElementById('step2').style.color = '#ffffff';
	document.getElementById('next').style.backgroundColor = '#ffffff';
}




document.getElementById('next').onclick = function(){
	setTimeout(getAPIdata,10);
}

document.getElementById('dog').onclick = function(){

	document.getElementById('dog').style.border = '5px solid #6B9AC4';
	document.getElementById('step3').style.color = '#ffffff';
	document.getElementById('countdown').style.visibility = 'visible';
	document.body.style.animationIterationCount = '1';
}


// window.onload = function(){
// 	document.getElementById('color').style.animationPlayState = 'running';
// };


	// getAPIdata();
	/*document.getElementById('next').onclick = function () {
		getAPIdata();
	}*/
