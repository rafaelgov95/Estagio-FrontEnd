export class UserRole {
    constructor(
      public dn:string,
      public ativo: boolean,
      public login: string,
      public nomeCompleto:string,
      public nomeSocial: string,
      public cpf: string,
      public rga: string,
      public dataAlteracao:string,
      public dataCriacao: string,
      public dataEntregaTermo: string,
      public email: string,
      public emailAlternativo: string,
      public emailAlternativoPadrao:boolean,
      public lotacao: string,
      public tipo: string,
      public representante: boolean 
    ) {  }
  }