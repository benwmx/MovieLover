export default class InvolvementAPI {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hFueqaHxN0XgzwPkj13F';
    this.popupComments = [];
    this.likes = [];
  }

  async addComment(id, name, comment) {
    const endPoint = `${this.url}/comments`;
    await fetch(endPoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment,
      }),
    });
  }

  async getComments(id) {
    const endPoint = `${this.url}/comments?item_id=${id}`;
    this.popupComments = [];
    await fetch(endPoint).then((res) => res.json()).then((data) => {
      if (data.error === undefined) {
        this.popupComments = data;
      }
    });
  }

  async addLike(item_id) {
  const endPoint = `${this.url}/likes`;
    await fetch(endPoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id
      }),
    });
  }

  async getLikes() {
    const endPoint = `${this.url}/likes`;
    this.likes = [];
    await fetch(endPoint).then((res) => res.json()).then((data) => {
      if (data.error === undefined) {
        this.likes = data;
      }
    });
  }
}