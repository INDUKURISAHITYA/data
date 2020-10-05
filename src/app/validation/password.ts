import {AbstractControl} from '@angular/forms';

export function Passwordvalidator (control:AbstractControl):{[key:string]:boolean} |null{
    const password=control.get('password');
    const cfpass=control.get('cfpassword');
    if(password.pristine || cfpass.pristine)
    {
      return null;
    }
  return password && cfpass && password.value != cfpass.value ? {'mismatch':true} :null;
}



