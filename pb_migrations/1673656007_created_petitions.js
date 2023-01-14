migrate((db) => {
  const collection = new Collection({
    "id": "o4w4o5yrqk7islg",
    "created": "2023-01-14 00:26:47.831Z",
    "updated": "2023-01-14 00:26:47.831Z",
    "name": "petitions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ldukohxk",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": 40,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ufc0dzu6",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 75,
          "max": 10000,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ir3edly6",
        "name": "creator",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "4nit04s5",
        "name": "signers",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": null,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != \"\" && @request.data.signers:length = 0 && @request.auth.email = @request.data.creator.email",
    "updateRule": "@request.auth.id != '' && @request.data.name = name && @request.data.content = content &&\n@request.data.creator = creator && @request.data.signers ~ signers\n&& @request.data.signers:length > signers:length",
    "deleteRule": "@request.auth.email = creator.email",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("o4w4o5yrqk7islg");

  return dao.deleteCollection(collection);
})
