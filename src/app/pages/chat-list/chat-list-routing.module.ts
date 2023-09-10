import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatListPage } from './chat-list.page';
import { ChatDetailsPage } from '../chat-details/chat-details.page';

const routes: Routes = [
  {
    path: '',
    component: ChatListPage
  },
  {
    path: 'chat-details/:item',
    loadChildren: () => import('../chat-details/chat-details.module').then(m => m.ChatDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatListPageRoutingModule {}
