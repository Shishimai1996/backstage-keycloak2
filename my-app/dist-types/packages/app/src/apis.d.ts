import { AnyApiFactory, ApiRef, BackstageIdentityApi, OpenIdConnectApi, ProfileInfoApi, SessionApi } from '@backstage/core-plugin-api';
export declare const oidcAuthApiRef: ApiRef<OpenIdConnectApi & // The OIDC API that will handle authentification
ProfileInfoApi & // Profile API for requesting user profile info from the auth provider in question
BackstageIdentityApi & // Backstage Identity API to handle and associate the user profile with backstage identity
SessionApi>;
export declare const apis: AnyApiFactory[];
