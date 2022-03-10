import {AbstractControl} from '@angular/forms';

export class ValidateUntil {
   check18Age(abstractControl: AbstractControl): any {

   const year = Number(abstractControl.value.substr(0,4));
   const yearCurr =new Date().getFullYear();
   return yearCurr - year >=18 ? null : {not18: true};
  }

  comparePassword(c: AbstractControl): any{
     const v = c.value;
     return (v.password === v.confirmPassWord) ? null :{
       passWordNotMatch: true
     };
  }
}
