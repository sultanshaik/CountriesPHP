<?php
$countryName = "U";
  if (!empty($countryName)) { 
	$countryDataUrl = 'https://restcountries.eu/rest/v2/name/'.urlencode($countryName);
	$countryDataJSON =  file_get_contents($countryDataUrl);	
	$countryDataPHPArray = json_decode($countryDataJSON,true);
	array_multisort($countryDataPHPArray);
	$countryDataArrayLimited = array_slice($countryDataPHPArray, 0, 50);
	foreach ($countryDataArrayLimited as $eachCountryData) {
    echo $eachCountryData["name"];
	echo "<br>";
	}
  }	
?>