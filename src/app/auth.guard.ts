import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class authGuard{
    canLoad():boolean{
        return confirm("do you want to enter into lazily loaded module ???")
    };
    canActivate():boolean{
        return confirm("do you want to enter into second page ??");
    };
    canDeactivate():boolean{
        return confirm("do you want to leave first page ??");
    };
    canActivateChild():boolean{
        return confirm("do you want to enter into third child ??");
    };
}