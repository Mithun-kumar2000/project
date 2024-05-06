import { Routes } from '@angular/router';
import { LogComponent } from './login/log/log.component';
import { DashhomeComponent } from './dash/home/dashhome/dashhome.component';
import { logguardGuard } from './core/login-guard/logguard.guard';
import { TaskcreateComponent } from './dash/create-task/taskcreate/taskcreate.component';
import { TaskdetailsComponent } from './dash/task-details/taskdetails/taskdetails.component';
import { ProfileComponent } from './dash/my-profile/profile/profile.component';
import { ProfileupdtComponent } from './dash/profile-update/profileupdt/profileupdt.component';

export const routes: Routes = [
    {path:"",redirectTo:"login",pathMatch:'full'},
    {path:"dashhome",component:DashhomeComponent,canActivate:[logguardGuard]},
    {path:"login",component:LogComponent},
    {path:"create",component:TaskcreateComponent,canActivate:[logguardGuard]},
    {path:"details",component:TaskdetailsComponent,canActivate:[logguardGuard]},
    {path:"profile",component:ProfileComponent,canActivate:[logguardGuard]},
    {path:"update",component:ProfileupdtComponent,canActivate:[logguardGuard]},

];
