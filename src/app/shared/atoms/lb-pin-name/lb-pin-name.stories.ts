// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { LbPinNameComponent } from './lb-pin-name.component';

export default {
  title: 'Atoms/LbPinName',
  component: LbPinNameComponent,
  argTypes: {
    label: { control: 'text' },
    maxWidth: { control: 'text' },
    rowDisplay: { control: 'number' },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<LbPinNameComponent> = (args: LbPinNameComponent) => ({
  props: args,
});

export const LbPinName = Template.bind({});
LbPinName.args = {
  label:
    'yamasi0628’s Remodeled MG 1/100 X-10A Freedom Ver. 2.0 PN: images wip info',
  rowDisplay: 2,
};
