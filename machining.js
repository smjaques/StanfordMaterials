// For full API documentation, including code examples, visit http://wix.to/94BuAAs
import wixData from 'wix-data';
import wixLocation from 'wix-location';
import {session} from 'wix-storage';

$w.onReady(function () {
	$w("#brazable").options = [
		{"label": "Yes", "value": "true"},
		{"label": "No", "value": "false"}
	];
	$w("#brazable").placeholder = "Choose Yes/No";

	$w("#foodsafe").options = [
		{"label": "Yes", "value": "true"},
		{"label": "No", "value": "false"}
	]
	$w("#foodsafe").placeholder = "Choose Yes/No";

	$w("#sortby").options = [
		{"label": "Relative Cost", "value": "relativeCost05"},
		{"label": "Weldability", "value": "weldability05"},
		{"label": "Formability", "value": "formability05"}
	];
	$w("#sortby").placeholder = "Sort By";
	$w("#SortText").text = "Sorted by: Machinability";
});

$w.onReady(() => {
	let filter = wixData.filter();
	filter = filter.between("machinability05", 1, 6);
	$w('#dataset1').setFilter(filter).then(count);
	openingSort();

	$w('#brazable, #foodsafe, #cost, #weldable, #formable').onChange(() => {
		search();
	})
	$w('#clear').onClick(()=> {
		filter = wixData.filter();
		$w("#brazable").selectedIndex = 0;
		$w("#foodsafe").selectedIndex = 0;
		$w("#cost").selectedIndex = 0;
		$w("#weldable").selectedIndex = 0;
		$w("#formable").selectedIndex = 0;	
		$w('#brazable, #foodsafe, #cost, #weldable, #formable').value = "";
		$w('#dataset1').setFilter(wixData.filter());
		filter = filter.between("machinability05", 1, 6);
		$w('#dataset1').setFilter(filter).then(count);
	})
	$w('#sortby').onChange(()=> {
		newSort();
	})

	$w("#table1").onRowSelect( (event) => {
		let rowData = event.rowData;
		console.log(rowData);
		console.log(rowData["materials"]);
		let url = "/machining-material-info";
		session.setItem('material', rowData["materials"]);
		wixLocation.to(url);
});

	//clear all button

	function search() {
		filter = wixData.filter();
		let brazable = $w('#brazable').value;
		let food = $w('#foodsafe').value;
		let cost = $w('#cost').value;
		let formable = $w('#formable').value;
		let weldable = $w('#weldable').value;

		if (brazable && brazable !== 'all'){
			if(brazable == "true"){
				brazable = true;
			}
			else{
				brazable = false;
			}
			filter = filter.eq("brazability01", brazable);
		}

		if (food && food !== 'all'){
			if(food == "true"){
				food = true;
			}
			else{
				food = false;
			}
			filter = filter.eq("foodSafe01", food);
		}	
		if (cost && cost !== 'all'){
			let lower = Number(cost) - 1;
			let upper = Number(cost) + 1;
			filter = filter.between("relativeCost05", lower, upper);
		}
		if (weldable && weldable !== 'all'){
			let lower = Number(weldable) - 1;
			let upper = Number(weldable) + 1;
			filter = filter.between("weldability05", lower, upper);
		}
		if (formable && formable !== 'all'){
			let lower = Number(formable) - 1;
			let upper = Number(formable) + 1;
			filter = filter.eq("formability05", lower, upper);
		}
		$w('#dataset1').setFilter(filter);
		filter = filter.between("machinability05", 1, 6);
		$w('#dataset1').setFilter(filter).then(count);
	}

	function count() {
		let total = $w('#dataset1').getTotalCount();
		if (total > 0 ){
			$w('#ResultsText').text = `${total} results found.`;
		} else{
			$w('#ResultsText').text = "No result found.";
		}
	}

	function newSort () {
		let sortby = $w('#sortby').value;
		$w('#dataset1').setSort(wixData.sort()
			.ascending(sortby));
		displaySortedText(sortby);
	}

	function displaySortedText(sortby){
		let sortedBy = "";
		if(sortby == "weldability05"){
			sortedBy = "Weldability";
		}
		else if (sortby == "relativeCost05"){
			sortedBy = "Relative Cost";
		}
		else if (sortby == "formability05"){
			sortedBy = "Formability";
		}
		$w('#SortText').text = `Sorted by: ${sortedBy}`
	}

	function openingSort(){
		$w('#dataset1').setSort(wixData.sort()
			.ascending("machinability05"));
	}
});
