import { Injectable, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { LocalAuthGuard } from "./local-auth.guard";
import { AuthService } from "../auth.service";

@Injectable()
export class GqlLocalAuthGuard extends LocalAuthGuard {

  constructor( private authService: AuthService) {
    super();
  };

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    return req
  }

  getArgs(context: ExecutionContext): any {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getArgs()
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const args = this.getArgs(context);
    const valid = await this.authService.validateUser(args.email, args.password)
    if(!valid){
      throw new UnauthorizedException();
    }
    return valid
  }

}