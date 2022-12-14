import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  pages:Object={
    'home': {title:'Home', subtitle:'Welcome Home!', content:'Home Content', image:'assets/bg00.jpg'},
    'about':{title:'About',subtitle:'About Us',content:'Content about us', image:'assets/bg01.jpg'},
    'contact': {title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/bg02.jpg'}
  }
  constructor() { }
}
