<?php

// פרטי חיבור למסד נתונים
$servername = "localhost";
$username = "omersh6";      // שם משתמש של השרת שלך
$password = "REShcujPYC";   // הסיסמה שלך
$dbname = "omersh6_football";        // בדרך כלל אותו שם כמו המשתמש

// יצירת חיבור
$conn = new mysqli($servername, $username, $password, $dbname);

// בדיקת חיבור
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// קבלת נתונים מהטופס
$email = $_POST['email'];
$team_name = $_POST['team_name'];
$league = $_POST['league'];
$official_url = $_POST['official_url'];
$reason = $_POST['reason'];

// יצירת שאילתה מאובטחת
$stmt = $conn->prepare("INSERT INTO teams_requests 
(email, team_name, league, official_url, reason) 
VALUES (?, ?, ?, ?, ?)");

$stmt->bind_param("sssss", $email, $team_name, $league, $official_url, $reason);

// ביצוע השאילתה
if ($stmt->execute()) {
    echo "<h2>הבקשה נשמרה בהצלחה!</h2>";
    echo "<a href='../index.html'>חזרה לדף הבית</a>";
} else {
    echo "שגיאה בשמירה: " . $stmt->error;
}

// סגירת חיבור
$stmt->close();
$conn->close()