import { SearchResult } from "./search-result.modelt";
import { OnInit } from "@angular/core";

export class YouTubeSearchComponent implements OnInit {
    results: SearchResult[];
    loading: boolean;

    constructor() { }
    ngOnInit() { }

    updateResults(results: SearchResult[]): void {
        this.results = results;
        console.log("results:", this.results); // uncomment to take a look
    }
}