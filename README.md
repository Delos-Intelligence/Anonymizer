# Anonymizer

La fonction `anonymize` est située dans le fichier `anonymizer_obfuscated.js` et permet de masquer ou anonymiser certaines informations sensibles dans un texte donné.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé la bibliothèque `compromise` :

```bash
npm install compromise
```

## Comment utiliser la fonction

### Importer la fonction


Téléchargez le fichier `anonymizer_obfuscated.js`. Puis importez la fonction `anonymize` depuis le fichier où elle est définie :

```javascript
const { anonymize } = require('./anonymizer_obfuscated.js');
```


## Appel de la fonction
Appelez la fonction en passant le texte que vous souhaitez anonymiser et une liste des éléments à anonymiser en arguments :

```javascript
const texteOriginal = "La carte de Maria est 4567-8901-2345-6789."; //Un texte qu'on souhaite anonymiser
const elementsAAnonymiser = ['NAME', 'EMAIL', 'LOCALISATION']; //les éléments qu'on souhaite anonymiser
const texteAnonymise = anonymize(texteOriginal, elementsAAnonymiser); //le texte anonymisé
```

## Eléments pouvant être anonymisés
Voici une liste des éléments que la fonction est capable d'anonymiser :

- **NAME** : Noms de personnes.
- **LOCALISATION** : Lieux ou adresses.
- **EMAIL** : Adresses email.
- **PHONE** : Numéros de téléphone.
- **IBAN** : Numéros IBAN.
- **CREDIT_CARD** : Numéros de carte de crédit.
- **SSN** : Numéros de sécurité sociale.
- **PASSPORT** : Numéros de passeport.
- **IP_ADDRESS** : Adresses IP.
- **SIZE_WEIGHT** : Tailles et poids (par exemple, 180 cm ou 70 kg).
- **DATE** : Dates.
- **NUMERIC_ID** : Identifiants numériques composés de 5 à 10 chiffres.
- **CNI** : Carte nationale d'identité (format à adapter selon vos besoins).


## Exemple d'utilisation

```javascript
const { anonymize } = require('./anonymizer_obfuscated.js');
const texteOriginal = "Bonjour, mon nom est Jean Dupont. Mon email est jean.dupont@example.com et mon téléphone est +33 1 23 45 67 89.";
const texteAnonymise = anonymize(texteOriginal, ['NAME', 'EMAIL', 'PHONE']);
console.log(texteAnonymise); 
// "Bonjour, mon nom est <NAME>. Mon email est <EMAIL> et mon téléphone est <PHONE>."
```
