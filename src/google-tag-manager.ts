const DATA_LAYER = 'dataLayer';
const VIRTUAL_FUNNEL_CLICK = 'VirtualFunnelClick';

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any */
export interface GtmSettings {
  apiKey: string,
  applicationName: string
}

export class BalGoogleTagManager {
  applicationName: string;

  public isEnabled(): boolean {
    const win = window
    return win && (win as any)[DATA_LAYER] != null && win.localStorage.getItem('ga_debug_mode') !== 'true';
  }

  public load(settings: GtmSettings): void {
    if (!this.isEnabled()) {
      this.runGtmScript(settings.apiKey);
    }
  }

  /**
   * @deprecated this method should not be used
   * @param settings GTM settings for application
   */
  public loadForce(settings: GtmSettings): void {
    this.runGtmScript(settings.apiKey);
  }

  public sendClickEvent(label: string): void {
    if (label) {
      this.googleAnalyticsSendEvent({
        event: VIRTUAL_FUNNEL_CLICK,
        VirtualClickCategory: VIRTUAL_FUNNEL_CLICK,
        VirtualClickAction: this.applicationName,
        VirtualClickLabel: label
      });
    }
  };

  public sendCustomEvent(event: any): void {
    if (event) {
      this.googleAnalyticsSendEvent(event);
    }
  }

  /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
  private runGtmScript(apiKey: string): void {
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
      'https://www.googletagmanager.com/gtm.js?id=' + apiKey + dl;
    f.parentNode.insertBefore(j, f);
  }

  private googleAnalyticsSendEvent(event: any): void {
    if ((window as any)[DATA_LAYER]) {
      (window as any)[DATA_LAYER].push(event);
    }
  }
}
