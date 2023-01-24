type RecruitmentMethodCatalogDocumentTopElem = XmlTopElem & { Doc: RecruitmentMethodCatalogDocument } & {
}

type RecruitmentMethodCatalogDocument = XmlDocument & { TopElem: RecruitmentMethodCatalogDocumentTopElem; };
