import { anonymize } from './anonymizer_obfuscated.js';
//const { anonymize } = require('./anonymizer.js');

const phrases = [
    "Bonjour, je m'appelle John Doe.",
    "Mon nom est Sarah Dupont et je travaille chez ABC Corp.",
    "Il y a une réunion demain à Paris.",
    "J'ai rendez-vous avec Dr. Smith à New York la semaine prochaine.",
    "Envoyez-moi un email à john.doe@example.com pour plus d'informations.",
    "Ma nouvelle adresse mail est sarah.dupont@entreprise.fr.",
    "N'hésitez pas à m'envoyer un message à contact@monsite.com.",
    "Mon numéro de téléphone est le 01 23 45 67 89.",
    "Vous pouvez également me joindre au +44 7911 123456.",
    "Si je ne réponds pas, essayez le +1 555-1234.",
    "Mon IBAN est FR14 2004 1010 0505 0001 3M02 606.",
    "Je vous ai envoyé un virement depuis mon compte IBAN DE89 3704 0044 0532 0130 00.",
    "Pour le remboursement, utilisez cet IBAN : ES91 2100 0418 4502 0005 1332.",
    "Mon numéro de carte de crédit est 1234 5678 9101 1121.",
    "J'ai utilisé la carte 4321-8765-1098-7654 pour le paiement.",
    "Pour confirmer, les quatre derniers chiffres de ma carte sont 1234.",
    "Mon numéro de sécurité sociale est 123-45-6789.",
    "Le SSN de Marie est 987-65-4321.",
    "Pour l'assurance, ils m'ont demandé mon SSN qui est 111-22-3333.",
    "Mon numéro de passeport est W12345678.",
    "J'ai récemment renouvelé mon passeport, le numéro est Z98765432.",
    "En voyage, j'utilise souvent mon passeport X11223344.",
    "Mon adresse IP est 192.168.1.1.",
    "L'adresse IP du serveur est 203.0.113.0.",
    "Si vous rencontrez des problèmes, vérifiez d'abord votre adresse IP.",
    "Je mesure 180 cm et pèse 70 kg.",
    "Sur ma carte d'identité, il est mentionné que je mesure 165 cm.",
    "Le colis pesant 50 kg est prêt à être expédié.",
    "La date d'expiration est le 12/12/2022.",
    "J'ai un rendez-vous le 01/01/2023.",
    "N'oubliez pas la date limite du 31/07/2022.",
    "Mon identifiant est 1234567890.",
    "L'ID du produit que vous avez demandé est 98765.",
    "Veuillez utiliser l'ID 111223344 pour la connexion.",
    "Ma carte nationale d'identité porte le numéro AB123456CD.",
    "J'ai égaré ma CNI, dont le numéro est EF789012GH.",
    "Si vous trouvez une CNI avec le numéro IJ345678KL, c'est la mienne.",
    "Pouvez-vous livrer le colis à l'adresse 123 rue de la République, Lyon?",
    "Je déménage à Toulouse, 45 avenue de la Gloire.",
    "Mon bureau est situé au 10 boulevard des Fleurs, Marseille.",
    "Mon numéro de téléphone fixe est 02 98 76 54 32.",
    "Vous pouvez aussi essayer le +33 6 12 34 56 78.",
    "Ma nouvelle carte bancaire a le numéro 4567 8901 2345 6789.",
    "Je suis né le 15/04/1985.",
    "La date de l'événement est le 20/08/2023.",
    "La date limite pour cette offre est le 28/02/2022.",
    "Mon poids actuel est de 82 kg.",
    "Mon serveur local a l'adresse IP 127.0.0.1.",
    "Ma nouvelle adresse IP est 10.0.0.2."
];
      
const elements = [
    'NAME',          // Noms de personnes.
    'LOCALISATION',  // Lieux ou adresses.
    'EMAIL',         // Adresses email.
    'PHONE',         // Numéros de téléphone.
    'IBAN',          // Numéros IBAN.
    'CREDIT_CARD',   // Numéros de carte de crédit.
    'SSN',           // Numéros de sécurité sociale.
    'PASSPORT',      // Numéros de passeport.
    'IP_ADDRESS',    // Adresses IP.
    'SIZE_WEIGHT',   // Tailles et poids (par exemple, 180 cm ou 70 kg).
    'DATE',          // Dates.
    'NUMERIC_ID',    // Identifiants numériques composés de 5 à 10 chiffres.
    'CNI'            // Carte nationale d'identité (format à adapter selon vos besoins).
  ];
  
    
  // Anonymisez chaque phrase
  phrases.forEach((phrase) => {
    console.log(`Avant anonymisation : ${phrase}`);
    console.log(`Après anonymisation : ${anonymize(phrase, elements)}\n`);
  });