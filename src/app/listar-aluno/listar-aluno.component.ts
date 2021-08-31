import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {
  aluno : Aluno ={
    nome: "Jhuliane B. Spineli",
    ingresso: "21/06/2018",
    previsao: "25/06/2022"
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
//Jhuliane Beatriz Spineli SC3003507