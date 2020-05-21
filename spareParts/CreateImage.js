export function createIMG(files, callback) {
  let allowed = /\.jpeg|\.jpg|\.png$/,
    types = ['image/jpeg', 'image/jpg', 'image/png'],
    images = []

  for (let i = 0; i < files.length; i++) {
    let file = files.item(i)
    if (types.includes(file.type) && allowed.test(file.name)) {
      const blob = new Blob([file], { type: file.type })
      // URL.createObjectURL(blob)
      images.push({
        name: "thumbnail",
        image: file
      })
    }
  }
  callback(images)
}
