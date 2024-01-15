type SimpleObject = {
    /** @type First property */
    one:string,
    /** @type Second property */
    two: number

}
const simpleObject:SimpleObject = {
    /** @type First property */
    one: 'test text',
    /** @type Second property */
    two: 222
}

const xmlDocument = tools.open_doc<WorkflowCatalogDocument>(1)

var b = simpleObject.GetOptProperty("one")
var b2 = simpleObject.GetOptProperty("aaaa")


var c = xmlDocument?.TopElem.role_id[0].OptChild()
var c2 = xmlDocument?.TopElem.OptChild('');
