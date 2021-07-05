import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
    selector: 'proximity-selector',
    template: `
    <div class="input-group">
        <label for="useLocation"
            [ngClass]="{'disabled': disabled}">
            Use current location
        </label>
        <input type="checkbox"
            id="useLocation"
            [disabled]="disabled"
            (change)="onLocation($event)">
    </div>
    <div class="input-group">
        <label for="locationRadius"
            [ngClass]="{'disabled': !active || disabled}">
            Radius
        </label>
        <input type="range" min="1" max="100" value="50"
            id="locationRadius"
            [disabled]="!active || disabled"
            (change)="onRadius($event)">
    </div>
    `
})

export class ProximitySelector {

    static StoreEvents = {
        position: 'ProximitySelector:POSITION',
        radius: 'ProximitySelector:RADIUS',
        off: 'ProximitySelector:OFF',
        error: 'ProximitySelector:ERROR'
    };

    @Input()
    store: Store<any>;

    @Input()
    disabled: boolean;

    active = false;

    onLocation($event: any) {
        if ($event.target.checked) {
            navigator.geolocation.getCurrentPosition(
                (position: any) => {
                    this.active = true;
                    this.store.dispatch({
                        type: ProximitySelector.StoreEvents.position,
                        payload: {
                            position: {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude
                            }
                        }
                    });
                },
                (error: any) => {
                    this.disabled = true;
                    this.active = false;
                    this.store.dispatch({
                        type: ProximitySelector.StoreEvents.error,
                        payload: {
                            message: error.message
                        }
                    });
                }
            );
        } else {
            this.active = false;
            this.store.dispatch({
                type: ProximitySelector.StoreEvents.off,
                payload: {}
            });
        }
    }

    onRadius($event: any) {
        const radius = parseInt($event.target.value, 10);
        this.store.dispatch({
            type: ProximitySelector.StoreEvents.radius,
            payload: {
                radius: radius
            }
        });
    }

}
