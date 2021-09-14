// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BtnCircleIconComponent } from './btn-circle-icon.component';

export default {
  title: 'Atoms/BtnCircleIcon',
  component: BtnCircleIconComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatIconModule, MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<BtnCircleIconComponent> = (
  args: BtnCircleIconComponent
) => ({
  props: args,
});

export const NotificationHeader = Template.bind({});
NotificationHeader.args = {
  label: 'notifications',
  primary: true,
  mode: 'header',
  size: 'large',
};

export const MessageHeader = Template.bind({});
MessageHeader.args = {
  label: 'sms',
  primary: true,
  mode: 'header',
  size: 'large',
};

export const Share = Template.bind({});
Share.args = {
  label: 'file_upload',
  mode: 'pin',
  size: 'medium',
};

export const ShareDetail = Template.bind({});
ShareDetail.args = {
  label: 'file_upload',
  mode: 'pin',
  size: 'large',
};

export const MoreHoriz = Template.bind({});
MoreHoriz.args = {
  label: 'more_horiz',
  mode: 'pin',
  size: 'medium',
};

export const MoreHorizDetail = Template.bind({});
MoreHorizDetail.args = {
  label: 'more_horiz',
  mode: 'pin',
  size: 'large',
};


export const ZoomPinDetail = Template.bind({});
ZoomPinDetail.args = {
  label: 'filter_center_focus',
  mode: 'pin-detail',
  size: 'large',
};
