import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { tokenDTO } from 'src/DTO/token.dto';
import { CadastrarDto } from 'src/DTO/cadastrar.dto';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("token")
  async token(@Body() corpo: tokenDTO){
    let token = await this.authService.login(corpo.email, corpo.senha)

    return token
  }

  @Post("cadastrar")
  async cadastrar(@Body() corpo: CadastrarDto){
    let cadastrar = await this.authService.cadastrar(corpo.nome ,corpo.email, corpo.senha, corpo.cargo)

    return cadastrar
  }
  
}
