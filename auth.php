<?php
session_start();
?>

<!-- auth.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Authorized Access Required</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"> <!-- Optional: For styling -->
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f8f9fa;
        }
        .auth-container {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="auth-container">
        <h2 class="text-center">Enter Access Code</h2>
        <form action="authenticate.php" method="POST">
            <div class="mb-3">
                <input type="password" name="access_code" class="form-control" placeholder="Access Code" required>
            </div>
            <?php
                if (isset($_GET['error'])) {
                    echo '<div class="alert alert-danger">Invalid Access Code. Please try again.</div>';
                }
            ?>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
        </form>
    </div>
</body>
</html>
