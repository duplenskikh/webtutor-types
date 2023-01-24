type RecruitmentPlanCatalogDocumentTopElem = XmlTopElem & { Doc: RecruitmentPlanCatalogDocument } & {
}

type RecruitmentPlanCatalogDocument = XmlDocument & { TopElem: RecruitmentPlanCatalogDocumentTopElem; };
