<?php
header("Content-Type: application/json; charset=UTF-8");

mysql_connect("localhost", "weinzuhause", "");
mysql_select_db("my_weinzuhause");

$json = file_get_contents('php://input');
$obj = json_decode($json);

$query = "INSERT INTO Access (picture, email, firstName, lastName, password, street, cap, comune, state, telephone) VALUES ('" . $obj->{'picture'} . "','" . $obj->{'username'} . "','" . $obj->{'firstName'} . "','" . $obj->{'lastName'} . "','" . $obj->{'password'} . "','" . $obj->{'street'} . "','" . $obj->{'cap'} . "','" . $obj->{'comune'} . "','" . $obj->{'state'} . "','" . $obj->{'telephone'} . "')";
$result = mysql_query($query);

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