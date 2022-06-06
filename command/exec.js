module.exports = {
  name: "exec",
  code: `
  $exec[$message]

  $onlyIf[$message!=;Bir kod yazın. {delete:5s}]
  $onlyForIDs[$botOwnerID;Bu komutu yalnızca **$userTag[$botOwnerID]** kullanabilir. {delete:5s}]
  `
}
