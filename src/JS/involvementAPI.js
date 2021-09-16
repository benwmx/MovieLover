export default class InvolvementAPI {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hFueqaHxN0XgzwPkj13F/comments';
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
    await fetch(endPoint).then((response) => response.json());
  }
}