"use strict";
import { FakeDataServiceService } from './fake-data-controller/fake-data-service.service';
import { FakeDataControllerController } from './fake-data-controller/fake-data.controller';
import { InterceptorController } from './interceptor/interceptor.controller';
import { TpgController } from './tpg/tpg.controller';
import { TpgService } from './tpg/tpg.service';
import { TpgModule } from './tpg/tpg.module';
import { TagModule } from './tag/tag.module';
import { TarifGetahModule } from './tarif-getah/tarif-getah.module';
import { GeoModule } from './geo/geo.module';
import { PenyadapModule } from './penyadap/penyadap.module';
import { TarifPikulModule } from './tarif-pikul/tarif-pikul.module';
import { LoggerService } from './logger/logger.service';
import { GlobalLoggerService } from './global-logger/global-logger.service';
import { AuthModule } from './auth/auth.module';
import { PenerimaanGetahController } from './penerimaan-getah/penerimaan-getah.controller';
import { PenerimaanGetahModule } from './penerimaan-getah/penerimaan-getah.module';
import { PingService } from './ping/ping.service';
import { UserHasTpgModule } from './user-has-tpg/user-has-tpg.module';
import { ReadJsonToDatabaseService } from './read-json-to-database/read-json-to-database.service';
import { ImeiHasGeoController } from './imei-has-geo/imei-has-geo.controller';
import { ReadJsonToDatabaseController } from './read-json-to-database/read-json-to-database.controller';
import { ReadJsonToDatabaseModule } from './read-json-to-database/read-json-to-database.module';
import { XlsxModule } from './xlsx/xlsx.module';
import { PdfServiceModule } from './pdf-service/pdf-service.module';
import { PrometheusModule } from './prometheus/prometheus.module';
import { PrometheusControllerController } from './prometheus-controller/prometheus-controller.controller';
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
/* eslint-disable prettier/prettier */
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const prisma_module_1 = require("./prisma/prisma.module");
const prices_module_1 = require("./prices/prices.module");
const log_module_1 = require("./log/log.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const upload_controller_1 = require("./upload/upload.controller");
const files_controller_1 = require("./files/files.controller");
const polling_service_1 = require("./polling/polling.service");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
let AppModule = (() => {
    let _classDecorators = [(0, common_1.Module)({
            imports: [users_module_1.UsersModule, axios_1.HttpModule, prisma_module_1.PrismaModule, prices_module_1.PricesModule, log_module_1.LogModule, serve_static_1.ServeStaticModule.forRoot({
                    rootPath: (0, path_1.join)(__dirname, '..', 'client')
                }), config_1.ConfigModule.forRoot({
                    isGlobal: true,
                })],
            controllers: [app_controller_1.AppController, upload_controller_1.UploadController, files_controller_1.FilesController],
            providers: [app_service_1.AppService, polling_service_1.PollingService],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AppModule = _classThis = class {
    };
    __setFunctionName(_classThis, "AppModule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
})();
exports.AppModule = AppModule;
