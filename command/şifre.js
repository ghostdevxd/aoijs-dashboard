module.exports = {
  name: "şifre",
  code: `
  $if[$getGlobalUserVar[sifre;$authorid]==okunmamıs]
  $setGlobalUserVar[sifre;okunmus;$authorid]
  $sendDm[$authorid;
:information_source: | Dashboarda girmek için projeyi oluşturduğun linke girmelisin örnek:
 - :one: https://media.discordapp.net/attachments/705148232220672070/983238433357045810/unknown.png?width=281&height=23 (\`PREVIEW\`)
 - :two: https://media.discordapp.net/attachments/705148232220672070/983238534028722206/unknown.png?width=111&height=31 (\`Prevıew In a new window\`)
:white_check_mark: | Dashboard Giriş
 - :one: Karşına görseldeki gibi bir panel gelmeli https://media.discordapp.net/attachments/705148232220672070/983239516347306004/unknown.png?width=584&height=373
 - :two: \`Username\`: $message[1] \`Password\`: $message[2]]
    
$djsEval[client.Express.addAccounts({
username: "$message[1]", 
password: "$message[2]" 
})]

  $sendMessage[:white_check_mark: Şifre Başarıyla Oluşturuldu Dm Yoluyla Bilgileri İlettim.;no]
$else
 $sendDm[$authorid;
 :white_check_mark: | \`Username\`: $message[1] \`Password\`: $message[2]]
 $djsEval[client.Express.addAccounts({
username: "$message[1]", 
password: "$message[2]" 
})]

  $sendMessage[:white_check_mark: Şifre Başarıyla Oluşturuldu Dm Yoluyla Bilgileri İlettim.;no]
  
$endif

  $onlyIf[$message[2]!=;Hata! Örnek Kullanım: **şifre \`Username\` \`Password\`** {delete:5s}]  $deletecommand
  $onlyForIDs[$botOwnerID;Bu komutu yalnızca **$userTag[$botOwnerID]** kullanabilir. {delete:5s}]
  `
}  
