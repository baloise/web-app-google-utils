# @baloise/web-app-google-utils
Utilities for managing Google plugins (Maps & Tag Manager) in Baloise web applications.

[![Continous](https://github.com/baloise/web-app-google-utils/actions/workflows/continous.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-google-utils/actions/workflows/continous.yml)
[![Release](https://github.com/baloise/web-app-google-utils/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-google-utils/actions/workflows/release.yml)

![npm](https://img.shields.io/npm/v/@baloise/web-app-google-utils)
![npm bundle size](https://img.shields.io/bundlephobia/min/@baloise/web-app-google-utils)
![npm](https://img.shields.io/npm/dt/@baloise/web-app-google-utils)
![GitHub](https://img.shields.io/github/license/baloise/web-app-google-utils)
![GitHub issues](https://img.shields.io/github/issues/baloise/web-app-google-utils)


## Installation guide
### Using npm
`npm i @baloise/web-app-google-utils`

## Components

### Google Maps
Class `BalGoogleMaps` to load the Google Maps script into your application.

#### What you need:
- Version of Google Maps that you want to load
- API Key for Google Maps

#### How you use it:
```typescript
// Initialize once
BalGoogleMaps.load({version: 'your-version', apiKey: 'your-api-key'});
```

### Google Tag Manager
Class `BalGoogleTagManager` to load the GTM script and handle the events. At the moment only click is supported.

#### What you need:
- API Key for Google Tag Manager
- Name of your application

#### How you use it:
```typescript
// Initialize once
const gtm = new BalGoogleTagManager();
gtm.load({
  applicationName: 'your-app-name',
  apiKey: 'your-api-key'
});

// Send an event
gtm.sendClickEvent('your-event');
```
