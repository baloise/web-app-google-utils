/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any */

const GOOGLE = 'google';
const getGoogleMapsSrc = (version: string, apiKey: string) =>
  `//maps.googleapis.com/maps/api/js?libraries=places&v=${version}&key=${apiKey}`;

export default class BalGoogleMaps {
  public static isEnabled(): boolean {
    return (window as any)[GOOGLE] != null
      && (window as any)[GOOGLE].maps != null;
  }


  public static load(settings: { version: string, apiKey: string }): void {
    if (!this.isEnabled()) {
      this.loadScript(getGoogleMapsSrc(settings.version, settings.apiKey));
    } else {
      throw new Error('Google Maps API loaded already');
    }
  }


  private static loadScript(src: string): void {
    const node = document.createElement('script');
    node.src = src;
    node.type = 'text/javascript';
    node.async = false;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
