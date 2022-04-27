import { HttpClient } from '@angular/common/http';
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

  listaDeNotificacoes: Inotificacao[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Inotificacao[]>('http://localhost:3000/drinks').subscribe((result)=>{
    this.listaDeNotificacoes = result
    })
  }

  
  alerta(parameter:string) {
    alert(`o item clicado foi ${parameter}`)
  }
}
