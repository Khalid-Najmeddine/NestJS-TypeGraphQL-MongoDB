"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.LoginInput = exports.ConfirmUserInput = exports.CreateUserInput = exports.UserSchema = exports.User = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var bcrypt = require("bcrypt");
var graphql_1 = require("@nestjs/graphql");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; })
    ], User.prototype, "_id");
    __decorate([
        (0, mongoose_1.Prop)({ required: true, unique: true }) //<-- Tells Mongoose this Prop is required and it must be unique
        ,
        (0, graphql_1.Field)() // <-- GraphQL field
    ], User.prototype, "email");
    __decorate([
        (0, mongoose_1.Prop)({ required: true }),
        (0, graphql_1.Field)()
    ], User.prototype, "name");
    __decorate([
        (0, mongoose_1.Prop)({ required: true, unique: true })
    ], User.prototype, "password");
    __decorate([
        (0, mongoose_1.Prop)({ required: true })
    ], User.prototype, "confirmToken");
    __decorate([
        (0, mongoose_1.Prop)({ required: true, "default": false })
    ], User.prototype, "active");
    User = __decorate([
        (0, mongoose_1.Schema)(),
        (0, graphql_1.ObjectType)()
    ], User);
    return User;
}());
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
exports.UserSchema.index({ email: 1 });
exports.UserSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function () {
        var user, salt, hash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = this;
                    //only hash the password if it has been modified (or is new)
                    if (!user.isModified("password")) {
                        return [2 /*return*/, next()];
                    }
                    return [4 /*yield*/, bcrypt.genSalt(10)];
                case 1:
                    salt = _a.sent();
                    return [4 /*yield*/, bcrypt.hashSync(user.password, salt)
                        //Replace the password with the hash
                    ];
                case 2:
                    hash = _a.sent();
                    //Replace the password with the hash
                    user.password = hash;
                    return [2 /*return*/, next()];
            }
        });
    });
});
exports.UserSchema.methods.comparePassword = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            user = this;
            return [2 /*return*/, bcrypt.compare(candidatePassword, user.password)["catch"](function (e) { return false; })];
        });
    });
};
var CreateUserInput = /** @class */ (function () {
    function CreateUserInput() {
    }
    __decorate([
        (0, graphql_1.Field)()
    ], CreateUserInput.prototype, "name");
    __decorate([
        (0, graphql_1.Field)()
    ], CreateUserInput.prototype, "email");
    __decorate([
        (0, graphql_1.Field)()
    ], CreateUserInput.prototype, "password");
    CreateUserInput = __decorate([
        (0, graphql_1.InputType)()
    ], CreateUserInput);
    return CreateUserInput;
}());
exports.CreateUserInput = CreateUserInput;
var ConfirmUserInput = /** @class */ (function () {
    function ConfirmUserInput() {
    }
    __decorate([
        (0, graphql_1.Field)()
    ], ConfirmUserInput.prototype, "email");
    __decorate([
        (0, graphql_1.Field)()
    ], ConfirmUserInput.prototype, "confirmToken");
    ConfirmUserInput = __decorate([
        (0, graphql_1.InputType)()
    ], ConfirmUserInput);
    return ConfirmUserInput;
}());
exports.ConfirmUserInput = ConfirmUserInput;
var LoginInput = /** @class */ (function () {
    function LoginInput() {
    }
    __decorate([
        (0, graphql_1.Field)()
    ], LoginInput.prototype, "email");
    __decorate([
        (0, graphql_1.Field)()
    ], LoginInput.prototype, "password");
    LoginInput = __decorate([
        (0, graphql_1.InputType)()
    ], LoginInput);
    return LoginInput;
}());
exports.LoginInput = LoginInput;
