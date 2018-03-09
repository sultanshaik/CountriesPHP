<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json');
$countryName = $_GET['countrystring'];
  if (!empty($countryName)) { 
	
	$countryDataUrl = 'https://restcountries.eu/rest/v2/name/'.urlencode($countryName);
	$countryDataJSON =  file_get_contents($countryDataUrl);	
	$countryDataPHPArray = json_decode($countryDataJSON,true);
	array_multisort($countryDataPHPArray);
	$countryDataArrayLimited = array_slice($countryDataPHPArray, 0, 50);
	echo json_encode($countryDataArrayLimited,true);
	exit;
  }
?>