<?php
header("Content-Type: application/json; charset=UTF-8");

mysql_connect("localhost", "weinzuhause", "");
mysql_select_db("my_weinzuhause");

$json = file_get_contents('php://input');
$obj = json_decode($json);

$query = 
	"UPDATE Access set
		picture='" . $obj->{'picture'} . "',
		firstName='" . $obj->{'firstName'} . "',
		lastName='" . $obj->{'lastName'} . "',
		password='" . $obj->{'password'} . "',
		street='" . $obj->{'street'} . "',
		cap='" . $obj->{'ort'} . "',
		comune='" . $obj->{'place'} . "',
		state='" . $obj->{'state'} . "',
		telephone='" . $obj->{'telephone'} . "'
	WHERE email='" . $obj->{'email'} . "';"; 
	  
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