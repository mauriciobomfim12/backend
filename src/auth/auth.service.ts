import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService, private jwtService: JwtService){}

    async login(email: string, senha: string) {

        let verificar = await this.prisma.cadastro.findFirst({
            where: {
                email: email,
                senha: senha
            }
        })

        
        if (!verificar) {
            // Usuário não encontrado, você pode lançar um erro ou retornar uma resposta específica aqui.
            throw new Error("Credenciais inválidas");
        }
        
        let payload = {
            cargo: verificar.cargo,
            nome: verificar.nome,
        }
        
        console.log(payload)
        return this.jwtService.sign(payload)
    }


    async cadastrar(nome: string, email: string, senha: string, cargo: string){
        try{
            let data = {
                nome: nome,
                email: email,
                senha: senha,
                cargo: cargo
            }
    
            let cadastrar = await this.prisma.cadastro.create({
                data: data
            })

            return "cadastrado com sucesso!"
        }catch(erro){
            return `deu erro ${erro}`
        }
    }
    
}
