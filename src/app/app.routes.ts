import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },

  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage)
  },

  {
    path: 'alert',
    loadComponent: () => import('./pages/alert/alert.page').then(m => m.AlertPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./pages/action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'patata',
    loadComponent: () => import('./pages/patata/patata.page').then( m => m.PatataPage)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar.page').then( m => m.AvatarPage)
  },
  {
    path: 'buttons',
    loadComponent: () => import('./pages/buttons/buttons.page').then( m => m.ButtonsPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card/card.page').then( m => m.CardPage)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./pages/checkbox/checkbox.page').then( m => m.CheckboxPage)
  },
  {
    path: 'datetime',
    loadComponent: () => import('./pages/datetime/datetime.page').then( m => m.DatetimePage)
  },
  {
    path: 'datetime2',
    loadComponent: () => import('./pages/datetime2/datetime2.page').then( m => m.Datetime2Page)
  },
  {
    path: 'fab',
    loadComponent: () => import('./pages/fab/fab.page').then( m => m.FabPage)
  },
  {
    path: 'custom-colors',
    loadComponent: () => import('./pages/custom-colors/custom-colors.page').then( m => m.CustomColorsPage)
  },
  {
    path: 'grid',
    loadComponent: () => import('./pages/grid/grid.page').then( m => m.GridPage)
  },
  {
    path: 'infinite-scroll',
    loadComponent: () => import('./pages/infinite-scroll/infinite-scroll.page').then( m => m.InfiniteScrollPage)
  },
  {
    path: 'input',
    loadComponent: () => import('./pages/input/input.page').then( m => m.InputPage)
  },
  {
    path: 'input2',
    loadComponent: () => import('./pages/input2/input2.page').then( m => m.Input2Page)
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'list-reorder',
    loadComponent: () => import('./pages/list-reorder/list-reorder.page').then( m => m.ListReorderPage)
  },
  {
    path: 'loading',
    loadComponent: () => import('./pages/loading/loading.page').then( m => m.LoadingPage)
  },
  {
    path: 'modal',
    loadComponent: () => import('./pages/modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'popover',
    loadComponent: () => import('./pages/popover/popover.page').then( m => m.PopoverPage)
  },
  {
    path: 'progress',
    loadComponent: () => import('./pages/progress/progress.page').then( m => m.ProgressPage)
  },
  {
    path: 'range',
    loadComponent: () => import('./pages/range/range.page').then( m => m.RangePage)
  },
  /* Esto lo comentamos porque no va a ser una ruta a la que vamos a navegar.
  { 
    path: 'modal-info',
    loadComponent: () => import('./pages/modal-info/modal-info.page').then( m => m.ModalInfoPage)
  }
    */
];
