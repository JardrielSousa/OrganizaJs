export interface Sale{
    id?:number;
    nomeProduto:string;
    valor:number;
    tamanho:string;
    quantidade:number;
    dataVenda?:Date;
    pagamento:string;
    nomeCliente:string;
    endereco:string;
    contato:number;
}