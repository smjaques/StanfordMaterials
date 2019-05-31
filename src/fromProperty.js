import wixLocation from 'wix-location';

$w.onReady(function () {
	$w('#costbox').hide();
	$w('#costtext').hide();
	$w('#densitybox').hide();
	$w('#densityText').hide();
	$w('#ductilebox').hide();
	$w('#ductiletext').hide();
	$w('#conductbox').hide();
	$w('#conductText').hide();
	$w('#foodbox').hide();
	$w('#foodtext').hide();
	$w('#chemicalbox').hide();
	$w('#chemicaltext').hide();
	$w('#corrosionbox').hide();
	$w('#corrosiontext').hide();
	$w('#hardbox').hide();
	$w('#hardtext').hide();
});

export function cost_mouseIn(event) {
	$w('#costbox').show();
	$w('#costtext').show();
}

export function costbox_mouseOut(event) {
	$w('#costbox').hide();
	$w('#costtext').hide();
}

export function density_mouseIn(event) {
	$w('#densitybox').show();
	$w('#densityText').show();
}

export function densitybox_mouseOut(event) {
	$w('#densitybox').hide();
	$w('#densityText').hide();
}

export function ductility_mouseIn(event) {
	$w('#ductilebox').show();
	$w('#ductiletext').show();
}

export function ductilebox_mouseOut(event) {
	$w('#ductilebox').hide();
	$w('#ductiletext').hide();
}

export function conductivity_mouseIn(event) {
	$w('#conductbox').show();
	$w('#conductText').show();
}

export function conductbox_mouseOut(event) {
	$w('#conductbox').hide();
	$w('#conductText').hide();
}

export function foodbox_mouseOut(event) {
	$w('#foodbox').hide();
	$w('#foodtext').hide(); 
}

export function food_mouseIn(event) {
	$w('#foodbox').show();
	$w('#foodtext').show();

}

export function chemical_mouseIn(event) {
	$w('#chemicalbox').show();
	$w('#chemicaltext').show();
}

export function chemicalbox_mouseOut(event) {
	$w('#chemicalbox').hide();
	$w('#chemicaltext').hide();
}

export function corrosion_mouseIn(event) {
	$w('#corrosionbox').show();
	$w('#corrosiontext').show();
}

export function corrosionbox_mouseOut(event) {
	$w('#corrosionbox').hide();
	$w('#corrosiontext').hide();
}

export function hardness_mouseIn(event) {
	$w('#hardbox').show();
	$w('#hardtext').show();
}

export function hardbox_mouseOut(event) {
	$w('#hardbox').hide();
	$w('#hardtext').hide();
}

export function costbox_click(event) {
		let url = "/relative-cost";
		wixLocation.to(url);
}

export function densitybox_click(event) {
	let url = "/density";
	wixLocation.to(url);
}

export function ductilebox_click(event) {
	let url = "/ductility";
	wixLocation.to(url);
}

export function conductbox_click(event) {
	let url = "/conductivity";
	wixLocation.to(url);
}

export function foodbox_click(event) {
	let url = "/food-safe";
	wixLocation.to(url);
}

export function chemicalbox_click(event) {
	let url = "/chemical-resistance";
	wixLocation.to(url);
}

export function corrosionbox_click(event) {
	let url = "/corrosion-resistance";
	wixLocation.to(url);
}

export function hardbox_click(event) {
	let url = "/hardness";
	wixLocation.to(url);
}
