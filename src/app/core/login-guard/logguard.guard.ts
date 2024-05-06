import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if((localStorage.getItem("username")==="user")&&(localStorage.getItem("pswd")==="password"))
    {
      return true
    }
    else{
      router.navigateByUrl("/login")
      return false;
    }
};
