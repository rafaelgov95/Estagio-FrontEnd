import { trigger } from '@angular/animations';
import { Endereco } from './endereco-modelo';

export class LocalEstagio {
  public endereco: Endereco;
  public abertura: String;
  public nome: String;
  public fantasia: String;
  public cnpj: String;
  public natureza_juridica: String;
  public atividade_principal: any;
  public atividades_secundarias: any;
  public email: String;
  public tipo: String;
  public telefone: String;
  public ultima_atualizacao: String;

constructor(){
  this.endereco = new Endereco("","","","","","");
  this.abertura=new String("")
  this.nome=new String("")
  this.fantasia=new String ("")
  this.cnpj=new String("")
  this.natureza_juridica=new String("")
  this.atividades_secundarias=new String("")
  this.email=new String("")
  this.telefone=new String("")

  this.tipo=new String("")
  this.ultima_atualizacao=new String("")
}


}