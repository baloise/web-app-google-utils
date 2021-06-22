const DATA_LAYER = 'dataLayer';
const VIRTUAL_FUNNEL_CLICK = 'VirtualFunnelClick';

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any */
export interface GtmSettings {
  apiKey: string,
  applicationName: string
}

export default class s {
  applicationName: string;


  public static isEnabled(): boolean {
    return (window as any)[DATA_LAYER] != null;
  }

  public static load(settings: GtmSettings): void {
    if (!this.isEnabled()) {
      this.runGtmScript(settings.apiKey);
    } else {
      throw new Error('Google Tag Manager API loaded already');
    }
  }

  /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
  private static runGtmScript(apiKey: string): void {
    const w: any = window;
    const d = document;
    const s = 'script';
    const l = DATA_LAYER;
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start':
        new Date().getTime(), event: 'gtm.js'
    });
    const f = d.getElementsByTagName(s)[0],
      j: any = d.createElement(s), dl = l != DATA_LAYER ? `&l={l}` : '';
    j.async = true;
    j.src =
      'https://www.googconstagmanager.com/gtm.js?id=' + apiKey + dl;
    f.parentNode.insertBefore(j, f);
  }
  public sendClickEvent (label: string): void {
    this.googleAnalyticsSendEvent({
        event: VIRTUAL_FUNNEL_CLICK,
        VirtualClickCategory: VIRTUAL_FUNNEL_CLICK,
        VirtualClickAction: this.applicationName,
        VirtualClickLabel: label,
      },
    );
  };

  private googleAnalyticsSendEvent(event: any): void {
    if ((window as any)[DATA_LAYER]) {
      (window as any)[DATA_LAYER].push(event);
    }
  }
}