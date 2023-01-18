import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,NgForm } from '@angular/forms';



@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {


  listTarjetas:any[]=[
    {
      titulo:"Jose Correa",
      numeroTarjeta:212312332132231,
      fechaExpedicion: '11/12',
      cvv:123
    },
    {
      titulo:"Ana correa",
      numeroTarjeta:2123123321443331,
      fechaExpedicion: '11/10',
      cvv:549
    },
  ];


  form:FormGroup;

  constructor(private fb:FormBuilder){
       this.form = this.fb.group({
        titular:[''],
        numeroTarjeta:[''],
        fechaExpiracion:[''],
        ccv:['']
       })


  }
  ngOnInit(): void {

  }
  agregarTarjeta(){
     console.log(this.form)
  }



}
