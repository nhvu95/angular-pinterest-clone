import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchContent: string = '';
  user = { avatar: 'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg' };
  constructor() { }

  ngOnInit(): void {

  }

}
