import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { __makeTemplateObject } from 'tslib';

export const tokenGuardGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router)

  const token = localStorage.getItem('token')

  if (token) {
    return true
  }else {
    router.navigateByUrl('login')
    return false
  }

};
