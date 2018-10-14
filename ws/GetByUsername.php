<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
mysql_connect("localhost","weinzuhause","");
mysql_select_db("my_weinzuhause");

// Performing SQL query
$query = "SELECT picture, email, firstName, lastName, street, cap as ort, comune as place, state, telephone FROM Access WHERE email='" . $_GET["username"] . "'";
$result = mysql_query($query);

if($result){
	$rows = array();
	while($r = mysql_fetch_assoc($result)) {
		$rows[] = $r;
	}
	
	$temp = json_encode($rows);
	$temp = str_replace('[', '', $temp);
	$temp = str_replace(']', '', $temp);
	echo $temp;
	
} else{
	header("HTTP/1.0 404.21 KO");
	// echo ("DEBUG: " . $query . "\n");	
	$json = array('errno' => mysql_errno(), 'error' => str_replace("'", "-", mysql_error()));
	echo json_encode($json);
}

// Free resultset
mysql_free_result($result);

// Closing connection
mysql_close($link);
?>