var Discord = require('discord.js');
var bot = new Discord.Client()

var aled = [
        "Aled.",
        "Osekour.",
        "Tu peux faire spawn un pokemon stp ?",
        "Aller, juste un :c .",
        "Nan vraiment fait pas ta chienne là.",
        "HEY MADAME T'ES CHARMANTE WLH",
        "Viens dm un peu.",
        "Rt si t'es triste.",
        "Un perroquet qui suce un chien c'est pd ?",
        "Les LGBT c'est pô nice.",
        "Terrible histoire.",
        "En vrai si je suis une chèvre on peut me traiter de bouc émissaire ?",
        "T'as fait les devoirs pour lundi ?",
        "Romain il est gentil :) (on me force pas du tout a dire ça :) )",
        "Plan Q sur paname.",
        "Je suis codationner avec le cul @Adelixxe#6694 :/",
        "Oh non ça recommence.",
        "Vous avez fait le dm de phisolophie ?",
        "Qui pour un yams?",
        "18-25 2 sucres.",
        "Vous prenez 2 oignons comme ça. Puis vous coupez comme ça. Oignon coupe table 2 comme ça, couteau évier comme ça.",
        "Je suis fils de charpentier.",
        "BONJOUR AVENTURIER !",
        "Nique ta race Nazeem.",
        "Argonien, Orc c'est PD.",
        "POUR L'ALLIANCE.",
        "Nain maître course.",
        "LA HORDE C'EST HOMOSEXUEL.",
        ">:)",
        "q:)"
]
const maximum = 30;
bot.on('ready', function() {
    console.log(bot.user.username);
});
bot.on('message', function(message) {
    if (message.content === "$loop") {
        var interval = setInterval (function () {
            if (j % 2 == 0) {
                i = Math.floor((Math.random() * maximum) + 1);
                console.log(i);
                message.channel.send(aled[i])
            .catch(console.error);
            }
        }, 1 * 1000);
    }
});
bot.login(process.env.BOT_TOKEN);
