type ProfessionalAreaCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  /** Корневой элемент */
  parent_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  professional_area_type_id: XmlElem<number | null, ProfessionalAreaTypeCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
