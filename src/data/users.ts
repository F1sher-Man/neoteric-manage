export interface IUser {
  [key: string]: string | any;
  first_name: string;
  last_name: string;
  email: string;
  id: number;
  tech: string;
  isActive: boolean;
  note: string;
}

const users: Array<IUser> = [
  {
    id: 1,
    first_name: "Ludwig",
    last_name: "MacKereth",
    email: "lmackereth0@techcrunch.com",
    tech: "AI",
    isActive: false,
    note: "パーティーへ行かないか"
  },
  {
    id: 2,
    first_name: "Booth",
    last_name: "Rogger",
    email: "brogger1@scientificamerican.com",
    tech: "AI",
    isActive: true,
    note: "⁰⁴⁵"
  },
  {
    id: 3,
    first_name: "Madonna",
    last_name: "Izac",
    email: "mizac2@1und1.de",
    tech: "react",
    isActive: false,
    note: "¸˛Ç◊ı˜Â¯˘¿"
  },
  {
    id: 4,
    first_name: "Freemon",
    last_name: "Tuhy",
    email: "ftuhy3@so-net.ne.jp",
    tech: "angular",
    isActive: false,
    note: "\"''''\"'\""
  },
  {
    id: 5,
    first_name: "Hallie",
    last_name: "Edlestone",
    email: "hedlestone4@a8.net",
    tech: "AI",
    isActive: false,
    note: "0.00"
  },
  {
    id: 6,
    first_name: "Brok",
    last_name: "Fairpool",
    email: "bfairpool5@buzzfeed.com",
    tech: "react",
    isActive: true,
    note: "-1"
  },
  {
    id: 7,
    first_name: "Annadiana",
    last_name: "Spivey",
    email: "aspivey6@joomla.org",
    tech: "react",
    isActive: true,
    note: "̗̺͖̹̯͓Ṯ̤͍̥͇͈h̲́e͏͓̼̗̙̼̣͔ ͇̜̱̠͓͍ͅN͕͠e̗̱z̘̝̜̺͙p̤̺̹͍̯͚e̠̻̠͜r̨̤͍̺̖͔̖̖d̠̟̭̬̝͟i̦͖̩͓͔̤a̠̗̬͉̙n͚͜ ̻̞̰͚ͅh̵͉i̳̞v̢͇ḙ͎͟-҉̭̩̼͔m̤̭̫i͕͇̝̦n̗͙ḍ̟ ̯̲͕͞ǫ̟̯̰̲͙̻̝f ̪̰̰̗̖̭̘͘c̦͍̲̞͍̩̙ḥ͚a̮͎̟̙͜ơ̩̹͎s̤.̝̝ ҉Z̡̖̜͖̰̣͉̜a͖̰͙̬͡l̲̫̳͍̩g̡̟̼̱͚̞̬ͅo̗͜.̟"
  },
  {
    id: 8,
    first_name: "Barbi",
    last_name: "Gerretsen",
    email: "bgerretsen7@canalblog.com",
    tech: "AI",
    isActive: true,
    note: "-1E2"
  },
  {
    id: 9,
    first_name: "Sydel",
    last_name: "Monery",
    email: "smonery8@vinaora.com",
    tech: "angular",
    isActive: false,
    note: "⁦test⁧"
  },
  {
    id: 10,
    first_name: "Emmerich",
    last_name: "Cicutto",
    email: "ecicutto9@sina.com.cn",
    tech: "angular",
    isActive: false,
    note: "ヽ༼ຈل͜ຈ༽ﾉ ヽ༼ຈل͜ຈ༽ﾉ "
  },
  {
    id: 11,
    first_name: "Lari",
    last_name: "Sancho",
    email: "lsanchoa@mozilla.org",
    tech: "AI",
    isActive: false,
    note: "''"
  },
  {
    id: 12,
    first_name: "Esther",
    last_name: "Pilley",
    email: "epilleyb@oaic.gov.au",
    tech: "react",
    isActive: false,
    note: "田中さんにあげて下さい"
  },
  {
    id: 13,
    first_name: "Antonella",
    last_name: "Hillett",
    email: "ahillettc@irs.gov",
    tech: "AI",
    isActive: false,
    note: "null"
  },
  {
    id: 14,
    first_name: "Ilario",
    last_name: "O'Glassane",
    email: "ioglassaned@wsj.com",
    tech: "AI",
    isActive: true,
    note: "0/0"
  },
  {
    id: 15,
    first_name: "Catlaina",
    last_name: "Coast",
    email: "ccoaste@51.la",
    tech: "angular",
    isActive: false,
    note: "'\"'"
  },
  {
    id: 16,
    first_name: "Nataline",
    last_name: "Syvret",
    email: "nsyvretf@yelp.com",
    tech: "angular",
    isActive: false,
    note: "() { _; } >_[$($())] { touch /tmp/blns.shellshock2.fail; }"
  },
  {
    id: 17,
    first_name: "Templeton",
    last_name: "Dudmarsh",
    email: "tdudmarshg@tumblr.com",
    tech: "AI",
    isActive: true,
    note: "Œ„´‰ˇÁ¨ˆØ∏”’"
  },
  {
    id: 18,
    first_name: "Norton",
    last_name: "Collman",
    email: "ncollmanh@shareasale.com",
    tech: "react",
    isActive: true,
    note: "​"
  },
  {
    id: 19,
    first_name: "Zelma",
    last_name: "Bigham",
    email: "zbighami@g.co",
    tech: "AI",
    isActive: false,
    note:
      "ثم نفس سقطت وبالتحديد،, جزيرتي باستخدام أن دنو. إذ هنا؟ الستار وتنصيب كان. أهّل ايطاليا، بريطانيا-فرنسا قد أخذ. سليمان، إتفاقية بين ما, يذكر الحدود أي بعد, معاملة بولندا، الإطلاق عل إيو."
  },
  {
    id: 20,
    first_name: "Kelbee",
    last_name: "Rennox",
    email: "krennoxj@slideshare.net",
    tech: "react",
    isActive: true,
    note: "١٢٣"
  },
  {
    id: 21,
    first_name: "Felipe",
    last_name: "Meneely",
    email: "fmeneelyk@cargocollective.com",
    tech: "react",
    isActive: true,
    note: "<svg><script>0<1>alert('XSS')</script>"
  },
  {
    id: 22,
    first_name: "Lyndell",
    last_name: "Pahler",
    email: "lpahlerl@sbwire.com",
    tech: "react",
    isActive: false,
    note: "NIL"
  },
  {
    id: 23,
    first_name: "Adriana",
    last_name: "Wolfenden",
    email: "awolfendenm@blogs.com",
    tech: "react",
    isActive: true,
    note: "部落格"
  },
  {
    id: 24,
    first_name: "Otho",
    last_name: "Blurton",
    email: "oblurtonn@list-manage.com",
    tech: "AI",
    isActive: true,
    note: "() { _; } >_[$($())] { touch /tmp/blns.shellshock2.fail; }"
  },
  {
    id: 25,
    first_name: "Loralyn",
    last_name: "Sutheran",
    email: "lsutherano@google.co.jp",
    tech: "react",
    isActive: true,
    note: "œ∑´®†¥¨ˆøπ“‘"
  },
  {
    id: 26,
    first_name: "Nola",
    last_name: "Coke",
    email: "ncokep@technorati.com",
    tech: "angular",
    isActive: true,
    note: "‪‪test‪"
  },
  {
    id: 27,
    first_name: "Aigneis",
    last_name: "Fishley",
    email: "afishleyq@bloomberg.com",
    tech: "AI",
    isActive: true,
    note: "​"
  },
  {
    id: 28,
    first_name: "Aurthur",
    last_name: "Beaty",
    email: "abeatyr@free.fr",
    tech: "angular",
    isActive: false,
    note: "・(￣∀￣)・:*:"
  },
  {
    id: 29,
    first_name: "Lynnelle",
    last_name: "Cholonin",
    email: "lcholonins@toplist.cz",
    tech: "angular",
    isActive: false,
    note: "1"
  },
  {
    id: 30,
    first_name: "Gussy",
    last_name: "Duckham",
    email: "gduckhamt@mtv.com",
    tech: "react",
    isActive: false,
    note: "社會科學院語學研究所"
  },
  {
    id: 31,
    first_name: "Jory",
    last_name: "Genny",
    email: "jgennyu@webs.com",
    tech: "AI",
    isActive: true,
    note: "../../../../../../../../../../../etc/passwd%00"
  },
  {
    id: 32,
    first_name: "Lise",
    last_name: "Michele",
    email: "lmichelev@icio.us",
    tech: "react",
    isActive: false,
    note: "œ∑´®†¥¨ˆøπ“‘"
  },
  {
    id: 33,
    first_name: "Lionello",
    last_name: "Castleman",
    email: "lcastlemanw@t-online.de",
    tech: "react",
    isActive: false,
    note: "(｡◕ ∀ ◕｡)"
  },
  {
    id: 34,
    first_name: "Selma",
    last_name: "Liccardi",
    email: "sliccardix@dyndns.org",
    tech: "react",
    isActive: false,
    note: "-1"
  },
  {
    id: 35,
    first_name: "Glennis",
    last_name: "Scurry",
    email: "gscurryy@yelp.com",
    tech: "AI",
    isActive: true,
    note:
      "˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs 'ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ 'ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥"
  },
  {
    id: 36,
    first_name: "Theda",
    last_name: "Eakens",
    email: "teakensz@merriam-webster.com",
    tech: "react",
    isActive: true,
    note: "部落格"
  },
  {
    id: 37,
    first_name: "Myriam",
    last_name: "Cerie",
    email: "mcerie10@intel.com",
    tech: "angular",
    isActive: true,
    note: "../../../../../../../../../../../etc/hosts"
  },
  {
    id: 38,
    first_name: "Carol-jean",
    last_name: "Pettigree",
    email: "cpettigree11@dell.com",
    tech: "angular",
    isActive: true,
    note: "̡͓̞ͅI̗̘̦͝n͇͇͙v̮̫ok̲̫̙͈i̖͙̭̹̠̞n̡̻̮̣̺g̲͈͙̭͙̬͎ ̰t͔̦h̞̲e̢̤ ͍̬̲͖f̴̘͕̣è͖ẹ̥̩l͖͔͚i͓͚̦͠n͖͍̗͓̳̮g͍ ̨o͚̪͡f̘̣̬ ̖̘͖̟͙̮c҉͔̫͖͓͇͖ͅh̵̤̣͚͔á̗̼͕ͅo̼̣̥s̱͈̺̖̦̻͢.̛̖̞̠̫̰"
  },
  {
    id: 39,
    first_name: "Sigmund",
    last_name: "Memmory",
    email: "smemmory12@virginia.edu",
    tech: "AI",
    isActive: true,
    note: "(ﾉಥ益ಥ）ﾉ﻿ ┻━┻"
  },
  {
    id: 40,
    first_name: "Susan",
    last_name: "Hartfield",
    email: "shartfield13@google.com.hk",
    tech: "react",
    isActive: false,
    note: "¸˛Ç◊ı˜Â¯˘¿"
  },
  {
    id: 41,
    first_name: "Adelina",
    last_name: "Hassey",
    email: "ahassey14@cafepress.com",
    tech: "angular",
    isActive: false,
    note: "'\"'"
  },
  {
    id: 42,
    first_name: "Talia",
    last_name: "Ranshaw",
    email: "transhaw15@amazon.co.uk",
    tech: "react",
    isActive: false,
    note: "1E2"
  },
  {
    id: 43,
    first_name: "Kile",
    last_name: "Pollak",
    email: "kpollak16@bravesites.com",
    tech: "angular",
    isActive: true,
    note: "1.00"
  },
  {
    id: 44,
    first_name: "Roxane",
    last_name: "Maxwale",
    email: "rmaxwale17@cnbc.com",
    tech: "AI",
    isActive: true,
    note: "1/0"
  },
  {
    id: 45,
    first_name: "Celina",
    last_name: "Smissen",
    email: "csmissen18@cafepress.com",
    tech: "AI",
    isActive: true,
    note: "<img src=x onerror=alert('hi') />"
  },
  {
    id: 46,
    first_name: "Christiana",
    last_name: "Fardoe",
    email: "cfardoe19@is.gd",
    tech: "react",
    isActive: false,
    note: "הָיְתָהtestالصفحات التّحول"
  },
  {
    id: 47,
    first_name: "Garold",
    last_name: "Moorrud",
    email: "gmoorrud1a@nytimes.com",
    tech: "react",
    isActive: true,
    note: "/dev/null; touch /tmp/blns.fail ; echo"
  },
  {
    id: 48,
    first_name: "Barbette",
    last_name: "Lidgett",
    email: "blidgett1b@linkedin.com",
    tech: "react",
    isActive: true,
    note: "() { _; } >_[$($())] { touch /tmp/blns.shellshock2.fail; }"
  },
  {
    id: 49,
    first_name: "Yetta",
    last_name: "Rentoll",
    email: "yrentoll1c@usa.gov",
    tech: "AI",
    isActive: false,
    note: "!@#$%^&*()"
  },
  {
    id: 50,
    first_name: "Cathlene",
    last_name: "Pottinger",
    email: "cpottinger1d@ihg.com",
    tech: "AI",
    isActive: true,
    note: "1"
  }
];

export default users;
