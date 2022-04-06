import { Menu, Recette } from 'types/recette.type';

enum Services {
	entree,
	plat,
	dessert
}
const ENTRY_NAME_POOL : string[] = [
	"salade de tomate",
	"salade d'endives",
	"salade de betteraves",
	"concombres à la crème",
	"carottes rapées",
	"taboulet"
];
const MAIN_COURSE_NAME_POOL : string[] = [
	"purée",
	"pâtes carbonara",
	"pâtes bolognaises",
	"oeufs au plat",
	"quiche au poireau",
	"épinards au chèvre",
	"chou-fleur curry",
	"riz coco",
	"nems",
	"burritos",
	"paella",
	"pizza"
];
const DESSERT_NAME_POOL : string[] = [
	"compote",
	"yahourt",
	"tarte au pomme",
	"tarte au citron meringué",
	"fruits",
	"salade de fruit"
];
const TIME_POOL : number[] = [5,10,15,20,30,50,100];
const PRICE_POOL : number[] = [1,2,3,5,10];
const INGREDIENT_POOL : string[] = [
	"carrotes",
	"concombre",
	"pates",
	"purée",
	"oeufs",
	"épinards",
	"salade",
	"chou-fleur",
	"riz"
];
const RECETTE_STEPS : string[] = [
	"ouvrir le paquet",
	"mettre dans une casserole",
	"faire chauffer",
	"servir"
];

export function createMenu() : Menu {
	return(
		{
			date: new Date().toLocaleDateString('fr', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}),
			starter: [
				createRecette(Services.entree),
				createRecette(Services.entree)
			],
			mainCourse: [
				createRecette(Services.plat),
				createRecette(Services.plat)
			],
			dessert: [
				createRecette(Services.dessert)
			]
		}
	);
}

export function createRecette(service : Services) : Recette {
	const recette : Recette = {
		id: "" + Math.floor(Math.random() * 1000000),
		time: getRandomArrayValue(TIME_POOL) as number,
		price: getRandomArrayValue(PRICE_POOL) as number,
		ingredients: [
			getRandomArrayValue(INGREDIENT_POOL) as string,
			getRandomArrayValue(INGREDIENT_POOL) as string,
			getRandomArrayValue(INGREDIENT_POOL) as string
		],
		recette: RECETTE_STEPS,
		name: ""
	};
	
	switch (service) {
		case Services.entree:
			recette.name = getRandomArrayValue(ENTRY_NAME_POOL) as string;
			break;
		case Services.plat:
			recette.name = getRandomArrayValue(MAIN_COURSE_NAME_POOL) as string;
			break;
		case Services.dessert:
			recette.name = getRandomArrayValue(DESSERT_NAME_POOL) as string;
			break;
	}
	
	return recette;
}

function getRandomArrayValue(array : Array<string | number>) {
	return array[Math.floor(Math.random() * array.length)];
}