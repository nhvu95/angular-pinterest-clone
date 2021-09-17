import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactionPipe } from './reaction.pipe';
import { LinkPipe } from './link.pipe';



@NgModule({
    declarations: [
        ReactionPipe,
        LinkPipe
    ],
    imports: [
        CommonModule],
    exports: [ReactionPipe, LinkPipe]
})
export class CommonUtilitiesModule { }
