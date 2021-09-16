export default class Comment {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/06lGJozlqpSMU5gXuf4o/comments';
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
    const response = await fetch(endPoint);
    response.then((res) => {
      res.json();
    });
  }
}