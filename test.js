const obfuscatedModule = require('./anonymizer_obfuscated.js');

console.log(obfuscatedModule);

const phrases = [
    "John Doe travaille chez TechCorp depuis 2015.",
    "J'ai reçu un email de jane.doe@example.com hier.",
    "Son numéro de téléphone est le +1 234 567 8900.",
    "Marie Dupont habite à Paris, France.",
    "Ma carte de crédit est 1234-5678-9012-3456, veuillez la traiter en toute sécurité.",
    "L'adresse IP du serveur est 192.168.1.1.",
    "Mon numéro de sécurité sociale est 123-45-6789.",
    "Sara a voyagé à Tokyo, Japon l'année dernière.",
    "Mon passeport porte le numéro 987654321.",
    "La transaction d'IBAN est FR14 2004 1010 0505 0001 3M02 606.",
    "J'ai grandi à Londres et maintenant je vis à New York.",
    "George, dont le mail est george.k@provider.com, sera à la conférence.",
    "J'ai un autre téléphone à contacter : +44 7911 123456.",
    "Mon code client chez la banque est 123456789.",
    "Ma taille est de 180 cm et je pèse 70 kg.",
    "Lucas a déménagé à Berlin, en Allemagne il y a 2 ans.",
    "Mon anniversaire est le 15/04/1990.",
    "Le contrat est au nom de Emily Clark.",
    "Vous pouvez contacter Mr. Smith à smith.j@business.net.",
    "Mon ancienne adresse IP était 10.0.0.2.",
    "Nous avons reçu le paiement de l'IBAN DE89 3704 0044 0532 0130 00.",
    "La carte d'identité nationale de Pedro porte le numéro FR123456AZ7890.",
    "La carte de Maria est 4567-8901-2345-6789.",
    "Brian vit aux États-Unis mais il vient d'Australie.",
    "Mon ID d'employé chez TechFirm est 654321.",
    "Samantha prévoit de visiter Beijing en Chine cet été.",
    "L'adresse email du support est support@helpdesk.com.",
    "Je vis aux Pays-Bas depuis 10 ans.",
    "Mon code d'accès pour le site web est 987654.",
    "La date d'expiration de ma carte est 06/25."
  ];
  
    
  
  // Anonymisez chaque phrase
  phrases.forEach((phrase) => {
    console.log(`Avant anonymisation : ${phrase}`);
    console.log(`Après anonymisation : ${obfuscatedModule.anonymize(phrase, ['NAME','EMAIL', 'LOCALISATION', 'PHONE', 'DATE', 'IBAN'])}\n`);
  });