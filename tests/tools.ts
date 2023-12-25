var collaboratorId = UniqueID();
var collaborator = tools.open_doc<CollaboratorDocument>(collaboratorId);
var collaborator2 = tools.new_doc_by_name<CollaboratorDocument>("collaborator");

tools.object_filling(null, collaborator2.TopElem, collaboratorId, null);

tools.common_filling("collaborator", collaborator2.TopElem, collaboratorId);
tools.common_filling("collaborator", collaborator2.TopElem, collaboratorId, collaborator?.TopElem, true);
