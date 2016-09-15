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
                    if (!json.artists.length) {
                        document.getElementById("ArtistList").innerHTML = "No Artists Found" + "<br>";
                    }
                    else {
                        for (var i = 0; i < json.artists.length; i++) {
                            /*data += "<li><a href='" + json.artists[i].url + "'  target='_blank' >" + json.artists[i].name + " &nbsp;&nbsp;&nbsp;&nbsp </a></li>";*/
                            data += "<div id='same'><a href='" + json.artists[i].url + "'  target='_blank' >" + json.artists[i].name + "</a></div>";
                        }
                        document.getElementById("ArtistList").innerHTML = "<p id='fancy'>Below is a list of " + json.artists.length + " links:</p>" + data + "<br>";
                        document.getElementById("ArtistList").style.padding = "9px";
                    }
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
