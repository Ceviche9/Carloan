import { ICreateUserTokensDTO } from "../dtos/ICreateUserTokensDTO"
import { UsersTokens } from "../infra/typeorm/entities/UserTokens "

interface IUsersTokensRepository {
  create({
    expires_date, 
    refresh_token, 
    user_id
  }: ICreateUserTokensDTO): Promise<UsersTokens>
  findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UsersTokens>
  deleteById(id: string): Promise<void>
  findByRefreshToken(refresh_token: string): Promise<UsersTokens>
}

export { IUsersTokensRepository }