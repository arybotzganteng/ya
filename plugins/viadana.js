
let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `┌─ 〘 PEMBAYARAN 〙───⭓
│▸⭔Untuk Pembayaran Via GOPAY
│▸⭔ 082140059454
│- Chat Owner Terlebebih
│ Dahulu
├─〘 Fitur 〙 ───⭓
│
│▸⭔ *FITUR WELCOME*
│ *FITUR STIKER*
│▸⭔ *FITUR ADMIN*
│ *KICK ORANG*
│ *JADIIN ADMIN*
│▸⭔ *FITUR ISLAM*
│ *QURAN*
│ *CEK JADWAL SHALAT*
│▸⭔ *INTERNET*
│ *BRAINLY*
│ *GOOGLE*
│▸⭔ *DAN 200 LEBIH*
│ *FITUR LAINNYA*
│
│©2021 wabot-aq
│Scrip original by Nurutomo
└────────⭓

`.trim()



conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 

}

handler.help = ['viagopay']

handler.tags = ['info']

handler.command = /^viagopay$/i



module.exports = handler