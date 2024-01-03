import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ENV as env } from './env/env';
console.log(env.databaseDetail); 
@Module({  
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'Dev@12345#',
      database: 'nodedb',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),UsersModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule { }
