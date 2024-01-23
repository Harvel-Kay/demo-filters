
type Month="Jan"| "Feb"| "Mar"| "April"| "May"| "Jun"| "Jul"|"Aug"| "Sep"|"Oct"| "Nov"|"Dec"
type Genre="Laptop"|"Other"|"Phone"

export interface Product{
    name: string; month:Month ; genre:Genre  , price: number; quantity: number;
}

const products: Product[] = [
    { month:"May",name:"Iphone 15", price:12_000 ,quantity:4,genre:"Phone"},
    { month:"May",name:"Flash drive 64GB", price:300 ,quantity:10,genre:"Other"},
    { month:"Nov",name:"HeadPhones", price:100 ,quantity:4, genre:"Other"},
    { month:"Nov",name:"Huawei P50", price:100 ,quantity:6,genre:"Phone"},
    { month:"Jan",name:"Dell latitude 3150", price:100 ,quantity:6,genre:"Laptop"},
    { month:"May",name:"M3 PRO", price:400 ,quantity:3,genre:"Laptop"},
    { month:"Nov",name:"M3 MAX", price:600 ,quantity:4,genre:"Laptop"},
    { month:"Nov",name:"Samsung ULTRA ", price:300 ,quantity:4,genre:"Phone"}, 
] 


export default products