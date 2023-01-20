import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



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

  constructor(private fb: FormBuilder,private toastr:ToastrService){
       this.form = this.fb.group({
        titular:['',Validators.required],
        numeroTarjeta:['',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
        fechaExpiracion:['',[Validators.required,Validators.minLength(5),Validators.maxLength(16)]],
        ccv:['',[Validators.required,Validators.maxLength(3),Validators.minLength(3)]]
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
    this.listTarjetas.push(tarjeta)
    this.toastr.success('La tarjeta fue registrada con exito', 'Tarjeta Registrada!');
    this.form.reset()

  }



}
