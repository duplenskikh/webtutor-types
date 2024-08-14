interface AdminConfigurationDocumentFuncBlockSectionApplication {
  application_id: XmlElem<number | null, ApplicationCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  resource_id: XmlElem<string | null, ResourceCatalogDocumentTopElem>;
}

interface AdminConfigurationDocumentFuncBlockSection {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  color: XmlElem<string | null>;
  applications: XmlMultiElem<AdminConfigurationDocumentFuncBlockSectionApplication | null>;
}

interface AdminConfigurationDocumentFuncBlock {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<string | null, ResourceCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  min_height: XmlElem<number | null>;
  width: XmlElem<number | null>;
  sections: XmlMultiElem<AdminConfigurationDocumentFuncBlockSection | null>;
}

type AdminConfigurationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: AdminConfigurationDocument;
  func_blocks: XmlMultiElem<AdminConfigurationDocumentFuncBlock | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type AdminConfigurationDocument = XmlDocument & {
  TopElem: AdminConfigurationDocumentTopElem;
  admin_configuration: AdminConfigurationDocumentTopElem;
  DocDesc(): string;
};
