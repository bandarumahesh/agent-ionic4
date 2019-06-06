import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable()
export class DataResolverService implements Resolve<any> {

    constructor(private dataService: DataService) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.dataService.getData(route.params['id']);

    }
}