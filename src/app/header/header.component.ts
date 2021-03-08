import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipesActions from '../recipes/store/recipe.actions';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
    private userSub: Subscription;
    isAuthenticated: boolean = false;

    constructor(
      private store: Store<fromApp.AppState>
      ){}

    ngOnInit(){
        this.userSub = this.store
          .select('auth')
          .pipe(map(authState => authState.user))
          .subscribe(user => {
            this.isAuthenticated = !user ? false : true;
        })
    }

   onSaveData(){
        // this.dataStorageService.storeRecipes();
        this.store.dispatch(new RecipesActions.StoreRecipes())
   }

   onFetchData(){
      //  this.dataStorageService.fetchRecipes().subscribe();
      this.store.dispatch(new RecipesActions.FetchRecipes());
   }

   onLogout(){
       this.store.dispatch(new AuthActions.Logout());
   }

   ngOnDestroy(){
       this.userSub.unsubscribe();
   }
}
