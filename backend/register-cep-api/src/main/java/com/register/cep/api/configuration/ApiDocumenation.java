package com.register.cep.api.configuration;

import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@Configuration
@OpenAPIDefinition(
		info = @Info(
				title = "API de consuta e cadastro de CEP",
				version = "1.0.0",
				description = "API responsável por consultar endereços via CEP, realizando para isso uma integração com a API ViaCEP de onde obtem os dados. Além de consulta, essa API realiza o cadastro dos endereços consultados.",
				contact = @Contact(
						name = "André Lima",
						email = "a.andreluislima@gmail.com"
					)
				)
)
public class ApiDocumenation {

}
