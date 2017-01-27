<?php  

$servername = "localhost";
$username = "id39847_admin";
$password = "admin";
$dbname = "admin";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$newdate = $_POST['fname'];
$price = $_POST['Id'];
// update data
$sqlupdate = mysql_query("UPDATE static_monday_count SET count='$newdate' WHERE product_id='".$idPrice."'");
// exit with error message if there was an error
if(!$sqlupdate) die('Error:' . mysql_error());
?>


