// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { BtnCircleIconModule } from '../../atoms/btn-circle-icon/btn-circle-icon.module';
import { BtnCommonModule } from '../../atoms/btn-common/btn-common.module';
import { ImgAvatarModule } from '../../atoms/img-avatar/img-avatar.module';
import { TxbCommonModule } from '../../atoms/txb-common/txb-common.module';
import { HeaderComponent } from './header.component';

export default {
  title: 'Molecules/Header',
  component: HeaderComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        ImgAvatarModule,
        BtnCommonModule,
        BtnCircleIconModule,
        TxbCommonModule,
        BrowserAnimationsModule
      ],
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const UserAvatar = Template.bind({});
UserAvatar.args = {
  // size: 'small',
  // imgSource:
  //   'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
};

