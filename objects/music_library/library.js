const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three" },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"},
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"}
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

const obtainPlaylist = (playlistID, tracksLibrary) => {
  console.log(`${playlistID}: ${tracksLibrary.playlists[playlistID].name} - ${tracksLibrary.playlists[playlistID].tracks.length} tracks `);
};

const obtainTracks = (trackId, tracksLibrary) => {
  console.log(`${trackId}: ${tracksLibrary.tracks[trackId].name} by ${tracksLibrary.tracks[trackId].artist} (${tracksLibrary.tracks[trackId].album})`);
};

const createTrack = (name, artist, album) => {
  const id = generateUid();
  return {
    id,
    name,
    artist,
    album,
  };
};

const createPlaylist = (name, tracks) => {
  const id = generateUid();
  return {
    id,
    name,
    tracks
  };
};

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = (tracksLibrary) => {
  for (let playlist in tracksLibrary.playlists) {
    obtainPlaylist(playlist, tracksLibrary);
  }
};


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(tracksLibrary) {
  for (let track in tracksLibrary.tracks) {
    obtainTracks(track, tracksLibrary);
  }
};


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId, tracksLibrary) {
  obtainPlaylist(playlistId,tracksLibrary);
  for (let track in tracksLibrary.tracks) {
    obtainTracks(track, tracksLibrary);
  }
};



// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId, tracksLibrary) {
  tracksLibrary.playlists[playlistId].tracks.push(trackId);
  return tracksLibrary;
};


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  const track = createTrack(name, artist, album);
  library.tracks[track.id] = track;
  return library;
};


// adds a playlist to the library
const addPlaylist = (name, tracks) => {
  const playlist = createPlaylist(name, tracks);
  library.playlists[playlist.id] = playlist;
  return library;
};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query, tracksLibrary) {
  const listOfTracks = [];
  for (let track in tracksLibrary.tracks) {
    for (let info in tracksLibrary.tracks[track]) {
      if (tracksLibrary.tracks[track][info].toLowerCase().search(query.toLowerCase()) !== -1) listOfTracks.push(tracksLibrary.tracks[track]);
    }
  }
  console.log(JSON.stringify(listOfTracks, null, 4));
};

//printPlaylists(library);
//printTracks(library);
//printPlaylist("p01", library);
//addTrack("Black bird", "The Beatles", "White Album")
//console.log(JSON.stringify(addPlaylist("Chilling", ["t01", "t02", "t03"]), null, 4));
//console.log(JSON.stringify(addTrackToPlaylist("t01", "p02", library), null, 4));
printSearchResults("a", library);