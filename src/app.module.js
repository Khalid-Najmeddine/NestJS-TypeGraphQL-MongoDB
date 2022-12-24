"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var apollo_1 = require("@nestjs/apollo");
var graphql_1 = require("@nestjs/graphql");
var mongoose_1 = require("@nestjs/mongoose");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var author_module_1 = require("./author/author.module");
var book_module_1 = require("./book/book.module");
var user_module_1 = require("./user/user.module");
var dotenv = require("dotenv");
dotenv.config();
var mongoDBConnectionString = process.env.MONGODB_CONNECTION_STRING;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forRoot(mongoDBConnectionString),
                graphql_1.GraphQLModule.forRoot({
                    driver: apollo_1.ApolloDriver,
                    autoSchemaFile: "schema.gql",
                    context: function (_a) {
                        var req = _a.req, res = _a.res;
                        return { req: req, res: res };
                    }
                }),
                author_module_1.AuthorModule,
                book_module_1.BookModule, user_module_1.UserModule
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
