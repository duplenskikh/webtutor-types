type DlgImportExcelPersonsDocumentTopElem = XmlTopElem &
ImportExcelPersonsBase & {
  Doc: DlgImportExcelPersonsDocument;
  scheme_id: XmlElem<string, typeof lists.import_excel_person_schemes>;
};

type DlgImportExcelPersonsDocument = XmlDocument & {
  TopElem: DlgImportExcelPersonsDocumentTopElem;
  dlg_import_excel_persons: DlgImportExcelPersonsDocumentTopElem;
  OnLocalInit(): void;
};
