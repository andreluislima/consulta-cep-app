package com.register.cep.api.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.register.cep.api.domain.Usuario;
import com.register.cep.api.dto.ApiCepResponseDTO;
import com.register.cep.api.dto.UsuarioRequestDTO;
import com.register.cep.api.dto.UsuarioResponseDTO;
import com.register.cep.api.repository.UsuarioRepository;
import com.register.cep.api.service.UsuarioServiceInterface;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/usuario")
@Tag(name = "Usuario", description = "Atividades relacionadas ao cadastro de Usuário.")
public class UsuarioController {

	@Autowired
	UsuarioServiceInterface usuarioServiceInterface;
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	
	@PostMapping("/criarUsuario")
	@Operation(
			summary = "Cadastrar usuário",
			description = "Cadastra um usuário a partir do nome e cpf. O endereço é gerado automaticamente a partir do cep informado.."
			)
	public ResponseEntity<?>criarUsuario(@RequestBody UsuarioRequestDTO dto){
		Optional<Usuario>user = usuarioRepository.findByCpf(dto.cpf());
		if(user.isPresent()) {
			return ResponseEntity.badRequest().body("Usuário já cadastrado");
		}
		
		Usuario usuario = usuarioServiceInterface.criarUsuario(dto);
		
		usuarioRepository.save(usuario);
		
		return ResponseEntity.ok(new UsuarioResponseDTO(
				usuario.getId(), 
				usuario.getNome(), 
				usuario.getCpf(), 
				usuario.getCep(), 
				usuario.getLogradouro(),
				usuario.getBairro(),
				usuario.getCidade(),
				usuario.getEstado(),
				usuario.getDataCriacao(), 
				usuario.getDataAtualizacao()
			)
		);
	}
	
}
