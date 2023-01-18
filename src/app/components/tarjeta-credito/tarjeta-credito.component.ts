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
      titular:"Jose Correa",
      numeroTarjeta:212312332132231,
      fechaExpiracion: '11/12',
      cvv:123
    },
    {
      titular:"Ana correa",
      numeroTarjeta:2123123321443331,
      fechaExpiracion: '11/10',
      cvv:549
    },
  ];


  form:FormGroup;

  constructor(private fb: FormBuilder){
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


     const tarjeta:any={
      titular:this.form.get('titular')?.value,
      numeroTarjeta:this.form.get('numeroTarjeta')?.value,
      fechaExpiracion:this.form.get('fechaExpiracion')?.value,
      ccv:this.form.get('ccv')?.value
     }
    //  this.listTarjetas.push(tarjeta)
    //  this.form.reset()
    console.log(tarjeta);
    this.listTarjetas.push(tarjeta);

  }



}
