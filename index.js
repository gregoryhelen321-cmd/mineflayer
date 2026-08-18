const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: sakuraworld.orc.host,
  port: 25565,
  username: hasiontop,
  version: process.env.MC_VERSION || '1.21.11'
})

bot.once('spawn', () => {
  console.log('✅ Bot joined the server!')
})

bot.on('end', () => {
  console.log('❌ Bot disconnected')
})

bot.on('kicked', reason => {
  console.log('⚠️ Bot kicked:', reason)
})

bot.on('error', err => {
  console.log('❌ Error:', err.message)
})
