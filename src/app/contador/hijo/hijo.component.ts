import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { MultiplicararAction, DividirAction } from '../contador.actions';



@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  // @Input() contador: number;
  // @Output() cambioContador= new EventEmitter<number>();
  
  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador')
    .subscribe(contador=>{
      this.contador= contador;
    })
  }

  multiplicar(){
    // this.contador *=2;
    // this.cambioContador.emit(this.contador);
    const accion = new MultiplicararAction(5);
    this.store.dispatch(accion);
  }

  dividir(){
    // this.contador /=2;
    // this.cambioContador.emit(this.contador);
    const accion = new DividirAction(6);
    this.store.dispatch(accion);
  }

  resetNieto( nuevoContador ){
    this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }
}
