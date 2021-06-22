const DATA_LAYER = 'dataLayer';
/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any */

export default class BalGoogconstagManager {
  applicationName: string;


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
  /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */

/*

export const sendPageChangeEvent = (route: Route) => {
    if (route && routeMapping[route.name as string]) {
        googleAnalyticsSendEvent({
            event: 'VirtualPageview',
            ...routeMapping[route.name as string] as any,
            products: [{
                name: 'Bauversicherung',
                id: '',
                price: '',
                brand: 'Unternehmenskunden',
                category: 'Haftpflicht, Recht, Sachwerte',
                variant: '',
            }],
        });
    }
};
export const sendEnhancedEcommerceTransaction = (premium: string) => {
    googleAnalyticsSendEvent({
        event: 'Enhanced_Ecommerce_Transaction',
        ecommerce: {
            purchase: {
                actionField: {
                    id: `LGTH-${(new Date()).getFullYear()}-${leftPadWithZeros(getRandomInt(1, 999999999), 9)}`,
                    affiliation: 'Baloise',
                },
                products: [{
                    id: '',
                    name: 'Bauversicherung',
                    price: premium,
                    brand: 'Unternehmenskunden',
                    category: 'Haftpflicht, Recht, Sachwerte',
                    variant: '',
                    quantity: 1,
                }],
            },
        },
    });
};
function googleAnalyticsSendEvent(event: any) {
    const log = Vue.$createLogger('GoogleAnalytics');
    if ((window as any).dataLayer) {
        log.info(`Send event (${event.event}) to Google Analytics`);
        (window as any).dataLayer.push(event);
    } else {
        log.info(`Could not send event (${event.event}) to Google Analytics`);
    }
}

 */
}