const dogs = [
    'affenpinscher',
    'african',
    'airedale',
    'akita',
    'appenzeller',
    'basenji',
    'beagle',
    'bluetick',
    'borzoi',
    'bouvier',
    'boxer',
    'brabancon',
    'briard',
    'dhole',
    'dingo',
    'doberman',
    'husky',
    'keeshond',
    'kelpie',
    'komondor',
    'kuvasz',
    'labradoodle',
    'labrador',
    'leonberg',
    'lhasa',
    'malamute',
    'malinois',
    'maltese'
]

export default function dogList() {
    return (
        <pre>
            {dogs.map(dog => <>{dog}<br/></>)}
        </pre>
    );
}