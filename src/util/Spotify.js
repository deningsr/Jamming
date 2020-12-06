import SearchBar from "../Components/SearchBar/SearchBar";

const clientId = "2f2d17c2146f4b5eaea174b6574bda10";
const redirectUri = "http://localhost:3000/";

let accessToken = '';

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        // check for access token
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessTokenMatch;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?
            client_id=${clientId}&response_type=token&
            scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },

    search() {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, 
        { headers: {
            Authorization: `Bearer ${accessToken}`
        }}).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artist,
                album: track.album,
                uri: track.uri
            }));
        })
    }

}

export default Spotify;