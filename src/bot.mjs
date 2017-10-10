'use strict'
import Discord from 'discord.io'
import logger from 'winston'
import authToken from './auth'

logger.remove(logger.transports.Console)
logger.add(logger.transports.Console, {
    colorize: true
})

const bot = new Discord.Client({
    token: authToken,
    autorun: true
})

bot.on('ready', (event) => {
    logger.info('We on')
    logger.info(`Logged in as ${bot.username} --- ${bot.id}`)
})

bot.on('message', (user, userID, channelID, message, event) => {
    if (message.toLowerCase() === 'same' && user !== 'same-bot') {
        bot.sendMessage({
            to: channelID,
            message: 'SAME <:lul:367141378238709774>'
        })
        logger.info(`Sent message to memer ${user} -- Channel - ${channelID}`)
    }
})

process.on('SIGINT', () => {
    logger.warn('Terminating session!')
    process.exit(1)
})