<?php
$countryName = "USA";
  if (!empty($countryName)) { 
	$countryDataUrl = 'https://restcountries.eu/rest/v2/name/'.urlencode($countryName);
	$countryDataJSON =  file_get_contents($countryDataUrl);	
	$countryDataPHPArray = json_decode($countryDataJSON,true);
	echo $countryDataPHPArray[0]["name"];
	
	
}
?>