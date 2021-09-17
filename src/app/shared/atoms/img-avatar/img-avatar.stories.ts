// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ImgAvatarComponent } from './img-avatar.component';

export default {
  title: 'Atoms/ImgAvatar',
  component: ImgAvatarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<ImgAvatarComponent> = (args: ImgAvatarComponent) => ({
  props: args,
});

export const UserAvatar = Template.bind({});
UserAvatar.args = {
  size: 'small',
  imageUrl:
    'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
};

export const PinAvatar = Template.bind({});
PinAvatar.args = {
  size: 'medium',
  imageUrl:
    'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
};

export const PinDetail_UserAvatar = Template.bind({});
PinDetail_UserAvatar.args = {
  size: 'large',
  imageUrl:
    'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
};

export const UserDetailAvatar = Template.bind({});
UserDetailAvatar.args = {
  size: 'huge',
  imageUrl:
    'https://i.pinimg.com/280x280_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
};

export const PinterestIcon = Template.bind({});
PinterestIcon.args = {
  size: 'small',
  primary: true,
};
