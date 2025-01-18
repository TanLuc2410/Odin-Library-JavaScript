import "./style.css";

class Book {
  constructor(name, author, complete) {
    this.name = name;
    this.author = author;
    this.complete = complete;
  }
}

const LibraryApp = () => {
  const dialog = document.querySelector("[data-modal]");
  const form = document.querySelector("[data-form]");
  const openModalBtn = document.querySelector("[data-add-btn]");
  const closeModalBtn = form.querySelector("[data-close-btn]");
  const bookContainer = document.querySelector("[data-books-container]");

  const bookList = JSON.parse(localStorage.getItem("book.list")) || [];

  const openModal = () => dialog.showModal();
  const closeModal = () => dialog.close();

  const save = () =>
    localStorage.setItem("book.list", JSON.stringify(bookList));

  const addBook = () => {
    const bookNameINPUT = document.querySelector("[data-name]").value.trim();
    const bookAuthorINPUT = document
      .querySelector("[data-author]")
      .value.trim();
    const bookComplete = document.querySelector("[data-checkbox]").checked;

    const newBook = new Book(bookNameINPUT, bookAuthorINPUT, bookComplete);
    bookList.push(newBook);
    save();
  };

  const createBookCard = (arg, index) => {
    const bookCard = document.createElement("div");
    const bookTitleDisplay = document.createElement("p");
    const bookAuthorDisplay = document.createElement("p");
    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    bookTitleDisplay.classList.add("book-title");
    bookAuthorDisplay.classList.add("book-author");
    readBtn.classList.add("read-btn");
    removeBtn.classList.add("remove-btn");

    bookTitleDisplay.textContent = arg.name;
    bookAuthorDisplay.textContent = arg.author;
    readBtn.classList.toggle("isRead", arg.complete);
    toggleRead(readBtn);

    removeBtn.textContent = "Delete";
    bookCard.append(bookTitleDisplay, bookAuthorDisplay, readBtn, removeBtn);
    bookCard.dataset.bookIndex = index;
    return bookCard;
  };

  const render = () => {
    clear();
    bookList.forEach((book, index) => {
      const newBookCard = createBookCard(book, index);
      bookContainer.append(newBookCard);
    });
  };

  const clear = () => {
    while (bookContainer.firstChild) {
      bookContainer.removeChild(bookContainer.firstChild);
    }
  };
  const isRead = (book) => book.classList.contains("isRead");
  const toggleRead = (book) => {
    if (isRead(book)) {
      book.textContent = "Read";
    } else {
      book.textContent = "Not Read";
    }
  };

  const deleteBook = () => {
    bookContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-btn")) {
        const bookCard = e.target.closest("div");
        const divIndex = bookCard.dataset.bookIndex;
        bookList.splice(divIndex, 1);
        save();
        render();
      }
    });
  };

  const changeProgress = () => {
    bookContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("read-btn")) {
        const bookCard = e.target.closest("div");
        const divIndex = bookCard.dataset.bookIndex;
        bookList[divIndex].complete =
          bookList[divIndex].complete === false ? true : false;
        save();
        render();
      }
    });
  };

  const addBookBtnEventListener = () => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      addBook();
      render();
      dialog.close();
      form.reset();
    });
  };

  const accessedYear = () => {
    const yearSpan = document.querySelector("[data-year]");
    yearSpan.textContent = `${new Date().getFullYear()}`;
  };

  const setupEventListener = () => {
    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
    addBookBtnEventListener();
    deleteBook();
    changeProgress();
    accessedYear();
  };

  const initialize = () => {
    setupEventListener();
    render();
  };

  initialize();
};

LibraryApp();
