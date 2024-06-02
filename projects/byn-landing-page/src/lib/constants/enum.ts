export interface EnumDynamicModel {
  key: string;
  value: string;
  desc?: string;
  data?: object;
}

export const getEnumDynamicToList = (enumValue: any): EnumDynamicModel[] => {
  return Object.keys(enumValue).map(k => (enumValue[k as any]));
};

export interface enumLayoutPageTemplateModel{
  LayoutPageLeftRight: EnumDynamicModel,
  LayoutPageComment: EnumDynamicModel,
  LayoutPageStep: EnumDynamicModel,
  LayoutPageCountDown: EnumDynamicModel,
  LayoutPageProduct: EnumDynamicModel,
  LayoutPageNews: EnumDynamicModel,
  LayoutPageActiveCustomer: EnumDynamicModel,
  LayoutPageProductDetail: EnumDynamicModel,
  LayoutPageTimeLine: EnumDynamicModel,
  LayoutPageReview: EnumDynamicModel,
  LayoutPageForm: EnumDynamicModel,
  LayoutPageTable: EnumDynamicModel,
  LayoutPageListPromotion: EnumDynamicModel,
  LayoutPageHeaderNav: EnumDynamicModel,
  LayoutPageBanner: EnumDynamicModel,
  LayoutPageImageGird: EnumDynamicModel,
  LayoutPageCustom: EnumDynamicModel,
}

export const enumLayoutPageTemplate : enumLayoutPageTemplateModel = {
  LayoutPageLeftRight: {
    key: 'LayoutPageLeftRight',
    value: 'Nội dung trái phải',
    desc: 'elementLayoutPageLeftRight'
  },
  LayoutPageComment: {
    key: 'LayoutPageComment',
    value: 'Nội dung bình luận',
    desc: 'elementLayoutPageComment',
  },
  LayoutPageStep: {
    key: 'LayoutPageStep',
    value: 'Bước hướng dẫn',
    desc: 'LayoutPageStep',
  },
  LayoutPageCountDown: {
    key: 'LayoutPageCountDown',
    value: 'Đếm ngược chương trình',
    desc: 'LayoutPageCountDown',
  },
  LayoutPageProduct: {
    key: 'LayoutPageProduct',
    value: 'Danh sách sản phẩm',
    desc: 'LayoutPageProduct',
  },
  LayoutPageNews: {
    key: 'LayoutPageNews',
    value: 'Danh sách tin tức',
    desc: 'LayoutPageNews',
  },
  LayoutPageActiveCustomer: {
    key: 'LayoutPageActiveCustomer',
    value: 'Tương tác ảo với website',
    desc: 'LayoutPageActiveCustomer',
  },
  LayoutPageProductDetail: {
    key: 'LayoutPageProductDetail',
    value: 'Sản phẩm chi tiết',
    desc: 'LayoutPageProductDetail',
  },
  LayoutPageForm: {
    key: 'LayoutPageForm',
    value: 'Form đăng ký',
    desc: 'LayoutPageForm',
  },
  LayoutPageReview: {
    key: 'LayoutPageReview',
    value: 'Review nhận xét',
    desc: 'LayoutPageReview',
  },
  LayoutPageTimeLine: {
    key: 'LayoutPageTimeLine',
    value: 'Timeline lộ trình',
    desc: 'LayoutPageTimeLine',
  },
  LayoutPageTable: {
    key: 'LayoutPageTable',
    value: 'Bảng thông tin',
    desc: 'LayoutPageTable',
  },
  LayoutPageListPromotion: {
    key: 'LayoutPageListPromotion',
    value: 'Khuyến mãi nổi bật',
    desc: 'LayoutPageListPromotion',
  },
  LayoutPageHeaderNav: {
    key: 'LayoutPageHeaderNav',
    value: 'Header menu',
    desc: 'LayoutPageHeaderNav',
  },
  LayoutPageImageGird: {
    key: 'LayoutPageImageGird',
    value: 'Lưới hình ảnh',
    desc: 'LayoutPageImageGird',
  },
  LayoutPageCustom: {
    key: 'LayoutPageCustom',
    value: 'Nội dung động',
    desc: 'LayoutPageCustom',
  },
  LayoutPageBanner: {
    key: 'LayoutPageBanner',
    value: 'Banner',
    desc: 'LayoutPageBanner',
  }
}
export enum EnumTypeViewEdit {
  Review = 1,
  Edit = 2,
  EditAReview = 3
}