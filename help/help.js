/**
 * Help Menu
 * @param {prefix} prefix bot prefix
 * @param {pushname} pushname someone name
 * @returns string
 * @FaxFenzo
 */
 var monospace = '```'
exports.help = (prefix, l) => {
	return `
${monospace}❏ Store Menu${monospace}
*${l++}. ➭ ${prefix}list-joki*
*${l++}. ➭ ${prefix}rekber*
*${l++}. ➭ ${prefix}topup-ml*
*${l++}. ➭ ${prefix}grupwa*

${monospace}❏ Matematika Menu${monospace}
*${l++}. ➭ ${prefix}luas-segitiga*
*${l++}. ➭ ${prefix}kel-segitiga*
*${l++}. ➭ ${prefix}luas-persegi*
*${l++}. ➭ ${prefix}pythagoras*
*${l++}. ➭ ${prefix}kel-persegi*
*${l++}. ➭ ${prefix}kubik*
*${l++}. ➭ ${prefix}perkalian*
*${l++}. ➭ ${prefix}kuadrat*

${monospace}❏ Anime Menu${monospace}
*${l++}. ➭ ${prefix}anime <quary>*
*${l++}. ➭ ${prefix}animesearch*
*${l++}. ➭ ${prefix}waifu*
*${l++}. ➭ ${prefix}husbu*
*${l++}. ➭ ${prefix}loli*
*${l++}. ➭ ${prefix}cosplay*
*${l++}. ➭ ${prefix}akira*
*${l++}. ➭ ${prefix}toukachan*
*${l++}. ➭ ${prefix}boruto*
*${l++}. ➭ ${prefix}kurumi*
*${l++}. ➭ ${prefix}naruto*
*${l++}. ➭ ${prefix}miku*
*${l++}. ➭ ${prefix}sasuke*
*${l++}. ➭ ${prefix}rize*
*${l++}. ➭ ${prefix}hinata*
*${l++}. ➭ ${prefix}itori*
*${l++}. ➭ ${prefix}kaneki*
*${l++}. ➭ ${prefix}minato*
*${l++}. ➭ ${prefix}anjing*

${monospace}❏ Cerpen Command${monospace}
*${l++}. ➭ ${prefix}cerpen-persahabatan*
*${l++}. ➭ ${prefix}cerpen-islami*
*${l++}. ➭ ${prefix}cerpen-Pengorbanan*
*${l++}. ➭ ${prefix}cerpen-cintasegitiga*
*${l++}. ➭ ${prefix}cerpen-galau*

${monospace}❏ Asupan Command${monospace}
*${l++}. ➭ ${prefix}cerpen*
*${l++}. ➭ ${prefix}asupan*
*${l++}. ➭ ${prefix}cecan*
*${l++}. ➭ ${prefix}cecan-jepan*
*${l++}. ➭ ${prefix}cecan-korea*
*${l++}. ➭ ${prefix}cecan-vietnam*
*${l++}. ➭ ${prefix}cecan-thai*
*${l++}. ➭ ${prefix}cecan-malaysia*
*${l++}. ➭ ${prefix}cecan-indo*
*${l++}. ➭ ${prefix}asupanukhty*
*${l++}. ➭ ${prefix}asupansantuy*
*${l++}. ➭ ${prefix}fml*
*${l++}. ➭ ${prefix}hijaber*

${monospace}❏ Happy Menu${monospace}
*${l++}. ➭ ${prefix}math <query>*
*${l++}. ➭ ${prefix}truth*
*${l++}. ➭ ${prefix}dare*
*${l++}. ➭ ${prefix}tictactoe <query>*
*${l++}. ➭ ${prefix}delttt <query>*
*${l++}. ➭ ${prefix}family100*
*${l++}. ➭ ${prefix}suitpvp <query>*
*${l++}. ➭ ${prefix}cekmati*
*${l++}. ➭ ${prefix}wangy*
*${l++}. ➭ ${prefix}cekgay*
*${l++}. ➭ ${prefix}lesbicek*
*${l++}. ➭ ${prefix}cekcantik*
*${l++}. ➭ ${prefix}cekganteng*
*${l++}. ➭ ${prefix}sangecek*
*${l++}. ➭ ${prefix}kapankah*
*${l++}. ➭ ${prefix}apakah*
*${l++}. ➭ ${prefix}bagaimanakah*
*${l++}. ➭ ${prefix}bisakah*
*${l++}. ➭ ${prefix}rate*

${monospace}❏ Photo Editing${monospace}
*${l++}. ➭ ${prefix}imageinvert*
*${l++}. ➭ ${prefix}imagewasted*

${monospace}❏ Group Command${monospace}
*${l++}. ➭ ${prefix}groupsetting*
*${l++}. ➭ ${prefix}linkgroup*
*${l++}. ➭ ${prefix}setppgc* <image>
*${l++}. ➭ ${prefix}setname* <text>
*${l++}. ➭ ${prefix}setdesc* <text>
*${l++}. ➭ ${prefix}ephemeral* <enable>
*${l++}. ➭ ${prefix}ephemeral* <disable>
*${l++}. ➭ ${prefix}hidetag* <text>
*${l++}. ➭ ${prefix}tagall* <text>
*${l++}. ➭ ${prefix}promote* <@tag>
*${l++}. ➭ ${prefix}demote* <@tag>
*${l++}. ➭ ${prefix}vote* <query>
*${l++}. ➭ ${prefix}devote*
*${l++}. ➭ ${prefix}upvote*
*${l++}. ➭ ${prefix}cekvote*
*${l++}. ➭ ${prefix}hapusvote*
*${l++}. ➭ ${prefix}autosticker* <on>
*${l++}. ➭ ${prefix}autosticker* <off>
*${l++}. ➭ ${prefix}antilink* <on>
*${l++}. ➭ ${prefix}antilink* <off>
*${l++}. ➭ ${prefix}leveling* <enable>
*${l++}. ➭ ${prefix}leveling* <disable>
*${l++}. ➭ ${prefix}welcome* <on>
*${l++}. ➭ ${prefix}welcome* <off>
*${l++}. ➭ ${prefix}autorevoke* <on>
*${l++}. ➭ ${prefix}autorevoke* <off>
*${l++}. ➭ ${prefix}add* @tag
*${l++}. ➭ ${prefix}kick* @tag
*${l++}. ➭ ${prefix}revoke*
*${l++}. ➭ ${prefix}group* <open>
*${l++}. ➭ ${prefix}group* <close>
*${l++}. ➭ ${prefix}editinfo* <open>
*${l++}. ➭ ${prefix}editinfo* <close>

${monospace}❏ Internet Command${monospace}
*${l++}. ➭ ${prefix}detiknews* <Info>
*${l++}. ➭ ${prefix}wiki*
*${l++}. ➭ ${prefix}gempa*
*${l++}. ➭ ${prefix}covidindo*
*${l++}. ➭ ${prefix}covid*
*${l++}. ➭ ${prefix}jadwaltv* <channel>
*${l++}. ➭ ${prefix}playstore*
*${l++}. ➭ ${prefix}gsmarena*
*${l++}. ➭ ${prefix}jadwalbioskop*
*${l++}. ➭ ${prefix}nowplayingbioskop*
*${l++}. ➭ ${prefix}aminio*
*${l++}. ➭ ${prefix}wattpad*
*${l++}. ➭ ${prefix}webtoons*

${monospace}❏ Downloader Menu${monospace}
*${l++}. ➭ ${prefix}instagram* <query>
*${l++}. ➭ ${prefix}tiktok* <link>
*${l++}. ➭ ${prefix}tiktoknowm* <link>
*${l++}. ➭ ${prefix}tiktokmusic* <link>
*${l++}. ➭ ${prefix}ytmp3* <link>
*${l++}. ➭ ${prefix}ytmp4* <link>
*${l++}. ➭ ${prefix}twitter* <link>
*${l++}. ➭ ${prefix}facebook* <link>
*${l++}. ➭ ${prefix}youtube* <link>
*${l++}. ➭ ${prefix}igstory* <link>
*${l++}. ➭ ${prefix}jpeg* <link>
*${l++}. ➭ ${prefix}mp4* <link>
*${l++}. ➭ ${prefix}joox* <url>

${monospace}❏ Berpetualang 🏹${monospace}
*${l++}. ➭ ${prefix}berburu*
*${l++}. ➭ ${prefix}mancing*
*${l++}. ➭ ${prefix}menambang*
*${l++}. ➭ ${prefix}mining*
*${l++}. ➭ ${prefix}heal*
*${l++}. ➭ ${prefix}profile*
*${l++}. ➭ ${prefix}inventory*
*${l++}. ➭ ${prefix}leaderboard*
*${l++}. ➭ ${prefix}buy*
*${l++}. ➭ ${prefix}sell
*${l++}. ➭ ${prefix}bacok*
*${l++}. ➭ ${prefix}darah*

${monospace}❏ Islamic Menu${monospace}
*${l++}. ➭ ${prefix}iqra*
*${l++}. ➭ ${prefix}juzamma*
*${l++}. ➭ ${prefix}alquran*
*${l++}. ➭ ${prefix}hadist*

${monospace}❏ Search Menu${monospace}
*${l++}. ➭ ${prefix}gimage* <query>
*${l++}. ➭ ${prefix}ytsearch* <query>
*${l++}. ➭ ${prefix}searchgc* <query>
*${l++}. ➭ ${prefix}play* <query>
*${l++}. ➭ ${prefix}happymod* <query>
*${l++}. ➭ ${prefix}servermc*
*${l++}. ➭ ${prefix}mcpedl* <query>
*${l++}. ➭ ${prefix}google* <query>
*${l++}. ➭ ${prefix}pinterest* <query>
*${l++}. ➭ ${prefix}ringtone* <judul>
*${l++}. ➭ ${prefix}drakor* <judul>

${monospace}❏ Convert Menu${monospace}
*${l++}. ➭ ${prefix}sticker* <image/video>
*${l++}. ➭ ${prefix}attp* <text>
*${l++}. ➭ ${prefix}ttp* <text>
*${l++}. ➭ ${prefix}smeme* text|text 1
*${l++}. ➭ ${prefix}stickerwm* <reply>
*${l++}. ➭ ${prefix}emoji* <query>
*${l++}. ➭ ${prefix}tomp3* <video>
*${l++}. ➭ ${prefix}tovn* <video>
*${l++}. ➭ ${prefix}toaudio* <video>
*${l++}. ➭ ${prefix}togif* <video>
*${l++}. ➭ ${prefix}tourl* <query>
*${l++}. ➭ ${prefix}tomp4* <sticker>
*${l++}. ➭ ${prefix}toimg* <sticker>

${monospace}❏ Tools Command${monospace}
*${l++}. ➭ ${prefix}inspect* <query>
*${l++}. ➭ ${prefix}getname* <query>
*${l++}. ➭ ${prefix}getpic* <query>
*${l++}. ➭ ${prefix}nulis* <text>
*${l++}. ➭ ${prefix}kalkulator* <query>
*${l++}. ➭ ${prefix}quoted* <query>
*${l++}. ➭ ${prefix}join* <link>
*${l++}. ➭ ${prefix}fliptext* <query>
*${l++}. ➭ ${prefix}tohuruf* <query>
*${l++}. ➭ ${prefix}volume* <quer>
*${l++}. ➭ ${prefix}bass* <query>
*${l++}. ➭ ${prefix}tempo* <query>
*${l++}. ➭ ${prefix}translate* <query>

${monospace}❏ Nsfw Menu${monospace}
*${l++}. ➭ ${prefix}blowjob*
*${l++}. ➭ ${prefix}ecchi*
*${l++}. ➭ ${prefix}ahegao*
*${l++}. ➭ ${prefix}sideoppai*
*${l++}. ➭ ${prefix}animefeets*
*${l++}. ➭ ${prefix}animebooty*
*${l++}. ➭ ${prefix}animethighss*
*${l++}. ➭ ${prefix}animearmpits*
*${l++}. ➭ ${prefix}lewdanimegirls*
*${l++}. ➭ ${prefix}animebellybutton*
*${l++}. ➭ ${prefix}biganimetiddies*
*${l++}. ➭ ${prefix}hololewd*
*${l++}. ➭ ${prefix}yaoi*

${monospace}❏ Random Command${monospace}
*${l++}. ➭ ${prefix}coffe*
*${l++}. ➭ ${prefix}wallpaper* <query>
*${l++}. ➭ ${prefix}wikimedia* <query>
*${l++}. ➭ ${prefix}quotesanime*
*${l++}. ➭ ${prefix}couple*
*${l++}. ➭ ${prefix}fakta-unik*
*${l++}. ➭ ${prefix}quotes*
*${l++}. ➭ ${prefix}katagalau*
*${l++}. ➭ ${prefix}cerpen*
*${l++}. ➭ ${prefix}meme*
*${l++}. ➭ ${prefix}fotobts*
*${l++}. ➭ ${prefix}bj*
*${l++}. ➭ ${prefix}ero*
*${l++}. ➭ ${prefix}cum*
*${l++}. ➭ ${prefix}feet*
*${l++}. ➭ ${prefix}yuri*
*${l++}. ➭ ${prefix}trap*
*${l++}. ➭ ${prefix}lewd*
*${l++}. ➭ ${prefix}feed*
*${l++}. ➭ ${prefix}solo*
*${l++}. ➭ ${prefix}eron*
*${l++}. ➭ ${prefix}gasm*
*${l++}. ➭ ${prefix}poke*
*${l++}. ➭ ${prefix}anal*
*${l++}. ➭ ${prefix}holo*
*${l++}. ➭ ${prefix}tits*
*${l++}. ➭ ${prefix}kuni*
*${l++}. ➭ ${prefix}kiss*
*${l++}. ➭ ${prefix}erok*
*${l++}. ➭ ${prefix}smug*
*${l++}. ➭ ${prefix}baka*
*${l++}. ➭ ${prefix}solog*
*${l++}. ➭ ${prefix}feetg*
*${l++}. ➭ ${prefix}lewdk*
*${l++}. ➭ ${prefix}pussy*
*${l++}. ➭ ${prefix}femdom*
*${l++}. ➭ ${prefix}cuddle*
*${l++}. ➭ ${prefix}eroyuri*
*${l++}. ➭ ${prefix}cum_jpg*
*${l++}. ➭ ${prefix}blowjob*
*${l++}. ➭ ${prefix}holoero*
*${l++}. ➭ ${prefix}erofeet*
*${l++}. ➭ ${prefix}classic*
*${l++}. ➭ ${prefix}erokemo*
*${l++}. ➭ ${prefix}futanari*
*${l++}. ➭ ${prefix}fox_girl*
*${l++}. ➭ ${prefix}lewdkemo*
*${l++}. ➭ ${prefix}pussy_jpg*
*${l++}. ➭ ${prefix}kemonomimi*
*${l++}. ➭ ${prefix}nsfw_avatar*
*${l++}. ➭ ${prefix}art*
*${l++}. ➭ ${prefix}bts*
*${l++}. ➭ ${prefix}exo*
*${l++}. ➭ ${prefix}loli*
*${l++}. ➭ ${prefix}elf*
*${l++}. ➭ ${prefix}neko*
*${l++}. ➭ ${prefix}sagiri*
*${l++}. ➭ ${prefix}shinobu*
*${l++}. ➭ ${prefix}megumin*
*${l++}. ➭ ${prefix}wallnime*
*${l++}. ➭ ${prefix}shota*

${monospace}❏ Sticker Random${monospace}
*${l++}. ➭ ${prefix}cry*
*${l++}. ➭ ${prefix}kiss*
*${l++}. ➭ ${prefix}kiss2*
*${l++}. ➭ ${prefix}dance*
*${l++}. ➭ ${prefix}cringe*
*${l++}. ➭ ${prefix}smug2*
*${l++}. ➭ ${prefix}slap*
*${l++}. ➭ ${prefix}wave*
*${l++}. ➭ ${prefix}bully*
*${l++}. ➭ ${prefix}happy*
*${l++}. ➭ ${prefix}smile*
*${l++}. ➭ ${prefix}kill*

${monospace}❏ Audio Menu${monospace}
*${l++}. ➭ ${prefix}bass*
*${l++}. ➭ ${prefix}blown*
*${l++}. ➭ ${prefix}deep*
*${l++}. ➭ ${prefix}earrape*
*${l++}. ➭ ${prefix}fat*
*${l++}. ➭ ${prefix}fast*
*${l++}. ➭ ${prefix}nightcore*
*${l++}. ➭ ${prefix}smooth*
*${l++}. ➭ ${prefix}reverse*
*${l++}. ➭ ${prefix}tupai*
*${l++}. ➭ ${prefix}robot*
*${l++}. ➭ ${prefix}slow*

${monospace}❏ Text Pro${monospace}
*${l++}. ➭ ${prefix}8bit* text|text
*${l++}. ➭ ${prefix}horror* text|text
*${l++}. ➭ ${prefix}retro* text|text
*${l++}. ➭ ${prefix}pornhub* text|text

${monospace}❏ Maker Menu${monospace}
*${l++}. ➭ ${prefix}textmaker* <option>
*${l++}. ➭ ${prefix}rainbow* text
*${l++}. ➭ ${prefix}sci_fi* text
*${l++}. ➭ ${prefix}christmas*
*${l++}. ➭ ${prefix}ancient* text
*${l++}. ➭ ${prefix}toxic* text
*${l++}. ➭ ${prefix}tolol* text
*${l++}. ➭ ${prefix}lava* text
*${l++}. ➭ ${prefix}neonlight* text
*${l++}. ➭ ${prefix}fabric* text
*${l++}. ➭ ${prefix}glue* text
*${l++}. ➭ ${prefix}luxury* text
*${l++}. ➭ ${prefix}underwater*
*${l++}. ➭ ${prefix}harrypotter*
*${l++}. ➭ ${prefix}steel*
*${l++}. ➭ ${prefix}metallic*
*${l++}. ➭ ${prefix}graffiti*
*${l++}. ➭ ${prefix}pencil*
*${l++}. ➭ ${prefix}magma*
*${l++}. ➭ ${prefix}sand*
*${l++}. ➭ ${prefix}sky*
*${l++}. ➭ ${prefix}joker*
*${l++}. ➭ ${prefix}hoorror*
*${l++}. ➭ ${prefix}whitebear*
*${l++}. ➭ ${prefix}thunder*
*${l++}. ➭ ${prefix}matrix*
*${l++}. ➭ ${prefix}blackpink*
*${l++}. ➭ ${prefix}neon*
*${l++}. ➭ ${prefix}juice*
*${l++}. ➭ ${prefix}batman*
*${l++}. ➭ ${prefix}multicolor*
*${l++}. ➭ ${prefix}collwall*
*${l++}. ➭ ${prefix}wonderful*
*${l++}. ➭ ${prefix}cool*
*${l++}. ➭ ${prefix}sketch*
*${l++}. ➭ ${prefix}marvel*
*${l++}. ➭ ${prefix}skeleton*
*${l++}. ➭ ${prefix}foggy*
*${l++}. ➭ ${prefix}writing*
*${l++}. ➭ ${prefix}halloweenfire*
*${l++}. ➭ ${prefix}halloween*
*${l++}. ➭ ${prefix}watercolor*
*${l++}. ➭ ${prefix}classic*

${monospace}❏ Database Menu${monospace}
*${l++}. ➭ ${prefix}setcmd* <query>
*${l++}. ➭ ${prefix}listcmd*
*${l++}. ➭ ${prefix}delcmd* <query>
*${l++}. ➭ ${prefix}lockcmd* <query>
*${l++}. ➭ ${prefix}addmsg* <query>
*${l++}. ➭ ${prefix}listmsg*
*${l++}. ➭ ${prefix}getmsg* <query>
*${l++}. ➭ ${prefix}delmsg* <query>

${monospace}❏ Other Menu${monospace}
*${l++}. ➭ ${prefix}owner*
*${l++}. ➭ ${prefix}listpc*
*${l++}. ➭ ${prefix}listgc*
*${l++}. ➭ ${prefix}mcserver*
*${l++}. ➭ ${prefix}ping*
*${l++}. ➭ ${prefix}afk*
*${l++}. ➭ ${prefix}speedtest*
*${l++}. ➭ ${prefix}cekupdate* [UpdateBot]
*${l++}. ➭ ${prefix}getscmd* [GetSticker]
*${l++}. ➭ ${prefix}delete* <query>
*${l++}. ➭ ${prefix}infochat* <query>
*${l++}. ➭ ${prefix}request* <query>
*${l++}. ➭ ${prefix}report* <query>
*${l++}. ➭ ${prefix}donate*
*${l++}. ➭ ${prefix}listonline*
*${l++}. ➭ ${prefix}botgrup*
*${l++}. ➭ ${prefix}autostickerpc* enable
*${l++}. ➭ ${prefix}autostickerpc* disable

${monospace}❏ Owner Menu${monospace}
*${l++}. ➭ ${prefix}react* <emoji>
*${l++}. ➭ ${prefix}self*
*${l++}. ➭ ${prefix}public*
*${l++}. ➭ ${prefix}bcall* <query>
*${l++}. ➭ ${prefix}bcgroup* <query>
*${l++}. ➭ ${prefix}chat* <query>
*${l++}. ➭ ${prefix}antitag* <on>
*${l++}. ➭ ${prefix}antitag* <off>
*${l++}. ➭ ${prefix}ban* <add> <nomor>
*${l++}. ➭ ${prefix}ban* <del> <nomor>
*${l++}. ➭ ${prefix}setexif* packname|author
*${l++}. ➭ ${prefix}cowner* <add/del>
*${l++}. ➭ ${prefix}sewa* add <waktu>
*${l++}. ➭ ${prefix}sewa* dell
*${l++}. ➭ ${prefix}setbio* <text>
*${l++}. ➭ >*
*${l++}. ➭ =>*
*${l++}. ➭ $*

${monospace} Total Fitur: ${l}${monospace}\n

${monospace}   Thanks For Watching
➭ Baileys
➭ Fax
➭ Dika Ardnt
➭ Aldi
➭ Fadly
➭ Ridho
➭ X-None Team${monospace}`
}
exports.donate = (prefix, l) => {
	return `*── 「 DONATE 」 ──*

Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
(OVO/Dana/GoPay)

Atau kalian juga bisa donasi melalui QRis diatas.

Terima kasih!

Contact person Owner:
wa.me/+6285778815524(Owner)

Untuk melihat script yang bot gunakan,ketik ${prefix}sc`
}
