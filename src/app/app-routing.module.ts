import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes=[
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},

    //old syntax for lazy loading
    // { path: 'recipes', loadChildren: './recipes/recipes.module.ts#RecipesModule' }
    //loadChildren is a special property in route config which only load code content when anyone visits /recipes

    //new syntax for lazy loading
    { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) }
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
