export default class InvolvementAPI {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oCr8tT2XFGQpncz4Ebxe/comments';
    this.popupComments = [];
  }

  async addComment(id, name, comment) {
    await fetch(this.url, {
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
    const endPoint = `${this.url}?item_id=${id}`;
    this.popupComments = [];
    await fetch(endPoint).then((res) => res.json()).then((data) => {
      if (data.error === undefined) {
        this.popupComments = data;
      }
    });
  }
}