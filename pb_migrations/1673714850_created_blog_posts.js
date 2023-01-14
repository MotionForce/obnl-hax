migrate((db) => {
  const collection = new Collection({
    "id": "k95cqjh8rspwx8w",
    "created": "2023-01-14 16:47:30.408Z",
    "updated": "2023-01-14 16:47:30.408Z",
    "name": "blog_posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "blw1xnpr",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "scpbnmbe",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 100,
          "max": 10000,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.admin = true && @request.auth.id != ''",
    "updateRule": null,
    "deleteRule": "@request.auth.admin = true && @request.auth.id != ''",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("k95cqjh8rspwx8w");

  return dao.deleteCollection(collection);
})
