"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenusController = void 0;
const common_1 = require("@nestjs/common");
const menus_service_1 = require("./menus.service");
const create_menu_dto_1 = require("./dto/create-menu.dto");
const update_menu_dto_1 = require("./dto/update-menu.dto");
const find_menu_dto_1 = require("./dto/find-menu.dto");
const swagger_1 = require("@nestjs/swagger");
let MenusController = class MenusController {
    constructor(menusService) {
        this.menusService = menusService;
    }
    async findAll() {
        return this.menusService.findAll();
    }
    async findMenuWithDepth(findMenuDto) {
        return this.menusService.findMenuWithDepth(findMenuDto);
    }
    async create(createMenuDto) {
        return this.menusService.create(createMenuDto);
    }
    async updateMenu(id, updateMenuDto) {
        return this.menusService.updateMenu(id, updateMenuDto);
    }
    async deleteMenu(id) {
        return this.menusService.deleteMenu(id);
    }
    async addMenuToParent(createMenuDto) {
        return this.menusService.addMenuToParent(createMenuDto);
    }
};
exports.MenusController = MenusController;
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all root menu items' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns all root menu items with their children.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific menu item with depth and parent' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns a specific menu item with its hierarchy.',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_menu_dto_1.FindMenuDto]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "findMenuWithDepth", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new menu item' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The menu item has been successfully created.',
        type: create_menu_dto_1.CreateMenuDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_dto_1.CreateMenuDto]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "create", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a menu item' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The menu item has been successfully updated.',
        type: update_menu_dto_1.UpdateMenuDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_menu_dto_1.UpdateMenuDto]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "updateMenu", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a menu item' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The menu item has been successfully deleted.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "deleteMenu", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Post)('add-to-parent'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a new menu item to a parent' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The menu item has been successfully added under a parent.',
        type: create_menu_dto_1.CreateMenuDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_dto_1.CreateMenuDto]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "addMenuToParent", null);
exports.MenusController = MenusController = __decorate([
    (0, common_1.Controller)('menus'),
    __metadata("design:paramtypes", [menus_service_1.MenusService])
], MenusController);
//# sourceMappingURL=menus.controller.js.map