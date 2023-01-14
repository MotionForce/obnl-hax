migrate((db) => {
  const collection = new Collection({
    "id": "m5max5z1qlubywj",
    "created": "2023-01-14 04:18:54.313Z",
    "updated": "2023-01-14 04:18:54.313Z",
    "name": "petitions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nsnnjwtd",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 10,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kio3wzsy",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 100,
          "max": 10000,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xind02op",
        "name": "creator_name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5foyejcz",
        "name": "petition_signers",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "[]"
          ]
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != \"\" && @request.data.petition_signers:length = 0 && @request.auth.name = @request.data.creator_name",
    "updateRule": "@request.auth.id != '' && @request.data.title = title && @request.data.content = content &&\n@request.data.creator_name = creator_name && @request.data.petition_signers ~ petition_signers\n&& @request.data.petition_signers:length > petition_signers:length",
    "deleteRule": "@request.auth.name = creator_name",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("m5max5z1qlubywj");

  return dao.deleteCollection(collection);
})
