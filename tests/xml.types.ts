var collaboratorId = UniqueID();
var collaborator = tools.open_doc<CollaboratorDocument>(collaboratorId);

if (collaborator !== undefined) {
  collaborator.TopElem.password.Doc.TopElem.password.Parent.password.Value;
  collaborator.TopElem.Doc.TopElem.password.Value;
  var firstChangeLog = collaborator.TopElem.change_logs[0];
  firstChangeLog.working_days.Doc.TopElem.password;

  collaborator.TopElem.Doc.TopElem.Doc.TopElem.Doc.TopElem.Doc.TopElem.Doc;

  collaborator.TopElem.Doc.TopElem.Doc.TopElem.Doc.TopElem.position_id.Value;

  collaborator.TopElem.position_id.Value;

  if (collaborator.TopElem.position_id.OptForeignElem !== undefined) {
    collaborator.TopElem.position_id.OptForeignElem.id.Value;

    collaborator.TopElem.position_id.Doc.TopElem.position_id.Doc.TopElem.position_id.OptForeignElem!.position_date.Value;

    var topelem = collaborator.TopElem;
    topelem.change_logs[0].working_days.Doc.TopElem.Name;
  }

  collaborator.TopElem.position_id.Value;

  collaborator.TopElem.fullname();
}

var workflowDoc = tools.open_doc<WorkflowDocument>(1);

if (workflowDoc !== undefined) {
  workflowDoc.TopElem.Doc.TopElem.escalations[0].Doc.TopElem.escalations[0].assessments[0].assessment_id.Doc;
  workflowDoc.TopElem.is_std.Doc.TopElem.doc_info.creation.date.Doc.TopElem.doc_info.creation.Doc.TopElem.doc_info.creation.user_id.Value;

  // Проверка LastSavedData
  workflowDoc.LastSavedData.role_id.ByValueExists(1000);

  //Проверка получения значений через Child
  var childXmlElem = workflowDoc.TopElem.Child("has_error");
  childXmlElem.Value;

  var childXmlMultiElem = workflowDoc.TopElem.Child("escalations");
  childXmlMultiElem[0].type.Value;
  // var childXmlMultiElem1= workflowDoc.TopElem.Child(1);
  // childXmlMultiElem1[0].type.Value;

  //Проверка ссылок на родителя
  childXmlElem.Parent;
  childXmlMultiElem[0].Parent;
  workflowDoc.TopElem.Parent;
  workflowDoc.TopElem.warning_str.Parent;
}
