import { ActivatedRoute } from "@angular/router";
import { StringifyOptions } from "querystring";

export class Article {
    id: string;

    constructor(
        public title: string, 
        public link: string, 
        public votes?: number) {

        this.votes = votes || 0;
    }
    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }

    domain(): string {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}
