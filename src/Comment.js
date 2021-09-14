export default class Comment {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/06lGJozlqpSMU5gXuf4o/comments'
    this.list = null;
  }

  async add(id, name, comment) {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        item_id: id,
        username: name,
        comment: comment,
      }),
    });
  }

  async getList(id) {
    const response = await fetch(`${url}?item_id=${id}`);
    this.list = await response.json();
  }
};