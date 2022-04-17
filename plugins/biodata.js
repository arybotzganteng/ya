let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
┌─〔 BIODATA OWNER 〕──⭓
│
│▸⭔Nama : Adnan Putra
│▸⭔Umur : 16
│▸⭔Kelas : 3 Smp
│▸⭔Status : Sed Boi☹️
│
├─SOSIAL MEDIA───⭓
│
│▸⭔instagran : https://Instagram.com/nanzz681
│▸⭔Facebook : Private
│▸⭔Chanel Youtube : https://youtube.com/channel/UCp4SOYXb0ZqPWjLf8HUseFA
│▸⭔Gmail : adnanputra@gmail.com
│▸⭔Github : https://github.com/Nanzz681
│
└〔 Oke udah itu aja terimakasih 〕

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Nanzz' )).buffer(), ext, '©Nanzz', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler