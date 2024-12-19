import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST || 'localhost',
      port: Number(process.env.MYSQL_PORT) || 3306,
      username: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'root1234',
      database: process.env.MYSQL_DATABASE || 'healthsync',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    // Redshift connection
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.REDSHIFT_HOST || 'localhost',
    //   port: Number(process.env.REDSHIFT_PORT) || 5439,
    //   username: process.env.REDSHIFT_USER || 'user',
    //   password: process.env.REDSHIFT_PASSWORD || 'password',
    //   database: process.env.REDSHIFT_DATABASE || 'redshift_db',
    //   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    //   synchronize: false, 
    // }),
  ],
})
export class DatabaseModule {}
