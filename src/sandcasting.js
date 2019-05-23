// For full API documentation, including code examples, visit http://wix.to/94BuAAs

import wixData from 'wix-data';
import wixLocation from 'wix-location';
import {session} from 'wix-storage';


$w.onReady(function () {
    let filter = wixData.filter();
    filter = filter.eq("sandCastable", true);
    $w("#dataset1").setFilter(filter).then(count);
    
	$w("#table1").onRowSelect( (event) => {
	    let rowData = event.rowData;
	    console.log(rowData);
		console.log(rowData["materials"]);
		let url = "/material-info";
		session.setItem('material', rowData["materials"]);
		session.setItem('page', "/sand-casting");		
		wixLocation.to(url);

	});

	function count() {
		let total = $w('#dataset1').getTotalCount();
		if (total > 0 ){
			$w('#ResultsText').text = `${total} results found.`;
		} else{
			$w('#ResultsText').text = "No result found.";
		}
	}
});
