loadPage = function() {

	var flair_class = '';
	var unit_id = 0;
	var id = 0;
	var z = 1;

	//MAIN FLAIRS
	loadFlairs = function() {
		var enter = document.getElementById('content');

		//replace with latest unit number
		for (i=1; i<=2781; i++) {
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
			'4000a': 'placeholder',
			'4000b': 'placeholder',
			'4001a': 'placeholder',
			'4001b': 'placeholder',
			'4002a': 'placeholder',
			'4002b': 'placeholder',
			'4003a': 'placeholder',
			'4003b': 'placeholder',
			'4004a': 'placeholder',
			'4004b': 'placeholder',
			'4005a': 'placeholder',
			'4005b': 'placeholder',
			'4006a': 'placeholder',
			'4006b': 'placeholder',
			'4006c': 'placeholder',
			'4006d': 'placeholder',
			'4007a': 'placeholder',
			'4007b': 'placeholder',
			'4007c': 'placeholder',
			'4007d': 'placeholder',
			'4008a': 'placeholder',
			'4008b': 'placeholder',
			'4008c': 'placeholder',
			'4008d': 'placeholder',
			'4009a': 'placeholder',
			'4009b': 'placeholder',
			'4010a': 'placeholder',
			'4010b': 'placeholder',
			'4011a': 'placeholder',
			'4011b': 'placeholder',
			'4011c': 'placeholder',
			'4011d': 'placeholder',
			'4012a': 'placeholder',
			'4012b': 'placeholder',
			'4012c': 'placeholder',
			'4012d': 'placeholder',
			'4013a': 'placeholder',
			'4013b': 'placeholder',
			'4013c': 'placeholder',
			'4013d': 'placeholder',
			'4014a': 'placeholder',
			'4014b': 'placeholder',
			'4014c': 'placeholder',
			'4014d': 'placeholder',
			'4015a': 'placeholder',
			'4015b': 'placeholder',
			'4015c': 'placeholder',
			'4015d': 'placeholder',
			'4016a': 'placeholder',
			'4016b': 'placeholder',
			'4016c': 'placeholder',
			'4016d': 'placeholder',
			'4017a': 'placeholder',
			'4017b': 'placeholder',
			'4017c': 'placeholder',
			'4017d': 'placeholder',
			'4018a': 'placeholder',
			'4018b': 'placeholder',
			'4018c': 'placeholder',
			'4018d': 'placeholder',
			'5013': 'placeholder',
			'5014': 'placeholder',
			'5015': 'placeholder',
			'5015a': 'placeholder',
			'5015b': 'placeholder',
			'7001': 'placeholder',
			'7002': 'placeholder',
			'7003': 'placeholder',
			'7004': 'placeholder',
			'7005': 'placeholder',
			'7006': 'placeholder',
			'7007': 'placeholder',
			'7008': 'placeholder',
			'7009': 'placeholder',
			'7010': 'placeholder',
			'7011': 'placeholder',
			'9001': 'placeholder',
			'9002': 'placeholder',
			'9003': 'placeholder',
			'9004': 'placeholder',
			'9005': 'placeholder',
			'9006': 'placeholder',
			'9007': 'placeholder',
			'9008': 'placeholder',
			'9009': 'placeholder',
			'9010': 'placeholder',
			'9011': 'placeholder',
			'9012': 'placeholder',
			'9013': 'placeholder',
			'9014': 'placeholder',
			'9015': 'placeholder',
			'9016': 'placeholder',
			'9017': 'placeholder',
			'9018': 'placeholder',
			'9019': 'placeholder',
			'9029': 'placeholder',
			'9030': 'placeholder',
			'9031': 'placeholder',
			'dessert': 'placeholder',
			'dessert1': 'placeholder',
			'dessert2': 'placeholder',
			'DrinkL': 'placeholder',
			'DrinkM': 'placeholder',
			'DrinkS': 'placeholder',
			'homie': 'placeholder',
			'homie1': 'placeholder',
			'homie2': 'placeholder',
			'homie3': 'placeholder',
			'homieT': 'placeholder',
			'L1': 'placeholder',
			'L2': 'placeholder',
			'L3': 'placeholder',
			'L4': 'placeholder',
			'L5': 'placeholder',
			'M1': 'placeholder',
			'M2': 'placeholder',
			'M3': 'placeholder',
			'M4': 'placeholder',
			'M5': 'placeholder',
			'S1': 'placeholder',
			'S2': 'placeholder',
			'S3': 'placeholder',
			'S4': 'placeholder',
			'S5': 'placeholder',
			'ticket1': 'placeholder',
			'ticket2': 'placeholder',
			'ticket3': 'placeholder',
			'ticket4': 'placeholder',
			'4000a': 'placeholder',
			'4000b': 'placeholder',
			'4001a': 'placeholder',
			'4001b': 'placeholder',
			'4002a': 'placeholder',
			'4002b': 'placeholder',
			'4003a': 'placeholder',
			'4003b': 'placeholder',
			'4004a': 'placeholder',
			'4004b': 'placeholder',
			'4005a': 'placeholder',
			'4005b': 'placeholder',
			'4006a': 'placeholder',
			'4006b': 'placeholder',
			'4006c': 'placeholder',
			'4006d': 'placeholder',
			'4007a': 'placeholder',
			'4007b': 'placeholder',
			'4007c': 'placeholder',
			'4007d': 'placeholder',
			'4008a': 'placeholder',
			'4008b': 'placeholder',
			'4008c': 'placeholder',
			'4008d': 'placeholder',
			'4009a': 'placeholder',
			'4009b': 'placeholder',
			'4010a': 'placeholder',
			'4010b': 'placeholder',
			'4011a': 'placeholder',
			'4011b': 'placeholder',
			'4011c': 'placeholder',
			'4011d': 'placeholder',
			'4012a': 'placeholder',
			'4012b': 'placeholder',
			'4012c': 'placeholder',
			'4012d': 'placeholder',
			'4013a': 'placeholder',
			'4013b': 'placeholder',
			'4013c': 'placeholder',
			'4013d': 'placeholder',
			'4014a': 'placeholder',
			'4014b': 'placeholder',
			'4014c': 'placeholder',
			'4014d': 'placeholder',
			'4015a': 'placeholder',
			'4015b': 'placeholder',
			'4015c': 'placeholder',
			'4015d': 'placeholder',
			'4016a': 'placeholder',
			'4016b': 'placeholder',
			'4016c': 'placeholder',
			'4016d': 'placeholder',
			'4017a': 'placeholder',
			'4017b': 'placeholder',
			'4017c': 'placeholder',
			'4017d': 'placeholder',
			'4018a': 'placeholder',
			'4018b': 'placeholder',
			'4018c': 'placeholder',
			'4018d': 'placeholder',
			'4019a': 'placeholder',
			'4019b': 'placeholder',
			'4019c': 'placeholder',
			'4019d': 'placeholder',
			'4020a': 'placeholder',
			'4020b': 'placeholder',
			'4020c': 'placeholder',
			'4020d': 'placeholder',
			'4021a': 'placeholder',
			'4021b': 'placeholder',
			'4022a': 'placeholder',
			'4022b': 'placeholder',
			'4022c': 'placeholder',
			'4022d': 'placeholder',
			'4023a': 'placeholder',
			'4023b': 'placeholder',
			'4023c': 'placeholder',
			'4023d': 'placeholder',
			'4024a': 'placeholder',
			'4024b': 'placeholder',
			'4024c': 'placeholder',
			'4024d': 'placeholder',
			'5013': 'placeholder',
			'5014': 'placeholder',
			'5015a': 'placeholder',
			'5015b': 'placeholder',
			'7001': 'placeholder',
			'7002': 'placeholder',
			'7003': 'placeholder',
			'7004': 'placeholder',
			'7005': 'placeholder',
			'7006': 'placeholder',
			'7007': 'placeholder',
			'7008': 'placeholder',
			'7009': 'placeholder',
			'7010': 'placeholder',
			'7011': 'placeholder',
			'9001': 'placeholder',
			'9002': 'placeholder',
			'9003': 'placeholder',
			'9004': 'placeholder',
			'9005': 'placeholder',
			'9006': 'placeholder',
			'9007': 'placeholder',
			'9008': 'placeholder',
			'9009': 'placeholder',
			'9010': 'placeholder',
			'9011': 'placeholder',
			'9012': 'placeholder',
			'9013': 'placeholder',
			'9014': 'placeholder',
			'9015': 'placeholder',
			'9016': 'placeholder',
			'9017': 'placeholder',
			'9018': 'placeholder',
			'9019': 'placeholder',
			'9029': 'placeholder',
			'9030': 'placeholder',
			'9031': 'placeholder',
			'dessert': 'placeholder',
			'dessert1': 'placeholder',
			'dessert2': 'placeholder',
			'DrinkL': 'placeholder',
			'DrinkM': 'placeholder',
			'DrinkS': 'placeholder',
			'homie': 'placeholder',
			'homie1': 'placeholder',
			'homie2': 'placeholder',
			'homie3': 'placeholder',
			'homieT': 'placeholder',
			'L1': 'placeholder',
			'L2': 'placeholder',
			'L3': 'placeholder',
			'L4': 'placeholder',
			'L5': 'placeholder',
			'M1': 'placeholder',
			'M2': 'placeholder',
			'M3': 'placeholder',
			'M4': 'placeholder',
			'M5': 'placeholder',
			'S1': 'placeholder',
			'S2': 'placeholder',
			'S3': 'placeholder',
			'S4': 'placeholder',
			'S5': 'placeholder',
			'ticket1': 'placeholder',
			'ticket2': 'placeholder',
			'ticket3': 'placeholder',
			'ticket4': 'placeholder',
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
