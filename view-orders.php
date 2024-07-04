<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Haven - View Orders</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Book Haven</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="view-orders.php">View Orders</a>
        </nav>
    </header>
    <main>
        <h2>Orders</h2>
        <pre>
            <?php
            if (file_exists('orders.txt')) {
                echo htmlspecialchars(file_get_contents('orders.txt'));
            } else {
                echo "No orders yet.";
            }
            ?>
        </pre>
    </main>
</body>
</html>
