interface SiteDocumentOwnerObject {
  object_id: XmlElem<number | null>;
  /** Каталог */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface SiteDocumentMenuDocument {
  id: XmlElem<string | null>;
  /** Раздел портала */
  document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  parent_document_id: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  position: XmlElem<number | null>;
  /** Ссылка на изображение */
  icon_url: XmlElem<string | null>;
  /** Класс */
  class: XmlElem<string | null>;
  /** Адрес перехода */
  link_url: XmlElem<string | null>;
}

interface SiteDocumentMenu {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  documents: XmlMultiElem<SiteDocumentMenuDocument | null>;
}

interface SiteDocumentWebDesign {
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
}

interface SiteDocumentAnonymousMode {
  mode: XmlElem<string | null>;
}

type SiteDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ObjectTypeBase &
I18nBase &
FuncManagersBase &
CustomElemsBase & {
  Doc: SiteDocument;
  /** Заголовок */
  title: XmlElem<string | null>;
  html_header: XmlElem<string | null>;
  html_icon_href: XmlElem<string | null>;
  /** Дизайн */
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  /** Язык */
  lng_id: XmlElem<string | null>;
  /** Сотрудники */
  owner_collaborator: XmlElem<boolean | null>;
  /** Кандидаты */
  owner_candidate: XmlElem<boolean | null>;
  /** Временный персонал */
  owner_outstaff: XmlElem<boolean | null>;
  /** Владельцы */
  owner_objects: XmlMultiElem<SiteDocumentOwnerObject | null>;
  menus: XmlMultiElem<SiteDocumentMenu | null>;
  web_designs: XmlMultiElem<SiteDocumentWebDesign | null>;
  first_unauthorized_url: XmlElem<string | null>;
  first_authorized_url: XmlElem<string | null>;
  anonym_collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Список Mode, по которым возможен анонимный доступ */
  anonymous_modes: XmlMultiElem<SiteDocumentAnonymousMode | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Является встроенным */
  is_std: XmlElem<boolean | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
};

type SiteDocument = XmlDocument & {
  TopElem: SiteDocumentTopElem;
  site: SiteDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};
