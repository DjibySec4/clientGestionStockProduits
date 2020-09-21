//Cest une entité pr l'affichage du html des crud

export class DataModel
{
    constructor(public columnName ?: string, //nom de la colonne
                public columnReference ?: string, //le nom a aff ds la vue
                public dataType ?: string, //le type de la colonne
                public readonly ?: boolean, //C readonly ou pas ?
                public messages ?: any){}  //sil ya un message erreur a afficher apres le frm
}
