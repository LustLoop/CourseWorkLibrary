const Book = require("../db/schemes/book");
const {addBook} = require("../services/books");

Book.countDocuments({}, function (err, count) {
    if (count === 0) {
        populate();
    }
})

function populate() {
    addBook(
        "History of art",
        "This book describing history of art from ancient ages till nowadays",
        "6",
        "60111035a255380931f892e1",
        ["6011104da255380931f892e3"],
        false
    )
    addBook(
        "Sherlock Holmes",
        "Sherlock Holmes is a fictional private detective created by British author Sir Arthur " +
            "Conan Doyle. Referring to himself as a consulting detective in the stories",
       8,
        "60111035a255380931f892e1",
        ["60111058a255380931f892e4"],
        false,
    );
    addBook(
        "The book",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
            "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
            "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum " +
            "dolore eu fugiat nulla pariatur.",
       9,
        "60111045a255380931f892e2",
        ["6011104da255380931f892e3"],
        true,
    );
    addBook(
        "Another book",
        "Something something something something something something.",
       2,
        "60111045a255380931f892e2",
        ["6011104da255380931f892e3"],
        true,
    );
    addBook(
        "Strange book",
        "This book is just strange. It's telling story about two detectives investigating the murder, but it's" +
        " hard to tell if it's story is real or just fiction",
        7,
        "60111045a255380931f892e2",
        ["6011104da255380931f892e3", "60111058a255380931f892e4"],
        true,
    );
}