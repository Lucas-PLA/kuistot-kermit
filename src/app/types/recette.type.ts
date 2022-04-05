export interface Menu {
    date: string;
    starter: Recette[];
    mainCourse: Recette[];
    dessert: Recette[];
}

export interface Recette {
    id: string;
    name: string;
    time: number;
    price: number;
    ingredients: string[];
    recette: string[];
}