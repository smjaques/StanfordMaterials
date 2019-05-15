// For full API documentation, including code examples, visit http://wix.to/94BuAAs
import wixData from 'wix-data';
import wixLocation from 'wix-location';
import {session} from 'wix-storage';

$w.onReady(() => {
	//getting material user clicked on
	let materialName = session.getItem('material');
	console.log(materialName);
	//call query to dataset and display information about material
	wixData.query("MaterialsDB")
		.eq("materials", materialName)
		.find()
		.then((results) => {
			let items = results.items;
			console.log(items);
     		let item = items[0];
			console.log(item);
			let cost = item["relativeCost05"];
			let machinability = item["machinability05"];
			let brazability = item["brazability01"];
			let formability = item["formability05"];
			let foodsafe = item["foodSafe01"];
			let density = item["density"];
			let hardness = item["hardness"];
			let stiffness = item["stiffness"];
			let general = item["generalMaterial"];
			let weldability = item["weldability05"];

			if(foodsafe && foodsafe == false){
				foodsafe = "Not Food Safe";
			} else{
				foodsafe = "Food Safe";
			}
			if(brazability && brazability == false){
				brazability = "Not Brazable";
			} else{
				brazability = "Brazable";
			}

			$w("#materialName").text = materialName;
			let description = `${materialName} is a ${general}`;
			$w("#materialDesc").text = description;
			$w("#foodDescr").text = foodsafe;
			$w("#brazDesc").text = brazability;
			let denseDesc = `Density: ${density}`;
			$w("#density").text = denseDesc;
			let hardDesc = `Hardness: ${hardness}`;
			$w("#hardness").text = hardDesc;
			let stiffDesc = `Stiffness: ${stiffness}`;
			$w("#stiffness").text = stiffDesc;	

            if(materialName && materialName == "Acrylic"){ 
                $w("#laserCut").text = "Laser Cuttable";
            }
            else{ 
                $w("#laserCut").text = "Not Laser Cuttable";
            }
		})
});
