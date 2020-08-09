import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ThePapyrusPrint-Devis';
  produits: any[];
  formats: any[];
  matieres: any[];
  tailles: any[];
  papiers_cartes: any[];
  papiers_designs: any[];
  couleurs: any[];
  model_macarons: any[];
  montantClient: any;
  montantSousTraitant: any;

  selectedProduct: any;
  selectedMacaron: any;
  selectedPapierD: any;
  selectedPapierC: any;
  selectedTaille: any;
  selectedMatiere: any;
  selectedFormat: any;
  selectedQuantite: any;
  selectedCouleur: any;
  

  show_Matiere: boolean;
  show_Format: boolean;
  show_Taille: boolean;
  show_PapierC: boolean;
  show_PapierD: boolean;
  show_macaronM: boolean;
  show_quantite: boolean;
  show_couleur: boolean;

  calcul_detail_client: any;
  calcul_detail_SousTraitant: any;

  constructor() {}

  ngOnInit() {
    this.effacer();
    this.show_quantite = true;
    this.show_couleur = false;

    this.produits = [
      { title: 'Cartes de visites', selected: false, type: 'Carte'},
      { title: 'Flyers - Dépliants', selected: false, type: 'Papier'},
      { title: 'Invitations', selected: false, type: 'Papier'},
      { title: 'Menu', selected: false, type: 'Papier'},
      { title: 'Programme', selected: false, type: 'Papier'},
      { title: 'Marque place', selected: false, type: 'Papier'},
      { title: 'Carton plumes', selected: false, type: 'Papier'},
      { title: 'Enveloppe', selected: false, type: 'Papier'},
      { title: 'Calendrier', selected: false, type: 'Papier'},
      { title: 'Chemise porte documents', selected: false, type: 'Papier'},
      { title: 'Affiches', selected: false, type: 'Papier'},
      { title: 'Sac papier - Packaging', selected: false, type: 'Papier'},
      { title: 'Sac plastique - Packaging', selected: false, type: 'Design'},
      { title: 'T-shirt', selected: false, type: 'Design'},
      { title: 'Sweat-shirt', selected: false, type: 'Design'},
      { title: 'Autocollant', selected: false, type: 'Etandard'},
      { title: 'Rolls-up', selected: false, type: 'Etandard'},
      { title: 'Banderoles', selected: false, type: 'Etandard'},
      { title: 'Etiquettes', selected: false, type: 'Etandard'},
      { title: 'Mugs magiques 3500/5000 fcfa', selected: false, type: 'MugsM', prixSousTraitant: 2500, prixClient: 3500},
      { title: 'Mugs 2500/3500 fcfa', selected: false, type: 'Mugs', prixSousTraitant: 3500, prixClient: 5000},
      { title: 'Stylo', selected: false, type: 'Stylo', prixSousTraitant: 300, prixClient: 400},
      { title: 'Macaron', selected: false, type: 'Macaron'}
    ];

    this.formats = [
      { title: 'A5 recto 100/200 fcfa', selected: false, prixSousTraitant: 100, prixClient: 200},
      // { title: 'A5 recto simple - Moyen', selected: false, prixSousTraitant: 0, prixClient: 0},
      // { title: 'A5 recto simple - Epais', selected: false, prixSousTraitant: 0, prixClient: 0},
      { title: 'A5 recto-verso 100/200 fcfa', selected: false, prixSousTraitant: 100, prixClient: 200},
      // { title: 'A5 recto-verso simple - Moyen', selected: false, prixSousTraitant: 0, prixClient: 0},
      // { title: 'A5 recto-verso simple - Epais', selected: false, prixSousTraitant: 0, prixClient: 0},
      { title: 'A5 recto pélliculé 200/250 fcfa', selected: false, prixSousTraitant: 200, prixClient: 250},
      { title: 'A5 recto-verso pélliculé 200/250 fcfa', selected: false, prixSousTraitant: 200, prixClient: 250},
      { title: 'A5 plastifié 500/700 fcfa', selected: false, prixSousTraitant: 500, prixClient: 700},

      { title: 'A4 recto 200/300 fcfa', selected: false, prixSousTraitant: 200, prixClient: 300},
      // { title: 'A4 recto simple - Moyen', selected: false, prixSousTraitant: 0, prixClient: 0},
      // { title: 'A4 recto simple - Epais', selected: false, prixSousTraitant: 0, prixClient: 0},
      { title: 'A4 recto-verso 400/500 fcfa', selected: false, prixSousTraitant: 400, prixClient: 500},
      // { title: 'A4 recto-verso simple - Moyen', selected: false, prixSousTraitant: 0, prixClient: 0},
      // { title: 'A4 recto-verso simple - Epais', selected: false, prixSousTraitant: 0, prixClient: 0},
      { title: 'A4 recto pélliculé 200/300 fcfa', selected: false, prixSousTraitant: 200, prixClient: 300},
      { title: 'A4 recto-verso pélliculé 250/300 fcfa', selected: false, prixSousTraitant: 250, prixClient: 300},
      { title: 'A4 plastifié 200/250 fcfa', selected: false, prixSousTraitant: 200, prixClient: 250},

      { title: 'A3 recto 400/500 fcfa', selected: false, prixSousTraitant: 400, prixClient: 500},
      // { title: 'A3 recto simple - Moyen', selected: false, prixSousTraitant: 0, prixClient: 0},
      // { title: 'A3 recto simple - Epais', selected: false, prixSousTraitant: 0, prixClient: 0},
      { title: 'A3 recto-verso 800/1000 fcfa', selected: false, prixSousTraitant: 800, prixClient: 1000},
      // { title: 'A3 recto-verso simple - Moyen', selected: false, prixSousTraitant: 0, prixClient: 0},
      // { title: 'A3 recto-verso simple - Epais', selected: false, prixSousTraitant: 0, prixClient: 0},
      { title: 'A3 recto pélliculé 500/700 fcfa', selected: false, prixSousTraitant: 500, prixClient: 700},
      { title: 'A3 recto-verso pélliculé 500/700 fcfa', selected: false, prixSousTraitant: 500, prixClient: 700},
      { title: 'A3 plastifié 500/700 fcfa', selected: false, prixSousTraitant: 500, prixClient: 700},
    ]

    this.matieres = [
      { title: 'Vinyle blanc 3.500/4.000 fcfa', selected: false, prixSousTraitant: 3500, prixClient: 4000},
      { title: 'Vinyle transparent 3.500/4.000 fcfa', selected: false, prixSousTraitant: 3500, prixClient: 4000},
      { title: 'Bâche 4.000/5.000 fcfa', selected: false, prixSousTraitant: 4000, prixClient: 5000},
      { title: 'Microperforé 4.000/5.000 fcfa', selected: false, prixSousTraitant: 4000, prixClient: 5000},
    ]

    this.papiers_cartes = [
      { title: 'Papier simple - recto 25/35 fcfa', selected: false, prixSousTraitant: 25, prixClient: 35},
      { title: 'Papier plastifié - recto 35/50 fcfa', selected: false, prixSousTraitant: 35, prixClient: 50},
      { title: 'Papier pélliculé - recto 40/50 fcfa', selected: false, prixSousTraitant: 40, prixClient: 50},
      { title: 'Papier simple - recto-verso 50/60 fcfa', selected: false, prixSousTraitant: 50, prixClient: 60},
    ]

    this.papiers_designs = [
      { title: '1 Papier transfert - Tshirt 2.500/3.500 fcfa', selected: false, prixSousTraitant: 2500, prixClient: 3500},
      { title: '1 Papier transfert - Sweat 3.500/5.000 fcfa', selected: false, prixSousTraitant: 3500, prixClient: 5000},
      { title: '2 Papier transfert - Tshirt 5.000/7.000 fcfa', selected: false, prixSousTraitant: 5000, prixClient: 7000},
      { title: '2 Papier transfert - Sweat 7.000/10.000 fcfa', selected: false, prixSousTraitant: 7000, prixClient: 10000},
      { title: '3 Papier transfert - Tshirt 7.500/10.500 fcfa', selected: false, prixSousTraitant: 7500, prixClient: 10500},
      { title: '3 Papier transfert - Sweat 10.500/15.000 fcfa', selected: false, prixSousTraitant: 10500, prixClient: 15000},
      { title: '4 Papier transfert - Tshirt 10.000/14.000 fcfa', selected: false, prixSousTraitant: 10000, prixClient: 14000},
      { title: '4 Papier transfert - Sweat 14.000/20.000 fcfa', selected: false, prixSousTraitant: 14000, prixClient: 20000},      
      { title: 'Broderie 2 points - 0 fcfa', selected: false, prixSousTraitant: 0, prixClient: 0},
      { title: 'Broderie 8 points - 0 fcfa', selected: false, prixSousTraitant: 0, prixClient: 0},
      { title: 'Broderie 16 points - 0 fcfa', selected: false, prixSousTraitant: 0, prixClient: 0},
      { title: 'Broderie 32 points - 0 fcfa', selected: false, prixSousTraitant: 0, prixClient: 0},
      { title: 'Broderie 64 points - 0 fcfa', selected: false, prixSousTraitant: 0, prixClient: 0},
      { title: 'Broderie 128 points - 0 fcfa', selected: false, prixSousTraitant: 0, prixClient: 0}
    ]

    this.tailles = [
      { title: '1 (M²)', selected: false, valeur: 1},
      { title: '2 (M²)', selected: false, valeur: 2},
      { title: '3 (M²)', selected: false, valeur: 3},
      { title: '4 (M²)', selected: false, valeur: 4},
      { title: '5 (M²)', selected: false, valeur: 5},
      { title: '6 (M²)', selected: false, valeur: 6},
      { title: '7 (M²)', selected: false, valeur: 7},
      { title: '8 (M²)', selected: false, valeur: 8},
      { title: '9 (M²)', selected: false, valeur: 9},
    ]

    this.model_macarons = [
      { title: 'Petit model 250/300 fcfa', selected: false, prixSousTraitant: 250, prixClient: 300},
      { title: 'Grand model 350/500 fcfa', selected: false, prixSousTraitant: 350, prixClient: 500},
    ]

    this.couleurs = [
      { title: 'Noir - Blanc 25 fcfa', selected: false, prixSousTraitant: 25, prixClient: 25},
      { title: 'Quadrie 50 fcfa', selected: false, prixSousTraitant: 50, prixClient: 50},
    ]
  }

  onChangeTaille() {
    console.log(this.selectedTaille);
  }

  onChangeFormat() {
    console.log(this.listToAray(this.selectedFormat, ','));
  }

  onChangeMatiere() {
    console.log(this.listToAray(this.selectedMatiere, ','));
  }

  onChangePapiers_cartes() {
    console.log(this.listToAray(this.selectedPapierC, ','));
  }

  onChangePapiers_designs() {
    console.log(this.listToAray(this.selectedPapierD, ','));
  }

  onChangeMacaron_model() {
    console.log(this.listToAray(this.selectedMacaron, ','));
  }

  onChangeCouleur() {
    console.log(this.listToAray(this.selectedCouleur, ','));
  }

  onChangeProduit() {
    // this.effacer();
        
    switch(this.selectedProduct) { 
      case 'Papier': {
        this.show_Format = true;
        this.show_Matiere = false;
        this.show_Taille = false;
        this.show_PapierC = false;
        this.show_PapierD = false;
        this.show_macaronM = false;
        this.show_quantite = true;
        this.show_couleur = true;
        break;
      }

      case 'Etandard': {
        this.show_Format = false;
        this.show_Matiere = true;
        this.show_Taille = true;
        this.show_PapierC = false;
        this.show_PapierD = false;
        this.show_macaronM = false;
        this.show_quantite = true;
        this.show_couleur = false;
        break; 
      }

      case 'Design': {
        this.show_Format = false;
        this.show_Matiere = false;
        this.show_Taille = false;
        this.show_PapierC = false;
        this.show_PapierD = true;
        this.show_macaronM = false;
        this.show_quantite = true;
        this.show_couleur = false;
        break; 
      }

      case 'Carte': {
        this.show_Format = false;
        this.show_Matiere = false;
        this.show_Taille = false;
        this.show_PapierC = true;
        this.show_PapierD = false;
        this.show_macaronM = false;
        this.show_quantite = true;
        this.show_couleur = false;
        break; 
      }

      case 'Macaron': {
        this.show_Format = false;
        this.show_Matiere = false;
        this.show_Taille = false;
        this.show_PapierC = false;
        this.show_PapierD = false;
        this.show_macaronM = true;
        this.show_quantite = false;
        this.show_couleur = false;
        break; 
      }

      default: {
        this.show_Format = false;
        this.show_Matiere = false;
        this.show_Taille = false;
        this.show_PapierC = false;
        this.show_PapierD = false;
        this.show_macaronM = false;
        this.show_quantite = true;
        this.show_couleur = false;
        break; 
      } 
   }
  }

  effacer() {
    this.montantClient = 0;
    this.montantSousTraitant = 0;
    this.selectedPapierC = 0;
    this.selectedPapierD = 0;
    this.selectedFormat = 0;
    this.selectedMacaron = 0;
    this.selectedTaille = 0;
    this.selectedMatiere = 0;
    this.selectedCouleur = 0;
    this.selectedQuantite = 0;
    this.calcul_detail_SousTraitant = 'RAS';
    this.calcul_detail_client = 'RAS';
  }

  calculerDevis() {
    switch(this.selectedProduct) { 
      case 'Papier': {

        this.calcul_detail_client = this.listToAray(this.selectedFormat, ',')[0] + ' * ' + this.selectedQuantite;
        this.calcul_detail_SousTraitant = this.listToAray(this.selectedFormat, ',')[1] + ' * ' + this.selectedQuantite;

        this.montantClient  = this.listToAray(this.selectedFormat, ',')[0] * this.selectedQuantite;
        this.montantSousTraitant  = this.listToAray(this.selectedFormat, ',')[1] * this.selectedQuantite;
        break;
      }

      case 'Etandard': {
        this.calcul_detail_client = this.listToAray(this.selectedMatiere, ',')[0] + ' * ' + this.selectedTaille + ' * ' + this.selectedQuantite;
        this.calcul_detail_SousTraitant = this.listToAray(this.selectedMatiere, ',')[1] + ' * ' + this.selectedTaille + ' * ' + this.selectedQuantite;

        this.montantClient  = this.listToAray(this.selectedMatiere, ',')[0] * this.selectedTaille * this.selectedQuantite;
        this.montantSousTraitant  = this.listToAray(this.selectedMatiere, ',')[1] * this.selectedTaille * this.selectedQuantite;
        break; 
      }

      case 'Design': {
        this.calcul_detail_client = this.listToAray(this.selectedPapierD, ',')[0] + ' * ' + this.selectedQuantite;
        this.calcul_detail_SousTraitant = this.listToAray(this.selectedPapierD, ',')[1] + ' * ' + this.selectedQuantite;

        this.montantClient  = this.listToAray(this.selectedPapierD, ',')[0] * this.selectedQuantite;
        this.montantSousTraitant  = this.listToAray(this.selectedPapierD, ',')[1] * this.selectedQuantite;
        break; 
      }

      case 'Carte': {
        this.calcul_detail_client = this.listToAray(this.selectedPapierC, ',')[0] + ' * ' + this.selectedQuantite;
        this.calcul_detail_SousTraitant = this.listToAray(this.selectedPapierC, ',')[1] + ' * ' + this.selectedQuantite;

        this.montantClient  = this.listToAray(this.selectedPapierC, ',')[0] * this.selectedQuantite;
        this.montantSousTraitant  = this.listToAray(this.selectedPapierC, ',')[1] * this.selectedQuantite;
        break; 
      }

      case 'Macaron': {
        this.calcul_detail_client = this.listToAray(this.selectedMacaron, ',')[0] + ' * ' + this.selectedQuantite;
        this.calcul_detail_SousTraitant = this.listToAray(this.selectedMacaron, ',')[1] + ' * ' + this.selectedQuantite;

        this.montantClient  = this.listToAray(this.selectedMacaron, ',')[0] * this.selectedQuantite;
        this.montantSousTraitant  = this.listToAray(this.selectedMacaron, ',')[1] * this.selectedQuantite;
        break; 
      }

      case 'MugsM': {
        this.calcul_detail_client = '5000' + ' * ' + this.selectedQuantite;
        this.calcul_detail_SousTraitant = '3500' + ' * ' + this.selectedQuantite;

        this.montantClient  = 5000 * this.selectedQuantite;
        this.montantSousTraitant  = 3500 * this.selectedQuantite;
        break; 
      }

      case 'Mugs': {
        this.calcul_detail_client = '3500' + ' * ' + this.selectedQuantite;
        this.calcul_detail_SousTraitant = '2500' + ' * ' + this.selectedQuantite;

        this.montantClient  = 3500 * this.selectedQuantite;
        this.montantSousTraitant  = 2500 * this.selectedQuantite;
        break; 
      }

      case 'Stylo': {
        this.calcul_detail_client = '400' + ' * ' + this.selectedQuantite;
        this.calcul_detail_SousTraitant = '300' + ' * ' + this.selectedQuantite;

        this.montantClient  = 400 * this.selectedQuantite;
        this.montantSousTraitant  = 300 * this.selectedQuantite;
        break; 
      }

      default: {
        break; 
      } 
   }
  }

  listToAray(fullString, separator) {
    let fullArray = [];
  
    if (fullString !== undefined) {
      if (fullString.indexOf(separator) == -1) {
        fullArray.push(fullString);
      } else {
        fullArray = fullString.split(separator);
      }
    }
  
    return fullArray;
  }
}
