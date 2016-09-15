function sendData(file, callback) {
    var searchedArtist = document.getElementById("my-text").value;
    if (searchedArtist != "") {
        $.ajax({
            url: 'http://api.eventfinda.co.nz/v2/artists.json?row=10&q=' + searchedArtist,
            dataType: 'jsonp',
            beforeSend: function (xhrObj) {
                // Request headers
                xhrObj.setRequestHeader("Authorization", "Basic dHJ5aW5ndG9maW5keW91cmV2ZW50OnE0YjRtNWt4azk1dw==");
            },
            success: function (json) {
                var data = "";
                try {
                    for (var i = 0; i < json.artists.length; i++) {
                        data += "<li><a href='" + json.artists[i].url + "'>" + json.artists[i].name + "</a></li><br>";
                    }
                    document.getElementById("ArtistList").innerHTML = data + "<br>";
                }
                catch (e) {
                    document.getElementById("ArtistList").innerHTML = "No Artists Found" + "<br>";
                }
            }
        });
    }
    else {
        document.getElementById("ArtistList").innerHTML = "<ul>" + "Please enter an artist" + "</ul><br>";
    }
}
