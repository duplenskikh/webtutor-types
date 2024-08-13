type ComponentPackageDocumentTopElem = XmlTopElem &
FileListBase &
KnowledgePartsBase &
CustomElemsBase & {
  Doc: ComponentPackageDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  download_date: XmlElem<Date | null>;
  is_download: XmlElem<boolean | null>;
  is_install: XmlElem<boolean | null>;
  type_id: XmlElem<string | null, typeof common.access_block_types>;
  component_modification_date: XmlElem<Date | null>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
  download_package_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  text_area: XmlElem<string | null>;
  load_file(tData: unknown, source: unknown, needInstall: unknown): number | undefined;
};

type ComponentPackageDocument = XmlDocument & {
  TopElem: ComponentPackageDocumentTopElem;
  component_package: ComponentPackageDocumentTopElem;
};
