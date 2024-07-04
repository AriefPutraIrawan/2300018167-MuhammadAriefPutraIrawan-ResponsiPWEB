document.addEventListener("DOMContentLoaded", function () {
  const bookList = document.getElementById("book-list");

  const books = [
    {
      id: 53385,
      title: "Game Of Throne",
      author: "Jhon R. R. Martin",
      image: "Game Of Throne Cover Book.jpg",
    },
    {
      id: 64138,
      title: "Fire And Blood",
      author: "Jhon R. R. Martin",
      image: "Fire And Blood Cover Book.jpeg",
    },
    {
      id: 91772,
      title: "Shadow And Bone",
      author: "F. Scott Fitzgerald",
      image: "Shadow And Bone Cover Book.jpg",
    },

    {
      id: 72049,
      title: "The Queen's Gambit",
      author: "Walter Tevis",
      image: "The Queens Gambit Cover Book.jpg",
    },

    {
      id: 59434,
      title: "Bumi",
      author: "Tere Liye",
      image: "Bumi Cover Book.jpg",
    },
  ];

  books.forEach((book) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");

    img.src = book.image;
    img.alt = `${book.title} cover`;
    img.style.width = "170px";
    img.style.marginRight = "10px";

    div.textContent = `${book.title} by ${book.author} (ID: ${book.id})`;

    li.appendChild(img);
    li.appendChild(div);
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.marginBottom = "10px";

    bookList.appendChild(li);
  });
});
