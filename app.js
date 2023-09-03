class Request {
  constructor(url) {
    this.url = url;
  }
  async get() {
    const response = await fetch(this.url);
    const responseData = await response.json();
    return responseData;
  }
}
const request = new Request("https://jsonplaceholder.typicode.com/posts");

request.get().then((data) =>
  data
    .forEach(
      (e) =>
        (document.getElementById("veri").innerHTML += `
    <h1>${e.title}</h1>
    <p>${e.body}</p>
  `)
    )
    .catch((error) => console.log(error))
);
