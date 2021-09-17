// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BtnCommonComponent } from './btn-common.component';

export default {
  title: 'Atoms/BtnCommon',
  component: BtnCommonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<BtnCommonComponent> = (args: BtnCommonComponent) => ({
  props: args,
});

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Save',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Save',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Save',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Save',
// };

export const Home = Template.bind({});
Home.args = {
  size: 'large',
  label: 'Trang chủ',
  mode: 'home',
};

export const HomeInDetail = Template.bind({});
HomeInDetail.args = {
  size: 'large',
  label: 'Trang chủ',
  mode: 'home-detail',
  backgroundColor: 'unset'
};

export const Save = Template.bind({});
Save.args = {
  size: 'large',
  label: 'Lưu',
  mode: 'save'
}

export const SettingButton = Template.bind({});
SettingButton.args = {
  size: 'large',
  label: 'Thay đổi',
  mode: 'setting',
}