<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
mysql_connect("localhost","weinzuhause","");
mysql_select_db("my_weinzuhause");

// Performing SQL query
$query = "SELECT email, firstName, lastName FROM Access";
$result = mysql_query($query);

// Printing results in HTML
$rows = array();
while($r = mysql_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);

// Free resultset
mysql_free_result($result);

// Closing connection
mysql_close($link);
?>