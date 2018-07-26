loadPage = function() {

	var flair_class = '';
	var unit_id = 0;
	var id = 0;
	var z = 1;

	//MAIN FLAIRS
	loadFlairs = function() {
		var enter = document.getElementById('content');

		//replace with latest unit number
		for (i=1; i<=2193; i++) {
			unit_id = i;

			if (i>=1 && i<=800) {
				id = id % 800 + 1;
			}
			else if (i>800 && i<=1600) {
				id = id % 800 + 1;
				flair_class = 's2';
			}
			else if (i>1600 && i<=2400) {
				id = id % 800 + 1;
				flair_class = 's3';
			}
			else if (i>2400) {
				id = id % 800 + 1;
				flair_class = 's4';
			}

			//define HTML for flairs
			var flair_choice = document.createElement('span');
			flair_choice.setAttribute('class', 'flair flair-'+id+' flair-'+flair_class);
			flair_choice.setAttribute('name', unit_id);
			flair_choice.setAttribute('onclick', 'fselect('+unit_id+')');
			enter.appendChild(flair_choice);
		}
	}

	//SPECIAL FLAIRS
	loadSpecial = function() {
		var enter2 = document.getElementById('special');

		var name = {
			"f2214" : "placeholder",
			"f2215" : "placeholder",
			"7001" : "placeholder",
			"7002" : "placeholder",
			"7003" : "placeholder",
			"7004" : "placeholder",
			"7005" : "placeholder",
			"7006" : "placeholder",
			"7007" : "placeholder",
			"7008" : "placeholder",
			"7009" : "placeholder",
			"7010" : "placeholder",
			"7011" : "placeholder",
			"9001" : "placeholder",
			"9002" : "placeholder",
			"9003" : "placeholder",
			"9004" : "placeholder",
			"9005" : "placeholder",
			"9006" : "placeholder",
			"9007" : "placeholder",
			"9008" : "placeholder",
			"9009" : "placeholder",
			"9010" : "placeholder",
			"9011" : "placeholder",
			"9012" : "placeholder",
			"9013" : "placeholder",
			"9014" : "placeholder",
			"9015" : "placeholder",
			"9016" : "placeholder",
			"9017" : "placeholder",
			"9018" : "placeholder",
			"9019" : "placeholder",
			"9029" : "placeholder",
			"9030" : "placeholder",
			"9031" : "placeholder",
			"DrinkL" : "placeholder",
			"DrinkM" : "placeholder",
			"DrinkS" : "placeholder",
			"homie1" : "placeholder",
			"homie2" : "placeholder",
			"homie3" : "placeholder",
			"homieT" : "placeholder",
			"L1" : "placeholder",
			"L2" : "placeholder",
			"L3" : "placeholder",
			"L4" : "placeholder",
			"L5" : "placeholder",
			"M1" : "placeholder",
			"M2" : "placeholder",
			"M3" : "placeholder",
			"M4" : "placeholder",
			"M5" : "placeholder",
			"S1" : "placeholder",
			"S2" : "placeholder",
			"S3" : "placeholder",
			"S4" : "placeholder",
			"S5" : "placeholder",
			"ticket1" : "placeholder",
			"ticket2" : "placeholder",
			"ticket3" : "placeholder"
		}

		//creates HTML for special flairs
		for (var v in name) {
			if (name.hasOwnProperty(v)) {
				var flair_special = document.createElement('span');
				flair_special.setAttribute('class', 'flair flair-'+z+' flair-z');
				flair_special.setAttribute('name', v);

				//adds quotes if flair name has letters
				if (isNaN(v))
				flair_special.setAttribute('onclick', 'fselect("'+v+'")');
				else
				flair_special.setAttribute('onclick', 'fselect('+v+')');

				enter2.appendChild(flair_special);
				z++;
			}
		}
	}
	loadFlairs();
	loadSpecial();
}

document.addEventListener('DOMContentLoaded', loadPage, false);
