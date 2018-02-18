import { Injectable, NgModule } from '@angular/core';
import { Metric, AnalyticsImplementation } from '../analytics-demo/analytics-demo-interface';
import { AnalyticsService } from '../services/analytics-service'
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    providers: [
        { provide: 'API_URL', useValue: 'http://devserver.com' },
        {
            provide: AnalyticsService,
            useFactory(){
                const loggingImplementation: AnalyticsImplementation = {
                    recordEvent: (metric: Metric): void => {
                        console.log('The metric is: ', metric);
                    }
                };
                return new AnalyticsService(loggingImplementation);
            }
        }
    ],
    declarations: []
})
export class AnalyticsDemoModule {}
