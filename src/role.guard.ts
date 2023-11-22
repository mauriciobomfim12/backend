import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

console.log("passou por aqui2")

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const role = this.reflector.get('role', context.getHandler());

    if (!role) {
      return true; // Não há restrição de cargo, permitir o acesso
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Normalizar os cargos para garantir correspondência independente de maiúsculas/minúsculas
    const normalizedUserCargo = user.cargo.toLowerCase();
    const normalizedRequiredRole = role.toLowerCase();

    if (normalizedUserCargo === normalizedRequiredRole) {
      return true; // Usuário tem a permissão necessária
    }

    throw new UnauthorizedException('Usuário não autorizado'); // Lançar uma exceção em caso de falta de permissão
  }
}
