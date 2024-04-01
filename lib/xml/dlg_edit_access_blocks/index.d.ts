interface DlgEditAccessBlocksDocumentSmallAccessBlock {
  id: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
}

type DlgEditAccessBlocksDocumentTopElem = XmlTopElem & {
  Doc: DlgEditAccessBlocksDocument;
  small_access_blocks: XmlMultiElem<DlgEditAccessBlocksDocumentSmallAccessBlock>;
};

type DlgEditAccessBlocksDocument = XmlDocument & {
  TopElem: DlgEditAccessBlocksDocumentTopElem;
  dlg_edit_access_blocks: DlgEditAccessBlocksDocumentTopElem;
};
