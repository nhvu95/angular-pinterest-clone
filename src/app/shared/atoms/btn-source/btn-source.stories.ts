// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BtnSourceComponent } from './btn-source.component';
import { LinkPipe } from '../../common/link.pipe';
import { CommonUtilitiesModule } from '../../common/common.module';

export default {
  title: 'Atoms/BtnSource',
  component: BtnSourceComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatIconModule, CommonUtilitiesModule, MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<BtnSourceComponent> = (args: BtnSourceComponent) => ({
  props: args,
});

export const Share = Template.bind({});
Share.args = {
  label: 'https://www.gundamkitscollection.com/2019/01/painted-build-hirm-1100-gundam-barbatos.html',
};

// export const MoreHoriz = Template.bind({});
// MoreHoriz.args = {
//   mode: 'more_horiz',
// };
