// import {
//   coreServices,
//   createBackendModule,
// } from '@backstage/backend-plugin-api';

// export const myBackendModuleModuleMyBackendModule = createBackendModule({
//   pluginId: 'my-backend-module',
//   moduleId: 'my-backend-module',
//   register(reg) {
//     reg.registerInit({
//       deps: { logger: coreServices.logger },
//       async init({ logger }) {
//         logger.info('Hello World!');
//       },
//     });
//   },
// });

import { oidcAuthenticator } from '@backstage/plugin-auth-backend-module-oidc-provider';
import {
  authProvidersExtensionPoint,
  createOAuthProviderFactory,
} from '@backstage/plugin-auth-node';
import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';
import {
  DEFAULT_NAMESPACE,
  stringifyEntityRef,
} from '@backstage/catalog-model';

export const myBackendModuleModuleMyBackendModule = createBackendModule({
  pluginId: 'my-backend-module',
  moduleId: 'my-backend-module',
  register(reg) {
    reg.registerInit({
      deps: {
        logger: coreServices.logger,
        providers: authProvidersExtensionPoint,
      },
      async init({ logger, providers }) {
        logger.info('Registering OIDC provider!');
        providers.registerProvider({
          providerId: 'oidc',
          factory: createOAuthProviderFactory({
            authenticator: oidcAuthenticator,
            async signInResolver(info, ctx) {
              const userRef = stringifyEntityRef({
                kind: 'User',
                name: info.result.fullProfile.userinfo.sub,
                namespace: DEFAULT_NAMESPACE,
              });
              return ctx.issueToken({
                claims: {
                  sub: userRef, // The user's own identity
                  ent: [userRef], // A list of identities that the user claims ownership through
                },
              });
            },
          }),
        });
      },
    });
  },
});
