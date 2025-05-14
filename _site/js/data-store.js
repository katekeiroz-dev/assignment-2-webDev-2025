weatherApp.dataStore.data = [
    {
        name: "Berlin",
        description: "Rainnig day",
        imageUrl: "/images/rainyDay.png",
        cities: [{
            artist: "Mogwai",
            title: "Remurdered",
            duration: "6:26"
        }, {
            artist: "Explosions in the Sky",
            title: "Your Hand in Mine",
            duration: "8:17"
        }, {
            artist: "Lisa Hannigan",
            title: "Undertow",
            duration: "3:24"
        }]
    },
    {
        name: "Focus",
        description: "Sunny Day",
        imageUrl: "/images/sunnyDay.png"
    },
    {
        name: "Let Off",
        description: "Cloud Day",
        imageUrl: "/images/cloudyDay.png"
    },
     
]

weatherApp.dataStore.list = () => {
    return weatherApp.dataStore.data
}