import {getTimeStamp} from '../utils/utils';
import {EnumTypeViewEdit} from './../constants/enum';

export class PageContentTemplateModel {
    Id: number;
    TemplateCode: string;
    Title?: string;
    Description?: string;
    Image?: string;
    IsActive?: boolean;
    Content1?: any;
    Content2?: any;
    Content3?: any;
    Content4?: any;
    Content5?: any;
    Content6?: any;
    Content7?: any;
    Content8?: any;
    Content9?: any;
    ListImage?: string[];
    ListContent?: PageContentDetailModel [];
    TypeViewEdit?:number;
    constructor(templateCode: string) {
        this.TemplateCode = templateCode
        this.Id = getTimeStamp();
        this.TypeViewEdit = EnumTypeViewEdit.EditAReview;
        this.IsActive = true;
    }
}

export interface PageContentDetailModel {
    Id: number,
    Image?: string,
    Title?: any,
    Content?: any,
    Description?: any,
    Content1?:any,
    Content2?:any,
}