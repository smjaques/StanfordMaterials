// For full API documentation, including code examples, visit http://wix.to/94BuAAs
import wixData from 'wix-data';
import wixLocation from 'wix-location';
import {session} from 'wix-storage';

$w.onReady(function () {
	$w("#brazable").placeholder = "Choose Yes/No";
	$w("#foodsafe").placeholder = "Choose Yes/No";
	$w("#sortby").placeholder = "Sort By";
	$w("#SortText").text = "Sorted by: Weldability";
});


$w.onReady(() => {
	//getting material user clicked on
	let material = session.getItem('material');
	//call query to dataset and display information about material
});
