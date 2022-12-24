"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FindBookInput = exports.CreateBookInput = exports.BookSchema = exports.Book = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose = require("mongoose");
var graphql_1 = require("@nestjs/graphql");
var author_schema_1 = require("../author/author.schema");
var Book = /** @class */ (function () {
    function Book() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; })
    ], Book.prototype, "_id");
    __decorate([
        (0, mongoose_1.Prop)({ required: true }),
        (0, graphql_1.Field)()
    ], Book.prototype, "title");
    __decorate([
        (0, mongoose_1.Prop)({ required: true }),
        (0, graphql_1.Field)()
    ], Book.prototype, "isbn");
    __decorate([
        (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: author_schema_1.Author.name }),
        (0, graphql_1.Field)(function () { return author_schema_1.Author; })
    ], Book.prototype, "author");
    Book = __decorate([
        (0, mongoose_1.Schema)(),
        (0, graphql_1.ObjectType)()
    ], Book);
    return Book;
}());
exports.Book = Book;
exports.BookSchema = mongoose_1.SchemaFactory.createForClass(Book);
exports.BookSchema.index({ author: 1 });
var CreateBookInput = /** @class */ (function () {
    function CreateBookInput() {
    }
    __decorate([
        (0, graphql_1.Field)()
    ], CreateBookInput.prototype, "title");
    __decorate([
        (0, graphql_1.Field)()
    ], CreateBookInput.prototype, "isbn");
    __decorate([
        (0, graphql_1.Field)()
    ], CreateBookInput.prototype, "author");
    CreateBookInput = __decorate([
        (0, graphql_1.InputType)()
    ], CreateBookInput);
    return CreateBookInput;
}());
exports.CreateBookInput = CreateBookInput;
var FindBookInput = /** @class */ (function () {
    function FindBookInput() {
    }
    __decorate([
        (0, graphql_1.Field)()
    ], FindBookInput.prototype, "_id");
    FindBookInput = __decorate([
        (0, graphql_1.InputType)()
    ], FindBookInput);
    return FindBookInput;
}());
exports.FindBookInput = FindBookInput;
