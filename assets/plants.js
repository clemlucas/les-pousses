const SUNSHINE = {
		SHADE: 0,
		HALF_SUN: 1,
		SUN: 2
};

const WATERING = {
	LOW: 0,
	MEDIUM: 1,
	HIGH: 2
};

const plants = [
	{
		name: "Misère Auréa",
		scientificName: "Tradescantia spp. auréa",
		level: "levelHue",
		sunshine: SUNSHINE.HALF_SUN,
		temperatureMin: 10,
		temperatureMax: 22,
		watering: WATERING.LOW,
		detail: "La Misère Auréa est une plante au port retombant caractérisée par son importante résistance à la sécheresse, la chaleur, l'humidité, l'exposition… Elle est idéale pour les jardiniers débutants."
	},
	{
		name: "Bégonia Corallina",
		scientificName: "Bégonia spp. corallina",
		level: "levelSecateurs",
		sunshine: SUNSHINE.HALF_SUN,
		temperatureMin: 13,
		temperatureMax: 25,
		watering: WATERING.MEDIUM,
		detail: "Le Bégonia Corallina est une espèce assez facile à cultiver en appartement. Originaire d'Amérique centrale et du Sud, il pousse vigoureusement et peut atteindre plus d'un mètre en deux ans."
	},
	{
		name: "Ficus rampant",
		scientificName: "Ficus pumila",
		level: "levelSecateurs",
		sunshine: SUNSHINE.SHADE | SUNSHINE.HALF_SUN,
		temperatureMin: 5,
		temperatureMax: 22,
		watering: WATERING.HIGH,
		detail: "Ficus rampant est une petite plante rampante très rameuse, spontanée dans les forêts de Chine, du Japon et d'Australie. Utilisée en plante décorative, d'intérieur et parfois sur des murs végétalisés d'intérieur."
	},
	{
		name: "Lierre Kolibri",
		scientificName: "Hedera helix Kolibri",
		level: "levelHue",
		sunshine: SUNSHINE.SHADE | SUNSHINE.HALF_SUN,
		temperatureMin: 0,
		temperatureMax: 20,
		watering: WATERING.LOW,
		detail: "Parmi les centaines de variété de lierre, le Lierre Kolibri est caractérisée par ses petites feuilles vertes panachées de crème. De développement très réduit, environ 60 cm, il n'est pas envahissant."
	},
	{
		name: "Chlorophyton",
		scientificName: "Chlorophytum comosum",
		level: "levelSecateurs",
		sunshine: SUNSHINE.SUN | SUNSHINE.HALF_SUN,
		temperatureMin: 7,
		temperatureMax: 25,
		watering: WATERING.MEDIUM,
		detail: "Gracieuse plante verte originaire d’Afrique du Sud, le Chlorophyton est apprécié pour sa facilité d’entretien. Il est particulièrement adapté à la culture en suspension grâce à son feuillage rubané, souple et arqué."
	},
	{
		name: "Pothos Marble Queen",
		scientificName: "Epipremnum aureum Marble Queen",
		level: "levelHue",
		sunshine: SUNSHINE.SUN | SUNSHINE.HALF_SUN,
		temperatureMin: 12,
		temperatureMax: 24,
		watering: WATERING.LOW,
		detail: "D'origines tropicales, le Pothos Marble Queen est une plante très décorative grâce à son feuillage coloré de jaune lumineux et à la portée de tous pour sa facilité d’entretien. Elle peut être cultivée en suspension ou accrochée à un tuteur mousse. "
	},
	{
		name: "Misère Zébrina",
		scientificName: "Tradescantia spp. Zébrina",
		level: "levelHue",
		sunshine: SUNSHINE.HALF_SUN,
		temperatureMin: 10,
		temperatureMax: 22,
		watering: WATERING.LOW,
		detail: "La Misère Zébrina est une plante facile à vivre. Originaire du Mexique et du Guatemala, cette plante est très graphique avec ses rayures vert d’argent et le dessous de ses feuilles, violet vif."
	},
	{
		name: "Pothos Néon",
		scientificName: "Epipremnum aureum Néon",
		level: "levelHue",
		sunshine: SUNSHINE.SUN | SUNSHINE.HALF_SUN,
		temperatureMin: 12,
		temperatureMax: 24,
		watering: WATERING.LOW,
		detail: "Le Pothos Néon est une liane dont la tige pousse très vite et forme des racines aériennes. Il fait partis des plantes dépolluantes. Il est souvent apprécié pour son feuillage très vif en forme de coeur et sa facilité d'entretien."
	},
	{
		name: "Bégonia Hirtella",
		scientificName: "Bégonia spp. Hirtella",
		level: "levelTutor",
		sunshine: SUNSHINE.HALF_SUN,
		temperatureMin: 13,
		temperatureMax: 25,
		watering: WATERING.MEDIUM,
		detail: "Originaire du Brésil, le Bégonia Hirtella est une plante de petite taille. Elle est pourvue de feuilles simples et alternes ainsi que de fleurs se trouvant en bout de tiges ramifiées."
	},
	{
		name: "Phylodendron Scandens",
		scientificName: "Philodendron spp. Scandens",
		level: "levelHue",
		sunshine: SUNSHINE.HALF_SUN,
		temperatureMin: 14,
		temperatureMax: 24,
		watering: WATERING.LOW,
		detail: "Le Phylodendron Scandens est une plante dépolluante au feuillage grimpant et coriace, ayant une croissance généralement rapide. Son feuillage est très décoratif grâce à sa rayure d’un vert vif."
	},
];

export { plants, SUNSHINE, WATERING };
