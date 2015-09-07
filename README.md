# myAwesomeLoader
---

[1]: <https://github.com/geekNmetal/myawesomeloader>

_Un preloader jQuery sexy hautement personnalisable._

## Description

myAwesomeLoader est un plugin jQuery permettant d'ajouter facilement un preloader personnalisé sur vos pages web.

### Version
1.0.0

## Utilisation

Insérez juste après la balise `<head>` afin de charger le plugin avant tout le reste

	<head>
	    <link href="css/myAwesomeLoader.css" rel="stylesheet" type="text/css" />
	    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	    <script src="js/myAwesomeLoader.js"></script>
	    <script>
	    	$(function () {
	        	$('html').myAwesomeLoader();
			});
		</script>

## Paramètres

| Option | Type | Défaut | Description |
|--------|------|--------|-------------|
| loadingMessage | string | `"Chargement"` | Personnalise le message d'attente
| type | string | `"dots"` |  Sélectionne le type de loader : `dots` (points) ou `bar` (barre de progression) |
| numberOfDots | int | `5` | Définit le nombre de points affichés |
| dotType | string | `"round"` | Sélectionne le type de point : `round` (rond) ou `square` (carré) |
| dotEffect | string | `"rotateY"` | Sélectionne l'animation des points : `"rotateX"` (rotation sur l'axe X), `"rotateY"` (rotation sur l'axe Y), `"rotateZ"` (rotation sur l'axe Z), `"bounce"` (rebonds). Pour n'en afficher aucune, mettre des guillements vides `""` |
| dotWidth | string | `"20px"` | Définit la largeur des points, toutes les unités sont acceptées (px, %, em, ...) |
| dotHeight | string | `"20px"` | Définit la hauteur des points, toutes les unités sont acceptées (px, %, em, ...) |
| barWidth | string | `"200px"` | Définit la largeur de la barre de progression, toutes les unités sont acceptées (px, %, em, ...) |
| barHeight | string | `"5px"` | Définit la hauteur de la barre de progression, toutes les unités sont acceptées (px, %, em, ...) |
| border | bool | `true` | Affiche une bordure sur la barre ou les points. `true` ou `false` |
| loaderColor | string | `"0075b2"` | Définit la couleur du loader. Indiquer le code couleur html sans le `#`|
| logoPath | string | `"../logo.svg"` | Définit le chemin vers le logo à afficher. Pour n'en afficher aucun, mettre des guillements vides `""` |
| logoEffect | string | `""` | Sélectionne l'animation du logo : `"rotateX"` (rotation sur l'axe X), `"rotateY"` (rotation sur l'axe Y), `"rotateZ"` (rotation sur l'axe Z), `"bounce"` (rebonds), `"horizontalUncover"` (apparition horizontale progressive du logo), `"verticalUncover"` (apparition verticale progressive du logo). Pour n'en afficher aucune, mettre des guillements vides `""` |
| percentage | bool | `true` | Affiche le pourcentage de la progression du chargement. `true` ou `false` |

## Exemple

	$(function () {
		$('html').myAwesomeLoader({
			type: "",
			loaderColor: "c802ff",
			logoPath: "/images/sexy.png",
			logoEffect: "verticalUncover"
		});
	});

## License

Copyright (c) 2015 Sébastien Leroy

Licensed under the MIT license.