<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
mysql_connect("localhost","weinzuhause","");
mysql_select_db("my_weinzuhause");

// $_POST input
$json = file_get_contents('php://input');
$obj = json_decode($json);

// Performing SQL query
$query = "SELECT count(*) as total FROM Access WHERE email='" . $obj->{'username'} . "' and password='" . $obj->{'password'} . "'";
$result = mysql_query($query);

if($result){
	$data = (int) mysql_fetch_assoc($result)['total'] ;
	if ($data == 1) {
		$json = array('errno' => mysql_errno(), 'error' => 'OK');
		echo json_encode($json);
	} else {
		header("HTTP/1.0 404.22 KO - too many users with the same account");
		$json = array('errno' => mysql_errno(), 'error' => "too many users with the same account");
		echo json_encode($json);
	}
} else{
	header("HTTP/1.0 404.21 KO");
	// echo json_encode("DEBUG: " . $query . "\n");	
	$json = array('errno' => mysql_errno(), 'error' => str_replace("'", "-", mysql_error()));
	echo json_encode($json);
}

// Free resultset
mysql_free_result($result);

// Closing connection
mysql_close($link);
?>