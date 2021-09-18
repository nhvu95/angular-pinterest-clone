import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactionPipe } from './reaction.pipe';
import { LinkPipe } from './link.pipe';
import { TimeCommentPipe } from './timecomment.pipe';



@NgModule({
    declarations: [
        ReactionPipe,
        LinkPipe,
        TimeCommentPipe
    ],
    imports: [
        CommonModule],
    exports: [ReactionPipe, LinkPipe, TimeCommentPipe]
})
export class CommonUtilitiesModule { }
