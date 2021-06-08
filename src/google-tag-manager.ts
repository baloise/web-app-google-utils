const DATA_LAYER = 'dataLayer';

export default class BalGoogleTagManager {
  public static isEnabled(): boolean {
    return (window as any)[DATA_LAYER] != null;
  }

  public static load(settings: { apiKey: string }): void {
    if (!this.isEnabled()) {
      this.runGtmScript(settings.apiKey);
    } else {
      throw new Error('Google Tag Manager API loaded already');
    }
  }

  public static runGtmScript(apiKey: string): void {
    /*tslint:disable */
    let w: any = window;
    let d = document;
    let s = 'script';
    let l = DATA_LAYER;
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start':
        new Date().getTime(), event: 'gtm.js'
    });
    let f = d.getElementsByTagName(s)[0],
      j: any = d.createElement(s), dl = l != DATA_LAYER ? '&l=' + l : '';
    j.async = true;
    j.src =
      'https://www.googletagmanager.com/gtm.js?id=' + apiKey + dl;
    f.parentNode.insertBefore(j, f);
    /*tslint:enable */
  }
}