import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ListComponent } from './list.component';

const routes: Routes = [
    { path: '', component: ListComponent,
      children: [
          {
              path:'test',
              component: TestComponent
          }
      ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ListRoutingModule { }
