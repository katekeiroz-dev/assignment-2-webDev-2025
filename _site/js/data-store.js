weatherApp.dataStore.data = [
    {
        name: "Berlin",
        description: "Rainnig day",
        imageUrl: "/images/rainyDay.png"
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