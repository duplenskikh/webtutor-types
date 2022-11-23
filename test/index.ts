const a = tools.open_doc<EducationPlanDocument>(1);

a?.TopElem.programs[0].state_id.OptForeignElem.name.Value;
