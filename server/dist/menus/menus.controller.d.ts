import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { FindMenuDto } from './dto/find-menu.dto';
export declare class MenusController {
    private readonly menusService;
    constructor(menusService: MenusService);
    findAll(): Promise<({
        children: ({
            children: ({
                children: {
                    name: string;
                    parentId: string | null;
                    parentName: string | null;
                    depth: number;
                    id: string;
                    createdAt: Date;
                }[];
            } & {
                name: string;
                parentId: string | null;
                parentName: string | null;
                depth: number;
                id: string;
                createdAt: Date;
            })[];
        } & {
            name: string;
            parentId: string | null;
            parentName: string | null;
            depth: number;
            id: string;
            createdAt: Date;
        })[];
    } & {
        name: string;
        parentId: string | null;
        parentName: string | null;
        depth: number;
        id: string;
        createdAt: Date;
    })[]>;
    findMenuWithDepth(findMenuDto: FindMenuDto): Promise<({
        children: {
            name: string;
            parentId: string | null;
            parentName: string | null;
            depth: number;
            id: string;
            createdAt: Date;
        }[];
        parent: {
            name: string;
            parentId: string | null;
            parentName: string | null;
            depth: number;
            id: string;
            createdAt: Date;
        } | null;
    } & {
        name: string;
        parentId: string | null;
        parentName: string | null;
        depth: number;
        id: string;
        createdAt: Date;
    }) | null>;
    create(createMenuDto: CreateMenuDto): Promise<{
        name: string;
        parentId: string | null;
        parentName: string | null;
        depth: number;
        id: string;
        createdAt: Date;
    }>;
    updateMenu(id: string, updateMenuDto: UpdateMenuDto): Promise<{
        name: string;
        parentId: string | null;
        parentName: string | null;
        depth: number;
        id: string;
        createdAt: Date;
    }>;
    deleteMenu(id: string): Promise<void>;
    addMenuToParent(createMenuDto: CreateMenuDto): Promise<{
        name: string;
        parentId: string | null;
        parentName: string | null;
        depth: number;
        id: string;
        createdAt: Date;
    }>;
}
