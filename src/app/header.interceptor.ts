import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  let updatedReq = req;

  updatedReq = req.clone({
    headers: req.headers.set('token', 'djcjs2s5dsmks5sdsdmnjdss5v4svsdvksdsv5svsdvsnvs')
  })
    
  return next(updatedReq);
};
