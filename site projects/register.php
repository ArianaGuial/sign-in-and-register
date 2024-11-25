<?php
// Database connection
$host = 'localhost';
$db = 'your_database';
$user = 'your_username';
$password = 'your_password';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullname = $_POST['fullname'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirm_password = $_POST['confirm_password'] ?? '';

    if ($fullname && $email && $password && $confirm_password) {
        if ($password === $confirm_password) {
            // Check if email already exists
            $stmt = $pdo->prepare("SELECT id FROM users WHERE email = :email");
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            if ($stmt->rowCount() > 0) {
                $error = "Email already exists.";
            } else {
                // Hash password and insert user
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                $stmt = $pdo->prepare("INSERT INTO users (fullname, email, password) VALUES (:fullname, :email, :password)");
                $stmt->bindParam(':fullname', $fullname);
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':password', $hashed_password);
                $stmt->execute();
                header("Location: signin.html");
                exit;
            }
        } else {
            $error = "Passwords do not match.";
        }
    } else {
        $error = "Please fill in all fields.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="styles.css">
    <title>Register</title>
</head>
<body>
    <!-- Logo at the top left corner -->
    <div class="logo-container">
        <a href="/" class="logo">
            <img src="img/logo.png" alt="Logo">
        </a>
    </div>
    
    <div class="container">
        <div class="signin-card">
            <h1>Create Account</h1>
            <p class="subtitle">Get started with your free account</p>
            
            <!-- <form class="signin-form">
                <div class="form-group">
                    <label for="fullname">Full Name</label>
                    <input type="text" id="fullname" placeholder="Enter your full name">
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email">
                </div>
                
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Create a password">
                </div>

                <div class="form-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" placeholder="Confirm your password">
                </div>
                
                <div class="form-options">
                    <label class="remember-me">
                        <input type="checkbox">
                        <span>I agree to the <a href="#" class="terms-link">Terms & Conditions</a></span>
                    </label>
                </div>

                <button type="submit" class="signin-button">Create Account</button>
                
                <p class="signup-prompt">
                    Already have an account? <a href="signin.html">Sign in</a>
                </p>
            </form> -->

            <form class="signin-form" method="POST" action="register.php">
                <div class="form-group">
                    <label for="fullname">Full Name</label>
                    <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Create a password" required>
                </div>
                <div class="form-group">
                    <label for="confirm_password">Confirm Password</label>
                    <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm your password" required>
                </div>
                <div class="form-options">
                    <label class="remember-me">
                        <input type="checkbox" required>
                        <span>I agree to the <a href="#" class="terms-link">Terms & Conditions</a></span>
                    </label>
                </div>
                <button type="button" class="signin-button" style="color: #ffffff;" onclick="window.location.href='signin.html';">Create Account</button>
                <p class="signup-prompt">
                    Already have an account? <a href="signin.html">Sign in</a>
                </p>
            </form>

        </div>
    </div>
</body>
</html> 