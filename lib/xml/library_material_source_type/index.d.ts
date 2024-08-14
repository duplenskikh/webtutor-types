type LibraryMaterialSourceTypeDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: LibraryMaterialSourceTypeDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Включен */
  is_active: XmlElem<boolean>;
  /** Тип ресурса */
  type: XmlElem<string | null, typeof common.resource_types>;
  library_player_id: XmlElem<number | null, LibraryPlayerCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Фильтр имен файлов */
  filenamemask: XmlElem<string | null>;
  script: XmlElem<string | null>;
  /** Ссылка на шаблон */
  url: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  evaluate(fileUrl: string, optional: unknown): unknown;
};

type LibraryMaterialSourceTypeDocument = XmlDocument & {
  TopElem: LibraryMaterialSourceTypeDocumentTopElem;
  library_material_source_type: LibraryMaterialSourceTypeDocumentTopElem;
  DocDesc(): string;
};
