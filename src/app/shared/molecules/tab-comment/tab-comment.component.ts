import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonBase } from '../../atoms/btn-base';
import { Comment } from '../../model/comment.model';

@Component({
  selector: 'app-tab-comment',
  templateUrl: './tab-comment.component.html',
  styleUrls: ['./tab-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabCommentComponent extends ButtonBase {
  @Input()
  comments: Comment[] = [] as Comment[];

  @Input()
  images: string[] = [] as string[];

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
