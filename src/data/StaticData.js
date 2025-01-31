import realtor_1 from '../images/realtor-1.jpeg';
import realtor_2 from '../images/realtor-2.jpeg';
import realtor_3 from '../images/realtor-3.jpeg';

const listingsData = [
    { 
        address: '20-24 Grand Ave',
        city: 'Ridgewood',
        state: 'NY',
        rooms: 3,
        price: 220000,
        floorSpace: 2000,
        extras: [ 
            'elavator',
            'gym'
         ],
         homeType: 'Ranch',
         image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
    },
     { 
        address: '514 Mango Ave',
        city: 'Camarillo',
        state: 'CA',
        rooms: 4,
        price: 2300002,
        floorSpace: 3000,
        extras: [ 
            'elavator',
            'Swimming Pool'
         ],
         homeType: 'Room',
         image: 'https://assets.site-static.com/userFiles/657/image/Camelot_Development_Northbridge.jpg',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
        },
     { 
        address: '20-24 Perkins Ave',
        city: 'Norwalk',
        state: 'CA',
        rooms: 4,
        price: 440000,
        floorSpace: 3000,
        extras: [ 
            'Finished Basement',
            'gym'
         ],
         homeType: 'Aparment',
         image: 'https://photos.zillowstatic.com/p_e/ISyfehawtafpwh0000000000.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
      },
     { 
        address: '20 Ritch Ave',
        city: 'Los Angeles',
        state: 'CA',
        rooms: 4,
        price: 420000,
        floorSpace: 100,
        extras: [ 
            'gym'
         ],
         homeType: 'Ranch',
         image: 'https://photos.zillowstatic.com/p_e/ISync95keuizfj1000000000.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'     
      },
     { 
        address: '14-22 Rose Ave',
        city: 'Oxnard',
        state: 'CA',
        rooms: 3,
        price: 20000,
        floorSpace: 100,
        extras: [ 
            'elavator',
            'gym',
            'Finished Basement'
         ],
         homeType: 'Aparment',
         image: 'https://photos.zillowstatic.com/p_e/ISyjt3xtf4gijo1000000000.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'     
      },
     { 
        address: '20-24 Perkins Ave',
        city: 'Ventura',
        state: 'CA',
        rooms: 2,
        price: 20000,
        floorSpace: 1000,
        extras: [ 
            'elavator',
            'gym',
            'internet'
         ],
         homeType: 'Aparment',
         image: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '20-22 Conejo Ave',
        city: 'Los Angeles',
        state: 'CA',
        rooms: 2,
        price: 3220000,
        floorSpace: 22000,
        extras: [ 
            'elavator', 
            'gym',
            'bathroom'
         ],
         homeType: 'Aparment',
         image: 'https://photos.zillowstatic.com/p_e/ISm6rbbdqbfude0000000000.jpg',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
     },
     { 
        address: '20 Ritch Ave',
        city: 'Thousand Oaks',
        state: 'CA',
        rooms: 0,
        price: 22220000,
        floorSpace: 20000,
        extras: [ 
            'Swimming Pool',
            'elavator',
            'gym'
         ],
         homeType: 'house',
         image: 'https://photos.zillowstatic.com/p_e/ISm6rbbdqbfude0000000000.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
     },
     { 
        address: '20 New Ave',
        city: 'Santa Barbara',
        state: 'CA',
        rooms: 1,
        price: 20000,
        floorSpace: 100,
        extras: [ 
            'elavator',
            'gym'
         ],
         homeType: 'Ranch',
         image: 'https://si.wsj.net/public/resources/images/B3-DM067_RIGHTS_IM_20190319162958.jpg',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '204 Willow Ave',
        city: 'San Francisco',
        state: 'CA',
        rooms: 2,
        price: 2020000,
        floorSpace: 200,
        extras: [ 
            'elavator',
            'gym',
            'Swimming Pool'
         ],
         homeType: 'Aparment',
         image: 'https://img.jamesedition.com/listing_images/2024/09/24/16/19/45/3724e159-fae3-4e5c-9953-d98979de2a3b/je/507x312xc.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'  
    },
     { 
        address: '20-24 Grand Ave',
        city: 'New York',
        state: 'NY',
        rooms: 2,
        price: 2220000,
        floorSpace: 2000,
        extras: [ 
            'elavator',
            'gym',
            'Swimming Pool'
         ],
         homeType: 'Studio',
           image: 'https://images.adsttc.com/media/images/5e60/0492/6ee6/7e64/1f00/0075/medium_jpg/Svastaka_house_17.jpg?1583350899',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '24 Grand Ave',
        city: 'Ridgewood',
        state: 'NY',
        rooms: 2,
        price: 223000,
        floorSpace: 2000,
        extras: [ 
            'elavator'
         ],
         homeType: 'Room',
        image: 'https://images1.forrent.com/i2/diKVro-qx3-Lf2hNK-bmJaym8hAqy1XVSg_7B6crHY4/117/image.jpg',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
     },
     { 
        address: '2222 Rancho Ave',
        city: 'Thousand Oaks',
        state: 'CA',
        rooms: 3,
        price: 2343000,
        floorSpace: 24000,
        extras: [ 
            'elavator',
            'gym',
            'internet',
            'pool'
         ],
         homeType: 'Aparment',
         image: 'https://wp-tid.zillowstatic.com/52/GettyImages-175259322-1_1200-1-d9e272-1024x805.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
    },

    { 
        address: '20-24 Grand Ave',
        city: 'Ridgewood',
        state: 'NY',
        rooms: 3,
        price: 220000,
        floorSpace: 2000,
        extras: [ 
            'elavator',
            'gym'
         ],
         homeType: 'Ranch',
         image: 'https://static.schumacherhomes.com/umbraco/media/wvflutbh/image4.jpg?format=webp',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
    },
     { 
        address: '514 Mango Ave',
        city: 'Camarillo',
        state: 'CA',
        rooms: 4,
        price: 2300002,
        floorSpace: 3000,
        extras: [ 
            'elavator',
            'Swimming Pool'
         ],
         homeType: 'Room',
        image: 'https://content.fortune.com/wp-content/uploads/2019/06/lan07.19-hollowtracehouse.jpg',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
        },
     { 
        address: '20-24 Perkins Ave',
        city: 'Norwalk',
        state: 'CA',
        rooms: 4,
        price: 440000,
        floorSpace: 3000,
        extras: [ 
            'Finished Basement',
            'gym'
         ],
         homeType: 'Aparment',
        image: 'https://s.hdnux.com/photos/01/00/24/24/16860420/3/920x920.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
      },
     { 
        address: '20 Ritch Ave',
        city: 'Los Angeles',
        state: 'CA',
        rooms: 4,
        price: 420000,
        floorSpace: 100,
        extras: [ 
            'gym'
         ],
         homeType: 'Ranch',
         image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/row-of-colourful-georgian-terraced-houses-in-royalty-free-image-1582200980.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'     
      },
     { 
        address: '14-22 Rose Ave',
        city: 'Oxnard',
        state: 'CA',
        rooms: 3,
        price: 20000,
        floorSpace: 100,
        extras: [ 
            'elavator',
            'gym',
            'Finished Basement'
         ],
         homeType: 'Aparment',
        image: 'https://cdn.vox-cdn.com/thumbor/c-Lm2KWCE5G5OoPS8yh9t-qQy2Q=/0x0:4000x3000/1200x800/filters:focal(0x0:4000x3000)/cdn.vox-cdn.com/uploads/chorus_asset/file/19623527/19_1220-TOH-2020-Side-Hustle-Idea-House-Atlantic-Blue-24x36.0.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'     
      },
     { 
        address: '20-24 Perkins Ave',
        city: 'Ventura',
        state: 'CA',
        rooms: 2,
        price: 20000,
        floorSpace: 1000,
        extras: [ 
            'elavator',
            'gym',
            'internet'
         ],
         homeType: 'Aparment',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/191204153142-impossible-architecture-tease-2.jpg',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '20-22 Conejo Ave',
        city: 'Los Angeles',
        state: 'CA',
        rooms: 2,
        price: 3220000,
        floorSpace: 22000,
        extras: [ 
            'elavator', 
            'gym',
            'bathroom'
         ],
         homeType: 'Aparment',
        image: 'https://photos.zillowstatic.com/p_e/ISblydxjejk0fi1000000000.jpg',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
     },
     { 
        address: '20 Ritch Ave',
        city: 'Thousand Oaks',
        state: 'CA',
        rooms: 0,
        price: 22220000,
        floorSpace: 20000,
        extras: [ 
            'Swimming Pool',
            'elavator',
            'gym'
         ],
         homeType: 'house',
        image: 'https://static.schumacherhomes.com/umbraco/media/wvflutbh/image4.jpg?format=webp',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
     },
     { 
        address: '20 New Ave',
        city: 'Santa Barbara',
        state: 'CA',
        rooms: 1,
        price: 20000,
        floorSpace: 100,
        extras: [ 
            'elavator',
            'gym'
         ],
         homeType: 'Ranch',
        image: 'https://static.homeguide.com/assets/images/content/homeguide-typical-house-in-suburban-Los-Angeles-California.jpg',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '204 Willow Ave',
        city: 'San Francisco',
        state: 'CA',
        rooms: 2,
        price: 2020000,
        floorSpace: 200,
        extras: [ 
            'elavator',
            'gym',
            'Swimming Pool'
         ],
         homeType: 'Aparment',
        image: 'https://learncalifornia.org/wp-content/uploads/2024/01/oxnard-homes-for-sale-1024x585.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'  
    },
     { 
        address: '20-24 Grand Ave',
        city: 'New York',
        state: 'NY',
        rooms: 2,
        price: 2220000,
        floorSpace: 2000,
        extras: [ 
            'elavator',
            'gym',
            'Swimming Pool'
         ],
         homeType: 'Studio',
         image: 'https://res.cloudinary.com/brickandbatten/images/w_2560,h_1566,c_scale/f_auto,q_auto/v1713267421/wordpress_assets/313364-Alabaster-Caviar-TeakStain-A-copy/313364-Alabaster-Caviar-TeakStain-A-copy.jpg?_i=AA',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '24 Grand Ave',
        city: 'Ridgewood',
        state: 'NY',
        rooms: 2,
        price: 223000,
        floorSpace: 2000,
        extras: [ 
            'elavator'
         ],
         homeType: 'Room',
        image: 'https://www.century21.com/listhub/photo/maxxmax/lh.rdcpix.com/dce6c353e4c92a529d2f94729ea604b0l-f3896943610r.jpg',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
     },
     { 
        address: '2222 Rancho Ave',
        city: 'Thousand Oaks',
        state: 'CA',
        rooms: 3,
        price: 2343000,
        floorSpace: 24000,
        extras: [ 
            'elavator',
            'gym',
            'internet',
            'pool'
         ],
         homeType: 'Aparment',
        image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
    },
    { 
        address: '20-24 Grand Ave',
        city: 'Ridgewood',
        state: 'NY',
        rooms: 3,
        price: 220000,
        floorSpace: 2000,
        extras: [ 
            'elavator',
            'gym'
         ],
         homeType: 'Ranch',
         image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
    },
     { 
        address: '514 Mango Ave',
        city: 'Camarillo',
        state: 'CA',
        rooms: 4,
        price: 2300002,
        floorSpace: 3000,
        extras: [ 
            'elavator',
            'Swimming Pool'
         ],
         homeType: 'Room',
        image: 'https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house.jpg',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
        },
     { 
        address: '20-24 Perkins Ave',
        city: 'Norwalk',
        state: 'CA',
        rooms: 4,
        price: 440000,
        floorSpace: 3000,
        extras: [ 
            'Finished Basement',
            'gym'
         ],
         homeType: 'Aparment',
        image: 'https://www.century21.com/listhub/photo/maxxmax/lh.rdcpix.com/dce6c353e4c92a529d2f94729ea604b0l-f3896943610r.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
      },
     { 
        address: '20 Ritch Ave',
        city: 'Los Angeles',
        state: 'CA',
        rooms: 4,
        price: 420000,
        floorSpace: 100,
        extras: [ 
            'gym'
         ],
         homeType: 'Ranch',
        image: 'https://photos.zillowstatic.com/p_e/ISaxfn1b2k9luq1000000000.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'     
      },
     { 
        address: '14-22 Rose Ave',
        city: 'Oxnard',
        state: 'CA',
        rooms: 3,
        price: 20000,
        floorSpace: 100,
        extras: [ 
            'elavator',
            'gym',
            'Finished Basement'
         ],
         homeType: 'Aparment',
        image: 'https://www.century21.com/listhub/photo/maxxmax/lh.rdcpix.com/33f61d70410c199bd487b20a32f240f2l-f791946895r.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'     
      },
     { 
        address: '20-24 Perkins Ave',
        city: 'Ventura',
        state: 'CA',
        rooms: 2,
        price: 20000,
        floorSpace: 1000,
        extras: [ 
            'elavator',
            'gym',
            'internet'
         ],
         homeType: 'Aparment',
        image: 'https://waymarkhomes.com/wp-content/uploads/2019/08/we-buy-houses-in-Michigan.jpg',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '20-22 Conejo Ave',
        city: 'Los Angeles',
        state: 'CA',
        rooms: 2,
        price: 3220000,
        floorSpace: 22000,
        extras: [ 
            'elavator', 
            'gym',
            'bathroom'
         ],
         homeType: 'Aparment',
        image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
     },
     { 
        address: '20 Ritch Ave',
        city: 'Thousand Oaks',
        state: 'CA',
        rooms: 0,
        price: 22220000,
        floorSpace: 20000,
        extras: [ 
            'Swimming Pool',
            'elavator',
            'gym'
         ],
         homeType: 'house',
         image: 'https://photos.zillowstatic.com/p_e/ISm6rbbdqbfude0000000000.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
     },
     { 
        address: '20 New Ave',
        city: 'Santa Barbara',
        state: 'CA',
        rooms: 1,
        price: 20000,
        floorSpace: 100,
        extras: [ 
            'elavator',
            'gym'
         ],
         homeType: 'Ranch',
        image: 'https://ap.rdcpix.com/0e40c9837ea1249ad810975d50368439l-m2643670128od-w480_h360.jpg',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '204 Willow Ave',
        city: 'San Francisco',
        state: 'CA',
        rooms: 2,
        price: 2020000,
        floorSpace: 200,
        extras: [ 
            'elavator',
            'gym',
            'Swimming Pool'
         ],
         homeType: 'Aparment',
        image: 'https://res.cloudinary.com/brickandbatten/images/w_2560,h_1566,c_scale/f_auto,q_auto/v1713267421/wordpress_assets/313364-Alabaster-Caviar-TeakStain-A-copy/313364-Alabaster-Caviar-TeakStain-A-copy.jpg?_i=AA',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'  
    },
     { 
        address: '20-24 Grand Ave',
        city: 'New York',
        state: 'NY',
        rooms: 2,
        price: 2220000,
        floorSpace: 2000,
        extras: [ 
            'elavator',
            'gym',
            'Swimming Pool'
         ],
         homeType: 'Studio',
        image: 'https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_1200/v1537246127/photos/281774_original.jpg',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '24 Grand Ave',
        city: 'Ridgewood',
        state: 'NY',
        rooms: 2,
        price: 223000,
        floorSpace: 2000,
        extras: [ 
            'elavator'
         ],
         homeType: 'Room',
        image: 'https://www.brownstoner.com/wp-content/uploads/2019/08/open-house-picks-brooklyn-windsor-terrace-for-sale-226-east-7th-street-1.png',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
     },
     { 
        address: '2222 Rancho Ave',
        city: 'Thousand Oaks',
        state: 'CA',
        rooms: 3,
        price: 2343000,
        floorSpace: 24000,
        extras: [ 
            'elavator',
            'gym',
            'internet',
            'pool'
         ],
         homeType: 'Aparment',
        image: 'https://assets.themortgagereports.com/wp-content/uploads/2017/12/How-to-Buy-a-House-with-Low-Income-This-Year.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
    },

    { 
        address: '20-24 Grand Ave',
        city: 'Ridgewood',
        state: 'NY',
        rooms: 3,
        price: 220000,
        floorSpace: 2000,
        extras: [ 
            'elavator',
            'gym'
         ],
         homeType: 'Ranch',
       image: 'https://ca-times.brightspotcdn.com/dims4/default/848b2d2/2147483647/strip/true/crop/5184x3888+0+0/resize/840x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F57%2Fc2%2F95227f474f8da22c2350d9aa6353%2Fla-tr-travel-texas-tiny-houses-05.JPG',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
    },
     { 
        address: '514 Mango Ave',
        city: 'Camarillo',
        state: 'CA',
        rooms: 4,
        price: 2300002,
        floorSpace: 3000,
        extras: [ 
            'elavator',
            'Swimming Pool'
         ],
         homeType: 'Room',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5xlhauPuuMk-5zAz3VBL0PKXZGMkKZEbdxRzUwsxfYs1jPZkj&usqp=CAU',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
        },
     { 
        address: '20-24 Perkins Ave',
        city: 'Norwalk',
        state: 'CA',
        rooms: 4,
        price: 440000,
        floorSpace: 3000,
        extras: [ 
            'Finished Basement',
            'gym'
         ],
         homeType: 'Aparment',
        image: 'https://assets.dmagstatic.com/wp-content/uploads/2020/03/412785002-0-677x451.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
      },
     { 
        address: '20 Ritch Ave',
        city: 'Los Angeles',
        state: 'CA',
        rooms: 4,
        price: 420000,
        floorSpace: 100,
        extras: [ 
            'gym'
         ],
         homeType: 'Ranch',
        image: 'https://www.revealnews.org/wp-content/uploads/2019/11/SJM-L-HOUSES-1027-10-2-1011x675.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'     
      },
     { 
        address: '14-22 Rose Ave',
        city: 'Oxnard',
        state: 'CA',
        rooms: 3,
        price: 20000,
        floorSpace: 100,
        extras: [ 
            'elavator',
            'gym',
            'Finished Basement'
         ],
         homeType: 'Aparment',
        image: 'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/qOVaS0F_wqZXVobnihIHIJm72vs=/1660x934/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/77ORQ76FR4EXW2PCLGAZ27TCIM.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'     
      },
     { 
        address: '20-24 Perkins Ave',
        city: 'Ventura',
        state: 'CA',
        rooms: 2,
        price: 20000,
        floorSpace: 1000,
        extras: [ 
            'elavator',
            'gym',
            'internet'
         ],
         homeType: 'Aparment',
        image: 'https://i.insider.com/5ddc1b73fd9db2317e68e0eb?width=1100&format=jpeg&auto=webp',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '20-22 Conejo Ave',
        city: 'Los Angeles',
        state: 'CA',
        rooms: 2,
        price: 3220000,
        floorSpace: 22000,
        extras: [ 
            'elavator', 
            'gym',
            'bathroom'
         ],
         homeType: 'Aparment',
        image: 'https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
     },
     { 
        address: '20 Ritch Ave',
        city: 'Thousand Oaks',
        state: 'CA',
        rooms: 0,
        price: 22220000,
        floorSpace: 20000,
        extras: [ 
            'Swimming Pool',
            'elavator',
            'gym'
         ],
         homeType: 'house',
        image: 'https://static.dezeen.com/uploads/2018/02/swiss-miss-houses-a-frame-charles-dubois-palm-springs-modernism-week_dezeen_sq.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
     },
     { 
        address: '20 New Ave',
        city: 'Santa Barbara',
        state: 'CA',
        rooms: 1,
        price: 20000,
        floorSpace: 100,
        extras: [ 
            'elavator',
            'gym'
         ],
         homeType: 'Ranch',
        image: 'https://media2.fdncms.com/sacurrent/imager/u/slideshow/21742792/exterior.jpg',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '204 Willow Ave',
        city: 'San Francisco',
        state: 'CA',
        rooms: 2,
        price: 2020000,
        floorSpace: 200,
        extras: [ 
            'elavator',
            'gym',
            'Swimming Pool'
         ],
         homeType: 'Aparment',
        image: 'https://ichef.bbci.co.uk/wwfeatures/live/976_549/images/live/p0/7d/9z/p07d9znv.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'  
    },
     { 
        address: '20-24 Grand Ave',
        city: 'New York',
        state: 'NY',
        rooms: 2,
        price: 2220000,
        floorSpace: 2000,
        extras: [ 
            'elavator',
            'gym',
            'Swimming Pool'
         ],
         homeType: 'Studio',
        image: 'https://circaoldhouses.com/wp-content/uploads/2019/12/178-Harris-St-Midville-GA-30441-800x430.jpg',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '24 Grand Ave',
        city: 'Ridgewood',
        state: 'NY',
        rooms: 2,
        price: 223000,
        floorSpace: 2000,
        extras: [ 
            'elavator'
         ],
         homeType: 'Room',
        image: 'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/qOVaS0F_wqZXVobnihIHIJm72vs=/1660x934/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/77ORQ76FR4EXW2PCLGAZ27TCIM.jpg',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
     },
     { 
        address: '2222 Rancho Ave',
        city: 'Thousand Oaks',
        state: 'CA',
        rooms: 3,
        price: 2343000,
        floorSpace: 24000,
        extras: [ 
            'elavator',
            'gym',
            'internet',
            'pool'
         ],
         homeType: 'Aparment',
        image: 'https://i.insider.com/5c758cae598e230496135876?width=1100&format=jpeg&auto=webp',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
    },

    { 
        address: '20-24 Grand Ave',
        city: 'Ridgewood',
        state: 'NY',
        rooms: 3,
        price: 220000,
        floorSpace: 2000,
        extras: [ 
            'elavator',
            'gym'
         ],
         homeType: 'Ranch',
       image: 'https://www.rd.com/wp-content/uploads/2017/10/Upside-Down-Houses-That-Will-Make-You-Look-Twice-courtesy-@nightrav3n-FT.jpg',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
    },
     { 
        address: '514 Mango Ave',
        city: 'Camarillo',
        state: 'CA',
        rooms: 4,
        price: 2300002,
        floorSpace: 3000,
        extras: [ 
            'elavator',
            'Swimming Pool'
         ],
         homeType: 'Room',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/3d-home-1-1576099437.jpg?resize=480:*',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
        },
     { 
        address: '20-24 Perkins Ave',
        city: 'Norwalk',
        state: 'CA',
        rooms: 4,
        price: 440000,
        floorSpace: 3000,
        extras: [ 
            'Finished Basement',
            'gym'
         ],
         homeType: 'Aparment',
        image: 'https://cdn.vox-cdn.com/thumbor/XUdUk_rKJ8WDTd0zksnnicYDwbY=/0x0:3760x2500/1200x800/filters:focal(1580x950:2180x1550)/cdn.vox-cdn.com/uploads/chorus_image/image/65135516/shutterstock_349464740.0.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
      },
     { 
        address: '20 Ritch Ave',
        city: 'Los Angeles',
        state: 'CA',
        rooms: 4,
        price: 420000,
        floorSpace: 100,
        extras: [ 
            'gym'
         ],
         homeType: 'Ranch',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91GRqKV5rVL.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'     
      },
     { 
        address: '14-22 Rose Ave',
        city: 'Oxnard',
        state: 'CA',
        rooms: 3,
        price: 20000,
        floorSpace: 100,
        extras: [ 
            'elavator',
            'gym',
            'Finished Basement'
         ],
         homeType: 'Aparment',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx07lfk6kqb5xTp3mE-6UluH5KmJ5EULsTow&s',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'     
      },
     { 
        address: '20-24 Perkins Ave',
        city: 'Ventura',
        state: 'CA',
        rooms: 2,
        price: 20000,
        floorSpace: 1000,
        extras: [ 
            'elavator',
            'gym',
            'internet'
         ],
         homeType: 'Aparment',
        image: 'https://specials-images.forbesimg.com/imageserve/5dcd92292c886a0007ec1ff9/960x0.jpg?fit=scale',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '20-22 Conejo Ave',
        city: 'Los Angeles',
        state: 'CA',
        rooms: 2,
        price: 3220000,
        floorSpace: 22000,
        extras: [ 
            'elavator', 
            'gym',
            'bathroom'
         ],
         homeType: 'Aparment',
        image: 'https://s.marketwatch.com/public/resources/images/MW-EN694_seattl_ZH_20160525110415.jpg',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
     },
     { 
        address: '20 Ritch Ave',
        city: 'Thousand Oaks',
        state: 'CA',
        rooms: 0,
        price: 22220000,
        floorSpace: 20000,
        extras: [ 
            'Swimming Pool',
            'elavator',
            'gym'
         ],
         homeType: 'house',
         image: 'https://ei.marketwatch.com/Multimedia/2019/05/22/Photos/ZQ/MW-HK104_lillev_20190522122922_ZQ.jpg?uuid=c1d8f0e0-7cae-11e9-b37e-9c8e992d421e',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
     },
     { 
        address: '20 New Ave',
        city: 'Santa Barbara',
        state: 'CA',
        rooms: 1,
        price: 20000,
        floorSpace: 100,
        extras: [ 
            'elavator',
            'gym'
         ],
         homeType: 'Ranch',
        image: 'https://cdn.vox-cdn.com/thumbor/XUdUk_rKJ8WDTd0zksnnicYDwbY=/0x0:3760x2500/1200x800/filters:focal(1580x950:2180x1550)/cdn.vox-cdn.com/uploads/chorus_image/image/65135516/shutterstock_349464740.0.jpg',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '204 Willow Ave',
        city: 'San Francisco',
        state: 'CA',
        rooms: 2,
        price: 2020000,
        floorSpace: 200,
        extras: [ 
            'elavator',
            'gym',
            'Swimming Pool'
         ],
         homeType: 'Aparment',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx07lfk6kqb5xTp3mE-6UluH5KmJ5EULsTow&s',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'  
    },
     { 
        address: '20-24 Grand Ave',
        city: 'New York',
        state: 'NY',
        rooms: 2,
        price: 2220000,
        floorSpace: 2000,
        extras: [ 
            'elavator',
            'gym',
            'Swimming Pool'
         ],
         homeType: 'Studio',
        image: 'https://specials-images.forbesimg.com/imageserve/5dcd92292c886a0007ec1ff9/960x0.jpg?fit=scale',
         realtor : realtor_1,
         realtorName : 'Erik Feinman'
     },
     { 
        address: '24 Grand Ave',
        city: 'Ridgewood',
        state: 'NY',
        rooms: 2,
        price: 223000,
        floorSpace: 2000,
        extras: [ 
            'elavator'
         ],
         homeType: 'Room',
        image: 'https://media4.manhattan-institute.org/sites/cj/files/single-family-housing.jpg',
         realtor : realtor_2,
         realtorName : 'Kim Brown'
     },
     { 
        address: '2222 Rancho Ave',
        city: 'Thousand Oaks',
        state: 'CA',
        rooms: 3,
        price: 2343000,
        floorSpace: 24000,
        extras: [ 
            'elavator',
            'gym',
            'internet',
            'pool'
         ],
         homeType: 'Aparment',
         image: 'https://photos.zillowstatic.com/p_e/ISmykh5tcow3mq1000000000.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
    },
]

export default listingsData;