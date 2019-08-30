import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './aluno.component';
import { AuthGuard } from '../../shared/index';

const routes: Routes = [
  {
    path: '', component: AlunoComponent
  }, {
    path: 'folha-de-frequencia', loadChildren: './componentes/folha-de-frequencia/folha-de-frequencia.module#FolhaDeFrequenciaModule'
  }, {
    path: 'relatorios', loadChildren: './componentes/relatorios/relatorios.module#RelatoriosModule'
  }, {
    path: 'cronograma', loadChildren: './componentes/cronograma/cronograma.module#CronogramaModule'
  }
  , {
    path: 'nova-proposta', loadChildren: './propostas/nova-proposta/nova-proposta.module#NovaPropostaModule'
  }
  , {
    path: 'em-andamento', loadChildren: './propostas/em-andamento/em-andamento.module#EmAndamentoModule'
  }
  , {
    path: 'concluidas', loadChildren: './propostas/concluidas/concluidas.module#ConcluidasModule'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
