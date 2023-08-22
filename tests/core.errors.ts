import {arrayFunctionsNegativeTestNumberValue, arrayFunctionsNegativeTestStringValue, xmlDocumentForTesting} from "./mocks/arrayFunctions"

// THROWS Argument of type 'number' is not assignable to parameter of type 'string'.
ClipboardFormatAvailable(1);


ArrayCount(arrayFunctionsNegativeTestStringValue);

ArrayDirect(arrayFunctionsNegativeTestStringValue);

ArrayExtract(arrayFunctionsNegativeTestStringValue, "This");
ArrayExtract(arrayFunctionsNegativeTestNumberValue, "This.option1");

ArrayExtractKeys(arrayFunctionsNegativeTestStringValue, "This");
ArrayExtractKeys(arrayFunctionsNegativeTestNumberValue, "This.option1");
ArrayExtractKeys(xmlDocumentForTesting.TopElem.name, "This.name");

ArrayFind(arrayFunctionsNegativeTestStringValue, "This == 2");
ArrayFind(arrayFunctionsNegativeTestNumberValue, "This.option1 == 1");
ArrayFind(xmlDocumentForTesting.TopElem, "This.name == \"testValue\"");

ArrayFirstElem(arrayFunctionsNegativeTestStringValue);
ArrayFirstElem(arrayFunctionsNegativeTestNumberValue);
ArrayFirstElem(xmlDocumentForTesting.TopElem);

ArrayIntersect(arrayFunctionsNegativeTestStringValue, arrayFunctionsNegativeTestNumberValue);
ArrayIntersect(arrayFunctionsNegativeTestNumberValue, arrayFunctionsNegativeTestStringValue, "This.option1");
ArrayIntersect(xmlDocumentForTesting.TopElem.name, arrayFunctionsNegativeTestNumberValue, "This.name", "This.option1");

ArrayMax(arrayFunctionsNegativeTestStringValue, "This");
ArrayMax(arrayFunctionsNegativeTestNumberValue, "This.option1");
ArrayMax(xmlDocumentForTesting, "This.plan_date");

ArrayMerge(arrayFunctionsNegativeTestStringValue, "This", ";");
ArrayMerge(arrayFunctionsNegativeTestNumberValue, "This.option1", ";");
ArrayMerge(xmlDocumentForTesting.DocID, "This.plan_date", ";");

ArrayMin(arrayFunctionsNegativeTestStringValue, "This");
ArrayMin(arrayFunctionsNegativeTestNumberValue, "This.option1");
ArrayMin(xmlDocumentForTesting.TopElem.Doc, "This.plan_date");

ArrayOptFind(arrayFunctionsNegativeTestStringValue, "This < 1");
ArrayOptFind(arrayFunctionsNegativeTestNumberValue, "This.option1 > 2");
ArrayOptFind(xmlDocumentForTesting.TopElem, "This.name != \"testValue\"");

ArrayOptFindByKey(arrayFunctionsNegativeTestStringValue, 2);
ArrayOptFindByKey(arrayFunctionsNegativeTestNumberValue, 1, "option1");
ArrayOptFindByKey(xmlDocumentForTesting.TopElem, "testValue");

ArrayOptFindBySortedKey(arrayFunctionsNegativeTestStringValue, 2);
ArrayOptFindBySortedKey(arrayFunctionsNegativeTestNumberValue, 1, "option1");
ArrayOptFindBySortedKey(xmlDocumentForTesting, "testValue");

ArrayOptFirstElem(arrayFunctionsNegativeTestStringValue);
ArrayOptFirstElem(arrayFunctionsNegativeTestNumberValue, 1);
ArrayOptFirstElem(xmlDocumentForTesting.TopElem.person_id, "testValue");

ArrayOptMax(arrayFunctionsNegativeTestStringValue, "This");
ArrayOptMax(arrayFunctionsNegativeTestNumberValue, "This.option1");
ArrayOptMax(xmlDocumentForTesting.TopElem.person_id, "This.plan_date");

ArrayOptMin(arrayFunctionsNegativeTestStringValue, "This");
ArrayOptMin(arrayFunctionsNegativeTestNumberValue, "This.option1");
ArrayOptMin(xmlDocumentForTesting.TopElem.personnel_reserve_id, "This.plan_date");

ArrayRange(arrayFunctionsNegativeTestStringValue, 1, 3);
ArrayRange(arrayFunctionsNegativeTestNumberValue, 0, 10);
ArrayRange(xmlDocumentForTesting.TopElem, 3, 5);

ArraySelect(arrayFunctionsNegativeTestStringValue, "This < 1");
ArraySelect(arrayFunctionsNegativeTestNumberValue, "This.option1 > 2");
ArraySelect(xmlDocumentForTesting.TopElem, "This.name != \"testValue\"");

ArraySelectAll(arrayFunctionsNegativeTestStringValue);
ArraySelectAll(arrayFunctionsNegativeTestNumberValue);
ArraySelectAll(xmlDocumentForTesting);

ArraySelectByKey(arrayFunctionsNegativeTestStringValue, 1, "This");
ArraySelectByKey(arrayFunctionsNegativeTestNumberValue, 1, "option1");
ArraySelectByKey(xmlDocumentForTesting.TopElem.name, "testValue", "name");

ArraySelectBySortedKey(arrayFunctionsNegativeTestStringValue, 1, "a");
ArraySelectBySortedKey(arrayFunctionsNegativeTestNumberValue, 2, "option1");
ArraySelectBySortedKey(xmlDocumentForTesting.TopElem.Name, "testValue", "name");

ArraySelectDistinct(arrayFunctionsNegativeTestStringValue, "1");
ArraySelectDistinct(arrayFunctionsNegativeTestNumberValue, "testValue");
ArraySelectDistinct(xmlDocumentForTesting.TopElem.comment.ForeignArray, "testValue");

ArraySort(arrayFunctionsNegativeTestStringValue, "This", "-");
ArraySort(arrayFunctionsNegativeTestNumberValue, "option1", "-");
ArraySort(xmlDocumentForTesting.TopElem.person_id.ForeignElem, "name", "+");

ArraySum(arrayFunctionsNegativeTestStringValue, "This");
ArraySum(arrayFunctionsNegativeTestNumberValue, "option1");
ArraySum(xmlDocumentForTesting.TopElem.person_id, "id");
