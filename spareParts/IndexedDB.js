
//  for offline mode
let name = 'keba"s blog',
  version = 1,
  storageNames = ['articles', 'savedForLater'],
  dbReq

const upgrade = () => {
    let db = dbReq.result
    storageNames.forEach((name) => {
      if (!db.objectStoreNames.contains(name)) {
        let storeObj = db.createObjectStore(name, {
          keyPath: 'id',
        })
        storeObj.createIndex('title', 'title')
        storeObj.createIndex('body', 'body')
        storeObj.createIndex('summary', 'summary')
      }
    })
    db.close()
  },
  success = () => {
    let db = dbReq.result
    db.onversionchange = () => {
      db.close()
      alert('Database is outdated, please reload page.')
    }
    db.close()
  },
  notSupported = () =>
    "IndexedDB is not supported by your browser, thus this web-app won't perform as expected ! ( consider using a different / updated browser)"

export function openDB(onsuck = undefined) {
  if ('indexedDB' in window) {
    dbReq = indexedDB.open(name, version)
    dbReq.onupgradeneeded = upgrade
    dbReq.onsuccess = typeof onsuck === 'undefined' ? success : onsuck
  } else {
    notSupported()
  }
}
export function populateStore(articles) {
  try {
    openDB(() => {
      let db = dbReq.result,
        tnx = db.transaction('articles', 'readwrite'),
        objectStore = tnx.objectStore('articles')

      articles.forEach((article) => {
        objectStore.add(article)
      })
      db.close()
    })
  } catch (err) {
    // console.error(err.message)
  }
}
export function findArticle(id, next) {
  try {
    openDB(async () => {
      try {
        let db = dbReq.result
        let tnx = db.transaction('articles'),
          objectStore = tnx.objectStore('articles'),
          query = objectStore.get(id)

        query.onsuccess = (e) => (query = e.target.result)

        setTimeout(() => {
          next(query)
        }, 1000)
        db.close()
      } catch (err) {
        next(undefined)
      }
    })
  } catch (err) {
    console.error(err.message)
  }
}
export function allArticles(next) {
  try {
    openDB(async () => {
      try {
        let db = dbReq.result
        let tnx = db.transaction('articles'),
          objectStore = tnx.objectStore('articles'),
          query = objectStore.getAll()

        query.onsuccess = (e) => (query = e.target.result)

        setTimeout(() => {
          next(query)
        }, 1000)
        db.close()
      } catch (err) {
        next([])
      }
    })
  } catch (err) {
    console.error(err.message)
  }
}

export function readOffline(article) {
  try {
    openDB(() => {
      let db = dbReq.result,
        tnx = db.transaction('savedForLater', 'readwrite'),
        objectStore = tnx.objectStore('savedForLater')

      objectStore.add(article)

      db.close()
    })
  } catch (err) {
    console.error(err.message)
  }
}

export function deleteStore() {
  try {
    openDB(() => {
      let db = dbReq.result

      db.deleteObjectStore('articles')

      db.close()
    })
  } catch (err) {
    console.error(err.message)
  }
}

export function deleteSavedArticle(id) {
  try {
    openDB(() => {
      let db = dbReq.result
      let tnx = db.transaction('savedForLater', 'readwrite'),
        objectStore = tnx.objectStore('savedForLater')
      objectStore.delete(id)

      db.close()
    })
  } catch (err) {
    console.error(err.message)
  }
}
export function getSavedArticles(next) {
  try {
    openDB(() => {
      let db = dbReq.result
      let tnx = db.transaction('savedForLater'),
        objectStore = tnx.objectStore('savedForLater'),
        query = objectStore.getAll()
      query.onsuccess = (e) => (query = e.target.result)

      setTimeout(() => {
        next(query)
      }, 1000)
      db.close()
    })
  } catch (err) {
    console.error(err.message)
  }
}

export function search(param, next) {
  try {
  } catch (err) {
    console.error(err.message)
  }
}
