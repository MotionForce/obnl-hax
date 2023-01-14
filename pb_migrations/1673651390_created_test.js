migrate((db) => {
  const collection = new Collection({
    "id": "zildz1wfb5lm3sw",
    "created": "2023-01-13 23:09:50.916Z",
    "updated": "2023-01-13 23:09:50.916Z",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ns4hwvhq",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zildz1wfb5lm3sw");

  return dao.deleteCollection(collection);
})
