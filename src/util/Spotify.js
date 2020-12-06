const clientId = "2f2d17c2146f4b5eaea174b6574bda10";
const redirectUri = "http://localhost:3000/";

let accessToken = '';

const Spotify = {
    getAccessTokem() {
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
        }
    }
}

export default Spotify;