import { compareTwoStrings } from 'string-similarity';
import { writeFileSync } from 'fs';
// import { allHotelsWithRoughName } from './getAllHotelName.js';
import { nowTodo, nowTodo1 } from '../someExtraData.js';
// import { allHotelsWithRoughName } from '../allHotelWithRoughName.js';
import { correctHotelName } from './correctHotelName.js';
const { log } = console;

// Adaaran Prestige Vadoo,Adaaran Prestige Water Villas,Airport Beach Hotel,Alila Kothaifaru Maldives,Amari Raaya Maldives,Amaya Resort Kuda Rah,Amilla Maldives,Anantara Dhigu Maldives Resort,Anantara Kihavah Maldives Villas,Anantara Veli Maldives Resort,Angsana Velavaru,Atmosphere Kanifushi Maldives,Avani+ Fares Maldives Resort,Ayada Maldives,Baglioni Resort Maldives,Banyan Tree Vabbinfaru,Barceló Whale Lagoon Maldives,Baros,Bolifushi Island,Brennia Kottefaru,Centara Grand Island Resort & Spa Maldives,Cheval Blanc Randheli,Cinnamon Velifushi Maldives,Coco Bodu Hithi,Coco Palm Dhuni Kolhu,Cocoon Maldives,COMO Cocoa Island,COMO Maalifushi,Conrad Maldives Rangali Island,Constance Halaveli Maldives,Constance Moofushi Maldives,Cora Cora Maldives,Dhawa Ihuru,Dhigali Maldives,Dhigufaru Island Resort,Diamonds Athuruga Maldives Resort & SPA,Diamonds Thudufushi Maldives Resort & SPA,Dusit Thani Maldives,Emerald Maldives Resort & Spa,Emerald Faarufushi Resort & Spa,Fairmont Maldives - Sirru Fen Fushi,Finolhu Baa Atoll Maldives ,Four Seasons Maldives Private Island at Voavah,Four Seasons Resort Maldives at Kuda Huraa,Four Seasons Resort Maldives at Landaa Giraavaru,Furaveri Maldives,Fushifaru Maldives,Gangehi Island Resort,Gili Lankanfushi Maldives,Grand Park Kodhipparu,Hard Rock Hotel Maldives,Heritance Aarah,Hideaway Beach Resort & Spa Maldives,Hilton Maldives Amingiri Resort & Spa,Hotel Riu Palace Maldivas,Hurawalhi Island Resort,Huvafen Fushi,Ifuru Island Maldives,InterContinental Maldives Maamunagau Resort, an IHG Hotel,JA Manafaru Private Island,JOALI Maldives,JOALI BEING,Joy Island,Jumeirah Maldives Olhahali Island,JW Marriott Maldives Resort & Spa,Kagi Maldives Resort & Spa,Kandima Maldives,Kandolhu Maldives,Kihaa Maldives,Kuda Villingili Resort Maldives,Kudadoo Maldives Private Island,Kudafushi Resort & Spa,Kurumba Maldives,Le Méridien Maldives Resort & Spa,Lily Beach Resort & Spa,LUX South Ari Atoll,Madifushi Private Island,Milaidhoo Maldives,Mirihi Island Resort,Mövenpick Resort Kuredhivaru Maldives,Naladhu Private Island Maldives,NH Collection Maldives Havodda Resort,Nika Island Resort & Spa,Niyama Private Islands Maldives,Noku Maldives,Nova Maldives,Oaga Art Resort Maldives,OBLU SELECT Lobigili,Oblu Select Sangeli,One&Only Reethi Rah,Outrigger Konotta Maldives Resort,Outrigger Maldives Maafushivaru,Ozen Life Maadhoo, South Male Atoll,Ozen Reserve Bolifushi, South Male Atoll,Patina MaldivesPark Hyatt Maldives HadahaaPullman Maldives ResortRadisson Blu Resort MaldivesRaffles Maldives Meradhoo ResortRiu Palace MaldivesRobinson Club NoonuRoyal Island Resort & Spa,SAii Lagoon Maldives, Curio Collection by Hilton,Seaside Finolhu Baa Atoll Maldives,Sheraton Maldives Full Moon Resort & Spa,Six Senses Kanuhura,Six Senses Laamu,Siyam World Maldives,SO/ Maldives,Soneva Fushi,Soneva Jani,Sun Siyam Iru Fushi,Sun Siyam Iru Veli,Sun Siyam Vilu Reef,Taj Coral Reef Resort & Spa,Taj Exotica Resort & Spa,The Nautilus Maldives,The Residence Maldives at DhigurahThe Residence Maldives at FalhumaafushiThe Ritz-Carlton Maldives, Fari IslandsThe St. Regis Maldives Vommuli ResortThe Standard, Huruvalhi MaldivesThe Westin Maldives Miriandhoo ResortVARU by AtmosphereVelaa Private Island MaldivesVelassaru MaldivesVilla Nautica MaldivesVilla Park MaldivesW MaldivesWaldorf Astoria Maldives IthaafushiYou & Me Maldives,Adaaran Club Rannalhi,Adaaran Select Hudhuran Fushi,Adaaran Select Meedhupparu,Angaga Island Resort & Spa,Bandos Maldives,Canareef Resort Maldives,Centara Ras Fushi Resort,Cinnamon Dhonveli Maldives,Cinnamon Hakuraa Huraa Maldives,Club Med Kani - Maldives,Dreamland Maldives,Drift Thelu Veliga Retreat,Ellaidhoo Maldives by Cinnamon,Embudu Village,Eriyadu Island Resort ,Fihalhohi Maldives,Filitheyo Island Resort,Fiyavalhu Resort Maldives,Holiday Inn Resort Kandooma Maldives,Hotel Riu Atoll,Hulhule Island Hotel,Innahura Maldives Resort,Jawakara Islands Maldives ,Jen Maldives Male,Kaani Beach Hotel,Kaani Palm Beach,Kaania Village & Spa,Kiha Beach,Komandoo Island Resort & Spa,Kuramathi Maldives,Kuredu Island Resort & Spa,Maagiri Hotel,Makunudu Island,Malahini Kuda Bandos Resort,Medhufushi Island Resort,Meeru Maldives Resort Island,Mercure Maldives Kooddoo Resort,NAKAI Dhiggiri Resort,Nooe Maldives Kunaavashi,OBLU NATURE Helengeli by SENTIDO,OBLU XPERIENCE Ailafushi,Pearl Sands of Maldives,Rahaa Resort Maldives,Reethi Beach Resort Maldives,Reethi Faru Resort,Rihiveli Maldives Resort,Riu Atoll Hotel,Robinson Maldives,Safari Island Resort,Sandies Bathla,Season Paradise,South Palm Resort,Summer Island Maldives,Sun Siyam Olhuveli,The Barefoot Eco Hotel,Thulhagiri Island Resort,Unima Grand,Velana Beach Hotel Maldives,Vilamendhoo Island Resort & Spa'.split(
const arr = ['Kandima Maldives'];

const newArr = [];
for (let j = 0; j < nowTodo1.length; j++) {
  let maxSimilarity = -1;
  let bestMatch = null;
  let str1 = nowTodo1[j].toLowerCase().replace(/\s/g, '');
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].toLowerCase().replace(/\s/g, ''); // Preprocessing array string
    const similarity = compareTwoStrings(str, str1);
    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      bestMatch = arr[i];
    }
  }
  if (maxSimilarity >= 0.7) {
    correctHotelName(nowTodo1[j], bestMatch)
    newArr.push({ bestMatch, prev: nowTodo1[j] });
  }
}

writeFileSync('new.json', JSON.stringify(newArr));
log('Done writing to new.json');