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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenusService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MenusService = class MenusService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.menu.findMany({
            where: { parentId: null },
            include: {
                children: {
                    include: {
                        children: {
                            include: {
                                children: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async findMenuWithDepth(findMenuDto) {
        const { menuId, depth } = findMenuDto;
        return this.prisma.menu.findUnique({
            where: { id: menuId },
            include: {
                parent: depth > 1 ? { include: { parent: true } } : false,
                children: true,
            },
        });
    }
    async create(createMenuDto) {
        const { name, parentId, parentName } = createMenuDto;
        try {
            if (parentId) {
                const parentMenu = await this.prisma.menu.findUnique({
                    where: { id: parentId },
                });
                if (!parentMenu) {
                    throw new Error('Parent menu not found');
                }
                const typedParentMenu = parentMenu;
                return this.prisma.menu.create({
                    data: {
                        name,
                        parentId,
                        parentName,
                        depth: typedParentMenu.depth + 1,
                    },
                });
            }
            else {
                return this.prisma.menu.create({
                    data: {
                        name,
                        depth: 1,
                    },
                });
            }
        }
        catch (error) {
            throw new Error(`Error creating menu: ${error.message}`);
        }
    }
    async updateMenu(id, updateMenuDto) {
        return this.prisma.menu.update({
            where: { id: id },
            data: updateMenuDto,
        });
    }
    async deleteMenu(menuId) {
        try {
            await this.prisma.menu.delete({
                where: { id: menuId },
            });
        }
        catch (error) {
            throw new Error(`Error deleting menu: ${error.message}`);
        }
    }
    async addMenuToParent(createMenuDto) {
        const { parentId } = createMenuDto;
        try {
            if (parentId) {
                const parentMenu = await this.prisma.menu.findUnique({
                    where: { id: parentId },
                });
                if (!parentMenu) {
                    throw new Error('Parent menu not found');
                }
                const typedParentMenu = parentMenu;
                return this.prisma.menu.create({
                    data: {
                        ...createMenuDto,
                        parentId,
                        depth: typedParentMenu.depth + 1,
                    },
                });
            }
            else {
                return this.prisma.menu.create({
                    data: {
                        ...createMenuDto,
                        depth: createMenuDto.depth || 0,
                    },
                });
            }
        }
        catch (error) {
            throw new Error(`Error creating menu: ${error.message}`);
        }
    }
};
exports.MenusService = MenusService;
exports.MenusService = MenusService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MenusService);
//# sourceMappingURL=menus.service.js.map