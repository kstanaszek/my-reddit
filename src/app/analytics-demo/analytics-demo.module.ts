import { Injectable, NgModule } from '@angular/core';
import { Metric, AnalyticsImplementation } from '../analytics-demo/analytics-demo-interface';
import { AnalyticsService } from '../services/analytics-service';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

@NgModule({
    imports: [CommonModule],
    providers: [
        { provide: 'API_URL2', useValue: 'http://devserver.com' },
        {
            provide: AnalyticsService,
            deps: [Http, 'API_URL2'],
            useFactory(http: Http, apiUrl2: string) {

                const loggingImplementation: AnalyticsImplementation = {
                    recordEvent: (metric: Metric): void => {
                        console.log('The metric is: ', metric);
                        console.log('The inner api url is: ', apiUrl2);
                    }
                };
                return new AnalyticsService(loggingImplementation);
            }
        }
    ],
    declarations: []
})
export class AnalyticsDemoModule {}
