/**
 * Last.FM loading code to populate a <ul> with recent tracks for a user.
 * Requires moment.js
 * 
 * Developed for http://blog.nhinds.com
 * Author: Nicholas Hinds
 */
var elemId;
function _loadTracks(data) {
	var ul = document.getElementById(elemId);
	var tracks = data.recenttracks.track;
	for (var i=0;i<tracks.length;i++) {
		var track = tracks[i];
		var url = track.url;
		var name = track.name;
		var artist = track.artist['#text'];
		var image = '';
		if (track.image.length)
			image = track.image[0]['#text'];
		var timeDescription, nowPlaying = false;
		if (track.date)
			timeDescription = moment(parseInt(track.date.uts)*1000).fromNow();
		else {
			nowPlaying = (track['@attr'] && track['@attr'].nowplaying);
			timeDescription = nowPlaying ? 'Now Playing' : '???';
		}

		var li = document.createElement('li');
		var coverA = document.createElement('a');
		coverA.className = 'cover';
		coverA.href = url;
		if (image) {
			var img = document.createElement('img');
			img.src=image;
			img.alt='(cover)';
			coverA.appendChild(img);
		} else {
			var placeholder = document.createElement('div');
			placeholder.className='placeholder';
			coverA.appendChild(placeholder);
		}
		li.appendChild(coverA);
		var timeSpan = document.createElement('span');
		timeSpan.className = 'time' + (nowPlaying ? ' nowPlaying' : '');
		timeSpan.appendChild(document.createTextNode(timeDescription));
		li.appendChild(timeSpan);
		var trackA = document.createElement('a');
		trackA.className = 'track';
		trackA.href = url;
		trackA.appendChild(document.createTextNode(name));
		li.appendChild(trackA);
		var artistSpan = document.createElement('span');
		artistSpan.className = 'artist';
		artistSpan.appendChild(document.createTextNode(artist));
		li.appendChild(artistSpan);
		ul.appendChild(li);
	}
}

function loadTracks(username, id, apiKey) {
	elemId = id;

	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+username+'&api_key='+apiKey+'&format=json&callback=_loadTracks'
	document.head.appendChild(script);
}