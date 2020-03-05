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
         image: 'https://photos.zillowstatic.com/p_e/ISqdbzxee17ptk1000000000.jpg',
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
         image: 'https://media.workandmoney.com/2a/76/2a763836b02d426197466e2d396d5ba8.jpeg',
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
         image: 'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/07/July-open-houses-header-1.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISy31v6gmez66d0000000000.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISy31v6gmez66d0000000000.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISqdbzxee17ptk1000000000.jpg',
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
         image: 'https://media.workandmoney.com/2a/76/2a763836b02d426197466e2d396d5ba8.jpeg',
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
         image: 'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/07/July-open-houses-header-1.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISy31v6gmez66d0000000000.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISy31v6gmez66d0000000000.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISqdbzxee17ptk1000000000.jpg',
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
         image: 'https://media.workandmoney.com/2a/76/2a763836b02d426197466e2d396d5ba8.jpeg',
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
         image: 'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/07/July-open-houses-header-1.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISy31v6gmez66d0000000000.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISy31v6gmez66d0000000000.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISqdbzxee17ptk1000000000.jpg',
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
         image: 'https://media.workandmoney.com/2a/76/2a763836b02d426197466e2d396d5ba8.jpeg',
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
         image: 'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/07/July-open-houses-header-1.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISy31v6gmez66d0000000000.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISy31v6gmez66d0000000000.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISqdbzxee17ptk1000000000.jpg',
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
         image: 'https://media.workandmoney.com/2a/76/2a763836b02d426197466e2d396d5ba8.jpeg',
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
         image: 'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/07/July-open-houses-header-1.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISy31v6gmez66d0000000000.jpg',
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
         image: 'https://photos.zillowstatic.com/p_e/ISy31v6gmez66d0000000000.jpg',
         realtor : realtor_3,
         realtorName : 'Toby Ramsey'
    },
]

export default listingsData;




