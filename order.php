<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $book_id = intval($_POST['book-id']);

    $order = "Name: $name, Book ID: $book_id\n";

    file_put_contents('orders.txt', $order, FILE_APPEND);
    
    echo "Order received! <a href='index.html'>Go back to home</a>";
}
?>
