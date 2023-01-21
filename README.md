# odin-library
----------------------
This is a simple web app that collects information about books, stores it as JS Objects and displays in on the page via DOM manipulation.
----------------------
Working principles:
    - Pressing a really cool "New book" card prompts user to enter book info in a form
    - Form data in collected and processed ON A CLIENT SIDE(!!!)
    - Form data is used to create a new Book object and store it into an array of Books
    - This array is then displayed in reverse order to make the cards look less like a list
    - Every Book Card contains brief information about the book
    - Pressing a Card or a really pretty Book icon shows a larger form with info
    - If the book is marked as "Unread", you can change its status to "Read" in the aforementioned form
    -You can press a really cool cross button to delete a book from the Library
Notes:
    - Cookies are not used since I don't know shit about cookies (Meaning that refreshing the page deletes all the books)
    - I am not a designer, so I did not come up with any actual form of book card design
    - Log-in button is there simply to occupy place
(This is my first attempt to utilize the god-awful OOP in JavaScript)
