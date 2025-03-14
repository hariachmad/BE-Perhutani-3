"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const prices_controller_1 = require("./prices.controller");
const prices_service_1 = require("./prices.service");
const prisma_service_1 = require("../../../../../../../src/prisma/prisma.service");
describe('PricesController', () => {
    let controller;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield testing_1.Test.createTestingModule({
            controllers: [prices_controller_1.PricesController],
            providers: [prices_service_1.PricesService, prisma_service_1.PrismaService],
        }).compile();
        controller = module.get(prices_controller_1.PricesController);
    }));
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
