// ::: DAILY CODING PRACTICE: JAVASCRIPT  ::: //
// :::::::::::::::::::::::::::::::::::::::::: //
// :::::::::::::: switch :::::::::::::::::::: //
// :::::::::::::: switch :::::::::::::::::::: //
// ::::::::::::: Practice ::::::::::::::::::: //
// ::: Wednesday, June 16th, 2021, 7:59pm ::: //
// :::::::::::::::::::::::::::::::::::::::::: //
// :::::::::::::::::::::::::::::::::::::::::: //

const sn16 = 'Starship SN_16';
const bhr2 = 'Super Heavy Booster 2';
const spx = 'SpaceX Corporation';
const raptEng = 'Raptor Engine';
const bct = 'Starbase Boca Chica, Texas';
const elM = 'Elon Musk';
const body = document.body;
// const divIt = document.createElement('div');

const div2 = document.createElement('div');
div2.setAttribute('class', 'div2');
body.append(div2);

document.getElementById('div1').innerHTML = bct;
document.querySelector('.div2').innerHTML = raptEng;

// const printReturnSwitch = returnSwitch();
const div3 = document.createElement('div');
div3.setAttribute('class', 'div3');
body.append(div3);

const inPut = sn16;

const returnSwitch = () => {
	switch (inPut) {
		case 'Starship SN_16':
			document.querySelector(
				'.div3'
			).innerHTML = `The ${sn16} is not a Falcon Rocket; it is the next
			generation spacecraft set to carry the first men to Mars!! We truly 
			live in a wonderful period of human history. ${elM} and his
			${spx} are making huge strides in technology and in creating
			a global excitement for space exploration again!`;
			break;
		case 'Raptor Engine':
			document.querySelector(
				'.div3'
			).innerHTML = `The ${raptEng} will power the ${bhr2} with thirty-two Raptors
			on board the Starship: just the booster stage of the rocket will return to
			${bct} with only 3 of the ${raptEng} fired-up!`;
			break;
		case 'Starbase Boca Chica, Texas':
			document.querySelector(
				'.div3'
			).innerHTML = `${spx} is building the 'Next-Generation space port
			in ${bct}`;
			break;
		default:
			document.querySelector('.div3').innerHTML =
				'why isn"t this working::::';
			return;
	}
};

returnSwitch(bhr2);

// const insertText = () => {
// 	sn16;
// };

// const printReturnSwitch = returnSwitch();
// const div3 = document.createElement('div');
// div3.setAttribute('class', 'div3');
// body.append(div3);
// document.querySelector('.div3').innerHTML = printReturnSwitch;
