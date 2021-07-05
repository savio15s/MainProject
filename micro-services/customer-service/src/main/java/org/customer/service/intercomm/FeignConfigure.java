package org.customer.service.intercomm;

import java.util.logging.Logger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import feign.Request;

@Configuration
public class FeignConfigure {
	public static int connectTimeOutMillis = 56000;
	public static int readTimeOutMillis = 72000;

	@Bean
	public Request.Options options() {
		return new Request.Options(connectTimeOutMillis, readTimeOutMillis);
	}

}
