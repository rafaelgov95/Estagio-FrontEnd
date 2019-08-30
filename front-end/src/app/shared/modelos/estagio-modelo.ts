
export class Estagio {
    public empresa_nome: String;
    public empresa_email: String;
    public empresa_cnpj: String;
    public empresa_atividade: String;
    public data_inicio: String;
    public data_termino: String;
    public modalidade: String;
    public valor_bolsa: String;
    public valor_transporte: String;
    constructor() {
        this.empresa_nome = String("");
        this.empresa_email = String("");
        this.empresa_cnpj = String("");
        this.empresa_atividade =String("")
        this.data_inicio = String("");
        this.data_termino = String("");
        this.modalidade = String("");
        this.valor_bolsa = String("");
        this.valor_transporte = String("");
    }
}