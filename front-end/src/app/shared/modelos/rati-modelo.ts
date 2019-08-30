export class Rati {
  public id: number
  public cpf: string
  public nome: string
  public email: string
  public numero: string
  public tipo: string
  public titulo: string
  public situacao: string
  public prioridade: string
  public mensagem: string
  public nome_ti: string
  public resposta: string
  public resposta_data_at: string
  public data_at: string


  constructor() {
    this.id = 0
    this.cpf = ''
    this.nome = ''
    this.numero= ''
    this.email = ''
    this.tipo = ''
    this.titulo = ''
    this.situacao = ''
    this.prioridade = ''
    this.mensagem = ''
    this.nome_ti=''
    this.resposta=''
    this.resposta_data_at=''  
    this.data_at = '' 
  }
}