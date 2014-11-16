<?php
$q = trim(strip_tags($_GET['term'])); // variabel $q untuk mengambil inputan user
$daftar = file("data.txt");
foreach ($daftar as $data){
	$result[] = htmlentities(stripslashes($data));
}
echo json_encode($result); // menampilkan data dengan format json
?>