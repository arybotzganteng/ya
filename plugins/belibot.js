let fetch = require('node-fetch')

let handler = async (m, { conn }) => {

	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `┌──〘 Beli Bot 〙──⭓
│▸⭔  *1 Bulan* :      *Rp 15000*
│▸⭔  *1 Bulan* :      *Rp 10000*
│▸⭔  *Permanen* : *Rp 40000*
│▸⭔  *Owner* :   *Rp 30000*/bln
│▸⭔  *Nomer Gopay & pulsa* : 
│       082130059454
│
├──〘 PEMBAYARAN 〙 
│▸⭔Gopay Dan Pulsa
│
│▸⭔ Tertarik Untuk Beli Bot Ini?
│▸⭔ Ketuk Tombol Di Bawah Ya
│
│▸⭔©2021 Rpg wabot-aq
│▸⭔Scrip original by Nurutomo
└─────⭓`.trim(), watermark, 'Gopay', '#viagopay ', 'Pulsa', '#viapulsa', m)

}



handler.command = /^sewabot$/i



module.exports = handler