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
  },

  obtainPlaylist: function(playlistID) {
    console.log(`${playlistID}: ${this.playlists[playlistID].name} - ${this.playlists[playlistID].tracks.length} tracks `);
  },

  obtainTracks: function(trackId) {
    console.log(`${trackId}: ${this.tracks[trackId].name} by ${this.tracks[trackId].artist} (${this.tracks[trackId].album})`);
  },

  createTrack: function(name, artist, album) {
    const id = this.generateUid();
    return {
      id,
      name,
      artist,
      album,
    };
  },
     
  createPlaylist: function(name, tracks) {
    const id = this.generateUid();
    return {
      id,
      name,
      tracks
    };
  },
     
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function() {
    for (let playlist in this.playlists) {
      this.obtainPlaylist(playlist);
    }
  },
     
     
  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function() {
    for (let track in this.tracks) {
      this.obtainTracks(track);
    }
  },
     
     
  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function(playlistId) {
    this.obtainPlaylist(playlistId);
    for (let track of this.playlists[playlistId].tracks) {
      this.obtainTracks(track);
    }
  },
     
     
     
  // adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
    return this;
  },
     
     
  // generates a unique id
  // (already implemented: use this for addTrack and addPlaylist)
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
     
     
  // adds a track to the library
  addTrack: function(name, artist, album) {
    const track = this.createTrack(name, artist, album);
    this.tracks[track.id] = track;
    return this;
  },
     
     
  // adds a playlist to the library
  addPlaylist: function(name, tracks) {
    const playlist = this.createPlaylist(name, tracks);
    this.playlists[playlist.id] = playlist;
    return this;
  },
     
     
  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri")
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  printSearchResults: function(query) {
    const listOfTracks = [];
    for (let track in this.tracks) {
      for (let info in this.tracks[track]) {
        if (this.tracks[track][info].toLowerCase().search(query.toLowerCase()) !== -1) listOfTracks.push(this.tracks[track]);
      }
    }
    console.log(JSON.stringify(listOfTracks, null, 4));
  },
  
};



library.obtainPlaylist("p01");
library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
console.log(JSON.stringify(library.addTrack("Black bird", "The Beatles", "White Album"),null, 4));
console.log(JSON.stringify(library.addPlaylist("Chilling", ["t01", "t02", "t03"]), null, 4));
console.log(JSON.stringify(library.addTrackToPlaylist("t01", "p02", library), null, 4));
library.printSearchResults("a", library);