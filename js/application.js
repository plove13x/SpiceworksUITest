// Here's the initial data. Again: don't worry about persistence :)
data = [
  { name: "Mark-Paul Gosselaar", photo_url: "" },
  { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
  { name: "Alf", photo_url: "img/avatars/alf.png" },
  { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
  { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
  { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
  { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
  { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
];



var thumbnails = $('#thumbnails');

function displayCards(data) {
	thumbnails.html("");
	data.forEach(function(data){
		if (!data.photo_url) {
			data.photo_url = "img/default.png";
		}
		thumbnails.prepend('<li><div class="celebCard"><div class="photoFrame"><img class="celebPhoto" src="' + data.photo_url + '"></div><div class="celebName">' + data.name + '</div></div><div class="hoverX"><img data-celebName="' + data.name + '" src="img/close.png"></div></li>');
	});

	$('li').hover(function(event){
		$(this).children('.hoverX').toggle();
	});

	$('.hoverX img').click(function(event){

		var celebToRemove = $(event.target)[0].attributes["data-celebName"].value;
		var removedObject = data.map(function(element) { 
			return element.name; 
		}).indexOf(celebToRemove);

		data.splice(removedObject, 1);
		displayCards(data);
	});
}

// adds celeb info to data array and re-renders celeb cards
$('#createCeleb').click(function(event){
	event.preventDefault();
	var name = document.getElementById("celebNameEntry").value;
	var picUrl = document.getElementById("celebPhotoEntry").value;
	data.push({ name: name, photo_url: picUrl });
	displayCards(data);
});

displayCards(data);