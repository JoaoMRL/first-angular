export interface Room {
    id:number;
    name:string;
    surface:number;
    opened:boolean;
}

export interface Quizz{
    question:string;
    options:string[];
    answer:number;
}