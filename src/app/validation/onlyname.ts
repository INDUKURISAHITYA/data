import {AbstractControl} from '@angular/forms'

export function name (control:AbstractControl):{[Key:string]:any}|null
{
   const forbinname = /varma/.test(control.value);
   return forbinname ? {'forbidden':{value:control.value}} :null;
}