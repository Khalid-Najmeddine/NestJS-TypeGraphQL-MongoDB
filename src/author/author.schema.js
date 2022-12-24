"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateAuthorInput = exports.AuthorSchema = exports.Author = void 0;
var graphql_1 = require("@nestjs/graphql");
var mongoose_1 = require("@nestjs/mongoose");
var book_schema_1 = require("../book/book.schema");
var mongoose = require("mongoose");
var Author = /** @class */ (function () {
    function Author() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; }) // <-- GraphQL type
    ], Author.prototype, "_id");
    __decorate([
        (0, mongoose_1.Prop)(),
        (0, graphql_1.Field)()
    ], Author.prototype, "name");
    __decorate([
        (0, mongoose_1.Prop)({ type: { type: mongoose.Schema.Types.ObjectId, ref: "Book" } }),
        (0, graphql_1.Field)(function () { return [book_schema_1.Book]; })
    ], Author.prototype, "books");
    Author = __decorate([
        (0, mongoose_1.Schema)(),
        (0, graphql_1.ObjectType)()
    ], Author);
    return Author;
}());
exports.Author = Author;
exports.AuthorSchema = mongoose_1.SchemaFactory.createForClass(Author);
var CreateAuthorInput = /** @class */ (function () {
    function CreateAuthorInput() {
    }
    __decorate([
        (0, graphql_1.Field)()
    ], CreateAuthorInput.prototype, "name");
    CreateAuthorInput = __decorate([
        (0, graphql_1.InputType)()
    ], CreateAuthorInput);
    return CreateAuthorInput;
}());
exports.CreateAuthorInput = CreateAuthorInput;
