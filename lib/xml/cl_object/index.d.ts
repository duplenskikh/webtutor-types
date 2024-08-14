interface ClObjectDocumentPage {
  name: XmlElem<string | null>;
  width: XmlElem<number | null>;
  height: XmlElem<number | null>;
  xmlcontent: XmlElem<string | null>;
}

interface ClObjectDocumentMethod {
  name: XmlElem<string | null>;
  label: XmlElem<string | null>;
  access: XmlElem<string | null>;
  xmlcontent: XmlElem<string | null>;
}

type ClObjectDocumentTopElem = XmlTopElem & {
  Doc: ClObjectDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  width: XmlElem<number | null>;
  height: XmlElem<number | null>;
  format: XmlElem<string | null>;
  /** Группа */
  group: XmlElem<string | null, typeof common.cl_object_groups>;
  pages: XmlMultiElem<ClObjectDocumentPage | null>;
  methods: XmlMultiElem<ClObjectDocumentMethod | null>;
  xsl: XmlElem<string | null>;
  xsl_sharp: XmlElem<string | null>;
  /** Ссылка на файлы ресурсов объекта */
  resource_url: XmlElem<string | null>;
  /** Комментарий */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
};

type ClObjectDocument = XmlDocument & {
  TopElem: ClObjectDocumentTopElem;
  cl_object: ClObjectDocumentTopElem;
  DocDesc(): string;
};
