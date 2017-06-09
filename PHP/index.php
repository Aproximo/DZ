<?php


$array = [
	'html',
	'css',
	'php',

];

foreach ($array as  $value) {
	echo $value . "<br>";
}

echo "<br>". "<br>". "<br>";

$array1=[1, 20, 15, 17 ,24, 35];
$result = 0;
foreach ($array1 as  $value) {
	$result = $result +  $value;
	
}
echo $result;

echo "<br>". "<br>". "<br>";

$array1=[26, 17, 136, 12, 79, 15];
$result = 0;
foreach ($array1 as  $value) {
	$result = $result +  pow($value, 2);

}
echo $result;

echo "<br>". "<br>". "<br>";

$arr=array('green'=>'зелений', 'red'=>'красный', 'blue'=>'синий');

foreach ($arr as $key => $value) {
	echo $key . "<br>";
}
foreach ($arr as $key => $value) {
	echo $value . "<br>";
}

echo "<br>". "<br>". "<br>";

$arr=array('Коля'=>'200', 'Вася'=>'300', 'Петя'=>'400');

foreach ($arr as $key => $value) {
	echo $key . " — зарплата " .$value ." долларов.'" ."<br>";
}

echo "<br>". "<br>". "<br>";

$arr = array('green'=>'зеленый', 'red'=>'красный','blue'=>'голубой')

foreach ($arr as $key => $value) {
	
}