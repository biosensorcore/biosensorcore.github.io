import ContentBoxGroup from "../components/ContentBoxGroup";

import PeopleJSON from '../util/people.json';

function People() {
    function nameToImageFilePath(name) {
        let out = name.split(" ").join("_");
        console.log(out);
        return out;
    }

    const boxes = PeopleJSON.people.map((person) => {return {
        header: person.name,
        text: person.bio,
        img: `People_${nameToImageFilePath(person.name)}.jpg`,
        short: true
    }})

    return <ContentBoxGroup contentBoxes={boxes}/>
}

export default People;