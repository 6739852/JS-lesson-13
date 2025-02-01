document.title = "My Album & Post App"; // שינוי כותרת הדף

async function getAlbums() {
  try {
    const url = "https://jsonplaceholder.typicode.com/albums";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const albums = data.map((album) => {
      const li = document.createElement("li");
      li.setAttribute("id", `album-${album.id}`);
      li.textContent = `Name: ${album.title}`;

      const br = document.createElement("br");
      li.appendChild(br);

      const button = document.createElement("button");
      button.textContent = "הצגת פרטים";
      button.addEventListener("click", () => {
        getAlbum(album.id);
      });

      li.appendChild(button);
      li.classList.add("album-item");
      return li;
    });

    document.querySelector("#albums").append(...albums);
  } catch (error) {
    console.log("Error:", error);
  }
}

getAlbums();

async function getAlbum(id) {
  try {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
    const response = await fetch(url);
    const photos = await response.json();
    console.log(photos);

    const album = document.querySelector(`#album-${id}`);

    const photoList = photos.map((photo) => {
      const list = document.createElement("ul");
      const p1 = document.createElement("li");
      p1.textContent = `Title: ${photo.title}`;
      list.appendChild(p1);

      return list;
    });

    album.append(...photoList);
  } catch (error) {
    console.log("Error:", error);
  }
}

async function getPosts() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const posts = data.map((post) => {
      const li = document.createElement("li");
      li.setAttribute("id", `post-${post.id}`);
      li.textContent = `Name: ${post.title}`;

      const br = document.createElement("br");
      li.appendChild(br);

      const button = document.createElement("button");
      button.textContent = "הצגת תגובות";
      button.addEventListener("click", () => {
        getPost(post.id);
      });

      li.appendChild(button);
      li.classList.add("post-item");
      return li;
    });

    document.querySelector("#posts").append(...posts);
  } catch (error) {
    console.log("Error:", error);
  }
}

getPosts();

async function getPost(id) {
  try {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`; // תיקון הבעיה של postId
    const response = await fetch(url);
    const comments = await response.json();
    console.log(comments);

    const post = document.querySelector(`#post-${id}`);

    const commentList = comments.map((comment) => {
      const list = document.createElement("ul");

      const p1 = document.createElement("li");
      p1.textContent = `Name: ${comment.name}`;
      list.appendChild(p1);

      const p2 = document.createElement("li");
      p2.textContent = `Email: ${comment.email}`;
      list.appendChild(p2);

      return list;
    });

    post.append(...commentList);
  } catch (error) {
    console.log("Error:", error);
  }
}
