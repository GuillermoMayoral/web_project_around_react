class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(res => res.json())
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: "GET",
            headers: this._headers
        })
            .then(res => res.json())
    }

    getAppInfo() {
        return Promise.all([
            this.getUserInfo(),
            this.getInitialCards()
        ])
    }

    setUserInfo(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about,
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    likeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    disLikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    updateAvatar(avatarLink) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarLink
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

const api = new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1",
    headers: {
        authorization: "efbf67fe-dc9f-462d-bc39-2cbd2043b8ab",
        "Content-Type": "application/json"
    }
});

export default api;