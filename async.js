async function GetAlbums() {
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
      const b = document.createElement("button");
      b.textContent = "הצגת פרטים";
      b.addEventListener("click", () => {
        GetAlbum(album.id);
      });
      li.appendChild(b);
      li.classList.add("album-item");
      return li;
    });
    document.querySelector("#albums").append(...albums);
  } catch (error) {
    console.log("error", error);
  }
}
GetAlbums();
async function GetAlbum(id) {
  try {
    const url = "https://jsonplaceholder.typicode.com/photos?albumId=" + id;
    const response = await fetch(url);
    const photos = await response.json();
    console.log(photos);
    const album = document.querySelector(`#album-${id}`);
    const ph = photos.map((photo) => {
      const list = document.createElement("ul");
      const p1 = document.createElement("li");
      p1.textContent = `Title: ${photo.title}`;
      list.appendChild(p1);
      // const p2=document.createElement('img')
      // p2.src = photo.url
      // p2.style.width = '50px'
      // list.appendChild(p2)
      return list;
    });
    album.append(...ph);
  } catch (error) {
    console.log("error", error);
  }
}

async function GetPosts() {
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
      const b = document.createElement("button");
      b.textContent = "הצגת תגובות";
      b.addEventListener("click", () => {
        GetPost(post.id);
      });
      li.appendChild(b);
      li.classList.add("post-item");
      return li;
    });
    document.querySelector("#posts").append(...posts);
  } catch (error) {
    console.log("error", error);
  }
}
GetPosts();
async function GetPost(id) {
  try {
    const url = "https://jsonplaceholder.typicode.com/comments?postId" + id;
    const response = await fetch(url);
    const comment = await response.json();
    console.log(comment);
    const post = document.querySelector(`#post-${id}`);
    const ps = comment.map((post) => {
      const list = document.createElement("ul");
      const p1 = document.createElement("li");
      p1.textContent = `Name: ${post.name}`;
      list.appendChild(p1);
      const p2 = document.createElement("li");
      p2.textContent = `Email: ${post.email}`;
      list.appendChild(p2);

      return list;
    });
    post.append(...ps);
  } catch (error) {
    console.log("error", error);
  }
}
