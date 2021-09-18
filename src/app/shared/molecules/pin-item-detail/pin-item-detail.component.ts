import { Component, Input, OnInit } from '@angular/core';
import { ButtonBase } from '../../atoms/btn-base';
import { PinAuthor } from '../../model/pin-author.model';
import { PinInfo } from '../../model/pin-info.model';

@Component({
  selector: 'app-pin-item-detail',
  templateUrl: './pin-item-detail.component.html',
  styleUrls: ['./pin-item-detail.component.scss']
})
export class PinItemDetailComponent extends ButtonBase {

  @Input()
  pinInfo: PinInfo | null = null;

  @Input()
  author: PinAuthor | null = null;

  suggestLabel = 'Đã thử Ghim này?\nHãy thêm ảnh để cho biết kết quả như thế nào';

  comments = [
    {
      userId: 'hieunv2',
      date: new Date('09/19/2018'),
      comment: 'This is excellent picture! This is excellent picture! This is excellent picture! This is excellent picture! This is excellent picture!',
      avatar: 'https://i.pinimg.com/75x75_RS/ac/c2/f0/acc2f062f7afdef6196292c1759abe4e.jpg',
      reactions: [{ type: 'heart', num: 7 }]
    },
    {
      userId: 'hieunv3',
      comment: 'This is excellent picture! This is excellent picture!',
      avatar: 'https://i.pinimg.com/75x75_RS/ac/c2/f0/acc2f062f7afdef6196292c1759abe4e.jpg',
      reactions: [{ type: 'comment', num: 7 }]
    }
  ];

  images = ['https://i.pinimg.com/75x75_RS/ac/c2/f0/acc2f062f7afdef6196292c1759abe4e.jpg', 'https://i.pinimg.com/75x75_RS/ac/c2/f0/acc2f062f7afdef6196292c1759abe4e.jpg', 'https://i.pinimg.com/75x75_RS/ac/c2/f0/acc2f062f7afdef6196292c1759abe4e.jpg']

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
