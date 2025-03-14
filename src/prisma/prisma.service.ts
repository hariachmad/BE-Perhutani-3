/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'; 
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit,OnModuleDestroy{
    async onModuleInit() {
        try{
            await this.$connect();
        }catch(e){
            console.log("Kesalahan saat koneksi: ",e);
        }
         
    }
    async onModuleDestroy() { await this.$disconnect(); }
}
