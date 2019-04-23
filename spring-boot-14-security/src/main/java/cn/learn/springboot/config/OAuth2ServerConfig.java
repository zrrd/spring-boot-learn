package cn.learn.springboot.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.store.redis.RedisTokenStore;


/**
 * @author syj
 */
@Configuration
public class OAuth2ServerConfig {

  private static final String DEMO_RESOURCE_ID = "order";

  @Configuration
  @EnableResourceServer
  protected static class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) {
      resources.resourceId(DEMO_RESOURCE_ID).stateless(true);
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
      http.authorizeRequests()
          //配置order访问控制，必须认证过后才可以访问
          .antMatchers("/order/**").authenticated();

    }
  }


  @Configuration
  @EnableAuthorizationServer
  protected static class AuthorizationServerConfiguration extends
      AuthorizationServerConfigurerAdapter {

    final PasswordEncoder passwordEncoder;
    final AuthenticationManager authenticationManager;
    final RedisConnectionFactory redisConnectionFactory;

    public AuthorizationServerConfiguration(AuthenticationManager authenticationManager,
        RedisConnectionFactory redisConnectionFactory, PasswordEncoder passwordEncoder) {
      this.authenticationManager = authenticationManager;
      this.redisConnectionFactory = redisConnectionFactory;
      this.passwordEncoder = passwordEncoder;
    }


    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
      String finalSecret = passwordEncoder.encode("123456");
      clients.inMemory().withClient("client_2").resourceIds(DEMO_RESOURCE_ID)
          .authorizedGrantTypes("password", "refresh_token").scopes("select").authorities("oauth2")
          .secret(finalSecret);
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) {
      endpoints.tokenStore(new RedisTokenStore(redisConnectionFactory))
          .authenticationManager(authenticationManager)
          .allowedTokenEndpointRequestMethods(HttpMethod.GET, HttpMethod.POST);
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer oauthServer) {
      //允许表单认证
      oauthServer.allowFormAuthenticationForClients();
    }

  }

}
