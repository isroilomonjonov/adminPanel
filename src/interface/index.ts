export interface NavData{
    id:number;
    title:string;
    link:string; 
    element:any;
}
export interface ChartData{
    id:number;
    name:string;
    uv:string;
    pv:string;
    amt:string;
    createdAt:string;
}
export interface MainPageData {
  id:string;
  date:string;
  amount:number;
  name:string;
  type:'Kirim'|'Chiqim';
  causes:string;
  paymentType:'Naqd'|'Plastik'|'Click'|'Payme'
}