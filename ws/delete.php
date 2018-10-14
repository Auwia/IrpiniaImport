<?php
header("Content-Type: application/json; charset=UTF-8");

mysql_connect("localhost", "weinzuhause", "");
mysql_select_db("my_weinzuhause");

$json = file_get_contents('php://input');
$obj = json_decode($json);

$query = "DELETE from Access where email = '" . $_GET["username"] . "'";
$result = mysql_query($query);

echo ("DEBUG: " . $query . "\n");

if($result){
	$json = array('errno' => mysql_errno(), 'error' => 'OK');
	echo json_encode($json);
} else{
	header("HTTP/1.0 404.21 KO");
	// echo json_encode("DEBUG: " . $query . "\n");	
	$json = array('errno' => mysql_errno(), 'error' => str_replace("'", "-", mysql_error()));
	echo json_encode($json);
}

?>