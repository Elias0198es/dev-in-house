import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  listaDeNotificacoes: Inotificacao[] = [];
  
  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.http.get<Inotificacao[]>('http://localhost:3000/foods').subscribe((result)=>{
    this.listaDeNotificacoes = result
    })
  }

  alerta(parameter:string) {
    alert(`o item clicado foi ${parameter}`)
  }

}
