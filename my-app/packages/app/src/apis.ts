// import {
//   ScmIntegrationsApi,
//   scmIntegrationsApiRef,
//   ScmAuth,
// } from '@backstage/integration-react';
// import {
//   AnyApiFactory,
//   configApiRef,
//   createApiFactory,
// } from '@backstage/core-plugin-api';

// export const apis: AnyApiFactory[] = [
//   createApiFactory({
//     api: scmIntegrationsApiRef,
//     deps: { configApi: configApiRef },
//     factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
//   }),
//   ScmAuth.createDefaultApiFactory(),
// ];

import {
  AnyApiFactory,
  ApiRef,
  BackstageIdentityApi,
  configApiRef,
  createApiFactory,
  createApiRef,
  discoveryApiRef,
  oauthRequestApiRef,
  OpenIdConnectApi,
  ProfileInfoApi,
  SessionApi,
} from '@backstage/core-plugin-api';
import { OAuth2 } from '@backstage/core-app-api';

export const oidcAuthApiRef: ApiRef<
  OpenIdConnectApi & // The OIDC API that will handle authentification
    ProfileInfoApi & // Profile API for requesting user profile info from the auth provider in question
    BackstageIdentityApi & // Backstage Identity API to handle and associate the user profile with backstage identity
    SessionApi // Sesssion API, to handle the session the user will have while logged in
> = createApiRef({
  id: 'oidc-provider', // Can be anything as long as it doesn't conflict with other API ref IDs
});

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: oidcAuthApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      oauthRequestApi: oauthRequestApiRef,
      configApi: configApiRef,
    },
    factory: ({ discoveryApi, oauthRequestApi, configApi }) =>
      OAuth2.create({
        configApi,
        discoveryApi,
        oauthRequestApi,
        provider: {
          id: 'oidc',
          title: 'oidc',
          icon: () => null,
        },
        environment: configApi.getOptionalString('auth.environment'),
        defaultScopes: ['openid', 'profile', 'email'],
        popupOptions: {
          size: {
            // fullscreen: true
            // or specify popup width and height
            width: 1000,
            height: 1000,
          },
        },
      }),
  }),
  // Other createApiFactory
];
