import { SlashCommandBuilder, EmbedBuilder } from "discord.js"
import { commandsList } from "./constants.js"

const cat = new SlashCommandBuilder()
  .setName("cat")
  .setDescription("Replies with a random cat image or gif")
  .addStringOption((subCommand) =>
    subCommand
      .setName("tag")
      .setDescription("Replies with a image or gif according to the specified tag.")
  )

const catGif = new SlashCommandBuilder()
  .setName("catgif")
  .setDescription("Replies with a cat gif")
  .addStringOption((subCommand) =>
    subCommand
      .setName("search")
      .setDescription("Replies with a gif according to the specified search.")
  )

const catMeow = new SlashCommandBuilder()
  .setName("catmeow")
  .setDescription("Meow to a user")
  .addStringOption((subCommand) =>
    subCommand.setName("to").setDescription("The user you want to send")
  )

export const commands = [
  cat,
  catGif,
  catMeow,
  {
    name: "catmeme",
    description: "Replies with a cat meme",
  },
  {
    name: "catmemelove",
    description: "Replies with a in love cat meme",
  },
  {
    name: "catlove",
    description: "Replies with a in love cat image or gif",
  },
  {
    name: "catcasual",
    description: "Replies with a casual cat image or gif",
  },
  {
    name: "catfeels",
    description: "Replies with a image or gif of a cat that expresses any feeling",
  },
  {
    name: "catreact",
    description: "Replies with a reaction image or gif of a cat",
  },
  {
    name: "catmental",
    description: "Replies with a cat image or gif about mental health",
  },
  {
    name: "catedit",
    description: "Replies with a edited cat image or gif",
  },
  {
    name: "cathelp",
    description: "List all available commands",
  },
]

export const helpEmbed = new EmbedBuilder()
  .setColor("#661E84")
  .setTitle('Command List')
  .setAuthor({ name: 'Cat', iconURL: 'https://raw.githubusercontent.com/Kaosc/discord-cat-bot/master/assets/cat_128.png' })
  .addFields(commandsList)
