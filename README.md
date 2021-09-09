# google-lib-utils
Utilities for managing google plugins for Baloise Web Applications.

[![Continous](https://github.com/baloise/web-app-google-utils/actions/workflows/continous.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-google-utils/actions/workflows/continous.yml)

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
```
// Initialize once
BalGoogleMaps.load({version: 'your-version', apiKey: 'your-api-key'});
```

### Google Tag Manager
Class `BalGoogleTagManager` to load the GTM script and handle the events. At the moment only click is supported.

#### What you need:
- API Key for Google Tag Manager
- Name of your application

#### How you use it:
```
// Initialize once
const gtm = new BalGoogleTagManager();
gtm.load({
  applicationName: 'your-app-name',
  apiKey: 'your-api-key'
});

// Send an event
gtm.sendClickEvent('your-event');
```
