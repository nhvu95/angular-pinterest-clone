// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { TxbCommonComponent } from './txb-common.component';

export default {
  title: 'Atoms/TxbCommon',
  component: TxbCommonComponent,
  backgrounds: {
    default: 'facebook',
  },
  argTypes: {
    content: { control: 'text' },
    maxWidth: { control: 'text' },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        MatIconModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
    }),
  ],
} as Meta;

const Template: Story<TxbCommonComponent> = (args: TxbCommonComponent) => ({
  props: args,
});

export const InputSearchLong = Template.bind({});
InputSearchLong.args = {
  content: 'yamasi0628’s Remodeled MG 1/100 X-10A Freedom Ver. 2.0 PN: images wip info',
  maxWidth: '100%',
  primary: true
};

export const InputSearchShort = Template.bind({});
InputSearchShort.args = {
  content: 'Gundam Exp',
  maxWidth: '200px',
  primary: true
};

export const InputSearchDetail = Template.bind({});
InputSearchDetail.args = {
  content: 'Gundam Exp',
  maxWidth: '300px',
  primary: false
};

export const InputTxtDetail = Template.bind({});
InputTxtDetail.args = {
  content: 'Gundam Exp',
  maxWidth: '300px',
  primary: false,
  mode:'input-text'
};
