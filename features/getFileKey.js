const getFileKey = (filePath) => {
    return fileKey = filePath.substring(filePath.lastIndexOf('/') + 1)
}

module.exports = getFileKey