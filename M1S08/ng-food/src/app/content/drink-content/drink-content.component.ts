import { Component, OnInit } from '@angular/core';

interface Inotificacao {
  titulo: string
}

@Component({
  selector: 'ngf-drink-content',
  templateUrl: './drink-content.component.html',
  styleUrls: ['./drink-content.component.scss']
})
export class DrinkContentComponent implements OnInit {

  listaDeNotificacoes: Inotificacao[] = [
    {
      titulo: "Laranjada"
    },
    {
      titulo: "Limão"
    },
    {
      titulo: "Vitamina de Tuti-Fruti"
    },
    {
      titulo: "Coca-cola"
    },
    {
      titulo: "Maracujá"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
