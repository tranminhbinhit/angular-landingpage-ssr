export interface PageDetail {
    PageId: number,
    PageName?: string,
    NameRewrite?: string,
    HtmlContent?: string,
    ListImageJson?: any,
    ValueDataJson?: any,
    DataTemplateJson?:any,
    CountView?: number,
    SortView?: number,
    IsActive?: boolean,
    IsDelete?: boolean,
    CreatedBy?: number,
    CreatedByCode?: string,
    CreatedDate?: Date,
    ModifiedBy?: number,
    ModifiedByCode?: string,
    ModifiedDate?: Date
}