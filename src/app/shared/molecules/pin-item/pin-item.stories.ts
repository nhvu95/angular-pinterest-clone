// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { BtnCircleIconModule } from '../../atoms/btn-circle-icon/btn-circle-icon.module';
import { BtnCommonModule } from '../../atoms/btn-common/btn-common.module';
import { BtnSourceModule } from '../../atoms/btn-source/btn-source.module';
import { ImgAvatarModule } from '../../atoms/img-avatar/img-avatar.module';
import { SbTableModule } from '../../atoms/sb-table/sb-table.module';
import { CommonUtilitiesModule } from '../../common/common.module';
import { PinItemComponent } from './pin-item.component';
// import { ReactionPipe } from './reaction.pipe';

export default {
  title: 'Molecules/PinItem',
  component: PinItemComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        CommonUtilitiesModule,
        ImgAvatarModule,
        BtnCommonModule,
        BtnCircleIconModule,
        SbTableModule,
        BtnSourceModule,
        BrowserAnimationsModule
      ],
    }),
  ],
} as Meta;

const Template: Story<PinItemComponent> = (args: PinItemComponent) => ({
  props: args,
});

export const PinItemDefault = Template.bind({});
PinItemDefault.args = {
  pinInfo: {
    imageUrl: 'https://i.pinimg.com/236x/25/fb/9d/25fb9d9ae58d2b45b157b2fef59b0891.jpg',
    imageSource: 'https://mobile.twitter.com/sugokukiyotteru/status/1356420216943611904/photo/1',
    imageTitle: 'Fan Combines Pokémon and Gundam with Custom Gunpla Creations',
    suggestionTable: 'Một cái tên thật dài nhé'
  },
  author: {
    avatar: 'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
    link: 'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
    name: 'Hieu Nguyen Vu',
  },
  mode: 'save',
};

export const PinItemSaved = Template.bind({});
PinItemSaved.args = {
  pinInfo: {
    imageUrl: 'https://i.pinimg.com/236x/25/fb/9d/25fb9d9ae58d2b45b157b2fef59b0891.jpg',
    imageSource: 'https://mobile.twitter.com/sugokukiyotteru/status/1356420216943611904/photo/1',
    imageTitle: 'Fan Combines Pokémon and Gundam with Custom Gunpla Creations',
    suggestionTable: 'Một cái tên thật dài nhé'
  },
  author: {
    avatar: 'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
    link: 'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
    name: 'Hieu Nguyen Vu',
  },
  mode: 'home',
};

export const PinItemNoAuthor = Template.bind({});
PinItemNoAuthor.args = {
  pinInfo: {
    imageUrl: 'https://i.pinimg.com/236x/25/fb/9d/25fb9d9ae58d2b45b157b2fef59b0891.jpg',
    imageSource: 'https://mobile.twitter.com/sugokukiyotteru/status/1356420216943611904/photo/1',
    imageTitle: 'Fan Combines Pokémon and Gundam with Custom Gunpla Creations',
    suggestionTable: 'Một cái tên thật dài nhé'
  },
  author: null,
  mode: 'home',
};


export const PinItemNoCaption = Template.bind({});
PinItemNoCaption.args = {
  pinInfo: {
    imageUrl: 'https://i.pinimg.com/236x/25/fb/9d/25fb9d9ae58d2b45b157b2fef59b0891.jpg',
    imageSource: 'https://mobile.twitter.com/sugokukiyotteru/status/1356420216943611904/photo/1',
    imageTitle: '',
    suggestionTable: 'Một cái tên thật dài nhé'
  },
  author: {
    avatar: 'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
    link: 'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
    name: 'Hieu Nguyen Vu Hieu Nguyen Vu Hieu Nguyen Vu',
  },
  mode: 'home',
};


export const PinItemShortImageDefault = Template.bind({});
PinItemShortImageDefault.args = {
  pinInfo: {
    imageUrl: 'https://live.staticflickr.com/5127/5285712729_4603736266_k.jpg',
    imageSource: 'https://mobile.twitter.com/sugokukiyotteru/status/1356420216943611904/photo/1',
    imageTitle: '',
    suggestionTable: 'Một cái tên thật dài nhé',
    reactions: []
  },
  author: {
    avatar: 'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
    link: 'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
    name: 'Hieu Nguyen Vu Hieu Nguyen Vu Hieu Nguyen Vu',
  },
  mode: 'save',
};


export const PinItemShortImage = Template.bind({});
PinItemShortImage.args = {
  pinInfo: {
    imageUrl: 'https://i.pinimg.com/564x/d9/f7/bc/d9f7bc4576f818ab90447f105f8ec3a2.jpg',
    imageSource: 'https://mobile.twitter.com/sugokukiyotteru/status/1356420216943611904/photo/1',
    imageTitle: '',
    suggestionTable: 'Một cái tên thật dài nhé',
    reactions: ['goodIdea', 'haha', 'love', 'wow'],
    reactionNumber: 520000
  },
  author: {
    avatar: 'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
    link: 'https://i.pinimg.com/75x75_RS/73/03/c6/7303c6ea1ff1a2be0e40de7607eb8286.jpg',
    name: 'Hieu Nguyen Vu Hieu Nguyen Vu Hieu Nguyen Vu'
  },
  mode: 'home',
};

