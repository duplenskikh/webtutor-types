type DevelopmentPotentialDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DevelopmentPotentialDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Является системным */
  is_std: XmlElem<boolean | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
};

type DevelopmentPotentialDocument = XmlDocument & {
  TopElem: DevelopmentPotentialDocumentTopElem;
  development_potential: DevelopmentPotentialDocumentTopElem;
  DocDesc(): string;
};
