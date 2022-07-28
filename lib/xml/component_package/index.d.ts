type ComponentPackageDocumentTopElem = XmlTopElem & { Doc: ComponentPackageDocument } & 
  FileListBase &
  KnowledgePartsBase &
  CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  download_date: XmlElem<Date>;
  is_download: XmlElem<boolean>;
  is_install: XmlElem<boolean>;
  type_id: XmlElem<string>;
  component_modification_date: XmlElem<Date>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  download_package_file_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  text_area: XmlElem<string>;
  load_file(): unknown;
}

type ComponentPackageDocument = XmlDocument & { TopElem: ComponentPackageDocumentTopElem; };
