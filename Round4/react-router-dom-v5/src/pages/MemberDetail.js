import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import TalkMember from './TalkMember';
const DUMMY_DATA = [
	{
		"id": "RLX11GJW4JP",
		"title": "Uriah Bush",
		"phone": "08-000-0171",
		"email": "dictum.eu@google.edu",
		"address": "340-3529 Egestas. Av.",
		"region": "Chungnam",
		"country": "France",
		"text": "magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at,",
		"isSales": false,
		"currency": "$4,057.92",
		"date": "12.04.18",
		"company": "In Nec Orci LLP",
		"city": "Gunsan",
		"normaldist": 1
	},
	{
		"id": "IMT17EJL3IU",
		"title": "Jasmine Frye",
		"phone": "06-000-8783",
		"email": "hendrerit.id.ante@hotmail.org",
		"address": "P.O. Box 263, 5906 Neque St.",
		"region": "North-East Region",
		"country": "France",
		"text": "et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales",
		"isSales": false,
		"currency": "$2,325.32",
		"date": "30.11.18",
		"company": "Nam Interdum Enim Ltd",
		"city": "Mexicali",
		"normaldist": 2
	},
	{
		"id": "SGE78JPY7GR",
		"title": "David Haynes",
		"phone": "07-000-8082",
		"email": "risus.in@aol.ca",
		"address": "Ap #389-9125 Lorem Rd.",
		"region": "New South Wales",
		"country": "United States",
		"text": "at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus",
		"isSales": false,
		"currency": "$5,979.71",
		"date": "06.03.20",
		"company": "Est Congue A Corporation",
		"city": "Gjoa Haven",
		"normaldist": 3
	},
	{
		"id": "CIX86TIP4YM",
		"title": "Wade Cain",
		"phone": "08-000-2652",
		"email": "fermentum.risus@outlook.couk",
		"address": "P.O. Box 511, 748 A, Avenue",
		"region": "East Region",
		"country": "United States",
		"text": "id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna.",
		"isSales": false,
		"currency": "$2,280.62",
		"date": "21.02.21",
		"company": "Felis Ullamcorper Incorporated",
		"city": "Carbonear",
		"normaldist": 4
	},
	{
		"id": "GXN36YBV3IT",
		"title": "Alan Summers",
		"phone": "011-6394-7201",
		"email": "erat.eget@yahoo.com",
		"address": "774-6972 Nunc Avenue",
		"region": "Dunbartonshire",
		"country": "United Kingdom",
		"text": "commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu",
		"isSales": true,
		"currency": "$6,028.39",
		"date": "01.08.19",
		"company": "Nulla Eu Ltd",
		"city": "Kirkwall",
		"normaldist": 5
	},
	{
		"id": "DSK14JYB2FF",
		"title": "Abel Rosa",
		"phone": "08-000-7452",
		"email": "pharetra@google.net",
		"address": "755 Odio. St.",
		"region": "Alabama",
		"country": "France",
		"text": "et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"isSales": true,
		"currency": "$2,668.86",
		"date": "29.11.19",
		"company": "Lectus Nullam Suscipit Institute",
		"city": "Maidenhead",
		"normaldist": 6
	},
	{
		"id": "OBV13OTD5BS",
		"title": "Cullen Puckett",
		"phone": "083-6496-3682",
		"email": "sociis.natoque.penatibus@aol.org",
		"address": "Ap #358-8695 Ipsum Street",
		"region": "CR",
		"country": "United States",
		"text": "vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet",
		"isSales": false,
		"currency": "$1,905.35",
		"date": "27.09.17",
		"company": "Vulputate Posuere Foundation",
		"city": "Chuncheon",
		"normaldist": 7
	},
	{
		"id": "BOF68CFS9YS",
		"title": "Kessie Walsh",
		"phone": "044-4373-8397",
		"email": "eu.neque.pellentesque@google.org",
		"address": "P.O. Box 512, 2986 Praesent Av.",
		"region": "CR",
		"country": "Indonesia",
		"text": "purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor",
		"isSales": false,
		"currency": "$7,755.13",
		"date": "13.01.17",
		"company": "Eu Euismod Corporation",
		"city": "Tuxtla Gutiérrez",
		"normaldist": 8
	},
	{
		"id": "JKB01LZV4NS",
		"title": "Kyra Mccarthy",
		"phone": "010-6440-7497",
		"email": "in.felis@google.edu",
		"address": "Ap #346-1517 Inceptos Avenue",
		"region": "Colorado",
		"country": "United States",
		"text": "pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis",
		"isSales": false,
		"currency": "$2,928.37",
		"date": "08.04.21",
		"company": "Rhoncus Proin Nisl Ltd",
		"city": "Chuncheon",
		"normaldist": 9
	},
	{
		"id": "HAS64DTI3FT",
		"title": "Aurelia Bruce",
		"phone": "053-2357-8087",
		"email": "blandit.mattis.cras@outlook.couk",
		"address": "Ap #574-5194 Parturient Rd.",
		"region": "SG-01",
		"country": "United Kingdom",
		"text": "tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue.",
		"isSales": false,
		"currency": "$4,380.08",
		"date": "22.02.19",
		"company": "Massa Integer Vitae Inc.",
		"city": "Worksop",
		"normaldist": 10
	},
	{
		"id": "QUF26AFU4ND",
		"title": "Daphne Vance",
		"phone": "010-8775-0228",
		"email": "neque@outlook.edu",
		"address": "499-182 Sed St.",
		"region": "WA",
		"country": "Australia",
		"text": "mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora",
		"isSales": false,
		"currency": "$8,908.26",
		"date": "25.09.16",
		"company": "Ut Limited",
		"city": "Wichita",
		"normaldist": 11
	},
	{
		"id": "YHX11DXK4KO",
		"title": "Brody Sanchez",
		"phone": "010-4159-2317",
		"email": "sapien@protonmail.couk",
		"address": "Ap #362-4650 Orci Av.",
		"region": "CR",
		"country": "Australia",
		"text": "hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing.",
		"isSales": false,
		"currency": "$7,795.60",
		"date": "16.09.17",
		"company": "Imperdiet Non Vestibulum Consulting",
		"city": "Halifax",
		"normaldist": 12
	},
	{
		"id": "FIK43QLB5UI",
		"title": "Erica Ayers",
		"phone": "038-1537-9501",
		"email": "est.congue@yahoo.org",
		"address": "Ap #189-4479 Amet Rd.",
		"region": "Gyeongnam",
		"country": "United Kingdom",
		"text": "Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget",
		"isSales": true,
		"currency": "$6,835.42",
		"date": "22.01.17",
		"company": "Mauris Magna Associates",
		"city": "Payakumbuh",
		"normaldist": 13
	},
	{
		"id": "KVX75FXT2PH",
		"title": "Yen Snyder",
		"phone": "01-000-3638",
		"email": "nunc.sit@hotmail.com",
		"address": "268-1508 Nam Avenue",
		"region": "Gangwon",
		"country": "South Korea",
		"text": "mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui.",
		"isSales": false,
		"currency": "$5,947.63",
		"date": "23.02.18",
		"company": "Tellus Aenean Foundation",
		"city": "Celaya",
		"normaldist": 14
	},
	{
		"id": "UJL25LPQ4DH",
		"title": "Aquila Foreman",
		"phone": "082-1146-4750",
		"email": "dui.in@icloud.org",
		"address": "560-2971 Nonummy Rd.",
		"region": "WA",
		"country": "Indonesia",
		"text": "magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla",
		"isSales": true,
		"currency": "$3,699.67",
		"date": "13.04.21",
		"company": "Montes Nascetur Corp.",
		"city": "Calapan",
		"normaldist": 15
	},
	{
		"id": "EJD12FXS7LW",
		"title": "Kaye Buchanan",
		"phone": "07-000-5858",
		"email": "donec.egestas@google.edu",
		"address": "557-3499 Sem Av.",
		"region": "South Gyeongsang",
		"country": "France",
		"text": "Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis",
		"isSales": true,
		"currency": "$6,438.16",
		"date": "17.06.19",
		"company": "Ac Tellus PC",
		"city": "Bayugan",
		"normaldist": 16
	},
	{
		"id": "WWI36IBK2KK",
		"title": "Quinn Banks",
		"phone": "05-000-2538",
		"email": "mauris@hotmail.ca",
		"address": "394-3837 Sagittis Road",
		"region": "SE",
		"country": "United Kingdom",
		"text": "Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et",
		"isSales": true,
		"currency": "$609.00",
		"date": "25.07.18",
		"company": "Praesent Foundation",
		"city": "Grafton",
		"normaldist": 17
	},
	{
		"id": "VDO70ABX3VQ",
		"title": "Linda Deleon",
		"phone": "031-2882-8837",
		"email": "nunc.lectus@outlook.net",
		"address": "Ap #734-4982 Ac Av.",
		"region": "Alaska",
		"country": "Indonesia",
		"text": "a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis.",
		"isSales": true,
		"currency": "$963.32",
		"date": "20.11.19",
		"company": "A Auctor Non Consulting",
		"city": "Uruapan",
		"normaldist": 18
	},
	{
		"id": "ROW47RVP8JI",
		"title": "Tamara Irwin",
		"phone": "010-7354-0262",
		"email": "adipiscing@aol.edu",
		"address": "3924 Amet, Avenue",
		"region": "Chungbuk",
		"country": "Australia",
		"text": "tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum",
		"isSales": false,
		"currency": "$7,264.37",
		"date": "30.09.19",
		"company": "Consequat Auctor Foundation",
		"city": "Valencia",
		"normaldist": 19
	},
	{
		"id": "MUL46TSB6DS",
		"title": "Lamar Holcomb",
		"phone": "08-000-3617",
		"email": "ac.urna.ut@protonmail.couk",
		"address": "Ap #724-7995 Nisl Avenue",
		"region": "Chungnam",
		"country": "Indonesia",
		"text": "cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu",
		"isSales": false,
		"currency": "$7,967.53",
		"date": "09.07.19",
		"company": "Sem Magna Foundation",
		"city": "Nonsan",
		"normaldist": 20
	},
	{
		"id": "RRX56SOU2GE",
		"title": "Ruby Owens",
		"phone": "06-000-7682",
		"email": "erat.vivamus@outlook.org",
		"address": "P.O. Box 959, 9301 Porttitor Av.",
		"region": "North Region",
		"country": "Australia",
		"text": "aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In",
		"isSales": false,
		"currency": "$6,572.29",
		"date": "08.06.17",
		"company": "Id Inc.",
		"city": "Lebach",
		"normaldist": 21
	},
	{
		"id": "EGQ82AYW9VH",
		"title": "Nicholas York",
		"phone": "082-9713-2253",
		"email": "et.euismod@icloud.com",
		"address": "175-9707 Quisque Ave",
		"region": "CR",
		"country": "France",
		"text": "elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla",
		"isSales": true,
		"currency": "$7,994.20",
		"date": "20.12.20",
		"company": "Nulla Cras Industries",
		"city": "Great Yarmouth",
		"normaldist": 22
	},
	{
		"id": "ZEH48CZL6VD",
		"title": "Maryam Payne",
		"phone": "00-000-2280",
		"email": "tincidunt.donec@google.net",
		"address": "315-5463 Phasellus St.",
		"region": "GA",
		"country": "United Kingdom",
		"text": "fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl",
		"isSales": false,
		"currency": "$8,052.24",
		"date": "22.06.18",
		"company": "Semper Et Company",
		"city": "Fremantle",
		"normaldist": 23
	},
	{
		"id": "FEA22JNH2JZ",
		"title": "Meredith Martin",
		"phone": "031-3857-7818",
		"email": "nullam.scelerisque.neque@yahoo.com",
		"address": "Ap #131-1481 Magna St.",
		"region": "East Lothian",
		"country": "South Korea",
		"text": "lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam.",
		"isSales": true,
		"currency": "$4,254.93",
		"date": "19.08.18",
		"company": "Ut Erat Sed Inc.",
		"city": "Columbus",
		"normaldist": 24
	},
	{
		"id": "VDH23EZX6KZ",
		"title": "Kylie Morales",
		"phone": "016-3262-6591",
		"email": "scelerisque.sed@aol.edu",
		"address": "P.O. Box 961, 6522 Quisque Rd.",
		"region": "Alabama",
		"country": "Australia",
		"text": "vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a,",
		"isSales": false,
		"currency": "$6,485.32",
		"date": "27.11.17",
		"company": "Libero Dui Corporation",
		"city": "Haddington",
		"normaldist": 25
	},
	{
		"id": "NCE75UHG7LJ",
		"title": "Robert Kirkland",
		"phone": "022-2197-3897",
		"email": "arcu.sed.et@icloud.edu",
		"address": "Ap #738-9846 Aliquam Road",
		"region": "IA",
		"country": "Indonesia",
		"text": "orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras",
		"isSales": true,
		"currency": "$8,732.69",
		"date": "09.03.18",
		"company": "Posuere Associates",
		"city": "Jedburgh",
		"normaldist": 26
	},
	{
		"id": "ANY46OXO8VM",
		"title": "Morgan Stevens",
		"phone": "010-2584-3157",
		"email": "duis@hotmail.com",
		"address": "613-3443 Primis St.",
		"region": "North-East Region",
		"country": "Australia",
		"text": "lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque",
		"isSales": true,
		"currency": "$4,711.53",
		"date": "14.12.20",
		"company": "Odio LLP",
		"city": "Berlin",
		"normaldist": 27
	},
	{
		"id": "FJE42DLL3MS",
		"title": "Linus Joyner",
		"phone": "010-8412-8613",
		"email": "erat.nonummy@icloud.edu",
		"address": "P.O. Box 270, 4656 Suspendisse Ave",
		"region": "Chungnam",
		"country": "Australia",
		"text": "in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed",
		"isSales": false,
		"currency": "$836.97",
		"date": "11.12.19",
		"company": "Duis Gravida Industries",
		"city": "Ulm",
		"normaldist": 28
	},
	{
		"id": "QZA69YBM1JG",
		"title": "Garrett Navarro",
		"phone": "055-3648-5935",
		"email": "fermentum@icloud.couk",
		"address": "634-5978 Non, St.",
		"region": "Jeonbuk",
		"country": "United Kingdom",
		"text": "iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id",
		"isSales": false,
		"currency": "$4,355.41",
		"date": "06.04.21",
		"company": "Risus Industries",
		"city": "Phoenix",
		"normaldist": 29
	},
	{
		"id": "VFY37RRH1GO",
		"title": "Adrian Stein",
		"phone": "010-3211-9316",
		"email": "suspendisse@google.edu",
		"address": "Ap #240-347 Purus Street",
		"region": "North Region",
		"country": "United Kingdom",
		"text": "Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac",
		"isSales": false,
		"currency": "$5,751.59",
		"date": "21.08.16",
		"company": "Volutpat Nulla Dignissim Consulting",
		"city": "Tehuacán",
		"normaldist": 30
	}
]


