migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5max5z1qlubywj")

  collection.updateRule = "@request.auth.id != '' && @request.data.title = title && @request.data.content = content &&\n@request.data.creator_name = creator_name "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5max5z1qlubywj")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
