migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5max5z1qlubywj")

  // remove
  collection.schema.removeField("5foyejcz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n5bvruqp",
    "name": "signers",
    "type": "json",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5max5z1qlubywj")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("n5bvruqp")

  return dao.saveCollection(collection)
})
