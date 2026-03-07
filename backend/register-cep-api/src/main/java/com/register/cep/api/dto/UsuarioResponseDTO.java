package com.register.cep.api.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

public record UsuarioResponseDTO(
		Long id,
		String cep,
		String nome,
		String cpf,
		
	    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
		LocalDateTime dataCriacao,
		
	    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
		LocalDateTime dataAtualizacao
		) {

}
