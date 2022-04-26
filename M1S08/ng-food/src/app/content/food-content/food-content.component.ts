import { Component, OnInit } from '@angular/core';

interface Inotificacao {
  titulo: string
}

@Component({
  selector: 'ngf-food-content',
  templateUrl: './food-content.component.html',
  styleUrls: ['./food-content.component.scss']
})
export class FoodContentComponent implements OnInit {

  listaDeNotificacoes: Inotificacao[] = [
    {
      titulo: "Batata Frita"
    },
    {
      titulo: "Hamburguer"
    },
    {
      titulo: "Pizza"
    },
    {
      titulo: "Esfira"
    },
    {
      titulo: "Torta"
    }
  ]

  

  constructor() { 

  }

  ngOnInit(): void {
  }

  alerta(parameter:string) {
    alert(`o item clicado foi ${parameter}`)
  }

}
