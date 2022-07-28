type MsGeneralDocumentTopElem = XmlTopElem & { Doc: MsGeneralDocument } & {
}

type MsGeneralDocument = XmlDocument & { TopElem: MsGeneralDocumentTopElem; };
