 weatherApp.dataStore.data = [
    {
        name: "Amsterdam",
        description: "Cloud Day",
        imageUrl: "/images/cloudyDay.png",
        MaxTem: 11.4,
        MinTem: 5.7,
        
    },
    {
        name: "Berlin",
        description: "Rainy Day",
        imageUrl: "/images/rainyDay.png",
        MaxTem: 6.0,
        MinTem: 0.7,
              
    },
     {
        name: "New York",
        description: "Sunny Day",
        imageUrl: "/images/sunnyDay.png",
        MaxTem: 20.1,
        MinTem: 17.9,
    },
    {
        name: "San Francisco",
        description: "Sunny Day",
        imageUrl: "/images/sunnyDay.png",
        MaxTem: 16.8,
        MinTem: 8.3,
    },
    {
        name: "Copenhagen",
        description: "Cloud Day",
        imageUrl: "/images/cloudyDay.png",
        MaxTem: 13.1,
        MinTem: 8.7,
    },
    {
        name: "Cork",
        description: "Rainy Day",
        imageUrl: "/images/rainyDay.png",
        MaxTem: 10.4,
        MinTem: 4.9,
    },
    {
        name: "Waterford",
        description: "Rainy Day",
        imageUrl: "/images/rainyDay.png",
        MaxTem: 11.4,
        MinTem: 5.7,
    },
    {
        name: "Tromso",
        description: "Sunny Day",
        imageUrl: "/images/cloudyDay.png",
        MaxTem: 20.9,
        MinTem: 19.7,
    },
    {
        name: "Paris",
        description: "Cloud Day",
        imageUrl: "/images/cloudyDay.png",
        MaxTem: 15.4,
        MinTem: 11.7,
    },
    
  
     
] 

 weatherApp.dataStore.list = () => {
    return weatherApp.dataStore.data
} 