'use strict';

var pluginAuthBackendModuleOidcProvider = require('@backstage/plugin-auth-backend-module-oidc-provider');
var pluginAuthNode = require('@backstage/plugin-auth-node');
var backendPluginApi = require('@backstage/backend-plugin-api');
var catalogModel = require('@backstage/catalog-model');

const myBackendModuleModuleMyBackendModule = backendPluginApi.createBackendModule({
  pluginId: "my-backend-module",
  moduleId: "my-backend-module",
  register(reg) {
    reg.registerInit({
      deps: {
        logger: backendPluginApi.coreServices.logger,
        providers: pluginAuthNode.authProvidersExtensionPoint
      },
      async init({ logger, providers }) {
        logger.info("Registering OIDC provider!");
        providers.registerProvider({
          providerId: "sso-auth-provider",
          factory: pluginAuthNode.createOAuthProviderFactory({
            authenticator: pluginAuthBackendModuleOidcProvider.oidcAuthenticator,
            async signInResolver(info, ctx) {
              const userRef = catalogModel.stringifyEntityRef({
                kind: "User",
                name: info.result.fullProfile.userinfo.sub,
                namespace: catalogModel.DEFAULT_NAMESPACE
              });
              return ctx.issueToken({
                claims: {
                  sub: userRef,
                  // The user's own identity
                  ent: [userRef]
                  // A list of identities that the user claims ownership through
                }
              });
            }
          })
        });
      }
    });
  }
});

exports.myBackendModuleModuleMyBackendModule = myBackendModuleModuleMyBackendModule;
//# sourceMappingURL=module.cjs.js.map
