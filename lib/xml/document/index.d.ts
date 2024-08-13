interface DocumentDocumentAttributes extends DocumentAttributesBase {
  /** Пункт меню */
  is_menu: XmlElem<boolean>;
  /** Корневой уровень */
  is_main_item: XmlElem<boolean>;
  /** Показывать как новость */
  is_news: XmlElem<boolean>;
  /** Показывать список дочерних документов в левой панели */
  left_disp_childs: XmlElem<boolean>;
  /** Не показывать список дочерних документов */
  no_disp_childs: XmlElem<boolean>;
}

type DocumentDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CatalogListBase &
FileListBase &
WebVariablesBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
GameBonusBase &
DocumentPersonsBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: DocumentDocument;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Корневой раздел портала */
  parent_document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Прикрепленные объекты */
  catalog_list_desc(): string;
  text_area: XmlElem<string | null>;
  /** Атрибуты */
  attributes: XmlElem<DocumentDocumentAttributes | null>;
  /** Код */
  web_template_type: XmlElem<string | null, typeof common.web_template_types>;
  /** Настраиваемый web шаблон */
  custom_template_type: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Системный шаблон */
  templates_source: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Установлены права доступа */
  access_exists(): boolean;
  /** Тип объекта, к которому можно прикрепить данный раздел портала */
  parent_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  parent_object_id: XmlElem<number | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  set_template(templateType: string): void;
  set_default_template(): boolean;
  update_template(): unknown;
};

type DocumentDocument = XmlDocument & {
  TopElem: DocumentDocumentTopElem;
  document: DocumentDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
