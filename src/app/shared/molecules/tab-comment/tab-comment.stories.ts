// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { BtnCommonModule } from '../../atoms/btn-common/btn-common.module';
import { ImgAvatarModule } from '../../atoms/img-avatar/img-avatar.module';
import { TxbCommonModule } from '../../atoms/txb-common/txb-common.module';
import { CommonUtilitiesModule } from '../../common/common.module';
import { TabCommentComponent } from './tab-comment.component';

export default {
  title: 'Molecules/TabComment',
  component: TabCommentComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [TabCommentComponent],
      imports: [
        CommonModule,
        CommonUtilitiesModule,
        MatTabsModule,
        ImgAvatarModule,
        BtnCommonModule,
        TxbCommonModule,
        IvyCarouselModule,
        BrowserAnimationsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }),
  ],
} as Meta;

const Template: Story<TabCommentComponent> = (args: TabCommentComponent) => ({
  props: args,
});

export const TabComment = Template.bind({});
TabComment.args = {
  label: 'Đã thử Ghim này?\nHãy thêm ảnh để cho biết kết quả như thế nào',
  comments: [
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
  ],
  images: ['https://i.pinimg.com/75x75_RS/ac/c2/f0/acc2f062f7afdef6196292c1759abe4e.jpg', 'https://i.pinimg.com/75x75_RS/ac/c2/f0/acc2f062f7afdef6196292c1759abe4e.jpg', 'https://i.pinimg.com/75x75_RS/ac/c2/f0/acc2f062f7afdef6196292c1759abe4e.jpg']
};
