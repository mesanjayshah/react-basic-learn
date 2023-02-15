const person = {
    name : "sanjay",
    address : {
        line1 : "kathmandu 32 Nepal",
        line2 : "Asia"
    },
    profile : ['twitter', 'facebook', 'linkedin'],
    printProfile: () => {
        // console.log(person.profile[0])
        person.profile.map(
            // eslint-disable-next-line array-callback-return
            profile => console.log(profile)

        )
    }
}

export default function LearningJavascript(){
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.address.line2}</div>
            <div>{person.profile[2]}</div>
            <div>{person.printProfile()}</div>
        </>

)
}