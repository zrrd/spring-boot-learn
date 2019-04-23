package cn.learn.springboot.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

/**
 * security 配置
 *
 * @author shaoyijiong
 * @date 2018/8/4
 */
@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

  @Bean
  @Override
  protected UserDetailsService userDetailsService() {

    String finalPassword = passwordEncoder().encode("123456");
    InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
    manager.createUser(
        User.withUsername("user_1").password(finalPassword).authorities("USER").build());
    manager.createUser(
        User.withUsername("user_2").password(finalPassword).authorities("USER").build());
    return manager;
  }


  /**
   * 设置密码加密方式
   */
  @Bean
  PasswordEncoder passwordEncoder() {
    return new Pbkdf2PasswordEncoder("syj");
  }


  /**
   * 这一步的配置是必不可少的，否则SpringBoot会自动配置一个AuthenticationManager,覆盖掉内存中的用户
   */
  @Bean
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    // @formatter:off
    http.requestMatchers().anyRequest().and().authorizeRequests().antMatchers("/oauth/**")
        .permitAll();
    // @formatter:on
  }
}
