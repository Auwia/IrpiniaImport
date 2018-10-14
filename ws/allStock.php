<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "weinzuhause", "", "my_weinzuhause");

$result = $conn->query("SELECT id, title, description, price, availability, capacity, unit, image from Stock order by id");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'  . $rs["id"] . '",';
    $outp .= '"title":"'   . $rs["title"]        . '",';
    $outp .= '"description":"'. $rs["description"]     . '",'; 
    $outp .= '"price":"'. $rs["price"]     . '",'; 
    $outp .= '"availability":"'. $rs["availability"]     . '",'; 
    $outp .= '"capacity":"'. $rs["capacity"]     . '",'; 
	$outp .= '"unit":"'. $rs["unit"]     . '",'; 
    $outp .= '"image":"images/'. $rs["image"]     . '"}'; 
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>