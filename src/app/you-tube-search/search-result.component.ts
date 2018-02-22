import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from './search-result.modelt';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html'
})
export class SearchResultComponent implements OnInit {
    @Input() result: SearchResult;

    constructor() { }

    ngOnInit() {

    }
}
