import { Component, OnInit } from '@angular/core';

interface Inotificacao {
  title: string,
  description: string,
  date: string,
  image: string
}

@Component({
  selector: 'ngf-drink-content',
  templateUrl: './drink-content.component.html',
  styleUrls: ['./drink-content.component.scss']
})
export class DrinkContentComponent implements OnInit {

  listaDeNotificacoes: Inotificacao[] = [
    {
      title: "Laranjada",
      description: "Limonada das galaxias, a melhor de são paulo",
      date: "now",
      image: "https://media.istockphoto.com/photos/glass-of-orange-juice-and-fresh-oranges-picture-id152971676"
    },
    {
      title: "Limão",
      description: "soda limonada gostosa e geladinha",
      date: "now",
      image: "https://media.istockphoto.com/photos/mojito-cocktail-with-lime-and-mint-picture-id1307546222"
    },
    {
      title: "Vitamina de Tuti-Fruti",
      description: "Mistura tudo e da um negoço daora",
      date: "2d",
      image: "https://media.istockphoto.com/photos/fruit-juice-picture-id155376375"
    },
    {
      title: "Coca-cola",
      description: "O que faz mal é seu preconceito",
      date: "now",
      image: "https://media.istockphoto.com/photos/cola-glass-with-ice-cubes-picture-id530428650"
    },
    {
      title: "Maracujá",
      description: "Para ficar calminho vai de maracujá",
      date: "2d",
      image: "https://media.istockphoto.com/photos/orange-slices-and-ice-cubes-dropping-into-a-splashing-cocktail-picture-id683565374"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  alerta(parameter:string) {
    alert(`o item clicado foi ${parameter}`)
  }

}
