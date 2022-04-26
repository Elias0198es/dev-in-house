import { Component, OnInit } from '@angular/core';

interface Inotificacao {
  title: string,
  description: string,
  date: string,
  image: string
}

@Component({
  selector: 'ngf-food-content',
  templateUrl: './food-content.component.html',
  styleUrls: ['./food-content.component.scss']
})
export class FoodContentComponent implements OnInit {

  listaDeNotificacoes: Inotificacao[] = [
    {
      title: "Batata Frita",
      description: "o melhor da região",
      date: "now",
      image: "https://media.istockphoto.com/photos/potatoes-fries-in-a-red-carton-box-isolated-fast-food-picture-id496094410"
    },
    {
      title: "Hamburguer",
      description: "Feito na hora e no capricho",
      date: "3d",
      image: "https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282"
    },
    {
      title: "Pizza",
      description: "direto da itália",
      date: "2d",
      image: "https://media.istockphoto.com/photos/margherita-pizza-with-ham-and-pepper-on-white-background-picture-id1189884515"
    },
    {
      title: "Esfira",
      description: "melhor que no habibis",
      date: "1d",
      image: "https://media.istockphoto.com/photos/chocolate-esfiha-picture-id1250106179"
    },
    {
      title: "Torta",
      description: "coma a vontade",
      date: "now",
      image: "https://media.istockphoto.com/photos/chicken-pie-picture-id1316324247?s=612x612"
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
