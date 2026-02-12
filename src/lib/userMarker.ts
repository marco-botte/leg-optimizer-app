import type { LngLatLike } from 'maplibre-gl';

export type GeoPoint = [number, number];

export class UserMarker {
    center: LngLatLike;
    element: HTMLDivElement;

    constructor(initialCenter: GeoPoint) {
        this.center = initialCenter;
        this.element = document.createElement('div');
        this.element.className = 'relative h-6 w-6';
        this.element.innerHTML = `
            <div class="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-40"></div>
            <div class="relative h-6 w-6 rounded-full border-2 border-white bg-blue-600 shadow-xl"></div>
        `;
    }

    updateLocation(newPoint: GeoPoint) {
        this.center = newPoint;
    }
}