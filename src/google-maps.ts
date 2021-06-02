
const GOOGLE = 'google';
const getGoogleMapsSrc = (version: string, apiKey: string) =>
    `//maps.googleapis.com/maps/api/js?libraries=places&v=${version}&key=${apiKey}`;

//
// export class BalGoogleMapsService implements ThirdPartyApiService {
//     constructor(private windowRefService: WindowRefService) {
//     }
//     isEnabled(): boolean {
//         return this.windowRefService.nativeWindow[GOOGLE] != null
//             && this.windowRefService.nativeWindow[GOOGLE].maps != null;
//     }
//     load(settings: { version: string, apiKey: string }): void {
//         if (!this.isEnabled()) {
//             this.windowRefService.loadScript(getGoogleMapsSrc(settings.version, settings.apiKey));
//         } else {
//             throw new Error('Google Maps API loaded already');
//         }
//     }
// }