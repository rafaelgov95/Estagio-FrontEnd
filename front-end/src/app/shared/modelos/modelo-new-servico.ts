


export class Endereco {
  public cidade: String;
  public numero: String;
  public bairro: String;
  public cep: String;
  public rua: String;
  public estado: String;
  constructor(rua,numero, cep, bairro, cidade, estado) {
    this.numero=numero
    this.cidade = cidade
    this.estado = estado
    this.bairro = bairro
    this.cep = cep
    this.rua = rua
  }
  public toString() {
    return this.rua

  }
}