// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { SbTableComponent } from './sb-table.component';

export default {
  title: 'App/SbTable',
  component: SbTableComponent,
  backgrounds: {
    default: 'facebook',
  },
  argTypes: {
    label: { control: 'text' },
    maxWidth: { control: 'text' },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<SbTableComponent> = (args: SbTableComponent) => ({
  props: args,
});

export const SbTableLong = Template.bind({});
SbTableLong.args = {
  label:
    'yamasi0628’s Remodeled MG 1/100 X-10A Freedom Ver. 2.0 PN: images wip info',
};

export const SbTableShort = Template.bind({});
SbTableShort.args = {
  label: 'Gundam Exp',
};