const Card = styled.div`
margin-top: 5rem;
display:flex;
flex-direction:column;
justify-content:center;

padding: 1.5rem;
gap:20px;
position: absolute;
left:6rem;
top:50%;
width: 512px;
height:552px;
transform: translate(-10%,-50%);
word-break: keep-all;
border: 1px solid white;
span{
  font-size: 20px;
  font-weight:bold;
  text-decoration:underline;
}
a:hover{
  color:white;
  text-decoration:underline;
}
li:last-of-type{
	display:flex;
	justify-content:space-between;
}
`
const rank = ['CEO','CFO','CTO','Vice President','Managing Director','Excutive Director','Clerk','Supervisor','Manager','Assistant Manager','General Manager']
const MemberDetail = () => {
  const params = useParams();
  const member = DUMMY_DATA.find((member)=> member.id === params.memberId);
  
  const age = useMemo(()=>Math.floor(Math.random() * 40) + 20,[])
  return (
    <>
    <Card>
      <h1>Rank: {useMemo(()=>rank[Math.floor(Math.random() * rank.length)],[])}</h1>
      <li>Full Name: <span>{member.title}</span></li>
      <li>Age: <span>{age}</span></li>
      <li>Current Work Space: <span>{member.city},{member.address}</span></li>
      <li>Business Phone Number: <span>{member.phone}</span></li>
      <li>Place of Birth: <span>{member.country}</span></li>
      <li>Entering Date: <span>{member.date}</span></li>
      <li><strong>Personnel report</strong> <p>{member.text}</p></li>
      <li>
        <Link to={`/members/${member.id}/talk`}>Talk to {member.title}</Link>
        <Link to={`/members`}>Back</Link>
      </li>
    </Card>
    <Route path={`/members/:memberId/talk`} exact>
      <TalkMember memberTitle={member.title} memberId={member.id} />
    </Route>
    </>
  );
};

export default React.memo(MemberDetail);